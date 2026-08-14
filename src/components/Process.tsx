import { motion } from 'framer-motion'
import { processSteps } from '../data/processSteps'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
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
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
            How we work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            From business problem<br className="hidden sm:block" /> to working system.
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            Every project starts by understanding the workflow before deciding what should be built.
            Scope is defined early, progress stays visible, and launch is treated as the start of
            improvement rather than the end of the project.
          </p>
        </motion.div>

        {/* ── DESKTOP (lg+): horizontal four-column progression ── */}
        <motion.div
          className="hidden lg:block"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="relative grid grid-cols-4 gap-8">
            {/* Connector line spanning all four circles */}
            <div
              className="absolute top-4 h-px bg-white/[0.08]"
              style={{ left: '16px', right: '16px' }}
              aria-hidden="true"
            />

            {processSteps.map((step, i) => {
              const isFeatured = i === 2
              return (
                <motion.div key={step.number} variants={fadeUp} className="relative flex flex-col">
                  {/* Circle */}
                  <div
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center mb-8 flex-shrink-0 border ${
                      isFeatured ? 'border-[#0A8CFF]/45' : 'border-white/[0.12]'
                    }`}
                    style={{ background: '#020B14' }}
                  >
                    <span
                      className={`text-[11px] font-mono font-bold ${
                        isFeatured ? 'text-[#0A8CFF]' : 'text-[#0A8CFF]/55'
                      }`}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-white text-sm font-semibold mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">
                    {step.description}
                  </p>
                  <div className="flex items-baseline gap-2 mt-auto">
                    <span className="text-[9px] uppercase tracking-[0.15em] font-semibold text-white/50 flex-shrink-0">
                      Output
                    </span>
                    <span className="text-white/50 text-xs leading-snug">{step.output}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── MOBILE (< lg): vertical progression ── */}
        <motion.div
          className="lg:hidden relative"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Vertical connector line */}
          <div
            className="absolute w-px bg-white/[0.08]"
            style={{ left: '14px', top: '14px', bottom: '14px' }}
            aria-hidden="true"
          />

          <div className="flex flex-col">
            {processSteps.map((step, i, arr) => {
              const isLast = i === arr.length - 1
              const isFeatured = i === 2
              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className={`relative flex gap-5 ${isLast ? '' : 'pb-10'}`}
                >
                  {/* Circle */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border ${
                      isFeatured ? 'border-[#0A8CFF]/45' : 'border-white/[0.12]'
                    }`}
                    style={{ background: '#020B14' }}
                  >
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        isFeatured ? 'text-[#0A8CFF]' : 'text-[#0A8CFF]/55'
                      }`}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 pb-1">
                    <h3 className="text-white text-base font-semibold mb-2.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-3.5">
                      {step.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[9px] uppercase tracking-[0.15em] font-semibold text-white/50 flex-shrink-0">
                        Output
                      </span>
                      <span className="text-white/50 text-xs">{step.output}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
