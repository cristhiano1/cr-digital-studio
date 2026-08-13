import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'Solutions', href: '/#services' },
  { label: 'Projects', href: '/#work' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
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
          className={`w-full max-w-6xl rounded-full px-5 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'glass-strong shadow-xl shadow-black/30' : 'glass'
          }`}
        >
          <Link
            to="/"
            className="flex items-center gap-2.5 group min-w-0"
            aria-label="CR Digital Systems — home"
          >
            <img
              src="/cr-mark.svg"
              alt=""
              aria-hidden="true"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0 transition-transform duration-300 group-hover:scale-[1.04]"
            />
            <span className="hidden sm:flex flex-col leading-none min-w-0">
              <span className="text-[12px] md:text-[13px] font-bold tracking-[0.075em] text-white whitespace-nowrap">
                CR DIGITAL
              </span>
              <span className="mt-1 text-[8.5px] md:text-[9px] font-semibold tracking-[0.30em] text-[#64CEFB]/85 whitespace-nowrap">
                SYSTEMS
              </span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  to={href}
                  className="text-white/65 hover:text-white text-sm px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/[0.045]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/#contact"
            className="hidden lg:inline-flex items-center justify-center rounded-full border border-[#64CEFB]/30 bg-[#0A8CFF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(10,140,255,0.18)] transition-all duration-200 hover:bg-[#1598ff] hover:border-[#64CEFB]/50 hover:-translate-y-0.5"
          >
            Get a Free Audit
          </Link>

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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 glass-strong rounded-3xl p-5 shadow-2xl shadow-black/60 lg:hidden"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    onClick={closeMenu}
                    className="block text-white/75 hover:text-white text-base px-4 py-3 rounded-2xl hover:bg-white/5 transition-all"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/#contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center rounded-full border border-[#64CEFB]/30 bg-[#0A8CFF] px-5 py-3 text-sm font-semibold text-white"
            >
              Get a Free Audit
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
