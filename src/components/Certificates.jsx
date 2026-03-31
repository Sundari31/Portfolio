import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import { CERTIFICATES } from '../data'

const BADGE_STYLES = {
  'bg-blue-600 text-white':    { background: '#2563eb', color: '#fff' },
  'bg-yellow-400 text-yellow-900': { background: '#facc15', color: '#713f12' },
  'bg-neutral-900 text-white': { background: '#171717', color: '#fff' },
  'bg-cyan-400 text-cyan-900': { background: '#22d3ee', color: '#164e63' },
}

export default function Certificates() {
  return (
    <section id="certificates" className="section-pad certs-section" style={{ paddingLeft: 'clamp(20px,5vw,80px)', paddingRight: 'clamp(20px,5vw,80px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionTitle label="04 — Credentials" title="Certificates" />
        <div className="certs-grid">
          {CERTIFICATES.map((cert, i) => <CertCard key={cert.id} cert={cert} index={i} />)}
        </div>
      </div>
    </section>
  )
}

function CertCard({ cert, index }) {
  const [ref, inView] = useInView()
  const badgeStyle = BADGE_STYLES[cert.badgeColor] || { background: '#1a1a1a', color: '#fff' }
  return (
    <div ref={ref} className={`cert-card reveal${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="cert-badge" style={badgeStyle}>{cert.badge}</div>
      <div>
        <div className="cert-title">{cert.title}</div>
        <div className="cert-issuer">{cert.issuer}</div>
        <div className="cert-date">{cert.date}</div>
      </div>
    </div>
  )
}
