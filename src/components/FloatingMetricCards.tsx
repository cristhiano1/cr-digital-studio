import { motion } from 'framer-motion'
import { LayoutDashboard, CalendarCheck, Users, Zap } from 'lucide-react'

interface CardData {
  icon: React.ElementType
  label: string
  sub: string
  color: string
  delay: number
  floatClass: string
  posClass: string
}

const cards: CardData[] = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard ready',
    sub: 'Live data view',
    color: '#7b39fc',
    delay: 0,
    floatClass: 'animate-float-slow',
    posClass: 'top-0 left-0',
  },
  {
    icon: CalendarCheck,
    label: 'Booking flow',
    sub: 'Live scheduling',
    color: '#64CEFB',
    delay: 0.25,
    floatClass: 'animate-float',
    posClass: 'top-14 right-0',
  },
  {
    icon: Users,
    label: 'CRM pipeline',
    sub: 'Leads & clients',
    color: '#7b39fc',
    delay: 0.5,
    floatClass: 'animate-float-delayed',
    posClass: 'top-[210px] left-6 xl:left-10',
  },
  {
    icon: Zap,
    label: 'Automation active',
    sub: 'Scheduled workflows',
    color: '#64CEFB',
    delay: 0.75,
    floatClass: 'animate-float-slow',
    posClass: 'bottom-0 right-4',
  },
]

function MetricCard({
  icon: Icon,
  label,
  sub,
  color,
}: Omit<CardData, 'delay' | 'floatClass' | 'posClass'>) {
  return (
    <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3 w-[205px] shadow-lg shadow-black/30">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}22` }}
      >
        <Icon size={18} style={{ color }} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-white text-sm font-semibold leading-tight truncate">{label}</p>
        <p className="text-white/45 text-xs mt-0.5 leading-tight">{sub}</p>
      </div>
      <div
        className="ml-auto w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
      />
    </div>
  )
}

export default function FloatingMetricCards() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="relative h-[420px] xl:h-[500px] pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Central ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(123,57,252,0.7) 0%, rgba(100,206,251,0.3) 50%, transparent 80%)',
        }}
      />

      {/* Decorative connecting line between cards */}
      <div
        className="absolute top-[80px] left-[100px] w-px h-[140px] opacity-15"
        style={{ background: 'linear-gradient(to bottom, rgba(123,57,252,0.8), transparent)' }}
      />
      <div
        className="absolute top-[90px] right-[110px] w-px h-[150px] opacity-15"
        style={{ background: 'linear-gradient(to bottom, rgba(100,206,251,0.8), transparent)' }}
      />

      {/* Cards — absolutely positioned within this relative container */}
      {cards.map(({ icon, label, sub, color, delay, floatClass, posClass }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: delay + 1.0, ease: 'easeOut' }}
          className={`absolute ${posClass} ${floatClass}`}
        >
          <MetricCard icon={icon} label={label} sub={sub} color={color} />
        </motion.div>
      ))}

      {/* Center decorative glass orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      />
    </motion.div>
  )
}
