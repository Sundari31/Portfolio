import { useInView } from '../hooks/useInView'

export default function SectionTitle({ label, title }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`section-title-wrap reveal${inView ? ' visible' : ''}`}>
      <p className="label">{label}</p>
      <h2>{title}</h2>
    </div>
  )
}
