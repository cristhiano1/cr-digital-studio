import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { solutions } from '../data/services'
import type { Solution } from '../data/services'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

function SolutionsBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute"
        style={{
          top: '-5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '840px',
          height: '380px',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(10,140,255,0.14) 0%, rgba(10,140,255,0.04) 48%, transparent 72%)',
        }}
      />

      <div
        className="absolute"
        style={{
          bottom: '-8%',
          right: '-5%',
          width: '500px',
          height: '400px',
          background:
            'radial-gradient(ellipse at 65% 70%, rgba(100,206,251,0.10) 0%, transparent 65%)',
        }}
      />

      <div
        className="absolute"
        style={{
          top: '25%',
          left: '-5%',
          width: '340px',
          height: '420px',
          background:
            'radial-gradient(ellipse at 25% 50%, rgba(22,140,255,0.07) 0%, transparent 68%)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.45) 0%, transparent 100%)' }}
      />
    </div>
  )
}

function SolutionCard({ solution }: { solution: Solution }) {
  const { icon: Icon, accent } = solution

  return (
    <motion.div
      variants={cardVariant}
      className="group relative rounded-3xl cursor-default transition-all duration-300 hover:-translate-y-1.5 motion-reduce:transform-none motion-reduce:transition-none"
      style={{
        background: 'rgba(4,12,20,0.58)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)',
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[1px] rounded-t-3xl pointer-events-none"
        style={{
          background: `linear-gradient(90deg, ${accent}CC 0%, ${accent}44 50%, transparent 76%)`,
        }}
      />

      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 95% 60% at 50% -5%, ${accent}1A 0%, transparent 68%)`,
        }}
      />

      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}30` }}
      />

      <div className="relative p-7 sm:p-8">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none"
          style={{
            background: `${accent}18`,
            border: `1px solid ${accent}26`,
            boxShadow: `0 0 20px ${accent}14`,
          }}
        >
          <Icon size={20} style={{ color: accent }} strokeWidth={1.7} />
        </div>

        <h3 className="text-white font-semibold text-lg leading-snug mb-3">
          {solution.title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {solution.description}
        </p>

        <ul className="space-y-2.5">
          {solution.capabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-2.5 text-white/62 text-[13px] leading-snug">
              <Check
                size={14}
                className="mt-0.5 shrink-0"
                style={{ color: accent }}
                strokeWidth={2.2}
              />
              <span>{cap}</span>
            </li>
          ))}
        </ul>

        <Link
          to={solution.route}
          className="inline-flex items-center gap-1.5 text-sm font-medium mt-6 transition-colors duration-200 hover:brightness-125"
          style={{ color: accent }}
        >
          Explore solution
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-[#030B14] overflow-hidden"
      aria-label="Solutions"
    >
      <SolutionsBackground />

      <div className="relative max-w-7xl mx-auto px-6" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-4">
            <span className="w-4 h-px bg-[#64CEFB]" />
            Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Digital systems built around{' '}
            <span className="text-gradient">real business problems.</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            From first enquiry to daily operations, CR Digital Systems builds
            practical software that helps businesses win more work, reduce manual
            effort and stay in control.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
