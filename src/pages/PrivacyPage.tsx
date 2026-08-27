import { Link } from 'react-router'
import { motion } from 'framer-motion'
import PageMeta from '../components/PageMeta'
import routeMeta from '../data/routeMeta.json'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const sectionClass = 'mb-10'
const headingClass = 'text-white font-semibold text-lg mb-3'
const textClass = 'text-white/50 text-sm leading-relaxed'
const listClass = 'text-white/50 text-sm leading-relaxed list-disc list-inside space-y-1.5 ml-1'

export default function PrivacyPage() {
  return (
    <>
      <PageMeta route="/privacy" />

      <section className="relative py-28 bg-[#020B14] min-h-screen" aria-label="Privacy Policy">
        {/* Subtle ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 20% 10%, rgba(10,140,255,0.05) 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Header */}
            <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
              Legal
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Privacy Policy
            </h1>

            <p className="text-white/40 text-sm mb-12">
              Last updated: August 2026
            </p>

            {/* ── Overview ─────────────────────────────────────────────── */}
            <div className={sectionClass}>
              <h2 className={headingClass}>Overview</h2>
              <p className={textClass}>
                CR Digital Systems ("we", "us") operates the website at{' '}
                <span className="text-white/60">{routeMeta.canonicalBase.replace(/^https?:\/\//, '')}</span>.
                This policy describes what information is collected when you use this
                site, why it is collected, and how it is handled.
              </p>
            </div>

            {/* ── What we collect ───────────────────────────────────────── */}
            <div className={sectionClass}>
              <h2 className={headingClass}>What we collect</h2>
              <p className={textClass + ' mb-3'}>
                Information is only collected when you voluntarily submit the contact
                form. The form collects:
              </p>
              <ul className={listClass}>
                <li>Your name</li>
                <li>Work email address</li>
                <li>Business or company name</li>
                <li>Service interest (selected category)</li>
                <li>A description of your current challenge</li>
                <li>Current website or system (optional, if provided)</li>
                <li>Consent confirmation</li>
              </ul>
              <p className={textClass + ' mt-3'}>
                We do not collect personal data through any other means on this site.
                There are no analytics trackers, advertising pixels or marketing
                cookies.
              </p>
            </div>

            {/* ── How we use your data ─────────────────────────────────── */}
            <div className={sectionClass}>
              <h2 className={headingClass}>How we use your data</h2>
              <p className={textClass}>
                The information you submit is used solely to review your enquiry,
                respond to you and, if applicable, discuss your project further. We do
                not sell, rent or share your data with third parties for marketing
                purposes.
              </p>
            </div>

            {/* ── Third-party services ─────────────────────────────────── */}
            <div className={sectionClass}>
              <h2 className={headingClass}>Third-party services</h2>
              <p className={textClass + ' mb-3'}>
                The following third-party services are involved in operating this site
                and processing contact form submissions:
              </p>
              <ul className={listClass}>
                <li>
                  <span className="text-white/60">Netlify</span> — Hosting and
                  serverless function execution. Netlify may log IP addresses and
                  request metadata as part of standard infrastructure operation.
                </li>
                <li>
                  <span className="text-white/60">Supabase</span> — Database storage
                  for contact form submissions.
                </li>
                <li>
                  <span className="text-white/60">Resend</span> — Email delivery
                  service used to send notification of new enquiries. Your email
                  address and submission details are included in the notification.
                </li>
                <li>
                  <span className="text-white/60">Cloudflare Turnstile</span> —
                  Anti-spam verification. Turnstile may set cookies and collect device
                  signals to distinguish genuine visitors from automated traffic. The
                  challenge token is verified server-side and is not stored.
                </li>
              </ul>
              <p className={textClass + ' mt-3'}>
                This site uses the Inter typeface, which is bundled with and served
                directly by the site itself. No external font service is contacted.
              </p>
            </div>

            {/* ── Cookies ──────────────────────────────────────────────── */}
            <div className={sectionClass}>
              <h2 className={headingClass}>Cookies</h2>
              <p className={textClass}>
                This site does not set first-party cookies. Cloudflare Turnstile may
                set cookies as part of its anti-spam verification. No analytics or
                advertising cookies are used.
              </p>
            </div>

            {/* ── Data retention ────────────────────────────────────────── */}
            <div className={sectionClass}>
              <h2 className={headingClass}>Data retention</h2>
              <p className={textClass}>
                Contact form submissions are retained for as long as needed to review
                your enquiry, respond and follow up on any resulting project
                discussion. If you would like your data removed, contact us using the
                details below.
              </p>
            </div>

            {/* ── Your rights ──────────────────────────────────────────── */}
            <div className={sectionClass}>
              <h2 className={headingClass}>Your rights</h2>
              <p className={textClass}>
                You may request access to, correction of, or deletion of any personal
                data we hold about you. To make a request, contact us using the
                details below.
              </p>
            </div>

            {/* ── Contact ──────────────────────────────────────────────── */}
            <div className={sectionClass}>
              <h2 className={headingClass}>Contact</h2>
              <p className={textClass}>
                If you have questions about this policy or your data, you can reach
                Cristhian Rodriguez through the{' '}
                <Link
                  to="/#contact"
                  className="text-[#0A8CFF] hover:underline"
                >
                  contact form
                </Link>{' '}
                or on{' '}
                <a
                  href="https://www.linkedin.com/in/cristhian-rodriguez-rodrgo-280176252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A8CFF] hover:underline"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>

            {/* ── Changes ──────────────────────────────────────────────── */}
            <div className="mb-6">
              <h2 className={headingClass}>Changes to this policy</h2>
              <p className={textClass}>
                This policy may be updated from time to time. Any changes will be
                reflected on this page with an updated date.
              </p>
            </div>

            {/* Back link */}
            <div className="pt-8 border-t border-white/[0.06]">
              <Link
                to="/"
                className="text-white/40 hover:text-white/60 text-sm transition-colors duration-200"
              >
                &larr; Back to home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
