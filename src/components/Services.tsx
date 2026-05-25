import { motion } from 'framer-motion'
import {
  AppWindow,
  UsersRound,
  CalendarClock,
  LayoutDashboard,
  Workflow,
  Sparkles,
  ShieldCheck,
  CloudCog,
  type LucideIcon,
} from 'lucide-react'
import { services } from '../data/services'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

// ─── Icon + accent mapping (keyed by service id) ──────────────────────────────

interface ServiceDef {
  icon: LucideIcon
  accent: string
}

const SERVICE_DEFS: Record<string, ServiceDef> = {
  'web-apps':     { icon: AppWindow,       accent: '#64CEFB' },
  'crm':          { icon: UsersRound,      accent: '#38bdf8' },
  'booking':      { icon: CalendarClock,   accent: '#818cf8' },
  'dashboards':   { icon: LayoutDashboard, accent: '#64CEFB' },
  'automation':   { icon: Workflow,        accent: '#7b39fc' },
  'ai-tools':     { icon: Sparkles,        accent: '#a78bfa' },
  'admin-panels': { icon: ShieldCheck,     accent: '#7b39fc' },
  'cloud':        { icon: CloudCog,        accent: '#0078D4' },
}

// ─── Animation variants ───────────────────────────────────────────────────────

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

// ─── Section atmosphere background ───────────────────────────────────────────
// Sits at z-0. Section itself carries the dark base colour so no
// opaque absolute-inset-0 div is needed here — only atmosphere layers.

function ServicesBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Purple bloom — top center */}
      <div
        className="absolute"
        style={{
          top: '-5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '840px',
          height: '380px',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(123,57,252,0.16) 0%, rgba(123,57,252,0.05) 48%, transparent 72%)',
        }}
      />

      {/* Cyan accent — bottom right */}
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

      {/* Purple bleed — left mid */}
      <div
        className="absolute"
        style={{
          top: '25%',
          left: '-5%',
          width: '340px',
          height: '420px',
          background:
            'radial-gradient(ellipse at 25% 50%, rgba(123,57,252,0.08) 0%, transparent 68%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Top edge fade */}
      <div
        className="absolute top-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 100%)' }}
      />

      {/* Bottom edge fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.45) 0%, transparent 100%)' }}
      />
    </div>
  )
}

// ─── Service card ─────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: { id: string; title: string; description: string } }) {
  const def = SERVICE_DEFS[service.id]
  if (!def) return null
  const { icon: Icon, accent } = def

  return (
    <motion.div
      variants={cardVariant}
      className="group relative rounded-3xl cursor-default transition-all duration-300 hover:-translate-y-2"
      style={{
        background: 'rgba(255,255,255,0.055)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.09)',
      }}
    >
      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] rounded-t-3xl pointer-events-none"
        style={{
          background: `linear-gradient(90deg, ${accent}CC 0%, ${accent}44 50%, transparent 76%)`,
        }}
      />

      {/* Hover radial glow — blooms from top on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 95% 60% at 50% -5%, ${accent}1E 0%, transparent 68%)`,
        }}
      />

      {/* Hover inset border glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}38` }}
      />

      {/* Card content */}
      <div className="relative p-6">

        {/* Icon container */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
          style={{
            background: `${accent}1E`,
            border: `1px solid ${accent}2A`,
            boxShadow: `0 0 0 1px ${accent}14, 0 0 20px ${accent}1A`,
          }}
        >
          <Icon size={19} style={{ color: accent }} strokeWidth={1.75} />
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-[15px] leading-snug mb-2.5">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed">
          {service.description}
        </p>

      </div>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-[#050008] overflow-hidden"
      aria-label="Services"
    >
      {/* Atmosphere background — z-0, behind all content */}
      <ServicesBackground />

      {/* All content — z-10, guaranteed above background */}
      <div className="relative max-w-7xl mx-auto px-6" style={{ zIndex: 10 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#7b39fc] text-xs tracking-widest uppercase font-semibold mb-4">
            <span className="w-4 h-px bg-[#7b39fc]" />
            What We Build
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Digital systems built around{' '}
            <span className="text-gradient">real business problems.</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            From manual workflows to custom web systems, CR Digital Studio helps
            small businesses replace scattered tools, spreadsheets and repetitive
            tasks with clean, practical software.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
