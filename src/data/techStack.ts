export type TechCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'monitoring'

export interface TechItem {
  name: string
  category: TechCategory
}

export const techStack: TechItem[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Vite', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  // Backend
  { name: '.NET', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'JWT / RBAC', category: 'backend' },
  { name: 'Automated Tests', category: 'backend' },
  // Database
  { name: 'SQL Server', category: 'database' },
  { name: 'Supabase', category: 'database' },
  { name: 'PostgreSQL-ready', category: 'database' },
  // Cloud, DevOps & Hosting
  { name: 'Azure', category: 'devops' },
  { name: 'Azure App Service', category: 'devops' },
  { name: 'Azure SQL', category: 'devops' },
  { name: 'Azure Functions', category: 'devops' },
  { name: 'Azure DevOps', category: 'devops' },
  { name: 'Docker', category: 'devops' },
  { name: 'GitHub', category: 'devops' },
  { name: 'Netlify', category: 'devops' },
  { name: 'Cloudflare', category: 'devops' },
  // Monitoring & Services
  { name: 'Application Insights', category: 'monitoring' },
  { name: 'Cloudflare Turnstile', category: 'monitoring' },
  { name: 'AI Tools', category: 'monitoring' },
]

export const categoryColors: Record<TechCategory, string> = {
  frontend: 'rgba(100, 206, 251, 0.12)',
  backend: 'rgba(123, 57, 252, 0.12)',
  database: 'rgba(100, 206, 251, 0.08)',
  devops: 'rgba(0, 120, 212, 0.12)',
  monitoring: 'rgba(14, 165, 233, 0.10)',
}
