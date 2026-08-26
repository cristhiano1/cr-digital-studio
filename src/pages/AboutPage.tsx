import { Link } from 'react-router'
import { motion } from 'framer-motion'
import PageMeta from '../components/PageMeta'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const PRINCIPLES = [
  {
    number: '01',
    title: 'Clear Scope',
    body: 'The system is defined before development starts. What is being built, what is included and where the boundaries are — agreed in writing before a line of code is written.',
  },
  {
    number: '02',
    title: 'Direct Communication',
    body: 'Technical questions go directly to the person doing the work. There are no account managers or intermediaries between the business problem and the implementation.',
  },
  {
    number: '03',
    title: 'Visible Progress',
    body: 'Working flows are demonstrated during development, not just described. Progress is shown at meaningful intervals so feedback can shape the build before it is finished.',
  },
  {
    number: '04',
    title: 'Built for Handover',
    body: 'Code is written to remain understandable and maintainable after launch. Systems should not become dependent on the original builder for basic changes.',
  },
  {
    number: '05',
    title: 'Security Considered',
    body: 'Authentication, permissions and sensitive data handling are addressed where the system requires them — not bolted on as an afterthought.',
  },
]

const FOUNDATION = [
  {
    area: 'Application Development',
    items: ['C# / .NET', 'React / TypeScript', 'REST APIs', 'Secure application development'],
  },
  {
    area: 'Data',
    items: ['SQL', 'Relational databases', 'Supabase'],
  },
  {
    area: 'Cloud & Delivery',
    items: ['Azure', 'Azure App Service', 'Azure DevOps', 'CI/CD pipelines'],
  },
  {
    area: 'Systems & Integrations',
    items: ['Authentication / access control', 'Calendar and email integrations', 'CRM and business tool connections'],
  },
]

const LINKEDIN_URL = 'https://www.linkedin.com/in/cristhian-rodriguez-rodrgo-280176252/'

export default function AboutPage() {
  return (
    <div className="bg-[#020B14]">
      <PageMeta route="/about" />

      {/* 1. Hero */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        aria-label="About CR Digital Systems"
      >
        <div
          className="absolute top-0 right-0 w-[480px] h-[480px] opacity-[0.055] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(100,206,251,0.9) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-6">
              <span className="w-4 h-px bg-[#64CEFB]" aria-hidden="true" />
              About CR Digital Systems
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6 max-w-3xl">
              Built around direct technical ownership.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
              CR Digital Systems builds practical websites, systems and automation for businesses,
              with direct involvement from initial problem definition through implementation
              and deployment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Why it exists */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:grid lg:grid-cols-[180px_1fr] lg:gap-16"
          >
            <div className="mb-6 lg:mb-0">
              <h2 className="text-white/55 text-xs uppercase tracking-widest font-semibold lg:pt-1">
                Why this exists
              </h2>
            </div>
            <div className="space-y-5 text-white/65 text-base leading-relaxed">
              <p>
                Many businesses accumulate tools that are not connected to each other, or develop
                processes that work around a gap rather than through a proper system. The result is
                time absorbed by manual steps that should not need to happen at all.
              </p>
              <p>
                CR Digital Systems approaches those problems practically. The right answer might be
                improving an existing website, automating a workflow that currently runs on
                spreadsheets, connecting tools that already exist but do not communicate with each
                other, or building a focused system where nothing suitable is available.
              </p>
              <p>
                The starting point is always the workflow, not the technology. What gets built is
                shaped by what the business actually needs — not by what makes the most interesting
                project.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Who is behind it */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-10"
          >
            <h2 className="text-white/55 text-xs uppercase tracking-widest font-semibold">
              The company
            </h2>
          </motion.div>

          <div className="lg:grid lg:grid-cols-[180px_1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="mb-10 lg:mb-0"
            >
              {/* Portrait: <img className="w-16 h-16 rounded-full mb-5 object-cover" src="/images/founder.jpg" alt="Cristhian M." /> */}
              <p className="text-white text-sm font-semibold mb-1">Cristhian M.</p>
              <p className="text-white/55 text-xs leading-relaxed mb-1">
                Cloud Developer Azure
              </p>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Higher Vocational Education Diploma
              </p>
              <p className="text-white/50 text-xs leading-relaxed mb-5">
                C# / .NET · Databases · Azure<br />
                Secure application development
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white/65 text-xs transition-colors duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE }}
              className="space-y-5 text-white/65 text-base leading-relaxed"
            >
              <p>
                CR Digital Systems is run by one person with direct technical responsibility for
                everything that gets built. There are no subcontractors handling the development,
                no handoffs between departments, and no layers between the client and the builder.
              </p>
              <p>
                This means that every business problem discussed at the start of a project is
                understood by the same person who writes the code, configures the systems and
                deploys the result. Decisions stay connected to the implementation throughout —
                which reduces the chance of something being lost in translation between what was
                agreed and what gets built.
              </p>
              <p>
                It also means that the company is currently small. That is deliberate. The aim is
                to do a limited number of things well, with the same level of direct involvement
                on each project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Professional Foundation */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-10"
          >
            <h2 className="text-white/55 text-xs uppercase tracking-widest font-semibold">
              Professional foundation
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {FOUNDATION.map((f, i) => (
              <motion.div
                key={f.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.07 }}
              >
                <h3 className="text-white/80 text-sm font-semibold mb-3">{f.area}</h3>
                <ul className="space-y-1.5" role="list">
                  {f.items.map((item) => (
                    <li key={item} className="text-white/55 text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Principles */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-10"
          >
            <h2 className="text-white/55 text-xs uppercase tracking-widest font-semibold">
              Principles
            </h2>
          </motion.div>
          <div className="divide-y divide-white/[0.06]">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                className="py-7 sm:grid sm:grid-cols-[56px_1fr] sm:gap-8"
              >
                <p
                  className="text-sm font-mono font-bold mb-2 sm:mb-0 sm:pt-0.5"
                  style={{ color: 'rgba(10,140,255,0.45)' }}
                >
                  {p.number}
                </p>
                <div>
                  <h3 className="text-white/85 text-sm font-semibold mb-2">{p.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How work is structured */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:grid lg:grid-cols-[180px_1fr] lg:gap-16"
          >
            <div className="mb-6 lg:mb-0">
              <h2 className="text-white/55 text-xs uppercase tracking-widest font-semibold lg:pt-1">
                How work is structured
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-white/65 text-base leading-relaxed">
                Work follows a consistent approach: understand the business workflow before
                proposing a solution, define the scope in writing before development starts,
                build and review in stages with working demonstrations, and launch into the
                live environment with proper validation.
              </p>
              <Link
                to="/#process"
                className="inline-flex items-center gap-1.5 text-[#64CEFB] text-sm font-medium hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64CEFB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020B14] rounded"
              >
                See the full process
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 max-w-xl leading-snug">
              Have a workflow, website or system that is slowing the business down?
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg">
              Describe the problem and we will review the workflow or existing setup — no
              commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0074D9] hover:bg-[#0A8CFF] text-white text-sm font-semibold px-6 py-2.5 transition-all duration-200 hover:-translate-y-0.5 motion-reduce:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64CEFB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020B14]"
                style={{ boxShadow: '0 4px 16px rgba(0,116,217,0.25)' }}
              >
                Get a Free Audit
              </Link>
              <Link
                to="/#work"
                className="inline-flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-sm font-semibold px-6 py-2.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020B14]"
              >
                See example systems
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
