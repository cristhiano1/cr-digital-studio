import { motion } from 'framer-motion'
import { processSteps } from '../data/processSteps'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-28 bg-[#020B14] overflow-hidden"
      aria-label="How we work"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 40% at 85% 15%, rgba(10,140,255,0.07) 0%, transparent 100%)',
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
          className="mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
            How it works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-xl">
            From first conversation<br className="hidden sm:block" /> to working system.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line — runs full height of the timeline wrapper */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-white/06"
            aria-hidden="true"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {processSteps.map((step, idx) => {
              const isLast = idx === processSteps.length - 1
              return (
                <motion.div
                  key={step.number}
                  variants={item}
                  className={`relative grid grid-cols-[2.5rem_1fr] gap-x-6 lg:gap-x-10 ${isLast ? '' : 'pb-12 lg:pb-14'}`}
                >
                  {/* Number circle — sits above the connector line */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: '#020B14',
                        border: '1px solid rgba(10,140,255,0.30)',
                        boxShadow: '0 0 0 5px #020B14',
                      }}
                    >
                      <span
                        className="text-[11px] font-mono font-bold"
                        style={{ color: '#0A8CFF' }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-x-10 pt-1.5">
                    <div>
                      <h3 className="text-white font-semibold text-lg leading-snug">
                        {step.title}
                      </h3>
                    </div>
                    <div className="mt-3 lg:mt-0">
                      <p className="text-white/50 text-sm leading-relaxed">
                        {step.description}
                      </p>
                      <ul
                        className="mt-4 space-y-2"
                        aria-label={`${step.title} outcomes`}
                      >
                        {step.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex gap-3 text-white/35 text-sm leading-relaxed"
                          >
                            <span
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: 'rgba(10,140,255,0.50)' }}
                              aria-hidden="true"
                            >
                              ·
                            </span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
