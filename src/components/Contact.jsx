import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { SOCIALS } from '../data'
import emailjs from 'emailjs-com'


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)


const handleSubmit = (e) => {
  e.preventDefault()

  emailjs.send(
    'service_n8qrd4j',
    'template_iz55cg8',
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message
    },
    'XvicWQA-AHusyeb1l'
  )
  .then(() => {
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  })
  .catch((error) => {
    console.error(error)
    alert('Failed to send message')
  })
}

  return (
    <section id="contact" className="section-pad" style={{ paddingLeft: 'clamp(20px,5vw,80px)', paddingRight: 'clamp(20px,5vw,80px)' }}>
      <div className="contact-wrap">
        <SectionTitle label="05 — Let's Talk" title="Get In Touch" />
        <p className="contact-desc">
          Have a project in mind or just want to say hello? My inbox is always open.
          I'll get back to you within 24 hours.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label className="form-label">Name</label>
              <input className="form-input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required placeholder="Your name" />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input className="form-input" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required placeholder="your@email.com" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" rows={6} value={form.message} onChange={e => setForm({...form, message: e.target.value})} required placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className="btn-primary">
            {sent ? 'Message Sent ✓' : 'Send Message →'}
          </button>
        </form>
        <div className="socials">
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link">
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
