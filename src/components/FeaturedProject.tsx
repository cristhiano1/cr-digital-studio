import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { QuoteLeadMockup } from './projects/QuoteLeadDemo'
import { BookingMockup } from './projects/BookingDemo'
import { FieldServiceMockup } from './projects/FieldServiceDemo'
import { AutomationMockup } from './projects/AutomationDemo'
import ConceptMedia from './projects/ConceptMedia'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface ProjectMeta {
  number: string
  shortLabel: string
  topLabel: string
  title: string
  description: string
  note?: string
  highlights: string[]
  accentColor: string
  videoSrc?: string
  videoPoster?: string
}

const PROJECTS: ProjectMeta[] = [
  {
    number: '01',
    shortLabel: 'Quote & Lead',
    topLabel: 'Lead capture demo',
    title: 'Smart Quote & Lead System',
    description:
      'Service businesses often lose enquiries to slow responses and manual follow-up. This system captures leads through a structured form, sorts them automatically and triggers follow-up to help reduce missed enquiries.',
    note: 'Concept system demo. No live client data. All names and figures are illustrative.',
    highlights: [
      'Structured intake form',
      'Lead pipeline view',
      'Auto follow-up emails',
      'Enquiry sorting',
      'Team routing',
      'Reduce missed enquiries',
    ],
    accentColor: '#0A8CFF',
  },
  {
    number: '02',
    shortLabel: 'Booking',
    topLabel: 'Booking flow demo',
    title: 'Smart Booking & Customer Flow',
    description:
      'Appointment-based businesses spend hours on scheduling calls, manual reminders and shared calendars. This system lets customers self-book, sends automated reminders and gives them a portal to manage their own appointments.',
    highlights: [
      'Self-serve booking',
      'Automated reminders',
      'Customer portal',
      'Payment collection',
      'Booking conflict prevention',
      'Works outside business hours',
    ],
    accentColor: '#64CEFB',
  },
  {
    number: '03',
    shortLabel: 'Field Service',
    topLabel: 'Field service demo',
    title: 'Work Order & Field Service System',
    description:
      'Field service teams often coordinate through phone calls and paper dockets with no central view of what is happening. This system moves jobs through a digital workflow — created in the office, assigned to technicians and updated in the field.',
    note: 'Concept system demo. Illustrates internal workflow digitisation for field service operations.',
    highlights: [
      'Digital work orders',
      'Technician assignment',
      'Live job tracking',
      'Mobile-ready',
      'Parts and notes log',
      'Clean completion record',
    ],
    accentColor: '#168CFF',
  },
  {
    number: '04',
    shortLabel: 'Automation',
    topLabel: 'Workflow automation demo',
    title: 'Business Automation Hub',
    description:
      'Recurring tasks — weekly reports, monthly exports, data syncs — consume staff time because there is no system to handle them. This hub turns those repeating steps into configured workflows that run on a schedule or trigger without manual input.',
    highlights: [
      'Scheduled workflows',
      'Automatic triggers',
      'Report generation',
      'Data pipeline',
      'Consistent outputs',
      'Reduced admin load',
    ],
    accentColor: '#0A8CFF',
  },
]

function renderMockup(index: number): React.ReactNode {
  switch (index) {
    case 0: return <QuoteLeadMockup />
    case 1: return <BookingMockup />
    case 2: return <FieldServiceMockup />
    case 3: return <AutomationMockup />
    default: return <QuoteLeadMockup />
  }
}

