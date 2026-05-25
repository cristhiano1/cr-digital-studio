import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import VideoBackground from './VideoBackground'
import FloatingMetricCards from './FloatingMetricCards'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      <VideoBackground />

      {/* Two-column grid — constrained so it looks great at any width */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-10 2xl:px-14">
        <div className="grid lg:grid-cols-[1fr_0.72fr] xl:grid-cols-[1fr_0.65fr] gap-10 xl:gap-16 2xl:gap-20 items-center py-36 lg:py-28 xl:py-32">

          {/* ── Left column: text content ── */}
          <div>
            {/* Label */}
            <motion.div {...fadeUp(0.2)}>
              <span className="inline-flex items-center gap-2 text-white/55 text-sm tracking-widest uppercase mb-7 font-medium">
                <span className="w-4 h-px bg-white/40" />
                Sweden-based digital studio
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              {...fadeUp(0.38)}
              className="font-bold leading-[1.05] tracking-tight mb-6
                text-[clamp(2rem,8vw,3.5rem)]
                sm:text-[clamp(2.4rem,6vw,4rem)]
                lg:text-[clamp(2.8rem,4.2vw,5rem)]
                xl:text-[clamp(3rem,3.8vw,5.5rem)]"
            >
              <span className="text-white block break-words">Turn Manual Work</span>
              <span className="shine-text block break-words">Into Web Systems.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.56)}
              className="text-white/58 text-base sm:text-lg xl:text-xl leading-relaxed max-w-xl mb-5"
            >
              We build practical web applications, dashboards, booking systems,
              CRM tools and automation workflows that help small businesses
              organize data, save time and work smarter.
            </motion.p>

            {/* Trust line */}
            <motion.p
              {...fadeUp(0.68)}
              className="text-white/55 text-xs sm:text-sm tracking-wide mb-10 leading-relaxed"
            >
              <span className="hidden sm:inline">
                Full-stack development&nbsp;&nbsp;•&nbsp;&nbsp;Azure cloud tools&nbsp;&nbsp;•&nbsp;&nbsp;Automation&nbsp;&nbsp;•&nbsp;&nbsp;Dashboards&nbsp;&nbsp;•&nbsp;&nbsp;Internal systems
              </span>
              <span className="sm:hidden">
                Full-stack dev&nbsp;•&nbsp;Azure cloud&nbsp;•&nbsp;Automation&nbsp;•&nbsp;Dashboards
              </span>
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.82)} className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 bg-[#7b39fc] hover:bg-[#6a2ee0] text-white font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base"
              >
                View Services
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 glass text-white/85 hover:text-white font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:bg-white/10 border border-white/14 text-sm sm:text-base"
              >
                <Play size={15} className="fill-current opacity-75" />
                Request a Demo
              </a>
            </motion.div>
          </div>

          {/* ── Right column: floating cards composition ── */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-[420px] xl:max-w-[460px]">
              <FloatingMetricCards />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/25 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
