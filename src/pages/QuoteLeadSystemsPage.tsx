import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { Check, ArrowRight, ArrowLeft } from 'lucide-react'
import { QuoteLeadMockup, QuoteLeadBackground } from '../components/projects/QuoteLeadDemo'
import { solutions } from '../data/services'
import SolutionAccordion from '../components/SolutionAccordion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const quoteSolution = solutions.find((s) => s.id === 'quotes-leads')!

const solutionFaqItems = [
  {
    question: 'How is this different from a standard contact form?',
    answer:
      'A contact form sends an email. This system stores enquiries in a pipeline, sorts them by priority, tracks their status and sends follow-ups automatically. The difference is what happens after someone submits — the information goes somewhere organised rather than landing in an inbox.',
  },
  {
    question: 'Will this replace the CRM we already use?',
    answer:
      'Not necessarily. If a CRM is already in use and your team uses it consistently, this system can hand enquiries off to it rather than replace it. Whether that integration is feasible depends on the tools involved and what their APIs allow — this is assessed during scoping.',
  },
  {
    question: 'What does the team need to do to run it day to day?',
    answer:
      'Once set up, the system handles capture, sorting and follow-ups without manual input. Day to day, the team works from the pipeline view — checking open enquiries, updating statuses and responding. No technical knowledge is needed to operate it.',
  },
  {
    question: 'What does someone see when they submit an enquiry?',
    answer:
      'They complete a multi-step form that asks for their contact details, the type of work and a rough budget. After submitting, they receive a confirmation. On the business side, the enquiry appears in the pipeline immediately with the submitted details.',
  },
  {
    question: 'How long does a project like this take to build?',
    answer:
      'A focused quote and lead system is one of the more contained projects. The timeline depends on the number of stages in the form, which integrations are needed and how quickly decisions can happen on both sides. Scope is agreed before development begins, so the project has a defined shape from the start.',
  },
]

const workflowSteps = [
  {
    number: '01',
    title: 'Capture',
    body: 'A multi-step form on your website collects the enquiry — service type, budget range and contact details. Each submission goes into the pipeline immediately.',
  },
  {
    number: '02',
    title: 'Sort',
    body: 'Enquiries are sorted automatically by service type, budget and submission time so the most relevant ones are visible at a glance.',
  },
  {
    number: '03',
    title: 'Follow up',
    body: 'If a lead has not had a response within a set window, an automatic follow-up is sent. You control what gets sent and when.',
  },
  {
    number: '04',
    title: 'Track',
    body: 'The pipeline view shows every open enquiry — what stage it is at, what has been sent and what still needs a response.',
  },
]

const integrationTypes = [
  {
    label: 'Email notifications',
    detail: 'Submissions and follow-ups sent via connected email accounts when new enquiries arrive.',
  },
  {
    label: 'CRM hand-off',
    detail: 'Enquiries passed to an existing CRM when the team is ready to progress a lead.',
  },
  {
    label: 'Team notifications',
    detail: 'New submissions routed to the right person by service type or region.',
  },
  {
    label: 'Calendar',
    detail: 'Bookings flagged in connected calendar systems when a lead moves to an accepted stage.',
  },
]

