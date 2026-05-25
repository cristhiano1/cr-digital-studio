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
    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
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
