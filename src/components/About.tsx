import { motion } from 'framer-motion'
import { Link } from 'react-router'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const trustSignals = [
  {
    label: 'Clear Scope',
    description:
      'The system is defined before development starts. What is being built, what is included and where the boundaries are — agreed before a line of code is written.',
  },
  {
    label: 'Direct Communication',
    description:
      'Technical questions go directly to the person doing the work. No account managers between you and the builder.',
  },
  {
    label: 'Built for Handover',
    description:
      'Code and systems are written to remain understandable and maintainable after launch — not only during it.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#030C1A] overflow-hidden"
      aria-label="About CR Digital Systems"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 15% 65%, rgba(100,206,251,0.05) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
            About
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Built with direct technical ownership.
          </h2>
          <p className="mt-5 text-white/50 text-base leading-relaxed max-w-2xl">
            CR Digital Systems builds practical websites and software systems for businesses,
            with direct ownership of both the business workflow and the technical implementation.
          </p>
        </motion.div>

        {/* Trust signals — condensed to 3 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8 mb-16"
        >
          {trustSignals.map((signal) => (
            <motion.div
              key={signal.label}
              variants={item}
              className="pl-4 border-l border-[#0A8CFF]/25"
            >
              <p className="text-white/85 text-sm font-semibold mb-2">{signal.label}</p>
              <p className="text-white/45 text-sm leading-relaxed">{signal.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Builder identity + About link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="pt-10 border-t border-white/[0.06]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: 'rgba(10,140,255,0.10)',
                border: '1px solid rgba(10,140,255,0.22)',
              }}
              aria-hidden="true"
            >
              <span className="text-[#0A8CFF] text-sm font-bold">C</span>
            </div>
            <div>
              <p className="text-white/80 text-sm font-semibold">Cristhian M.</p>
              <p className="text-white/55 text-xs mt-0.5">Cloud Developer Azure · Higher Vocational Education Diploma</p>
              <p className="text-white/45 text-xs mt-1">C#/.NET · Databases · Azure · Secure application development</p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed sm:ml-auto sm:text-right max-w-xs">
              Work directly with the person designing, building and deploying the system.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-[#64CEFB] text-sm font-medium hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030C1A] rounded"
          >
            About CR Digital Systems
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
