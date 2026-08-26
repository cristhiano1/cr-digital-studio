import type { LucideIcon } from 'lucide-react'
import { Globe, ClipboardList, CalendarCheck2, Settings } from 'lucide-react'

export interface Solution {
  id: string
  icon: LucideIcon
  title: string
  description: string
  capabilities: string[]
  accent: string
  route: string
}

export const solutions: Solution[] = [
  {
    id: 'websites',
    icon: Globe,
    title: 'Business Websites',
    description:
      'Clear, well-structured business websites built around what customers need to understand and do next — designed to be maintainable by your team.',
    capabilities: [
      'Clear service and offer structure',
      'Fast and responsive on every device',
      'Enquiry and contact paths that reach your team',
      'Content your team can update directly',
      'Built on maintainable technical foundations',
    ],
    accent: '#0A8CFF',
    route: '/solutions/business-websites',
  },
  {
    id: 'quotes-leads',
    icon: ClipboardList,
    title: 'Quote & Lead Systems',
    description:
      'Capture enquiries with structured forms, organise lead information clearly and keep follow-up visible so nothing falls through the cracks.',
    capabilities: [
      'Structured quote and enquiry forms',
      'Lead information organised clearly',
      'Follow-up workflow visibility',
      'Routing and notifications where useful',
      'Integration with existing tools where appropriate',
    ],
    accent: '#64CEFB',
    route: '/solutions/quote-lead-systems',
  },
  {
    id: 'booking-flows',
    icon: CalendarCheck2,
    title: 'Booking & Customer Flows',
    description:
      'Let customers check availability, book online and manage their own appointments while your team stays in control.',
    capabilities: [
      'Customers choose available times',
      'Booking details captured clearly',
      'Confirmations and reminders where required',
      'Rescheduling and cancellation flows',
      'Calendar and tool connections where appropriate',
    ],
    accent: '#168CFF',
    route: '/solutions/booking-customer-flows',
  },
  {
    id: 'internal-systems',
    icon: Settings,
    title: 'Internal Systems & Automation',
    description:
      'Replace spreadsheets, manual steps and scattered tools with clean internal software your team actually uses.',
    capabilities: [
      'Internal admin and workflow tools',
      'Repetitive steps reduced where practical',
      'Clear status and operational views',
      'Data connected from existing tools',
      'Automation and integrations based on real workflow needs',
    ],
    accent: '#64CEFB',
    route: '/solutions/internal-systems-automation',
  },
]
