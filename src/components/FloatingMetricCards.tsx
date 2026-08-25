import { motion } from 'framer-motion'
import { ClipboardList, CalendarCheck2, Users2, Workflow } from 'lucide-react'

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
    icon: ClipboardList,
    label: 'New quote request',
    sub: 'Project details captured',
    color: '#0A8CFF',
    delay: 0,
    floatClass: 'animate-float-slow',
    posClass: 'top-0 left-0',
  },
  {
    icon: CalendarCheck2,
    label: 'Booking confirmed',
    sub: 'Reminder scheduled',
    color: '#64CEFB',
    delay: 0.25,
    floatClass: 'animate-float',
    posClass: 'top-14 right-0',
  },
  {
    icon: Users2,
    label: 'Lead followed up',
    sub: 'Pipeline kept organised',
    color: '#168CFF',
    delay: 0.5,
    floatClass: 'animate-float-delayed',
    posClass: 'top-[210px] left-6 xl:left-10',
  },
  {
    icon: Workflow,
    label: 'Admin automated',
    sub: 'Less repetitive work',
    color: '#64CEFB',
    delay: 0.75,
    floatClass: 'animate-float-slow',
    posClass: 'bottom-0 right-4',
  },
]

function MetricCard({ icon: Icon, label, sub, color }: Omit<CardData, 'delay' | 'floatClass' | 'posClass'>) {
  return (
    <div className="rounded-2xl border border-white/[0.085] bg-[#06101B]/75 backdrop-blur-xl px-4 py-3 flex items-center gap-3 w-[230px] shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}18`, border: `1px solid ${color}26` }}
      >
        <Icon size={18} style={{ color }} strokeWidth={1.8} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-white text-[13px] font-semibold leading-tight truncate">{label}</p>
        <p className="text-white/48 text-[11px] mt-1 leading-tight">{sub}</p>
      </div>
      <div
        className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
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
      <div className="absolute top-[90px] left-[107px] w-px h-[130px] bg-gradient-to-b from-[#0A8CFF]/25 to-transparent" />
      <div className="absolute top-[98px] right-[112px] w-px h-[145px] bg-gradient-to-b from-[#64CEFB]/20 to-transparent" />

      {cards.map(({ icon, label, sub, color, delay, floatClass, posClass }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: delay + 0.9, ease: 'easeOut' }}
          className={`absolute ${posClass} ${floatClass}`}
        >
          <MetricCard icon={icon} label={label} sub={sub} color={color} />
        </motion.div>
      ))}

    </motion.div>
  )
}
