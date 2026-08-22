import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface AccordionItem {
  question: string
  answer: string
}

interface SolutionAccordionProps {
  items: AccordionItem[]
  id: string
}

export default function SolutionAccordion({ items, id }: SolutionAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="border-t border-white/[0.08]">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const panelId = `${id}-panel-${i}`
        const buttonId = `${id}-btn-${i}`
        return (
          <div key={i} className="border-b border-white/[0.08]">
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
  )
}
