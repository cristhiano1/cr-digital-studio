import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronUp, ExternalLink } from 'lucide-react'
import { QuoteLeadMockup, QuoteLeadBackground } from './projects/QuoteLeadDemo'
import { BookingMockup, BookingBackground } from './projects/BookingDemo'
import { FieldServiceMockup, FieldServiceBackground } from './projects/FieldServiceDemo'
import { AutomationMockup, AutomationBackground } from './projects/AutomationDemo'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

// ─── Project data ─────────────────────────────────────────────────────────────

interface ProjectDetails {
  solves: string
  bestFor: string
  businessValue: string
  highlights: string[]
}

interface ProjectMeta {
  number: string
  topLabel: string
  title: string
  badge: string
  description: string
  note?: string
  features: string[]
  tech: string[]
  accentColor: string
  details: ProjectDetails
}

const QUOTE_LEAD: ProjectMeta = {
  number: '01',
  topLabel: 'Lead capture demo',
  title: 'Smart Quote & Lead System',
  badge: 'Concept Demo',
  description:
    'A lead capture and quoting system for service businesses that want to stop losing enquiries to slow responses, missed messages or manual follow-up. Enquiries come in through a structured form, get sorted automatically and trigger follow-up actions so the right person is always in the loop.',
  note: 'Concept system demo. No live client data. All names and figures are illustrative.',
  features: [
    'Multi-step quote request forms',
    'Lead pipeline view',
    'Automatic follow-up emails',
    'Enquiry sorting by priority',
    'Team notifications',
  ],
  tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Email automation'],
  accentColor: '#0A8CFF',
  details: {
    solves:
      'Service businesses often receive enquiries through different channels — phone, email, a contact form, a social message — and without a system to capture and sort them, responses slow down, leads go quiet and opportunities get missed.\n\nThis demo shows how enquiries can be collected through a single structured form, sorted by service type and urgency, and routed to the right person automatically. The follow-up step runs without manual intervention, so no lead is forgotten.',
    bestFor:
      'Useful for tradespeople, agencies, consultants, local service providers and any business where a potential customer needs to describe what they need before a price can be given.\n\nEspecially useful when the business has more than one person handling enquiries, or when leads come in faster than the team can respond manually.',
    businessValue:
      'The business captures more of the enquiries that already exist. A structured intake form collects the information needed to quote, so the first conversation starts further along. Automatic follow-up keeps leads warm without adding to the admin workload.\n\nFor the team, the pipeline view means everyone can see the status of every open enquiry without asking around or checking emails.',
    highlights: [
      'Structured intake form',
      'Lead pipeline view',
      'Auto follow-up emails',
      'Enquiry sorting',
      'Team routing',
      'No leads dropped',
    ],
  },
}

const BOOKING: ProjectMeta = {
  number: '02',
  topLabel: 'Booking flow demo',
  title: 'Smart Booking & Customer Flow',
  badge: 'Concept Demo',
  description:
    'A booking and customer management system for appointment-based businesses that want to stop handling scheduling through phone calls, messages and manual calendars. Customers book online, get reminders automatically and can check or change their appointments without calling in.',
  features: [
    'Online booking calendar',
    'Automatic customer reminders',
    'Customer booking portal',
    'Payment collected at booking',
    'Calendar sync to avoid double-bookings',
  ],
  tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Calendar API'],
  accentColor: '#64CEFB',
  details: {
    solves:
      'Many appointment-based businesses still handle scheduling manually — taking calls, sending confirmation messages, chasing payment, checking for double-bookings. Each step takes time, and when a booking falls through the cracks, the cost is a missed appointment and a frustrated customer.\n\nThis demo shows how customers can self-book from an availability calendar, receive automated reminders and access a simple portal to manage their own appointments.',
    bestFor:
      'Useful for clinics, salons, consultants, trainers, repair services and any business where customers need to reserve a specific time slot.\n\nEspecially useful when staff are spending a meaningful share of their day answering booking calls, sending reminders or updating a shared calendar.',
    businessValue:
      'The business gets back time that was spent on scheduling admin. Customers can book when it suits them, not just during business hours. Automated reminders reduce no-shows without any manual follow-up.\n\nThe portal gives customers a clear place to check their bookings, which reduces inbound calls and builds a more professional impression.',
    highlights: [
      'Self-serve booking',
      'Automated reminders',
      'Customer portal',
      'Payment collection',
      'No double-bookings',
      'Works outside business hours',
    ],
  },
}

