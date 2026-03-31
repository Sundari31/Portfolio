import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const s = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  })

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-grid">
          <div>
            <p style={{ ...s(100), fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.22em', color: '#999', textTransform: 'uppercase', marginBottom: 24 }}>
              Frontend Developer
            </p>
            <h1 className="hero-title" style={s(220)}>
              SUNDARI<br />
            </h1>
            <p className="hero-desc" style={s(350)}>
              I craft clean, performant, and accessible web experiences.
              Passionate about turning complex problems into simple, elegant interfaces.
            </p>
            <div className="btn-row" style={s(480)}>
              <button className="btn-primary" onClick={() => scrollTo('projects')}>View Projects →</button>
              <button className="btn-outline" onClick={() => scrollTo('contact')}>Get In Touch</button>
              <a
                href="/resume.pdf"
                download="Sundari_Frontend_Resume.pdf"
                className="btn-resume"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M12 15V3" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M3 21h18" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          <div className="blob-wrap" style={{ opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(0.92)', transition: 'opacity 1.1s ease 400ms, transform 1.1s ease 400ms' }}>
            <div className="blob">
              <div className="blob-shape">
                <div className="blob-avatar text-sm"><span>SUNDARI</span></div>
                <p className="blob-sub">FRONTEND DEV</p>
              </div>
              {[
                { label: 'React.js',   style: { top: '6%',    right: '-10%' }, delay: '0s'   },
                { label: 'CSS3',       style: { bottom: '14%', left: '-12%'  }, delay: '0.5s' },
                { label: 'JavaScript', style: { top: '48%',   right: '-16%' }, delay: '1s'   },
              ].map(t => (
                <span key={t.label} className="blob-tag"
                  style={{ ...t.style, animation: `floatTag 3s ease-in-out infinite ${t.delay}` }}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 64, opacity: visible ? 0.45 : 0, transition: 'opacity 1s ease 1.5s' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.15em', color: '#aaa' }}>SCROLL</span>
          <div style={{ width: 1, height: 40, background: '#aaa', animation: 'scrollPulse 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  )
}
