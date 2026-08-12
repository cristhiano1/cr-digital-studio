export interface Capability {
  area: string
  purpose: string
  description: string
  tags: string[]
}

export const capabilities: Capability[] = [
  {
    area: 'Frontend',
    purpose: 'Interfaces for customers and teams',
    description:
      'Responsive web interfaces built with React and TypeScript. Clean, accessible, and built to stay maintainable.',
    tags: ['React', 'TypeScript'],
  },
  {
    area: 'Backend',
    purpose: 'Business logic, APIs and authentication',
    description:
      'Server-side services built with C# on .NET for structured business application development. APIs, authentication and role-based access included where the system requires them.',
    tags: ['C#', '.NET', 'REST APIs', 'Role-based access'],
  },
  {
    area: 'Data',
    purpose: 'Structured business data',
    description:
      'Relational databases designed around the system\'s actual data requirements. SQL used where structured business data calls for it. Supabase used as an implementation layer where appropriate.',
    tags: ['SQL', 'Relational databases', 'Supabase'],
  },
  {
    area: 'Cloud',
    purpose: 'Deployment and application hosting',
    description:
      'Applications deployed on Azure, with environment configuration, hosting and deployment workflows matched to the project\'s actual requirements.',
    tags: ['Azure', 'Azure App Service', 'Azure DevOps', 'CI/CD'],
  },
  {
    area: 'Integrations',
    purpose: 'Connecting existing tools and services',
    description:
      'Existing business tools can be connected through APIs — calendars, email, CRM, accounting systems and custom data sources where the project requires it.',
    tags: ['REST APIs', 'Email', 'Calendar', 'CRM', 'Business tools'],
  },
]
