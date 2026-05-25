import { motion } from 'framer-motion'
import { MessageSquare, FileText, Code2, Rocket } from 'lucide-react'
import { processSteps } from '../data/processSteps'

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  FileText,
  Code2,
  Rocket,
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-28 bg-[#030006] overflow-hidden"
      aria-label="Process"
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(123,57,252,0.4) 0%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#7b39fc] text-xs tracking-widest uppercase font-semibold mb-4">
            <span className="w-4 h-px bg-[#7b39fc]" />
            How it works
            <span className="w-4 h-px bg-[#7b39fc]" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            A simple professional way{' '}
            <span className="text-gradient">to build your system.</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Each project is handled in clear steps so the scope stays realistic,
            the communication stays transparent and the final product solves the
            actual business problem.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {processSteps.map((step, idx) => {
            const Icon = iconMap[step.icon]
            const isLast = idx === processSteps.length - 1

            return (
              <motion.div
                key={step.number}
                variants={item}
                className="relative group"
              >
                {/* Connector line (desktop, between cards) */}
                {!isLast && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-5 h-px z-10"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(123,57,252,0.5), transparent)',
                    }}
                  />
                )}

                <div className="glass rounded-3xl p-6 h-full border border-white/06 group-hover:border-white/12 transition-all duration-300 group-hover:-translate-y-1">
                  {/* Number + icon */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#7b39fc]/15 flex items-center justify-center group-hover:bg-[#7b39fc]/22 transition-colors duration-300">
                      {Icon && <Icon size={20} className="text-[#7b39fc]" />}
                    </div>
                    <span className="text-3xl font-black text-white/08 font-mono tracking-tighter leading-none">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
