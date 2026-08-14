import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '../data/faqItems'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="faq"
      className="relative py-28 bg-[#020B14] overflow-hidden"
      aria-label="Frequently asked questions"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 15% 50%, rgba(10,140,255,0.05) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
              Common Questions
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              What businesses usually want to know.
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              You do not need to arrive with a finished specification. The useful starting
              point is understanding what is slowing the business down.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            <div className="border-t border-white/[0.08]">
              {faqItems.map((item, i) => {
                const isOpen = openIndex === i
                const panelId = `faq-panel-${item.id}`
                const buttonId = `faq-btn-${item.id}`
                return (
                  <div key={item.id} className="border-b border-white/[0.08]">
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="w-full flex items-start justify-between gap-4 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020B14] rounded-sm"
                      >
                        <span className="text-white/90 text-sm font-semibold leading-snug group-hover:text-white transition-colors duration-200">
                          {item.question}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`flex-shrink-0 mt-0.5 text-[#0A8CFF]/70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    <div id={panelId}>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: EASE }}
                            style={{ overflow: 'hidden' }}
                          >
                            <p className="text-white/55 text-sm leading-relaxed pb-5 pr-6">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
