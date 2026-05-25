export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'web-apps',
    icon: 'AppWindow',
    title: 'Custom Web Applications',
    description:
      'Custom systems designed around the way your business actually works, instead of relying on generic templates or manual workarounds.',
  },
  {
    id: 'crm',
    icon: 'UsersRound',
    title: 'Mini CRM Systems',
    description:
      'Organize leads, clients, follow-ups and customer information in one simple dashboard your team can actually use.',
  },
  {
    id: 'booking',
    icon: 'CalendarClock',
    title: 'Booking & Scheduling Platforms',
    description:
      'Let clients book online while you manage calendars, appointments, availability and follow-ups from one place.',
  },
  {
    id: 'dashboards',
    icon: 'LayoutDashboard',
    title: 'Dashboards & Reports',
    description:
      'Turn business data into clear dashboards, PDF exports, Excel reports and useful insights for better decisions.',
  },
  {
    id: 'automation',
    icon: 'Workflow',
    title: 'Workflow Automation',
    description:
      'Reduce repetitive manual work by connecting steps, tools and tasks into cleaner digital workflows.',
  },
  {
    id: 'ai-tools',
    icon: 'Sparkles',
    title: 'AI-Assisted Tools',
    description:
      'Use AI carefully for summaries, classification, support workflows and productivity features that still stay under human control.',
  },
  {
    id: 'admin-panels',
    icon: 'ShieldCheck',
    title: 'Secure Admin Panels',
    description:
      'Create protected management areas with login, roles, permissions, audit logs and internal team access.',
  },
  {
    id: 'cloud',
    icon: 'CloudCog',
    title: 'Cloud & Deployment',
    description:
      'Deploy web apps using cloud-ready workflows, Azure tools, databases, CI/CD pipelines and secure environment configuration.',
  },
]
