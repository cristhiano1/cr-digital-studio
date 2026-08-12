// ─── Inline handler types — avoids requiring @netlify/functions package ───────

interface NetlifyEvent {
  httpMethod: string
  body: string | null
  headers: Record<string, string | undefined>
}

interface NetlifyResponse {
  statusCode: number
  headers: Record<string, string>
  body: string
}

type Handler = (event: NetlifyEvent) => Promise<NetlifyResponse>

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactPayload {
  name?: string
  email?: string
  businessType?: string
  business_type?: string
  serviceInterest?: string
  service_interest?: string
  message?: string
  consent?: boolean
  turnstileToken?: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

async function verifyTurnstile(token: string, secret: string): Promise<boolean> {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret, response: token }),
  })
  const data = (await res.json()) as { success: boolean }
  return data.success === true
}

// ─── Non-blocking lead notification via Resend ────────────────────────────────
// Called after a successful Supabase insert. Failures are logged server-side
// only — they must never cause a failed response to the user.

async function sendResendNotification(params: {
  name: string
  email: string
  businessType: string | null
  serviceInterest: string | null
  message: string
}): Promise<void> {
  const apiKey    = process.env.RESEND_API_KEY
  const toEmail   = process.env.CONTACT_EMAIL
  const fromEmail = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !toEmail || !fromEmail) {
    console.log('[contact] Resend not configured — notification skipped. Set RESEND_API_KEY, CONTACT_EMAIL and RESEND_FROM_EMAIL to enable.')
    return
  }

  const rows: string[] = []
  rows.push('<h2 style="margin:0 0 16px">New Free Audit Request — CR Digital Systems</h2>')
  rows.push(`<p><strong>Name:</strong> ${escapeHtml(params.name)}</p>`)
  rows.push(`<p><strong>Email:</strong> ${escapeHtml(params.email)}</p>`)
  if (params.businessType) {
    rows.push(`<p><strong>Business / company:</strong> ${escapeHtml(params.businessType)}</p>`)
  }
  if (params.serviceInterest) {
    rows.push(`<p><strong>Requested solution:</strong> ${escapeHtml(params.serviceInterest)}</p>`)
  }
  rows.push('<hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb">')
  rows.push('<p><strong>Current challenge:</strong></p>')
  rows.push(`<p style="white-space:pre-wrap">${escapeHtml(params.message)}</p>`)

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization:  `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from:     fromEmail,
      to:       [toEmail],
      reply_to: params.email,
      subject:  `Free Audit Request: ${params.name}`,
      html:     rows.join('\n'),
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('[contact] Resend notification failed:', res.status, text)
    // Do not throw — caller catches this in a non-fatal try/catch
  }
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export const handler: Handler = async (event) => {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' }
  }

  // Method guard
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed.' }),
    }
  }

  // ── 1. Check required server-side environment variables ───────────────────
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('[contact] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
    return {
      statusCode: 503,
      headers,
      body: JSON.stringify({
        message:
          'The contact system is currently in demonstration mode. We would love to discuss your project — please connect directly with Cristhian Rodriguez on LinkedIn to get started.',
      }),
    }
  }

  // ── 2. Parse request body ─────────────────────────────────────────────────
  let payload: ContactPayload
  try {
    payload = JSON.parse(event.body ?? '{}') as ContactPayload
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Invalid request body.' }),
    }
  }

  // ── 3. Validate fields ────────────────────────────────────────────────────
  const name            = payload.name?.trim()            ?? ''
  const email           = payload.email?.trim()           ?? ''
  const message         = payload.message?.trim()         ?? ''
  const businessType    = (payload.businessType || payload.business_type)?.trim()    || null
  const serviceInterest = (payload.serviceInterest || payload.service_interest)?.trim() || null

  if (name.length < 2) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Please enter your name (at least 2 characters).' }),
    }
  }
  if (!isValidEmail(email)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Please provide a valid email address.' }),
    }
  }
  if (message.length < 10) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Your message must be at least 10 characters.' }),
    }
  }
  if (payload.consent !== true) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Please confirm you agree before submitting.' }),
    }
  }

  // ── 4. Turnstile — only enforced when secret key is configured ────────────
  // WARNING: Do not set TURNSTILE_SECRET_KEY until the frontend Turnstile widget
  // and VITE_TURNSTILE_SITE_KEY are implemented. Setting the secret without the
  // widget will cause all form submissions to fail.
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
  if (turnstileSecret) {
    if (!payload.turnstileToken) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Anti-spam verification is required.' }),
      }
    }
    const valid = await verifyTurnstile(payload.turnstileToken, turnstileSecret)
    if (!valid) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Anti-spam check failed. Please try again.' }),
      }
    }
  }

  // ── 5. Insert into Supabase via REST API (plain fetch — no WebSocket) ─────
  try {
    const baseUrl  = supabaseUrl.replace(/\/+$/, '').replace(/\/rest\/v1$/, '')
    const endpoint = `${baseUrl}/rest/v1/contact_messages`

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        apikey:         supabaseKey,
        Authorization:  `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer:         'return=minimal',
      },
      body: JSON.stringify({
        name,
        email,
        business_type:    businessType,
        service_interest: serviceInterest,
        message,
        consent:          true,
        source:           'cr-digital-studio',
      }),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('[contact] Supabase REST insert failed:', res.status, text)
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          message:
            'Something went wrong saving your message. Please try again or reach out through LinkedIn.',
        }),
      }
    }
  } catch (err) {
    console.error('[contact] Unexpected Supabase error:', err)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message:
          'Something went wrong on our end. Please try again or reach out through LinkedIn.',
      }),
    }
  }

  // ── 6. Non-blocking lead notification via Resend ──────────────────────────
  // Supabase is the source of record. Email is notification only.
  // Failure here is logged server-side and must not affect the user response.
  try {
    await sendResendNotification({ name, email, businessType, serviceInterest, message })
  } catch (err) {
    console.error('[contact] Unexpected notification error:', err)
  }

  // ── 7. Respond to client ──────────────────────────────────────────────────
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      success: true,
      message: "Thank you! We've received your message and will review it soon.",
    }),
  }
}
