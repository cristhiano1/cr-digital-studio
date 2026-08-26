import { motion } from 'framer-motion'
import { Link } from 'react-router'
import PageMeta from '../components/PageMeta'
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Eye,
  Zap,
  Link2,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  UserCheck,
  ArrowDown,
  GitBranch,
} from 'lucide-react'
import SolutionAccordion from '../components/SolutionAccordion'
import { AutomationMockup, AutomationBackground } from '../components/projects/AutomationDemo'
import { useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEW = { once: true, margin: '-80px' }

function SignalPulses() {
  const shouldReduceMotion = useReducedMotion()
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute" style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {[
          'animate-signal',
          'animate-signal-delayed',
          'animate-signal-delayed-2',
        ].map((cls) => (
          <div
            key={cls}
            className={`absolute rounded-full ${cls}`}
            style={{
              width: shouldReduceMotion ? '280px' : '400px',
              height: shouldReduceMotion ? '280px' : '400px',
              top: '50%',
              left: '50%',
              marginTop: shouldReduceMotion ? '-140px' : '-200px',
              marginLeft: shouldReduceMotion ? '-140px' : '-200px',
              border: '1px solid rgba(100,206,251,0.12)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────

const problemItems = [
  {
    title: 'Information entered more than once',
    body: 'The same customer, job or order details are typed into several systems because those systems do not share data.',
  },
  {
    title: 'Status tracked manually',
    body: 'Someone checks a spreadsheet, inbox or shared drive to find out where a task stands — because no single view exists.',
  },
  {
    title: 'Handoffs that depend on memory',
    body: 'When one step finishes, the next person is told via message, email or verbal reminder. If the message is missed, the handoff stalls.',
  },
]

const capabilityItems = [
  {
    icon: Layers,
    title: 'Centralise',
    body: 'Bring the important operational information into one useful view instead of switching between tools to find what you need.',
  },
  {
    icon: Eye,
    title: 'Track',
    body: 'Make status, ownership and next actions visible so the team knows what has been done and what still needs attention.',
  },
  {
    icon: Zap,
    title: 'Automate',
    body: 'Trigger repetitive steps — notifications, data transfers, status changes — when clear rules exist, without manual intervention.',
  },
  {
    icon: Link2,
    title: 'Connect',
    body: 'Move information between existing tools through APIs and webhooks where available, so updates in one system reach the others.',
  },
  {
    icon: ShieldCheck,
    title: 'Control',
    body: 'Keep approvals and human decisions in the workflow where they matter — automated does not mean unsupervised.',
  },
  {
    icon: BarChart3,
    title: 'Report',
    body: 'Create clearer operational views from data already being generated, without assembling reports by hand.',
  },
]

const flowSteps = [
  {
    n: '01',
    title: 'Something happens',
    body: 'A new enquiry arrives, a job status changes, a form is submitted, or a scheduled time is reached.',
    type: 'trigger' as const,
  },
  {
    n: '02',
    title: 'Data is structured',
    body: 'The incoming information is validated, categorised and formatted so it can be processed consistently.',
    type: 'step' as const,
  },
  {
    n: '03',
    title: 'Rules decide the next action',
    body: 'Defined conditions determine what happens next — route to the right person, update a record, send a notification, or escalate.',
    type: 'branch' as const,
  },
  {
    n: '04',
    title: 'A person approves if judgment is required',
    body: 'When the decision needs context a human cannot be removed from — pricing, exceptions, sensitive commitments — the system waits for approval.',
    type: 'human' as const,
  },
  {
    n: '05',
    title: 'Connected systems are updated',
    body: 'The outcome flows to the tools that need it — CRM, calendar, accounting, internal dashboard — without someone copying it across.',
    type: 'step' as const,
  },
  {
    n: '06',
    title: 'Next action becomes visible',
    body: 'Status, ownership and any follow-up are updated in a single view so the team knows what has changed and what to do next.',
    type: 'step' as const,
  },
]

const systemExamples = [
  'Work-order or job tracker',
  'Enquiry pipeline dashboard',
  'Approval workflow for pricing or commitments',
  'Internal customer record',
  'Operations or service-status dashboard',
  'Document or request management workflow',
  'Small admin portal with role-based access',
]

const integrationCategories = [
  { label: 'Email and messaging', items: 'Email providers, Slack, Teams' },
  { label: 'Calendar and scheduling', items: 'Google Calendar, Outlook, booking tools' },
  { label: 'CRM and customer data', items: 'Where APIs and access allow' },
  { label: 'Forms and data capture', items: 'Web forms, embedded tools, webhooks' },
  { label: 'Accounting and business tools', items: 'Where API access is available' },
  { label: 'Internal databases and APIs', items: 'Custom data stores and services' },
]

const humanControlItems = [
  'Price decisions and custom quotes',
  'Exception handling outside defined rules',
  'Customer commitments and contract terms',
  'Sensitive data access and changes',
  'Irreversible actions — deletions, payments, external communications',
]

const implementationSteps = [
  {
    n: '01',
    title: 'Understand',
    body: 'Map the current workflow, the systems involved and the repetitive handoffs creating friction.',
  },
  {
    n: '02',
    title: 'Define',
    body: 'Identify which steps should remain manual, which can be automated and what data needs to move between systems.',
  },
  {
    n: '03',
    title: 'Build and review',
    body: 'Implement the core workflow and test realistic cases, including exceptions and edge conditions.',
  },
  {
    n: '04',
    title: 'Launch and improve',
    body: 'Deploy, validate against real operational use and refine where new friction appears.',
  },
]

const goodFitItems = [
  'The same information is entered in more than one place',
  'Staff depend on spreadsheets for operational status',
  'The workflow spans several tools that do not connect',
  'Repeated manual handoffs follow predictable patterns',
  'Approvals need clearer structure and visibility',
  'An existing system cannot represent the process cleanly',
  'The business needs one focused internal view',
]

const lessSuitedItems = [
  'An existing product already handles the workflow well',
  'A simple configuration change in current tools solves the problem',
  'The process changes too frequently to define stable rules',
]

const solutionFaqItems = [
  {
    question: 'Do I need to replace the tools we already use?',
    answer:
      'Usually not. Most internal system projects connect existing tools rather than replacing them. The goal is to reduce manual handoffs between systems, not to start from scratch. If a tool is working well, it stays — the system is built around it.',
  },
  {
    question: 'What kinds of tasks can be automated?',
    answer:
      'The strongest candidates are repetitive steps with clear inputs, rules and outcomes — data transfers between systems, notifications when a status changes, report generation on a schedule, and routing work to the right person. Tasks that require judgment or context are better handled by people, with the system preparing the information they need.',
  },
  {
    question: 'Does automation mean removing people from the workflow?',
    answer:
      'No. Automation handles the repetitive, rule-based parts so people can focus on the decisions that need their judgment. Where human approval matters — pricing, exceptions, customer commitments — the system waits for a person before continuing.',
  },
  {
    question: 'Can you build an internal dashboard or admin system?',
    answer:
      'Yes. Focused internal tools can be built around specific operational needs — a job tracker, an approval workflow, an operations dashboard, or a small admin portal with role-based access. The scope is defined by the workflow, not by trying to rebuild a large platform.',
  },
  {
    question: 'Can different systems exchange data automatically?',
    answer:
      'Often, yes — where APIs, webhooks or other access methods are available. Integration feasibility depends on the specific tools involved, the permissions they offer and the data structures they use. This is assessed during the initial review.',
  },
  {
    question: 'Is automation the same as AI?',
    answer:
      'No. Automation follows defined triggers, rules and workflows — if X happens, do Y. AI can help with tasks where interpretation or generation is useful, but it is not automatically necessary. CR Digital Systems starts with the workflow and uses the simplest sensible approach. AI is considered only when a clear and appropriate use case exists.',
  },
]

// ─── Sections ─────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 bg-[#020B14] overflow-hidden"
      aria-label="Internal Systems and Automation overview"
    >
      <AutomationBackground />

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
              Internal Systems &amp; Automation
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Turn repeated manual work into a clearer operating workflow.
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg">
              Focused internal tools and integrations that help teams keep information,
              status and next actions connected — instead of moving them manually between
              systems.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#64CEFB]/30 bg-[#0A8CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(10,140,255,0.22)] transition-all duration-200 hover:bg-[#1598ff] hover:border-[#64CEFB]/50 hover:-translate-y-0.5 motion-reduce:transform-none"
              >
                Get a Free Audit
              </Link>
              <Link
                to="#automation-flow"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors duration-200"
              >
                See how automation works
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
              <AutomationMockup />
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
      aria-label="Common internal workflow problems"
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
            The friction usually sits between the tools.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {problemItems.map(({ title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
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
      aria-label="Internal system capabilities"
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
            What the system can handle.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilityItems.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
              className="glass rounded-2xl p-6"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{ background: 'rgba(100,206,251,0.10)' }}
                aria-hidden="true"
              >
                <Icon size={18} style={{ color: '#64CEFB' }} />
              </div>
              <h3 className="text-white font-semibold text-base mb-1.5">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AutomationFlow() {
  return (
    <section
      id="automation-flow"
      className="relative py-20 bg-[#04101C] overflow-hidden"
      aria-label="How a practical automation flow works"
    >
      <SignalPulses />
      <div className="relative max-w-6xl mx-auto px-6">
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
            A practical automation flow can look like this.
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <ol className="space-y-0" aria-label="Automation workflow steps">
            {flowSteps.map(({ n, title, body, type }, i) => {
              const isHuman = type === 'human'
              const isBranch = type === 'branch'
              const isLast = i === flowSteps.length - 1

              return (
                <motion.li
                  key={n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                  className="relative"
                >
                  {/* Connector */}
                  {!isLast && (
                    <div
                      className="absolute"
                      style={{
                        left: '1.125rem',
                        top: '3.5rem',
                        bottom: '-0.5rem',
                        width: '1px',
                      }}
                      aria-hidden="true"
                    >
                      {isBranch ? (
                        <div className="h-full flex flex-col items-center">
                          <div
                            className="flex-1 w-px"
                            style={{ background: 'linear-gradient(to bottom, rgba(100,206,251,0.25), rgba(10,140,255,0.15))' }}
                          />
                          <GitBranch
                            size={12}
                            className="my-1 flex-shrink-0"
                            style={{ color: 'rgba(100,206,251,0.40)' }}
                          />
                          <div
                            className="flex-1 w-px"
                            style={{ background: 'linear-gradient(to bottom, rgba(10,140,255,0.15), rgba(100,206,251,0.08))' }}
                          />
                        </div>
                      ) : (
                        <div
                          className="h-full w-px"
                          style={{
                            background: 'linear-gradient(to bottom, rgba(100,206,251,0.20), rgba(100,206,251,0.05))',
                          }}
                        />
                      )}
                    </div>
                  )}

                  <div className="flex gap-5 pb-10 last:pb-0">
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                        style={
                          isHuman
                            ? {
                                background: 'rgba(10,140,255,0.15)',
                                border: '1px solid rgba(10,140,255,0.35)',
                                color: '#0A8CFF',
                              }
                            : {
                                background: 'rgba(100,206,251,0.12)',
                                border: '1px solid rgba(100,206,251,0.30)',
                                color: '#64CEFB',
                              }
                        }
                      >
                        {isHuman ? (
                          <UserCheck size={15} aria-hidden="true" />
                        ) : (
                          n
                        )}
                      </div>
                    </div>
                    <div className="pt-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-white font-semibold text-base">{title}</h3>
                        {isHuman && (
                          <span
                            className="text-[9px] font-semibold uppercase tracking-wider rounded-full px-2 py-0.5"
                            style={{
                              color: '#0A8CFF',
                              background: 'rgba(10,140,255,0.12)',
                              border: '1px solid rgba(10,140,255,0.25)',
                            }}
                          >
                            Human
                          </span>
                        )}
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

function SystemExamples() {
  return (
    <section
      id="system-examples"
      className="py-20 bg-[#071725]"
      aria-label="Internal system examples"
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
            What an internal system can replace
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
            Sometimes the missing piece is a small system built around the workflow.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mb-8">
          {systemExamples.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.5, ease: EASE }}
          className="max-w-3xl"
        >
          <div
            className="rounded-xl px-5 py-4"
            style={{
              background: 'rgba(100,206,251,0.06)',
              border: '1px solid rgba(100,206,251,0.12)',
            }}
          >
            <p className="text-white/60 text-sm leading-relaxed">
              The goal is usually not to recreate a large platform. It is to solve the focused
              operational gap that is creating unnecessary manual work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="py-20 bg-[#020B14]"
      aria-label="Integrations and data movement"
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
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
            Keep the tools. Remove the manual handoffs.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {integrationCategories.map(({ label, items }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
              className="glass rounded-xl px-5 py-4"
            >
              <h3 className="text-white font-semibold text-sm mb-1.5">{label}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{items}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
            Integration feasibility depends on the APIs, permissions and data access available
            from the existing tools. This is assessed during the initial review.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function HumanControl() {
  return (
    <section
      id="human-control"
      className="py-20 bg-[#04101C]"
      aria-label="Human oversight in automated workflows"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#64CEFB]/60" aria-hidden="true" />
              Human control
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Automate the repetitive parts. Keep people in control where judgment matters.
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-4">
              Not every step should be automatic. A system can prepare information, validate
              known rules, notify the right person and wait for approval before performing
              the next action.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              This is especially important when the decision involves context that only a
              person can evaluate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <UserCheck size={20} style={{ color: '#0A8CFF' }} aria-hidden="true" />
              <h3 className="text-white font-semibold text-lg">Where people stay in the loop</h3>
            </div>
            <ul className="space-y-3" aria-label="Situations requiring human approval">
              {humanControlItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={15}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: '#0A8CFF' }}
                    aria-hidden="true"
                  />
                  <span className="text-white/65 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Implementation() {
  return (
    <section
      id="implementation"
      className="py-20 bg-[#071725]"
      aria-label="Implementation approach"
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
            How we work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
            Technology follows the workflow.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {implementationSteps.map(({ n, title, body }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 relative"
            >
              <span
                className="text-xs font-bold mb-3 block"
                style={{ color: '#64CEFB' }}
              >
                {n}
              </span>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{body}</p>
              {i < implementationSteps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                  <ArrowDown size={14} className="rotate-[-90deg]" style={{ color: 'rgba(100,206,251,0.30)' }} />
                </div>
              )}
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
      className="py-20 bg-[#020B14]"
      aria-label="When custom automation is worth considering"
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
            When a custom internal system is worth considering.
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
            <p className="text-white/50 text-xs leading-relaxed mt-6 pt-4 border-t border-white/[0.06]">
              If an existing product already handles the workflow well, building custom
              software may add unnecessary cost and maintenance. If a simple configuration
              change solves the problem, that may be the better answer.
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
      className="py-20 bg-[#04101C]"
      aria-label="Frequently asked questions about internal systems and automation"
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
            Common questions about internal systems and automation.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-3xl"
        >
          <SolutionAccordion items={solutionFaqItems} id="isa-faq" />
        </motion.div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section
      id="contact-cta"
      className="py-24 bg-[#071725]"
      aria-label="Get started with internal systems and automation"
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
            Where is your team still moving information by hand?
          </h2>
          <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Show us the workflow, the tools involved and where repeated manual steps happen.
            We can review whether the smallest sensible improvement is an integration,
            automation or focused internal system.
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

export default function InternalSystemsAutomationPage() {
  return (
    <>
      <PageMeta route="/solutions/internal-systems-automation" />
      <Hero />
      <Problem />
      <Capabilities />
      <AutomationFlow />
      <SystemExamples />
      <IntegrationsSection />
      <HumanControl />
      <Implementation />
      <WhenItMakesSense />
      <SolutionFAQ />
      <FinalCTA />
    </>
  )
}
