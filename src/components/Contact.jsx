import { useState } from 'react'
import { Linkedin, Github, Send } from 'lucide-react'
import portfolioData from '../data/portfolioData'

export default function Contact() {
  const { contact, socials } = portfolioData
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [sendState, setSendState] = useState('idle')
  const [shake, setShake] = useState(false)

  function handleChange(e) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!fields.name || !fields.email || !fields.message) {
      setShake(true)
      setTimeout(() => setShake(false), 400)
      return
    }
    setSendState('sending')
    setTimeout(() => {
      setSendState('sent')
      setFields({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSendState('idle'), 3500)
    }, 1400)
  }

  const inputClass =
    'w-full rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors border focus:border-violet-600/60'

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    borderColor: 'rgba(255,255,255,0.1)',
  }

  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: '#07071a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Get In Touch
            </p>
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
              {contact.heading}<br />
              <span className="grad-text">{contact.subheading}</span>
            </h2>
            <p className="text-white/45 mb-8 leading-relaxed">{contact.subtext}</p>

            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  aria-label={s.ariaLabel}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-violet-400 transition-all"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                >
                  {s.iconKey === 'linkedin' && <Linkedin size={17} />}
                  {s.iconKey === 'github'   && <Github   size={17} />}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`reveal ${shake ? 'animate-shakeForm' : ''}`}
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white/40 text-xs mb-2 block">Name</label>
                <input
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="text-white/40 text-xs mb-2 block">Email</label>
                <input
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-white/40 text-xs mb-2 block">Subject</label>
              <input
                name="subject"
                value={fields.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={inputClass}
                style={inputStyle}
              />
            </div>

            <div className="mb-6">
              <label className="text-white/40 text-xs mb-2 block">Message</label>
              <textarea
                name="message"
                value={fields.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project or idea..."
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              disabled={sendState === 'sending'}
              className="w-full py-3.5 rounded-xl font-grotesk font-semibold text-sm flex items-center justify-center gap-2 text-white transition-all hover:opacity-90 disabled:opacity-70"
              style={{
                background:
                  sendState === 'sent'
                    ? 'linear-gradient(130deg, #16a34a, #22c55e)'
                    : 'linear-gradient(130deg, #7c3aed, #ec4899)',
                boxShadow:
                  sendState === 'sent'
                    ? '0 6px 28px rgba(34,197,94,0.35)'
                    : '0 6px 28px rgba(124,58,237,0.25)',
              }}
            >
              {sendState === 'idle'    && <><Send size={16} /> Send Message</>}
              {sendState === 'sending' && 'Sending…'}
              {sendState === 'sent'    && '✓ Message Sent!'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
