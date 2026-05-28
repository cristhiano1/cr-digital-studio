import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Layers, Server, Globe, Database, Activity, type LucideIcon } from 'lucide-react'
import { techStack } from '../data/techStack'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const TECH_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4'

// ─── Category definitions ─────────────────────────────────────────────────────

interface CategoryDef {
  key: string
  label: string
  Icon: LucideIcon
  accent: string
  fullWidth?: boolean
}

const CATEGORIES: CategoryDef[] = [
  { key: 'frontend',   label: 'Frontend',                Icon: Layers,   accent: '#64CEFB'              },
  { key: 'backend',    label: 'Backend',                 Icon: Server,   accent: '#7b39fc'              },
  { key: 'devops',     label: 'Cloud, DevOps & Hosting', Icon: Globe,    accent: '#0078D4', fullWidth: true },
  { key: 'database',   label: 'Database',                Icon: Database, accent: '#64CEFB'              },
  { key: 'monitoring', label: 'Monitoring & Services',   Icon: Activity, accent: '#0ea5e9'              },
]

// ─── Animation variants ───────────────────────────────────────────────────────

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

// ─── Section-scoped video + atmosphere background ─────────────────────────────

function TechStackBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const video = videoRef.current
    if (!video || prefersReducedMotion) return
    video.play().catch(() => {})
  }, [prefersReducedMotion])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* ① Dark base — neutral near-black with a cool blue tint */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #000C1A 0%, #030010 50%, #000000 100%)' }}
      />

      {/* ② Section-scoped background video */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          src={TECH_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.34 }}
        />
      )}

      {/* ③ Readability overlay — heavier at top/bottom, open in the middle */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.22) 28%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.72) 100%)',
        }}
      />

      {/* ④ Cyan atmospheric haze — upper half, "lit side" of the globe */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          left: '-5%',
          width: '65%',
          height: '70%',
          background:
            'radial-gradient(ellipse at 45% 35%, rgba(100,206,251,0.14) 0%, rgba(100,206,251,0.05) 40%, transparent 70%)',
        }}
      />

      {/* ⑤ Purple depth — lower right, shadow side */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%',
          right: '-5%',
          width: '60%',
          height: '65%',
          background:
            'radial-gradient(ellipse at 55% 60%, rgba(123,57,252,0.16) 0%, rgba(123,57,252,0.06) 38%, transparent 68%)',
        }}
      />

      {/* ⑥ Central globe core — the planet/world silhouette */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '900px',
          height: '900px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 40% 36%, rgba(100,206,251,0.14) 0%, rgba(100,206,251,0.065) 22%, rgba(0,120,212,0.04) 44%, transparent 64%)',
        }}
      />

      {/* ⑦ Outer orbital ring */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '990px',
          height: '990px',
          borderRadius: '50%',
          border: '1px solid rgba(100,206,251,0.10)',
        }}
      />

      {/* ⑧ Mid orbital ring */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '710px',
          height: '710px',
          borderRadius: '50%',
          border: '1px solid rgba(123,57,252,0.09)',
        }}
      />

      {/* ⑨ Inner orbital ring */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          border: '1px solid rgba(100,206,251,0.07)',
        }}
      />

      {/* ⑩ Left edge ambient — deep purple */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-200px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(123,57,252,0.13) 0%, transparent 70%)',
        }}
      />

      {/* ⑪ Right edge ambient — soft azure */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-200px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(100,206,251,0.11) 0%, transparent 70%)',
        }}
      />

      {/* ⑫ Top edge fade — blend into previous section */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%)' }}
      />

      {/* ⑬ Bottom edge fade — blend into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 100%)' }}
      />

    </div>
  )
}

// ─── Category card ────────────────────────────────────────────────────────────

function CategoryCard({ def }: { def: CategoryDef }) {
  const { Icon, label, accent, fullWidth } = def
  const items = techStack.filter((t) => t.category === def.key)

  return (
    <motion.div
      variants={cardVariant}
      className={`group relative rounded-3xl overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-2${
        fullWidth ? ' sm:col-span-2' : ''
      }`}
      style={{
        background: 'rgba(255, 255, 255, 0.065)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid rgba(255, 255, 255, 0.11)',
        boxShadow:
          '0 4px 32px rgba(0, 0, 0, 0.40), inset 0 1px 0 rgba(255,255,255,0.10)',
      }}
    >
      {/* Top accent stripe — strong, fades right */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background: `linear-gradient(90deg, ${accent}CC 0%, ${accent}55 42%, transparent 72%)`,
        }}
      />

      {/* Hover radial glow — from top, expands on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 95% 65% at 50% -8%, ${accent}22 0%, transparent 65%)`,
        }}
      />

      {/* Hover inset ring — colored border glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}38` }}
      />

      {/* Hover drop shadow amplifier */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -z-10"
        style={{ boxShadow: `0 20px 60px ${accent}18, 0 8px 24px rgba(0,0,0,0.5)` }}
      />

      {/* Content */}
      <div className="p-6">

        {/* Card header */}
        <div className="flex items-center gap-3 mb-5">

          {/* Icon container */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{
              background: `${accent}26`,
              boxShadow: `0 0 0 1px ${accent}25, 0 0 20px ${accent}1E`,
            }}
          >
            <Icon size={17} style={{ color: accent }} />
          </div>

          {/* Category label */}
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ color: 'rgba(255,255,255,0.58)' }}
          >
            {label}
          </span>

          {/* Item count badge */}
          <span
            className="ml-auto text-[10px] font-medium tabular-nums px-2 py-0.5 rounded-full"
            style={{
              color: 'rgba(255,255,255,0.28)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {items.length}
          </span>
        </div>

        {/* Technology pills */}
        <div className="flex flex-wrap gap-2">
          {items.map((tech) => (
            <span
              key={tech.name}
              className="text-[11.5px] font-medium transition-all duration-200 cursor-default select-none"
              style={{
                padding: '5px 12px',
                borderRadius: '999px',
                background: `${accent}11`,
                border: `1px solid ${accent}28`,
                color: 'rgba(255,255,255,0.68)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'rgba(255,255,255,0.92)'
                el.style.borderColor = `${accent}50`
                el.style.background = `${accent}1A`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'rgba(255,255,255,0.68)'
                el.style.borderColor = `${accent}28`
                el.style.background = `${accent}11`
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative py-32 overflow-hidden"
      style={{ background: '#020008' }}
      aria-label="Tech stack"
    >

      {/* Rich atmospheric background + section video */}
      <TechStackBackground />

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading area ambient glow */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 -top-10 pointer-events-none"
          style={{
            width: '860px',
            height: '340px',
            background:
              'radial-gradient(ellipse 75% 100% at 50% 0%, rgba(100,206,251,0.11) 0%, transparent 72%)',
          }}
        />

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#64CEFB]" />
            Technology
            <span className="w-4 h-px bg-[#64CEFB]" />
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Modern tools for{' '}
            <span className="text-gradient">real full-stack and cloud-ready systems.</span>
          </h2>

          <p className="text-white/52 text-lg leading-relaxed mb-7">
            We use practical full-stack and cloud tools to build web applications with clean
            interfaces, secure APIs, databases, deployment workflows and business-ready
            integrations.
          </p>

          {/* Technology count badge */}
          <span
            className="inline-flex items-center gap-2 text-[11px] font-medium px-4 py-2 rounded-full"
            style={{
              color: 'rgba(255,255,255,0.42)',
              background: 'rgba(255,255,255,0.055)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: '#64CEFB', boxShadow: '0 0 6px #64CEFB88' }}
            />
            {techStack.length} technologies · {CATEGORIES.length} categories
          </span>
        </motion.div>

        {/* Category grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {CATEGORIES.map((def) => (
            <CategoryCard key={def.key} def={def} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
