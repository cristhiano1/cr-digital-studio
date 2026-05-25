import { useState, type FormEvent, type ChangeEvent } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
import { Send, CheckCircle, AlertCircle, Link2, Mail, Calendar } from 'lucide-react'
import { submitContactForm, type ContactFormData } from '../lib/contact'

const serviceOptions = [
  'Custom Web Application',
  'Mini CRM System',
  'Booking & Scheduling Platform',
  'Dashboard & Reports',
  'Workflow Automation',
  'AI-Assisted Tools',
  'Secure Admin Panel',
  'Cloud & Deployment',
  'Not sure yet',
]

const initialForm: ContactFormData = {
  name: '',
  email: '',
  businessType: '',
  serviceInterest: '',
  message: '',
  consent: false,
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

function InputField({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string
  id: string
  type?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-white/60 text-sm mb-1.5 font-medium">
        {label} {required && <span className="text-[#7b39fc]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/04 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#7b39fc]/60 focus:bg-white/06 transition-all duration-200"
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const set = (field: keyof ContactFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : e.target.value
      setForm((prev) => ({ ...prev, [field]: value }))
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.consent) {
      setStatus('error')
      setStatusMessage('Please accept the consent checkbox before submitting.')
      return
    }
    setStatus('loading')
    const result = await submitContactForm(form)
    if (result.success) {
      setStatus('success')
      setStatusMessage(result.message)
      setForm(initialForm)
    } else {
      setStatus('error')
      setStatusMessage(result.message)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#050008] overflow-hidden"
      aria-label="Contact"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(123,57,252,0.8) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#7b39fc] text-xs tracking-widest uppercase font-semibold mb-4">
            <span className="w-4 h-px bg-[#7b39fc]" />
            Get in touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Have a manual process you want{' '}
            <span className="text-gradient">to turn into a system?</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Tell us what you currently manage with Excel, messages, paper forms or
            disconnected tools. We can help turn it into a simple, professional web
            system.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-strong rounded-3xl p-8 space-y-5"
            >
              {/* Success state */}
              {status === 'success' && (
                <div className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                  <CheckCircle size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-emerald-300 text-sm">{statusMessage}</p>
                </div>
              )}

              {/* Error state */}
              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                  <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{statusMessage}</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <InputField
                  label="Name"
                  id="name"
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Your name"
                  required
                />
                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <InputField
                  label="Business type"
                  id="businessType"
                  value={form.businessType}
                  onChange={set('businessType')}
                  placeholder="e.g. Clinic, Agency, Retail..."
                />

                <div>
                  <label
                    htmlFor="serviceInterest"
                    className="block text-white/60 text-sm mb-1.5 font-medium"
                  >
                    Service interest
                  </label>
                  <select
                    id="serviceInterest"
                    value={form.serviceInterest}
                    onChange={set('serviceInterest')}
                    className="w-full bg-white/04 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#7b39fc]/60 focus:bg-white/06 transition-all duration-200 appearance-none"
                    style={{ color: form.serviceInterest ? '#fff' : 'rgba(255,255,255,0.25)' }}
                  >
                    <option value="" disabled>Select a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} style={{ color: '#000', background: '#1a1a2e' }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/60 text-sm mb-1.5 font-medium">
                  Your message <span className="text-[#7b39fc]">*</span>
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={set('message')}
                  required
                  rows={5}
                  placeholder="Describe what you currently manage manually or what system you need..."
                  className="w-full bg-white/04 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#7b39fc]/60 focus:bg-white/06 transition-all duration-200 resize-none"
                />
              </div>

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={set('consent')}
                  className="mt-0.5 w-4 h-4 rounded accent-[#7b39fc] flex-shrink-0"
                />
                <span className="text-white/50 text-sm leading-relaxed group-hover:text-white/65 transition-colors">
                  I agree that CR Digital Studio may store this message to respond to my inquiry.
                  No data is shared with third parties.
                </span>
              </label>

              {/* Cloudflare Turnstile anti-spam token verification is enforced on the serverless backend once keys are configured */}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-[#7b39fc] hover:bg-[#6a2ee0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-full transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-purple-500/25 text-sm"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact options sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="space-y-4"
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                // TODO: Replace with your real business email before going live
                value: 'hello@crdigitalstudio.com',
                href: 'mailto:hello@crdigitalstudio.com',
                color: '#64CEFB',
                external: false,
              },
              {
                icon: Calendar,
                label: 'Start a Project',
                value: 'Inquire Now',
                href: '#contact',
                color: '#7b39fc',
                external: false,
              },
              {
                icon: Link2,
                label: 'LinkedIn',
                value: 'Cristhian Rodriguez',
                href: 'https://www.linkedin.com/in/cristhian-rodriguez-rodrgo-280176252/',
                color: '#64CEFB',
                external: true,
              },
            ].map(({ icon: Icon, label, value, href, color, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="glass rounded-2xl p-5 flex items-center gap-4 border border-white/06 hover:border-white/14 transition-all duration-300 hover:-translate-y-0.5 group block"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}1a` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">{label}</p>
                  <p className="text-white/80 group-hover:text-white text-sm font-medium transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5 border border-white/06 mt-4">
              <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-2">
                Response time
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                We typically respond within 1–2 business days. For urgent inquiries,
                email directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
