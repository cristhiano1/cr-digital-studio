import { motion } from 'framer-motion'
import { ArrowRight, LayoutGrid, CheckCircle2 } from 'lucide-react'
import VideoBackground from './VideoBackground'
import FloatingMetricCards from './FloatingMetricCards'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

const proofPoints = [
  'Modern websites that convert',
  'Booking, quote & lead systems',
  'Automation & internal tools',
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="CR Digital Systems"
    >
      <VideoBackground />

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-6 lg:px-10 2xl:px-14">
        <div className="grid lg:grid-cols-[1fr_0.78fr] xl:grid-cols-[1fr_0.70fr] gap-10 xl:gap-16 2xl:gap-20 items-center py-36 lg:py-28 xl:py-32">
          <div>
            <motion.div {...fadeUp(0.18)}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#64CEFB]/20 bg-[#64CEFB]/[0.06] px-3.5 py-2 text-[11px] sm:text-xs tracking-[0.18em] uppercase text-[#9EDFFF] mb-7 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64CEFB] shadow-[0_0_12px_rgba(100,206,251,0.75)]" />
                Websites · Systems · Automation
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.34)}
              className="font-bold leading-[1.02] tracking-[-0.045em] mb-6 text-[clamp(2.5rem,9vw,3rem)] sm:text-[clamp(2.75rem,6.5vw,3.75rem)] lg:text-[clamp(3.75rem,5.8vw,4.25rem)] xl:text-[clamp(4.5rem,5.2vw,5rem)]"
            >
              <span className="text-white block">Websites and systems</span>
              <span className="shine-text block">built to move business forward.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.5)}
              className="text-white/64 text-base sm:text-lg xl:text-xl leading-relaxed max-w-2xl mb-7"
            >
              CR Digital Systems builds professional websites, quote and booking flows,
              internal tools and automation that help small and growing businesses win more
              enquiries, reduce manual work and operate with better control.
            </motion.p>

            <motion.div {...fadeUp(0.62)} className="grid sm:grid-cols-3 gap-3 max-w-2xl mb-9">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-white/58 text-xs sm:text-sm">
                  <CheckCircle2 size={15} className="text-[#64CEFB] shrink-0" strokeWidth={1.8} />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.76)} className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-[#64CEFB]/30 bg-[#0A8CFF] hover:bg-[#1598ff] text-white font-semibold px-7 py-4 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_14px_45px_rgba(10,140,255,0.20)] text-sm sm:text-base"
              >
                Get a Free Audit
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white/[0.045] text-white/88 hover:text-white font-semibold px-7 py-4 transition-all duration-300 hover:bg-white/[0.075] border border-white/10 text-sm sm:text-base"
              >
                <LayoutGrid size={16} className="opacity-80" strokeWidth={1.8} />
                See Example Systems
              </a>
            </motion.div>

            <motion.p {...fadeUp(0.9)} className="mt-7 text-xs sm:text-sm text-white/55 max-w-xl leading-relaxed">
              Clear scope, direct communication and software designed around the way your business actually works.
            </motion.p>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-[440px] xl:max-w-[480px]">
              <FloatingMetricCards />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-[#64CEFB]/30 to-transparent" />
      </motion.div>
    </section>
  )
}
