import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import FeaturedProject from './components/FeaturedProject'
import Process from './components/Process'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedProject />
        <Process />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
