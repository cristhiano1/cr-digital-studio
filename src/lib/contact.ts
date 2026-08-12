export interface ContactFormData {
  name: string
  email: string
  business: string
  helpWith: string
  challenge: string
  currentSystem?: string
  consent: boolean
  turnstileToken?: string
}

export interface ContactResponse {
  success: boolean
  message: string
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactResponse> {
  try {
    const messageBody = data.currentSystem?.trim()
      ? `${data.challenge}\n\nCurrent website / system: ${data.currentSystem.trim()}`
      : data.challenge

    const payload = {
      name:             data.name,
      email:            data.email,
      businessType:     data.business,
      business_type:    data.business,
      serviceInterest:  data.helpWith,
      service_interest: data.helpWith,
      message:          messageBody,
      consent:          data.consent,
      turnstileToken:   data.turnstileToken,
    }

    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: result.message ?? 'Something went wrong. Please try again.',
      }
    }

    return { success: true, message: result.message ?? 'Request received.' }
  } catch {
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    }
  }
}