export default function FeaturedProject() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = PROJECTS[activeIndex]
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const goTo = (i: number) => {
    setActiveIndex(i)
    tabRefs.current[i]?.focus()
  }

  const prev = () => setActiveIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length)
  const next = () => setActiveIndex((i) => (i + 1) % PROJECTS.length)

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const count = PROJECTS.length
    if (e.key === 'ArrowRight')      { e.preventDefault(); goTo((activeIndex + 1) % count) }
    else if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo((activeIndex - 1 + count) % count) }
    else if (e.key === 'Home')       { e.preventDefault(); goTo(0) }
    else if (e.key === 'End')        { e.preventDefault(); goTo(count - 1) }
  }

  return (
    <section
      id="work"
      className="relative py-28 bg-black overflow-hidden"
      aria-label="Work and demos"
    >
      {/* Background glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.09] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(100,206,251,0.7) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.09] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(10,140,255,0.7) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-4">
            <span className="w-4 h-px bg-[#64CEFB]" aria-hidden="true" />
            Concept system demos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            From first enquiry{' '}
            <span className="text-gradient">to automated operations.</span>
          </h2>
          <p className="text-white/55 text-base leading-relaxed max-w-2xl">
            Four concept demos that follow the same business story — capturing leads, booking
            customers, running jobs and handling the admin that comes with it.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div
          className="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8 -mx-1 px-1"
          role="tablist"
          aria-label="Concept demos"
          onKeyDown={handleTabKeyDown}
        >
          {PROJECTS.map((p, i) => (
            <button
              key={p.number}
              ref={(el) => { tabRefs.current[i] = el }}
              role="tab"
              id={`concept-tab-${p.number}`}
              aria-selected={i === activeIndex}
              aria-controls="concept-panel"
              tabIndex={i === activeIndex ? 0 : -1}
              onClick={() => goTo(i)}
              className={`
                flex-shrink-0 flex flex-col items-start gap-0.5 px-4 py-3 rounded-xl border
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8CFF]
                focus-visible:ring-offset-2 focus-visible:ring-offset-black
                ${i === activeIndex
                  ? 'border-[#0A8CFF]/30 bg-[#0A8CFF]/[0.08]'
                  : 'border-white/[0.06] bg-transparent hover:border-white/[0.12] hover:bg-white/[0.025]'
                }
              `}
            >
              <span
                className="text-[11px] font-bold font-mono leading-none"
                style={{ color: i === activeIndex ? active.accentColor : 'rgba(255,255,255,0.22)' }}
              >
                {p.number}
              </span>
              <span
                className={`text-sm font-medium whitespace-nowrap leading-snug mt-0.5 ${
                  i === activeIndex ? 'text-white' : 'text-white/45'
                }`}
              >
                {p.shortLabel}
              </span>
            </button>
          ))}
        </div>

        {/* Viewer panel */}
        <div
          id="concept-panel"
          role="tabpanel"
          aria-labelledby={`concept-tab-${active.number}`}
          aria-live="polite"
        >
          <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="grid lg:grid-cols-[3fr_2fr] gap-8 xl:gap-12 items-start"
            >
              {/* Media column */}
              <ConceptMedia videoSrc={active.videoSrc} videoPoster={active.videoPoster}>
                {renderMockup(activeIndex)}
              </ConceptMedia>

              {/* Copy column */}
              <div className="lg:sticky lg:top-24">
                <span
                  className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1 rounded-full border"
                  style={{
                    color: active.accentColor,
                    background: `${active.accentColor}12`,
                    borderColor: `${active.accentColor}30`,
                  }}
                >
                  Concept Demo
                </span>

                <p className="text-white/30 text-xs uppercase tracking-widest font-medium mb-1.5">
                  {active.topLabel}
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-4">
                  {active.title}
                </h3>

                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  {active.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {active.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        color: active.accentColor,
                        background: `${active.accentColor}12`,
                        border: `1px solid ${active.accentColor}25`,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {active.note && (
                  <p className="text-white/30 text-xs leading-relaxed border-l border-white/10 pl-3 mb-6">
                    {active.note}
                  </p>
                )}

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5 motion-reduce:transform-none"
                  style={{
                    background: active.accentColor,
                    boxShadow: `0 4px 16px ${active.accentColor}30`,
                  }}
                >
                  Request Similar System
                </a>
              </div>
            </motion.div>

          {/* Prev / counter / Next */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
            <button
              onClick={prev}
              aria-label="Previous concept demo"
              className="inline-flex items-center gap-1.5 text-white/45 hover:text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <ChevronLeft size={16} aria-hidden="true" />
              Prev
            </button>

            <span className="text-white/30 text-sm font-mono tracking-widest">
              {String(activeIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
            </span>

            <button
              onClick={next}
              aria-label="Next concept demo"
              className="inline-flex items-center gap-1.5 text-white/45 hover:text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Next
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
