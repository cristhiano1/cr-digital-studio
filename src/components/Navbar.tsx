import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={`w-full max-w-6xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'glass-strong shadow-lg shadow-black/40'
              : 'glass'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="CR Digital Studio — home"
          >
            <div className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:border-white transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <span className="text-white font-semibold text-sm tracking-wide hidden sm:block">
              CR Digital Studio
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-white/65 hover:text-white text-sm px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/5"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/90 transition-all duration-200 hover:scale-105"
          >
            Start a Project
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white/80 hover:text-white p-2 -mr-2 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 glass-strong rounded-3xl p-6 shadow-2xl shadow-black/60 lg:hidden"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="block text-white/75 hover:text-white text-base px-4 py-3 rounded-2xl hover:bg-white/5 transition-all"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center bg-white text-black text-sm font-semibold px-5 py-3 rounded-full hover:bg-white/90 transition-all"
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
