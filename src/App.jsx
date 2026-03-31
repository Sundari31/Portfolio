import { useState, useEffect } from 'react'
import { NAV_LINKS } from './data'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Certificates from './components/Certificates'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  const [activeNav, setActiveNav] = useState('About')

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_LINKS.map(n => n.toLowerCase())
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveNav(NAV_LINKS[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar activeNav={activeNav} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}
