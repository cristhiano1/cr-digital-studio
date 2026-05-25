export interface ProcessStep {
  number: string
  icon: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: 'MessageSquare',
    title: 'Discovery Call',
    description:
      'We define the problem, users, workflow and what the system must solve before writing unnecessary code.',
  },
  {
    number: '02',
    icon: 'FileText',
    title: 'Fixed Scope & Proposal',
    description:
      'You get a clear scope, realistic timeline and fixed-price structure before development starts.',
  },
  {
    number: '03',
    icon: 'Code2',
    title: 'Build & Weekly Updates',
    description:
      'The system is built in focused iterations with visible progress, demos and practical feedback.',
  },
  {
    number: '04',
    icon: 'Rocket',
    title: 'Delivery & Support',
    description:
      'You receive the final system, documentation, deployment guidance and optional support after launch.',
  },
]
