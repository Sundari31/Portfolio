import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import { STATS } from '../data'

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ paddingLeft: 'clamp(20px,5vw,80px)', paddingRight: 'clamp(20px,5vw,80px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionTitle label="01 — Who I Am" title="About Me" />
        <div className="about-grid">
          <AboutText />
          <StatsGrid />
        </div>
      </div>
    </section>
  )
}

function AboutText() {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`about-text reveal${inView ? ' visible' : ''}`}>
      <p>Hi, I'm <strong>Sundari</strong> — a Frontend Developer. I specialize in building modern, responsive web applications with a strong eye for detail and user experience.</p>
      <p>I'm passionate about the intersection of design and engineering — where pixel-perfect interfaces meet clean, maintainable code. I believe great software is built on empathy for the user.</p>
      <p>When I'm not coding, I'm exploring design systems, contributing to open source, or mentoring junior developers in the community.</p>
    </div>
  )
}

function StatsGrid() {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`stats-grid reveal${inView ? ' visible' : ''}`} style={{ transitionDelay: '150ms' }}>
      {STATS.map(stat => (
        <div key={stat.label} className="stat-card">
          <div className="stat-val">{stat.value}</div>
          <div className="stat-lbl">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
