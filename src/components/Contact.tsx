import { useState, type FormEvent, type ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { submitContactForm, type ContactFormData } from '../lib/contact'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const helpOptions = [
  'Business Website',
  'Quote & Lead System',
  'Booking & Customer Flow',
  'Internal System',
  'Automation / Integration',
  'Not sure yet',
]

const nextSteps = [
  'You describe the current problem',
  'The workflow or existing setup is reviewed',
  'You receive a practical recommended next step',
]

const initialForm: ContactFormData = {
  name: '',
  email: '',
  business: '',
  helpWith: '',
  challenge: '',
  currentSystem: '',
  consent: false,
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

function clientValidate(form: ContactFormData): string | null {
  if (form.name.trim().length < 2)
    return 'Please enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    return 'Please enter a valid email address.'
  if (!form.business.trim())
    return 'Please enter your business or company name.'
  if (!form.helpWith)
    return 'Please select what you need help with.'
  if (form.challenge.trim().length < 10)
    return 'Please describe the current challenge (at least 10 characters).'
  if (!form.consent)
    return 'Please confirm you agree before submitting.'
  return null
}

const inputClass =
  'w-full bg-white/[0.03] border border-white/08 rounded-xl px-4 py-3 text-white text-sm ' +
  'placeholder-white/25 focus:outline-none focus:border-[#0A8CFF]/50 focus:bg-white/[0.05] ' +
  'transition-all duration-200'

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const set =
    (field: keyof ContactFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const setConsent = (e: ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, consent: e.target.checked }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const error = clientValidate(form)
    if (error) {
      setStatus('error')
      setStatusMessage(error)
      return
    }
    setStatus('loading')
    setStatusMessage('')
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
      className="relative py-28 bg-[#020B14] overflow-hidden"
      aria-label="Contact — Free Audit"
    >
      {/* Subtle blue ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 90% 10%, rgba(10,140,255,0.07) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-14 lg:gap-20 items-start">

          {/* ── LEFT: Audit explanation ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
              Free Audit
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Show us where the work gets stuck.
            </h2>

            <p className="text-white/50 text-base leading-relaxed mb-10">
              Tell us how the business works today and where things are getting stuck.
              The workflow or existing setup can be reviewed to identify practical
              opportunities — a better website, a customer flow, an internal system or
              an automation.
            </p>

            {/* What happens next */}
            <div className="mb-10">
              <p className="text-white/35 text-xs uppercase tracking-widest font-semibold mb-5">
                What happens next
              </p>
              <ol className="space-y-5" aria-label="Process steps">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-[#0A8CFF]"
                      style={{
                        background: 'rgba(10,140,255,0.10)',
                        border: '1px solid rgba(10,140,255,0.20)',
                      }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-white/55 text-sm leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Reassurance */}
            <div className="pl-4 border-l border-[#0A8CFF]/25 mb-10">
              <p className="text-white/40 text-sm leading-relaxed">
                Not sure what kind of system you need? Describe the problem — the
                technical approach can be worked out afterwards.
              </p>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/cristhian-rodriguez-rodrgo-280176252/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/35 hover:text-white/60 text-xs transition-colors duration-200"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              Cristhian Rodriguez on LinkedIn
            </a>
          </motion.div>

          {/* ── RIGHT: Form panel ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            {status === 'success' ? (
              /* Success state */
              <div
                className="rounded-2xl p-8 sm:p-10"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                role="status"
                aria-live="polite"
              >
                <CheckCircle
                  size={28}
                  className="text-[#0A8CFF] mb-5"
                  aria-hidden="true"
                />
                <p className="text-white font-semibold text-lg mb-2">
                  Request received.
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-7">
                  {statusMessage}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle')
                    setStatusMessage('')
                  }}
                  className="text-[#0A8CFF] text-sm hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Free audit request"
                className="rounded-2xl p-7 sm:p-8 space-y-5"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Error banner */}
                {status === 'error' && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{
                      background: 'rgba(239,68,68,0.07)',
                      border: '1px solid rgba(239,68,68,0.20)',
                    }}
                  >
                    <AlertCircle
                      size={17}
                      className="text-red-400 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="text-red-300 text-sm">{statusMessage}</p>
                  </div>
                )}

                {/* Row 1: Name / Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cf-name"
                      className="block text-white/55 text-sm font-medium mb-1.5"
                    >
                      Your name{' '}
                      <span className="text-[#0A8CFF]" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      value={form.name}
                      onChange={set('name')}
                      autoComplete="name"
                      required
                      aria-required="true"
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cf-email"
                      className="block text-white/55 text-sm font-medium mb-1.5"
                    >
                      Work email{' '}
                      <span className="text-[#0A8CFF]" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      autoComplete="email"
                      required
                      aria-required="true"
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2: Business / Help with */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cf-business"
                      className="block text-white/55 text-sm font-medium mb-1.5"
                    >
                      Business / company{' '}
                      <span className="text-[#0A8CFF]" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="cf-business"
                      type="text"
                      value={form.business}
                      onChange={set('business')}
                      autoComplete="organization"
                      required
                      aria-required="true"
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cf-help"
                      className="block text-white/55 text-sm font-medium mb-1.5"
                    >
                      What do you need help with?{' '}
                      <span className="text-[#0A8CFF]" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      id="cf-help"
                      value={form.helpWith}
                      onChange={set('helpWith')}
                      required
                      aria-required="true"
                      className={inputClass + ' appearance-none cursor-pointer'}
                      style={{
                        color: form.helpWith ? '#fff' : 'rgba(255,255,255,0.25)',
                      }}
                    >
                      <option
                        value=""
                        disabled
                        style={{ color: '#fff', background: '#0a1628' }}
                      >
                        Select a category…
                      </option>
                      {helpOptions.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          style={{ color: '#fff', background: '#0a1628' }}
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <label
                    htmlFor="cf-challenge"
                    className="block text-white/55 text-sm font-medium mb-1.5"
                  >
                    What is slowing the business down today?{' '}
                    <span className="text-[#0A8CFF]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="cf-challenge"
                    value={form.challenge}
                    onChange={set('challenge')}
                    required
                    aria-required="true"
                    rows={5}
                    placeholder="Tell us what currently happens, what is manual, or where customers or team members get stuck."
                    className={inputClass + ' resize-none'}
                  />
                </div>

                {/* Optional: current website / system */}
                <div>
                  <label
                    htmlFor="cf-system"
                    className="block text-white/55 text-sm font-medium mb-1.5"
                  >
                    Current website / system{' '}
                    <span className="text-white/30 font-normal">(optional)</span>
                  </label>
                  <input
                    id="cf-system"
                    type="text"
                    value={form.currentSystem ?? ''}
                    onChange={set('currentSystem')}
                    placeholder="e.g. yoursite.com or describe the current setup"
                    className={inputClass}
                  />
                </div>

                {/* Consent checkbox */}
                <label
                  htmlFor="cf-consent"
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    id="cf-consent"
                    checked={form.consent}
                    onChange={setConsent}
                    required
                    aria-required="true"
                    className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#0A8CFF] cursor-pointer"
                  />
                  <span className="text-white/45 text-xs leading-relaxed select-none group-hover:text-white/55 transition-colors">
                    I agree that my details may be used to review and respond to this
                    enquiry.
                  </span>
                </label>

                {/* Privacy note + submit */}
                <div className="pt-1 space-y-4">
                  <p className="text-white/30 text-xs leading-relaxed">
                    Your details are used only to review and respond to this enquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-[#0A8CFF] hover:bg-[#168CFF] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-full transition-all duration-300 hover:scale-[1.01] text-sm"
                    style={{ boxShadow: '0 4px 24px rgba(10,140,255,0.22)' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <span
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin motion-reduce:animate-none"
                          aria-hidden="true"
                        />
                        Sending…
                      </>
                    ) : (
                      'Request Free Audit'
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
