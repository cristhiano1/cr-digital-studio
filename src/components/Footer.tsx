// TODO: Replace with your real business email before going live
const LINKEDIN_URL = 'https://www.linkedin.com/in/cristhian-rodriguez-rodrgo-280176252/'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/06 py-14 px-6" aria-label="Footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#"
              className="flex items-center gap-3 mb-4 group w-fit"
              aria-label="CR Digital Studio"
            >
              <div className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:border-white/80 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <span className="text-white font-semibold text-sm">CR Digital Studio</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-4">
              CR Digital Studio is led by Cristhian Rodriguez, an Azure Cloud Developer building full-stack, cloud-ready business systems for clients globally.
            </p>
            <p className="text-white/40 text-xs flex items-center gap-1.5">
              <span className="text-base" aria-hidden="true">🌐</span>
              Remote-first &middot; Global clients
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-4">
              Navigation
            </p>
            <ul className="space-y-2" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-4">
              Connect
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-white/55 hover:text-white text-sm transition-colors duration-200 mb-5"
            >
              <span className="w-7 h-7 rounded-lg bg-white/05 border border-white/08 flex items-center justify-center flex-shrink-0 group-hover:border-white/16 transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 group-hover:text-white transition-colors">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              Cristhian Rodriguez
            </a>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Vite', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-white/35 bg-white/03 border border-white/06 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/06 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/55 text-xs">
            &copy; {new Date().getFullYear()} CR Digital Studio. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            Designed &amp; built by CR Digital Studio
          </p>
        </div>
      </div>
    </footer>
  )
}
