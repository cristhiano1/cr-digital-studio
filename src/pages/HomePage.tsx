import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedProject from '../components/FeaturedProject'
import Process from '../components/Process'
import About from '../components/About'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProject />
      <Process />
      <About />
      <TechStack />
      <Contact />
    </>
  )
}
