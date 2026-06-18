import { ArrowUpRight } from 'lucide-react'
import portfolioData from '../data/portfolioData'

const thumbStyles = {
  uiux: 'linear-gradient(135deg, rgba(124,58,237,0.7) 0%, rgba(236,72,153,0.4) 100%)',
  web:  'linear-gradient(135deg, rgba(30,27,75,0.9) 0%, rgba(124,58,237,0.5) 100%)',
}

export default function Projects() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="py-24 px-6" style={{ backgroundColor: '#0d0d22' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4">
          My Work
        </p>
        <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="reveal rounded-2xl overflow-hidden border transition-all duration-300 group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.35)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
            >
              {/* Thumbnail */}
              <div
                className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{ background: thumbStyles[project.thumbVariant] }}
              >
                <span className="font-grotesk font-black text-5xl select-none" style={{ color: 'rgba(255,255,255,0.08)', letterSpacing: '0.1em' }}>
                  {project.thumbVariant === 'uiux' ? 'UI/UX' : 'WEB'}
                </span>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ArrowUpRight size={32} className="text-white" />
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <span
                  className="text-xs text-violet-400 font-medium rounded-full px-3 py-1"
                  style={{ background: 'rgba(124,58,237,0.15)' }}
                >
                  {project.tag}
                </span>
                <h3 className="font-grotesk font-bold text-lg text-white mt-4 mb-2">
                  {project.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-violet-400 text-sm font-medium hover:text-white transition-colors"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
