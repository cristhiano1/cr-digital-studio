import { motion } from 'framer-motion'
import { Link } from 'react-router'
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck2,
  Clock,
  Bell,
  Users,
  CreditCard,
  RefreshCcw,
  CheckCircle2,
  AlertCircle,
  Shield,
  User,
  Building2,
} from 'lucide-react'
import SolutionAccordion from '../components/SolutionAccordion'
import { BookingMockup, BookingBackground } from '../components/projects/BookingDemo'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEW = { once: true, margin: '-80px' }

// ─── Data ─────────────────────────────────────────────────────────

const problemItems = [
  {
    icon: Clock,
    title: 'Scheduling by phone and email',
    body: 'Each new booking needs a back-and-forth. When the team is busy, a customer has to wait — and sometimes finds another option first.',
  },
  {
    icon: AlertCircle,
    title: 'Double-bookings and no-shows',
    body: 'Without a single place for availability, slots get promised more than once. Without reminders, customers forget.',
  },
  {
    icon: Users,
    title: 'No self-service after booking',
    body: "Customers can't check, reschedule or cancel without calling in. That creates work for the team on both ends.",
  },
]

const customerSteps = [
  {
    n: '01',
    title: 'Picks a service and time',
    body: "The customer chooses what they need and selects from the times you've made available — no phone call or email required.",
  },
  {
    n: '02',
    title: 'Fills in their details',
    body: 'Contact information, any notes about the job, and (where relevant) payment — completed in one form before confirming.',
  },
  {
    n: '03',
    title: 'Receives confirmation and reminders',
    body: 'An immediate confirmation lands in their inbox. Automated reminders follow closer to the appointment.',
  },
]

const businessSteps = [
  {
    n: '01',
    title: 'Availability and rules applied',
    body: "Your service types, open hours, buffer times and staff capacity determine which slots appear. Unavailable times are never shown.",
  },
  {
    n: '02',
    title: 'Booking recorded, team notified',
    body: 'The appointment appears in your schedule and the right team member is notified. Calendar syncs update automatically.',
  },
  {
    n: '03',
    title: 'Schedule stays accurate',
    body: 'Double-bookings are blocked at the system level. Cancellations and rescheduling update the calendar without manual steps.',
  },
]

const capabilityItems = [
  {
    icon: CalendarCheck2,
    title: 'Customer self-booking',
    body: "Customers pick a time and book without you needing to be available. Your schedule sets the rules; the system enforces them.",
  },
  {
    icon: Bell,
    title: 'Automated reminders',
    body: 'Confirmation sent immediately after booking, reminder sent before the appointment. Reduces no-shows without manual follow-up.',
  },
  {
    icon: User,
    title: 'Customer portal',
    body: "Customers can view, reschedule or cancel their booking within the rules you set — reducing inbound calls to your team.",
  },
  {
    icon: CreditCard,
    title: 'Payment at booking or on the day',
    body: 'Collect a deposit or full payment when the booking is made, or record that payment will happen at the appointment.',
  },
  {
    icon: RefreshCcw,
    title: 'Calendar sync',
    body: 'New bookings appear in your calendar automatically. Existing calendar blocks prevent those slots from being offered.',
  },
]

const integrationItems = [
  'Google Calendar and Outlook sync',
  'Email confirmation and reminder sequences',
  'Customer-facing booking page or site embed',
  'Team notifications when a booking is made or changed',
]

const goodFitItems = [
  'Service businesses with predictable appointment length',
  'High booking volume where manual scheduling creates backlog',
  "Teams where the same person can't always answer the phone",
  'Businesses that take deposits or payments upfront',
  'Services where customers need to reschedule occasionally',
]

const lessSuitedItems = [
  'Walk-in only businesses with no advance booking',
  'Services that need a site visit before a time can be committed',
  'Businesses where a quote must come first before booking',
]