const FIELD_SERVICE: ProjectMeta = {
  number: '03',
  topLabel: 'Field service demo',
  title: 'Work Order & Field Service System',
  badge: 'Concept Demo',
  description:
    'A work order and job management system for field service businesses that need to assign jobs to technicians, track progress in real time and keep a clear record of what was done, when and by whom. It replaces the phone calls, paper dockets and shared spreadsheets that slow field teams down.',
  note: 'Concept system demo. Illustrates internal workflow digitisation for field service operations.',
  features: [
    'Work order creation and assignment',
    'Technician job view',
    'Live status tracking',
    'Parts and notes logging',
    'Completion records',
  ],
  tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API'],
  accentColor: '#168CFF',
  details: {
    solves:
      'Field service businesses — plumbers, electricians, repair teams, maintenance operations — often coordinate work through phone calls, messages and paper dockets. Jobs get assigned verbally, status updates come in as messages, and there is no single place where the office knows what each technician is working on.\n\nThis demo shows how jobs can move through a digital system: created in the office, assigned to the right technician, updated in the field and closed with a clear record of what was done.',
    bestFor:
      'Useful for trades businesses, maintenance companies, delivery operations and any team where work happens away from the office and needs to be tracked back to a central record.\n\nEspecially useful when supervisors spend significant time chasing status updates, or when job completion records are scattered across messages, emails and paper.',
    businessValue:
      'The office knows where every job stands without calling the field. Technicians have clear job details on their device without waiting for a message. Completed jobs leave a clean record — parts used, time spent, notes logged — that can feed into invoicing, reporting and planning.\n\nFor the business, this means faster job cycles, fewer missed steps and a professional record for every piece of work done.',
    highlights: [
      'Digital work orders',
      'Technician assignment',
      'Live job tracking',
      'Mobile-ready',
      'Parts and notes log',
      'Clear completion record',
    ],
  },
}

const AUTOMATION_HUB: ProjectMeta = {
  number: '04',
  topLabel: 'Workflow automation demo',
  title: 'Business Automation Hub',
  badge: 'Concept Demo',
  description:
    'A workflow and automation dashboard for businesses that want to stop spending time on repetitive tasks. Recurring processes — report generation, data updates, notifications, scheduled exports — run automatically on a schedule or trigger, freeing the team to focus on higher-value work.',
  features: [
    'Workflow automation',
    'Scheduled task triggers',
    'Report generation',
    'Data pipeline view',
    'Admin dashboard',
  ],
  tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Automation workflows'],
  accentColor: '#0A8CFF',
  details: {
    solves:
      'Many businesses have tasks that happen the same way every time — weekly reports pulled from a spreadsheet, monthly invoices generated manually, data copied from one system to another. These tasks are not complex, but they take time and attention every week.\n\nThis demo shows how those recurring steps can be turned into configured workflows that run on a schedule or in response to a trigger, without manual input each time.',
    bestFor:
      'Useful for businesses that have grown to the point where recurring admin work is taking a meaningful share of someone\'s time each week.\n\nEspecially useful for operations managers, finance teams and small business owners who find themselves doing the same manual steps on a regular cycle.',
    businessValue:
      'Recurring tasks run without someone having to remember to do them. The business gets consistent, timely outputs — reports, notifications, data updates — without the inconsistency that comes from manual processes.\n\nFor the team, automation removes the most tedious part of the working week and reduces the risk of a step being missed because someone was on leave or busy.',
    highlights: [
      'Scheduled workflows',
      'Automatic triggers',
      'Report generation',
      'Data pipeline',
      'Consistent outputs',
      'Reduced admin load',
    ],
  },
}

// ─── Details panel ───────────────────────────────────────────────────────────

function Paragraphs({ text, className }: { text: string; className?: string }) {
  const paras = text.split('\n\n').filter(Boolean)
  return (
    <>
      {paras.map((para, i) => (
        <p key={i} className={`${className ?? ''} ${i > 0 ? 'mt-3' : ''}`}>
          {para}
        </p>
      ))}
    </>
  )
}

