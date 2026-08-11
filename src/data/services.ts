import type { LucideIcon } from 'lucide-react'
import { Globe, ClipboardList, CalendarCheck2, Settings } from 'lucide-react'

export interface Solution {
  id: string
  icon: LucideIcon
  title: string
  description: string
  capabilities: string[]
  accent: string
}

export const solutions: Solution[] = [
  {
    id: 'websites',
    icon: Globe,
    title: 'Business Websites',
    description:
      'Clear, well-structured websites that show what you do, how to get in touch and why someone should choose you — built so your team can update content without a developer.',
    capabilities: [
      'Fast on mobile and desktop',
      'Local SEO foundations built in',
      'Contact and enquiry forms that notify your team',
      'Visitor tracking so you know what is working',
      'Pages and copy your team can edit directly',
    ],
    accent: '#0A8CFF',
  },
  {
    id: 'quotes-leads',
    icon: ClipboardList,
    title: 'Quote & Lead Systems',
    description:
      'Capture enquiries, qualify leads and follow up automatically so nothing falls through the cracks.',
    capabilities: [
      'Multi-step quote request forms',
      'Enquiries sorted by service, budget or urgency',
      'Automatic follow-up emails when leads go quiet',
      'Pipeline view so you see every open enquiry',
      'Notifications routed to the right person',
    ],
    accent: '#64CEFB',
  },
  {
    id: 'booking-flows',
    icon: CalendarCheck2,
    title: 'Booking & Customer Flows',
    description:
      'Let customers book, pay and manage appointments online while your team stays in control of availability.',
    capabilities: [
      'Customers pick a time and book themselves',
      'Reminders sent automatically before each appointment',
      'Portal where customers check or change bookings',
      'Payment collected at booking or on the day',
      'Calendar sync so double-bookings don’t happen',
    ],
    accent: '#168CFF',
  },
  {
    id: 'internal-systems',
    icon: Settings,
    title: 'Internal Systems & Automation',
    description:
      'Replace spreadsheets, manual steps and scattered tools with clean internal software your team actually uses.',
    capabilities: [
      'Admin panels where each role sees only what they need',
      'Repetitive steps handled without manual input',
      'Dashboards that show what matters, not everything',
      'Data pulled from the tools you already use',
      'AI for tagging, summaries and triage — human-reviewed',
    ],
    accent: '#64CEFB',
  },
]