const solutionFaqItems = [
  {
    question: 'Can customers reschedule or cancel themselves?',
    answer:
      "Yes. A customer portal lets them view upcoming bookings and request changes within the rules you set — for example, cancellations up to 24 hours before. This reduces inbound calls to your team without removing your control over what customers can and can't change.",
  },
  {
    question: 'How does payment at booking work?',
    answer:
      "A booking form can collect a deposit or full payment at the time of booking. Whether that makes sense depends on your service type, your deposit policy, and how your team processes payments. We build this based on what suits your business — there's no single default.",
  },
  {
    question: 'Will it sync with Google Calendar or Outlook?',
    answer:
      'Yes. New bookings can appear in your existing calendar automatically, and existing calendar blocks — meetings, leave, other commitments — can prevent bookings from being offered in those slots. The specific integrations depend on what your team already uses.',
  },
  {
    question: "What happens if a customer tries to book a slot that's already taken?",
    answer:
      "Availability rules prevent double-bookings at the time of request. If a slot fills while a customer is completing their form, they're shown the next available time before confirming. Your team doesn't need to manage this manually.",
  },
  {
    question: 'How are reminders sent?',
    answer:
      'The system sends a confirmation immediately after booking and a reminder before the appointment — by email, and optionally by SMS depending on your setup. The timing and message content are configured during the build based on how your business operates.',
  },
  {
    question: 'What if my availability changes at short notice?',
    answer:
      'You can block time directly in your calendar, which prevents new bookings from being taken in that window. Customers with existing appointments in that slot can be notified automatically or manually, depending on what the situation calls for.',
  },
]