function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 bg-[#020B14] overflow-hidden"
      aria-label="Quote and Lead Systems overview"
    >
      <QuoteLeadBackground />

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
            <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
              Quote & Lead Systems
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Turn enquiries into a clear follow-up workflow.
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg">
              A system that captures leads from your website, sorts them by service and priority, and
              sends automatic follow-ups — so nothing falls through when the team is busy.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#64CEFB]/30 bg-[#0A8CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(10,140,255,0.22)] transition-all duration-200 hover:bg-[#1598ff] hover:border-[#64CEFB]/50 hover:-translate-y-0.5 motion-reduce:transform-none"
              >
                Get a Free Audit
              </Link>
              <Link
                to="#workflow"
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
                background: 'rgba(4,16,28,0.70)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.50), 0 0 0 1px rgba(10,140,255,0.08)',
              }}
            >
              <QuoteLeadMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  const problems = [
    {
      title: 'No central view',
      body: 'Enquiries arrive by email, phone and message apps with no single place to see them all. The full picture of open leads is only visible to whoever happens to have checked each channel.',
    },
    {
      title: 'Follow-up falls through',
      body: 'Manual follow-up is easy to forget when the team is busy. Leads that go quiet without a response rarely come back, and there is no automatic way to know which ones need chasing.',
    },
    {
      title: 'No pipeline visibility',
      body: 'Without a structured view, it is difficult to know how many enquiries are currently open, which ones are worth prioritising and which have already been lost.',
    },
  ]

  return (
    <section
      id="problem"
      className="relative py-24 bg-[#04101C] overflow-hidden"
      aria-label="Problem this system solves"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
            The Gap
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Where enquiries get lost.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="rounded-2xl p-7"
              style={{
                background: 'rgba(4,12,20,0.60)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              <h3 className="text-white font-semibold text-base mb-3 leading-snug">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  const { capabilities } = quoteSolution

  return (
    <section
      id="capabilities"
      className="relative py-24 bg-[#020B14] overflow-hidden"
      aria-label="System capabilities"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 80% 50%, rgba(10,140,255,0.06) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
              What's included
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              What the system handles.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              A focused set of capabilities built around how trade and service businesses actually
              handle enquiries — not a generic form tool.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="space-y-3"
            role="list"
          >
            {capabilities.map((cap, i) => (
              <motion.li
                key={cap}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                className="flex items-start gap-4 rounded-2xl p-5"
                style={{
                  background: 'rgba(4,12,20,0.50)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <Check
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: '#64CEFB' }}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
                <span className="text-white/75 text-sm leading-snug">{cap}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

function Workflow() {
  return (
    <section
      id="workflow"
      className="relative py-24 bg-[#071725] overflow-hidden"
      aria-label="How the system works"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            From first contact to followed-up lead.
          </h2>
        </motion.div>

        {/* Desktop: horizontal 4-col */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-4 gap-8">
            <div
              className="absolute h-px bg-white/[0.08]"
              style={{ top: '14px', left: '14px', right: '14px' }}
              aria-hidden="true"
            />
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
                className="relative flex flex-col"
              >
                <div
                  className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center mb-7 flex-shrink-0 border border-white/[0.12]"
                  style={{ background: '#071725' }}
                >
                  <span
                    className="text-[10px] font-mono font-bold text-[#0A8CFF]/60"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="text-white text-sm font-semibold mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden relative">
          <div
            className="absolute w-px bg-white/[0.08]"
            style={{ left: '13px', top: '13px', bottom: '13px' }}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-10">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
                className="relative flex gap-5"
              >
                <div
                  className="relative z-10 flex-shrink-0 w-[26px] h-[26px] rounded-full flex items-center justify-center border border-white/[0.12]"
                  style={{ background: '#071725' }}
                >
                  <span
                    className="text-[10px] font-mono font-bold text-[#0A8CFF]/60"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </div>
                <div className="min-w-0 pb-1">
                  <h3 className="text-white text-base font-semibold mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Integrations() {
  return (
    <section
      id="integrations"
      className="relative py-24 bg-[#020B14] overflow-hidden"
      aria-label="Integrations"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
              Integrations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              What it connects with.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              The specific integrations depend on the tools already in use. Whether a particular
              connection is feasible is assessed during scoping — not assumed upfront.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="space-y-3"
          >
            {integrationTypes.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                className="flex gap-4 items-start rounded-2xl p-5"
                style={{
                  background: 'rgba(4,12,20,0.50)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ background: '#64CEFB' }}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-white/80 text-sm font-semibold mb-1">{item.label}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Implementation() {
  const phases = [
    {
      label: '01 — Understand',
      detail:
        'Current workflow, where leads are being lost and what an organised pipeline would look like.',
    },
    {
      label: '02 — Define',
      detail:
        'Form structure, pipeline stages, follow-up logic and integrations — agreed before development begins.',
    },
    {
      label: '03 — Build & Review',
      detail:
        'Working flows are built and reviewed in stages so the system fits the actual workflow before launch.',
    },
    {
      label: '04 — Launch',
      detail:
        'The system is checked in the live environment before handover. Further improvements are scoped separately.',
    },
  ]

  return (
    <section
      id="implementation"
      className="relative py-24 bg-[#04101C] overflow-hidden"
      aria-label="How the project gets delivered"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
              Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              How the project gets built.
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              A quote and lead system starts the same way every project does — with a conversation
              about the current workflow, where time is being lost and what a useful outcome looks
              like.
            </p>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              The forms, pipeline structure and follow-up logic are agreed before development begins.
              Working flows are reviewed in stages before the final system goes live, so there are no
              surprises at launch.
            </p>
            <Link
              to="/#process"
              className="inline-flex items-center gap-2 text-[#0A8CFF] hover:text-[#64CEFB] text-sm font-medium transition-colors duration-200"
            >
              See how we work through every project
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {phases.map(({ label, detail }) => (
              <div
                key={label}
                className="rounded-2xl p-5"
                style={{
                  background: 'rgba(4,12,20,0.55)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                <p className="text-[#0A8CFF] text-[10px] font-mono font-bold tracking-[0.12em] mb-3 uppercase">
                  {label}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function RightFit() {
  const goodFit = [
    'You are currently tracking enquiries manually across email, phone and message apps.',
    'Leads go quiet because follow-up depends on someone remembering to send it.',
    'More than one person handles enquiries and there is no shared view of what is open.',
    'You lose jobs not because the quote was wrong but because the response was slow.',
  ]

  const lessFit = [
    'You receive only a small number of enquiries per month and email already works well.',
    'A CRM is already in consistent daily use by your team and handles everything you need.',
    'The sales process involves complex multi-stage negotiation better suited to an enterprise CRM.',
  ]

  return (
    <section
      id="right-fit"
      className="relative py-24 bg-[#020B14] overflow-hidden"
      aria-label="Whether this system fits your situation"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 10% 70%, rgba(100,206,251,0.04) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
            Right fit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Whether this fits your situation.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(10,140,255,0.05)',
              border: '1px solid rgba(10,140,255,0.15)',
              boxShadow: 'inset 0 1px 0 rgba(10,140,255,0.08)',
            }}
          >
            <p className="text-[#64CEFB] text-xs font-semibold tracking-widest uppercase mb-6">
              A good fit if
            </p>
            <ul className="space-y-4" role="list">
              {goodFit.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-white/65 text-sm leading-relaxed"
                >
                  <Check
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: '#0A8CFF' }}
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(4,12,20,0.50)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-6">
              Less likely to be the right fit if
            </p>
            <ul className="space-y-4" role="list">
              {lessFit.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-white/45 text-sm leading-relaxed"
                >
                  <span
                    className="mt-2 w-1 h-1 rounded-full bg-white/25 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SolutionFAQ() {
  return (
    <section
      id="solution-faq"
      className="relative py-24 bg-[#04101C] overflow-hidden"
      aria-label="Questions about this system"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
              Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              About this system.
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              More general questions about working together are covered in the{' '}
              <Link
                to="/#faq"
                className="text-[#0A8CFF] hover:text-[#64CEFB] transition-colors duration-200 underline underline-offset-2 decoration-[#0A8CFF]/40"
              >
                FAQ section on the home page
              </Link>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            <SolutionAccordion items={solutionFaqItems} id="ql-faq" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative py-28 bg-[#071725] overflow-hidden"
      aria-label="Get started"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(10,140,255,0.09) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Ready to look at your current setup?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-md mx-auto">
            Describe where the work gets stuck and we will review the workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#64CEFB]/30 bg-[#0A8CFF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(10,140,255,0.25)] transition-all duration-200 hover:bg-[#1598ff] hover:border-[#64CEFB]/50 hover:-translate-y-0.5 motion-reduce:transform-none"
            >
              Get a Free Audit
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-white/55 hover:text-white/75 text-sm transition-colors duration-200"
            >
              <ArrowLeft size={13} aria-hidden="true" />
              Back to home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function QuoteLeadSystemsPage() {
  return (
    <>
      <Hero />
      <Problem />
      <Capabilities />
      <Workflow />
      <Integrations />
      <Implementation />
      <RightFit />
      <SolutionFAQ />
      <FinalCTA />
    </>
  )
}
