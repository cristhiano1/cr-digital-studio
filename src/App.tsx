import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import FeaturedProject from './components/FeaturedProject'
import Process from './components/Process'
import About from './components/About'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    // reducedMotion="user" makes all Framer Motion animations respect the
    // visitor's OS "reduce motion" setting, complementing the CSS-level guards.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Keyboard skip link — first focusable element, visually hidden until focused */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[#0A8CFF] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <Services />
          <FeaturedProject />
          <Process />
          <About />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