function DetailsPanel({ details, accentColor }: { details: ProjectDetails; accentColor: string }) {
  return (
    <div
      className="rounded-3xl p-6 sm:p-8"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderTop: `2px solid ${accentColor}55`,
        boxShadow: `0 8px 48px rgba(0,0,0,0.40), 0 0 0 1px ${accentColor}0C`,
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mb-6 pb-6 border-b border-white/06">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${accentColor}BB` }}>
            What it solves
          </p>
          <Paragraphs text={details.solves} className="text-white/65 text-sm leading-relaxed" />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${accentColor}BB` }}>
            Best for
          </p>
          <Paragraphs text={details.bestFor} className="text-white/65 text-sm leading-relaxed" />
        </div>
      </div>

      <div className="mb-6 pb-6 border-b border-white/06">
        <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${accentColor}BB` }}>
          Business value
        </p>
        <Paragraphs text={details.businessValue} className="text-white/65 text-sm leading-relaxed" />
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: `${accentColor}BB` }}>
          Highlights
        </p>
        <div className="flex flex-wrap gap-2">
          {details.highlights.map((h) => (
            <span
              key={h}
              className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{
                color: accentColor,
                background: `${accentColor}14`,
                border: `1px solid ${accentColor}30`,
              }}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Reusable project showcase ────────────────────────────────────────────────

interface ShowcaseProps {
  data: ProjectMeta
  mockup: React.ReactNode
  reversed?: boolean
  isOpen: boolean
  onToggle: () => void
  background?: React.ReactNode
}

function ProjectShowcase({ data, mockup, reversed = false, isOpen, onToggle, background }: ShowcaseProps) {
  const { number, topLabel, title, badge, description, note, features, tech, accentColor, details } = data

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: EASE }}
      className="relative"
    >
      {background}

      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl font-black text-white/08 font-mono">{number}</span>
        <div className="h-px flex-1 bg-white/06" />
        <span className="text-white/30 text-xs uppercase tracking-widest font-medium">{topLabel}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">
        <div className={reversed ? 'lg:order-2' : 'lg:order-1'}>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">{title}</h3>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full border flex-shrink-0"
              style={{
                color: accentColor,
                background: `${accentColor}18`,
                borderColor: `${accentColor}35`,
              }}
            >
              {badge}
            </span>
          </div>

          <p className="text-white/58 text-base leading-relaxed mb-6">{description}</p>

          {note && (
            <div className="p-4 glass rounded-2xl mb-6" style={{ borderLeft: `2px solid ${accentColor}50` }}>
              <p className="text-white/45 text-sm leading-relaxed">
                <span className="text-white/65 font-medium">Note: </span>{note}
              </p>
            </div>
          )}

          <div className="mb-5">
            <p className="text-white/35 text-xs uppercase tracking-widest font-medium mb-3">Features</p>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <span key={f} className="text-xs text-white/65 bg-white/05 border border-white/08 px-3 py-1 rounded-full">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/35 text-xs uppercase tracking-widest font-medium mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full border"
                  style={{
                    color: accentColor,
                    background: `${accentColor}10`,
                    borderColor: `${accentColor}28`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onToggle}
              aria-expanded={isOpen}
              className="group inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm motion-reduce:transform-none"
              style={{
                background: accentColor,
                boxShadow: `0 8px 24px ${accentColor}30`,
              }}
            >
              {isOpen ? 'Hide Details' : 'View Details'}
              {isOpen
                ? <ChevronUp size={16} />
                : <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
              }
            </button>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 glass text-white/75 hover:text-white font-semibold px-6 py-3 rounded-full border border-white/12 hover:border-white/22 transition-all duration-300 text-sm"
            >
              <ExternalLink size={15} />
              Request Similar System
            </a>
          </div>
        </div>

        <div className={reversed ? 'lg:order-1' : 'lg:order-2'}>
          {mockup}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`details-${number}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.45, ease: EASE },
              opacity: { duration: 0.3 },
            }}
            style={{ overflow: 'hidden' }}
          >
            <div className="mt-8">
              <DetailsPanel details={details} accentColor={accentColor} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function FeaturedProject() {
  const [openPanel, setOpenPanel] = useState<string | null>(null)
  const toggle = (id: string) => setOpenPanel((prev) => (prev === id ? null : id))

  return (
    <section
      id="work"
      className="relative py-28 bg-black overflow-hidden"
      aria-label="Work and demos"
    >
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.09] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(100,206,251,0.7) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.09] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(10,140,255,0.7) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-4">
            <span className="w-4 h-px bg-[#64CEFB]" />
            Concept system demos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            From first enquiry{' '}
            <span className="text-gradient">to automated operations.</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            Four concept demos that follow the same business story — capturing more leads, booking customers,
            running jobs and handling the admin that comes with it.
          </p>
        </motion.div>

        {/* 01 — Smart Quote & Lead System */}
        <ProjectShowcase
          data={QUOTE_LEAD}
          mockup={<QuoteLeadMockup />}
          reversed={false}
          isOpen={openPanel === QUOTE_LEAD.number}
          onToggle={() => toggle(QUOTE_LEAD.number)}
          background={<QuoteLeadBackground />}
        />

        {/* 02 — Smart Booking & Customer Flow */}
        <div className="mt-24 lg:mt-28">
          <ProjectShowcase
            data={BOOKING}
            mockup={<BookingMockup />}
            reversed={true}
            isOpen={openPanel === BOOKING.number}
            onToggle={() => toggle(BOOKING.number)}
            background={<BookingBackground />}
          />
        </div>

        {/* 03 — Work Order & Field Service System */}
        <div className="mt-24 lg:mt-28">
          <ProjectShowcase
            data={FIELD_SERVICE}
            mockup={<FieldServiceMockup />}
            reversed={false}
            isOpen={openPanel === FIELD_SERVICE.number}
            onToggle={() => toggle(FIELD_SERVICE.number)}
            background={<FieldServiceBackground />}
          />
        </div>

        {/* 04 — Business Automation Hub */}
        <div className="mt-24 lg:mt-28">
          <ProjectShowcase
            data={AUTOMATION_HUB}
            mockup={<AutomationMockup />}
            reversed={true}
            isOpen={openPanel === AUTOMATION_HUB.number}
            onToggle={() => toggle(AUTOMATION_HUB.number)}
            background={<AutomationBackground />}
          />
        </div>
      </div>
    </section>
  )
}
