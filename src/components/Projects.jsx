import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ paddingLeft: 'clamp(20px,5vw,80px)', paddingRight: 'clamp(20px,5vw,80px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionTitle label="03 — What I've Built" title="Projects" />
        <div className="projects-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`project-card reveal${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="proj-header">
        <div className="proj-icon">⬡</div>
        <span className="proj-year">{project.year}</span>
      </div>
      <h3 className="proj-title">{project.title}</h3>
      <p className="proj-desc">{project.description}</p>
      <div className="proj-tags">
        {project.tags.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
      </div>
      <div className="proj-links">
        <a href={project.link} className="proj-link">Live Demo ↗</a>
        <a href={project.github} className="proj-link-ghost">GitHub ↗</a>
      </div>
    </div>
  )
}
