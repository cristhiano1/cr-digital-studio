import { createClient } from '@supabase/supabase-js'

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
  serviceInterest?: string
  message?: string
  consent?: boolean
  turnstileToken?: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
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
          'The contact system is currently being configured. Please contact Cristhian Rodriguez through LinkedIn for now.',
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
  const name    = payload.name?.trim() ?? ''
  const email   = payload.email?.trim() ?? ''
  const message = payload.message?.trim() ?? ''

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
      body: JSON.stringify({ message: 'Please accept the consent checkbox before submitting.' }),
    }
  }

  // ── 4. Turnstile — only enforced when secret key is configured ────────────
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

  // ── 5. Insert into Supabase ───────────────────────────────────────────────
  try {
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { error } = await supabase.from('contact_messages').insert({
      name,
      email,
      business_type:    payload.businessType?.trim()    || null,
      service_interest: payload.serviceInterest?.trim() || null,
      message,
      consent:          true,
      source:           'cr-digital-studio',
    })

    if (error) {
      // Log the full error server-side only — never expose it to the caller
      console.error('[contact] Supabase insert error:', error)
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          message:
            'Something went wrong saving your message. Please try again or reach out through LinkedIn.',
        }),
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Thank you! We've received your message and will review it soon.",
      }),
    }
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message:
          'Something went wrong on our end. Please try again or reach out through LinkedIn.',
      }),
    }
  }
}
