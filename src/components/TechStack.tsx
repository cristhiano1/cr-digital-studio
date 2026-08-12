import { motion } from 'framer-motion'
import { capabilities } from '../data/techStack'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
}

const row = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative py-28 bg-[#020C18] overflow-hidden"
      aria-label="Technical foundation"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 45% at 80% 20%, rgba(10,140,255,0.06) 0%, transparent 100%)',
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
            Technical Foundation
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-xl">
            Modern foundations for reliable business systems.
          </h2>
          <p className="mt-5 text-white/50 text-lg leading-relaxed max-w-2xl">
            Technology is selected around the system requirements — interface, backend logic,
            data, cloud deployment and integrations.
          </p>
        </motion.div>

        {/* Capability rows */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="border-y border-white/06 divide-y divide-white/06"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.area}
              variants={row}
              className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-x-12 py-8 lg:py-10"
            >
              {/* Area label */}
              <div className="mb-3 lg:mb-0">
                <p className="text-white/90 text-sm font-semibold">{cap.area}</p>
                <p className="text-white/35 text-xs mt-1 leading-snug">{cap.purpose}</p>
              </div>

              {/* Description and tags */}
              <div>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {cap.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/55 px-2.5 py-1 rounded-lg"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
