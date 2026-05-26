export interface ContactFormData {
  name: string
  email: string
  businessType: string
  serviceInterest: string
  message: string
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
    const payload = {
      name: data.name,
      email: data.email,
      businessType: data.businessType,
      business_type: data.businessType, // Map both to prevent any backend casing mismatches
      serviceInterest: data.serviceInterest,
      service_interest: data.serviceInterest, // Map both to prevent any backend casing mismatches
      message: data.message,
      consent: data.consent,
      turnstileToken: data.turnstileToken,
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

    return { success: true, message: result.message ?? 'Message sent successfully.' }
  } catch {
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    }
  }
}
