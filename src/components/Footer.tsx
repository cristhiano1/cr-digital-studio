import { Link } from 'react-router'

const LINKEDIN_URL = 'https://www.linkedin.com/in/cristhian-rodriguez-rodrgo-280176252/'

const navLinks = [
  { label: 'Solutions', href: '/#services' },
  { label: 'Projects', href: '/#work' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/about' },
  { label: 'Technical Foundation', href: '/#tech-stack' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#020B14] border-t border-white/[0.06] py-14 px-6" aria-label="Footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 mb-5 group w-fit"
              aria-label="CR Digital Systems — back to top"
            >
              <img
                src="/cr-mark.svg"
                alt=""
                aria-hidden="true"
                className="w-8 h-8 object-contain shrink-0 transition-transform duration-300 group-hover:scale-[1.04]"
              />
              <span className="text-white font-semibold text-sm">CR Digital Systems</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Websites and systems built to move business forward.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/35 hover:text-white/60 text-xs transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              Cristhian Rodriguez on LinkedIn
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/35 text-xs uppercase tracking-widest font-semibold mb-5">
              Navigation
            </p>
            <ul className="space-y-3" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-white/35 text-xs uppercase tracking-widest font-semibold mb-5">
              Get Started
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Tell us where the work gets stuck and we will review the setup.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0A8CFF] hover:bg-[#168CFF] text-white text-sm font-semibold px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 16px rgba(10,140,255,0.20)' }}
            >
              Get a Free Audit
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            &copy; {new Date().getFullYear()} CR Digital Systems. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Built by CR Digital Systems
          </p>
        </div>
      </div>
    </footer>
  )
}
