import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import { SKILLS } from '../data'

const CATS = ['All', 'Core', 'Framework', 'Styling', 'Design', 'Tools']

export default function Skills() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? SKILLS : SKILLS.filter(s => s.category === active)

  return (
    <section id="skills" className="section-pad skills-section" style={{ paddingLeft: 'clamp(20px,5vw,80px)', paddingRight: 'clamp(20px,5vw,80px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionTitle label="02 — What I Know" title="Skills & Tools" />
        <p style={{ fontSize: 15, color: '#666', marginBottom: 32, marginTop: -24, lineHeight: 1.7, maxWidth: 480 }}>
          Technologies I work with, organised by category.
        </p>
        <div className="filter-row">
          {CATS.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`filter-btn${active === cat ? ' active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {filtered.map((skill, i) => <SkillCard key={skill.name} skill={skill} index={i} />)}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`skill-card reveal${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 40}ms` }}>
      <div className="skill-bar" style={{ background: skill.color }} />
      <div className="skill-icon-box" style={{ background: skill.bg }}>{skill.icon}</div>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-cat">{skill.category}</span>
    </div>
  )
}