// ─── Sections ─────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 bg-[#020B14] overflow-hidden"
      aria-label="Booking and Customer Flows overview"
    >
      <BookingBackground />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-white/55 hover:text-white/75 text-xs transition-colors duration-200"
          >
            <ArrowLeft size={12} aria-hidden="true" />
            Home
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#64CEFB]/60" aria-hidden="true" />
              Booking &amp; Customer Flows
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Make booking clearer for customers and easier to manage behind the scenes.
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg">
              A booking system lets customers pick a time, fill in their details and receive
              confirmation without you needing to be available — while your availability rules
              keep the schedule accurate.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#64CEFB]/30 bg-[#0A8CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(10,140,255,0.22)] transition-all duration-200 hover:bg-[#1598ff] hover:border-[#64CEFB]/50 hover:-translate-y-0.5 motion-reduce:transform-none"
              >
                Get a Free Audit
              </Link>
              <Link
                to="#booking-flow"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors duration-200"
              >
                See how it works
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="relative"
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase rounded-full px-2.5 py-1"
                style={{
                  color: '#64CEFB',
                  background: 'rgba(100,206,251,0.10)',
                  border: '1px solid rgba(100,206,251,0.20)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#64CEFB]" aria-hidden="true" />
                Concept Demo
              </span>
            </div>
            <div
              className="rounded-2xl p-1"
              style={{
                background:
                  'linear-gradient(135deg, rgba(100,206,251,0.15) 0%, rgba(10,140,255,0.08) 50%, transparent 100%)',
              }}
            >
              <BookingMockup />
            </div>
            <p className="text-white/50 text-[11px] mt-2 text-center">
              Sample data — illustrative only
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section
      id="problem"
      className="py-20 bg-[#071725]"
      aria-label="Common scheduling problems"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#64CEFB]/60" aria-hidden="true" />
            The problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
            Manual scheduling doesn't scale.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {problemItems.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{ background: 'rgba(100,206,251,0.10)' }}
                aria-hidden="true"
              >
                <Icon size={18} style={{ color: '#64CEFB' }} />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BookingFlowSection() {
  return (
    <section
      id="booking-flow"
      className="py-20 bg-[#04101C]"
      aria-label="How a booking works — customer and business view"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#64CEFB]/60" aria-hidden="true" />
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
            What happens on both sides of a booking.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Customer lane */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.6, ease: EASE }}
            className="pr-0 lg:pr-12 pb-12 lg:pb-0 border-b border-white/[0.06] lg:border-b-0 lg:border-r lg:border-white/[0.06]"
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(100,206,251,0.15)' }}
                aria-hidden="true"
              >
                <User size={14} style={{ color: '#64CEFB' }} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: '#64CEFB' }}
                >
                  Customer
                </p>
                <p className="text-white/50 text-xs">What the customer does</p>
              </div>
            </div>

            <ol className="space-y-0" aria-label="Customer booking steps">
              {customerSteps.map(({ n, title, body }, i) => (
                <li key={n} className="relative flex gap-5 pb-10 last:pb-0">
                  {i < customerSteps.length - 1 && (
                    <div
                      className="absolute w-px"
                      style={{
                        left: '1.125rem',
                        top: '2.25rem',
                        bottom: 0,
                        background:
                          'linear-gradient(to bottom, rgba(100,206,251,0.25), rgba(100,206,251,0.05))',
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: 'rgba(100,206,251,0.12)',
                        border: '1px solid rgba(100,206,251,0.30)',
                        color: '#64CEFB',
                      }}
                    >
                      {n}
                    </div>
                  </div>
                  <div className="pt-1 min-w-0">
                    <h3 className="text-white font-semibold text-base mb-1.5">{title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Business lane */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="pl-0 lg:pl-12 pt-12 lg:pt-0"
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(10,140,255,0.15)' }}
                aria-hidden="true"
              >
                <Building2 size={14} style={{ color: '#0A8CFF' }} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: '#0A8CFF' }}
                >
                  Business
                </p>
                <p className="text-white/50 text-xs">What happens in the background</p>
              </div>
            </div>

            <ol className="space-y-0" aria-label="Business booking steps">
              {businessSteps.map(({ n, title, body }, i) => (
                <li key={n} className="relative flex gap-5 pb-10 last:pb-0">
                  {i < businessSteps.length - 1 && (
                    <div
                      className="absolute w-px"
                      style={{
                        left: '1.125rem',
                        top: '2.25rem',
                        bottom: 0,
                        background:
                          'linear-gradient(to bottom, rgba(10,140,255,0.25), rgba(10,140,255,0.05))',
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: 'rgba(10,140,255,0.12)',
                        border: '1px solid rgba(10,140,255,0.30)',
                        color: '#0A8CFF',
                      }}
                    >
                      {n}
                    </div>
                  </div>
                  <div className="pt-1 min-w-0">
                    <h3 className="text-white font-semibold text-base mb-1.5">{title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-20 bg-[#020B14]"
      aria-label="Booking system capabilities"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#64CEFB]/60" aria-hidden="true" />
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
            What the system handles.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capabilityItems.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
              className="glass rounded-2xl p-6 flex gap-4"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'rgba(100,206,251,0.10)' }}
                aria-hidden="true"
              >
                <Icon size={18} style={{ color: '#64CEFB' }} />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold text-base mb-1.5">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItFits() {
  const availabilityItems = [
    'Service types and durations you offer',
    'Hours open for online booking',
    'Buffer time between appointments',
    'Staff or resource capacity limits',
    'Dates blocked for leave or closure',
  ]

  return (
    <section
      id="how-it-fits"
      className="py-20 bg-[#071725]"
      aria-label="Availability rules and payments"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#64CEFB]/60" aria-hidden="true" />
            How it fits your business
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
            You set the rules. The system follows them.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.6, ease: EASE }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(100,206,251,0.10)' }}
                aria-hidden="true"
              >
                <Shield size={18} style={{ color: '#64CEFB' }} />
              </div>
              <h3 className="text-white font-semibold text-lg">Availability and rules</h3>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Your booking rules are configured during the build. Customers only ever see
              the slots you've made available — everything else is blocked.
            </p>
            <ul className="space-y-3" aria-label="Availability rule examples">
              {availabilityItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={15}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: '#64CEFB' }}
                    aria-hidden="true"
                  />
                  <span className="text-white/65 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(10,140,255,0.10)' }}
                aria-hidden="true"
              >
                <CreditCard size={18} style={{ color: '#0A8CFF' }} />
              </div>
              <h3 className="text-white font-semibold text-lg">Where payments fit</h3>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-4">
              A booking system can collect a deposit or full payment at the time of booking,
              or record that payment will happen on the day. The right approach depends on
              your service type and deposit policy.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              We build the payment flow based on what suits your business — not a
              one-size-fits-all default. If your pricing varies per job, payment on the day
              is often more practical.
            </p>
            <div
              className="rounded-xl px-4 py-3"
              style={{
                background: 'rgba(10,140,255,0.07)',
                border: '1px solid rgba(10,140,255,0.15)',
              }}
            >
              <p className="text-white/60 text-xs leading-relaxed">
                Payments are an optional part of a booking setup, not a requirement.
                Many businesses collect payment on the day — the booking system handles
                scheduling; payment follows your existing process.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Integrations() {
  return (
    <section
      id="integrations"
      className="py-20 bg-[#020B14]"
      aria-label="Integrations and connections"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#64CEFB]/60" aria-hidden="true" />
            Connections
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
            Built to fit the tools you already use.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {integrationItems.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
              className="glass rounded-xl px-5 py-4 flex items-center gap-3"
            >
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#64CEFB' }}
                aria-hidden="true"
              />
              <span className="text-white/70 text-sm">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhenItMakesSense() {
  return (
    <section
      id="right-fit"
      className="py-20 bg-[#04101C]"
      aria-label="When a booking system makes sense"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#64CEFB]/60" aria-hidden="true" />
            Is it right for you?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
            When a booking system makes sense.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.6, ease: EASE }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 size={20} style={{ color: '#64CEFB' }} aria-hidden="true" />
              <h3 className="text-white font-semibold text-lg">Likely a good fit</h3>
            </div>
            <ul className="space-y-3" aria-label="Good fit scenarios">
              {goodFitItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ background: '#64CEFB' }}
                    aria-hidden="true"
                  />
                  <span className="text-white/65 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle size={20} className="text-white/40" aria-hidden="true" />
              <h3 className="text-white font-semibold text-lg">Less likely to fit</h3>
            </div>
            <ul className="space-y-3" aria-label="Less suitable scenarios">
              {lessSuitedItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 bg-white/30" aria-hidden="true" />
                  <span className="text-white/55 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/40 text-xs leading-relaxed mt-6 pt-4 border-t border-white/[0.06]">
              If booking isn't the right fit, there may be a different system — like a quote
              flow or lead capture form — that suits your process better.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SolutionFAQ() {
  return (
    <section
      id="faq"
      className="py-20 bg-[#071725]"
      aria-label="Frequently asked questions about booking systems"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#64CEFB]/60" aria-hidden="true" />
            Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
            Common questions about booking systems.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-3xl"
        >
          <SolutionAccordion items={solutionFaqItems} id="bcf-faq" />
        </motion.div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section
      id="contact-cta"
      className="py-24 bg-[#020B14]"
      aria-label="Get started with a booking system"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#64CEFB]/60" aria-hidden="true" />
            Next step
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl mx-auto">
            Ready to take bookings without the back-and-forth?
          </h2>
          <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Let's look at how your current scheduling process works and where a booking
            system would remove the friction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#64CEFB]/30 bg-[#0A8CFF] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(10,140,255,0.22)] transition-all duration-200 hover:bg-[#1598ff] hover:border-[#64CEFB]/50 hover:-translate-y-0.5 motion-reduce:transform-none"
            >
              Get a Free Audit
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors duration-200"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function BookingCustomerFlowsPage() {
  return (
    <>
      <Hero />
      <Problem />
      <BookingFlowSection />
      <Capabilities />
      <HowItFits />
      <Integrations />
      <WhenItMakesSense />
      <SolutionFAQ />
      <FinalCTA />
    </>
  )
}
