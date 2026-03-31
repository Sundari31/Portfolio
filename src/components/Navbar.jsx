import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data'

export default function Navbar({ activeNav }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <span className="nav-logo">sundari<span>.dev</span></span>

        <div className="nav-links">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              className={`nav-btn${activeNav === link ? ' active' : ''}`}>
              {link}
            </button>
          ))}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none' }}>
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              className={`mobile-btn${activeNav === link ? ' active' : ''}`}>
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
