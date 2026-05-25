import type { Handler, HandlerEvent } from '@netlify/functions'

// TODO: Install @netlify/functions when deploying:
//   npm install @netlify/functions --save-dev
// TODO: Replace placeholder logic with real Supabase and Resend calls
//   using environment variables configured in Netlify dashboard.

interface LeadData {
  name: string
  email: string
  businessType?: string
  serviceInterest?: string
  message: string
  consent: boolean
  turnstileToken?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    // In development, skip verification if no key is configured
    console.warn('TURNSTILE_SECRET_KEY not set — skipping verification')
    return true
  }
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token }),
    }
  )
  const data = (await response.json()) as { success: boolean }
  return data.success
}

async function saveToSupabase(lead: LeadData): Promise<void> {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    // TODO: Wire up Supabase once environment variables are set in Netlify
    console.warn('Supabase credentials not configured — lead not persisted')
    return
  }

  const response = await fetch(`${url}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      name: lead.name,
      email: lead.email,
      business_type: lead.businessType ?? null,
      service_interest: lead.serviceInterest ?? null,
      message: lead.message,
      status: 'new',
      source: 'website-contact-form',
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Supabase insert failed: ${text}`)
  }
}

async function sendEmailNotification(lead: LeadData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL

  if (!apiKey || !toEmail) {
    // TODO: Wire up Resend once environment variables are set in Netlify
    console.warn('Resend credentials not configured — notification not sent')
    return
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'CR Digital Studio <noreply@crdigitalstudio.com>',
      to: [toEmail],
      subject: `New contact form lead: ${lead.name}`,
      html: `
        <h2>New lead from CR Digital Studio</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Business type:</strong> ${lead.businessType ?? '—'}</p>
        <p><strong>Service interest:</strong> ${lead.serviceInterest ?? '—'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${lead.message.replace(/\n/g, '<br />')}</p>
      `,
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Resend send failed: ${text}`)
  }
}

export const handler: Handler = async (event: HandlerEvent) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' }
  }

  // 1. Check if the backend is configured. If missing, return 503 with the requested fallback message.
  const isConfigured =
    process.env.SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY &&
    process.env.RESEND_API_KEY &&
    process.env.CONTACT_EMAIL

  if (!isConfigured) {
    return {
      statusCode: 503,
      headers,
      body: JSON.stringify({
        message:
          'The contact system is currently being configured. Please contact Cristhian Rodriguez through LinkedIn for now.',
      }),
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    }
  }

  let body: LeadData
  try {
    body = JSON.parse(event.body ?? '{}') as LeadData
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Invalid request body' }),
    }
  }

  // Validate required fields
  if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Name, email and message are required.' }),
    }
  }

  if (!isValidEmail(body.email)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Please provide a valid email address.' }),
    }
  }

  if (!body.consent) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Consent is required.' }),
    }
  }

  // 2. Enforce Turnstile token if the secret key is configured in the environment variables
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
  if (turnstileSecret) {
    if (!body.turnstileToken) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Anti-spam token is required.' }),
      }
    }
    const valid = await verifyTurnstile(body.turnstileToken)
    if (!valid) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Anti-spam check failed. Please try again.' }),
      }
    }
  }

  try {
    await saveToSupabase(body)
    await sendEmailNotification(body)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message:
          "Thank you! We've received your message and will get back to you within 1–2 business days.",
      }),
    }
  } catch (err) {
    console.error('Contact form error:', err)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: 'Something went wrong on our end. Please email directly.',
      }),
    }
  }
}
