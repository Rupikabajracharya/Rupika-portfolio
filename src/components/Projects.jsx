import { useState, useRef, useEffect, useCallback } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, Clock } from 'lucide-react'
import portfolioData from '../data/portfolioData'

const TABS = [
  { key: 'all',    label: 'All' },
  { key: 'code',   label: 'Code' },
  { key: 'design', label: 'Design' },
]

const thumbStyles = {
  java:    'linear-gradient(135deg, rgba(124,58,237,0.65) 0%, rgba(236,72,153,0.35) 100%)',
  console: 'linear-gradient(135deg, rgba(109,40,217,0.7) 0%, rgba(124,58,237,0.4) 100%)',
  wip:     'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(236,72,153,0.12) 100%)',
}

const thumbLabel = { java: 'JAVA', console: 'JAVA', wip: '✦' }

export default function Projects() {
  const { projects } = portfolioData

  const [tab, setTab]             = useState('all')
  const [fade, setFade]           = useState(true)
  const [canPrev, setCanPrev]     = useState(false)
  const [canNext, setCanNext]     = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const trackRef = useRef(null)

  const filtered = projects.filter(p =>
    tab === 'all' ? true : p.category === tab
  )

  /* ── Arrow / dot state derived from scroll position ── */
  const sync = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const cardW = el.firstElementChild?.offsetWidth ?? 320
    const gap   = 24
    setCanPrev(el.scrollLeft > 2)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
    setActiveIdx(Math.round(el.scrollLeft / (cardW + gap)))
  }, [])

  /* Reset scroll + reattach listener when filter changes */
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: 0, behavior: 'instant' })
    setActiveIdx(0)
    const timer = setTimeout(sync, 60)
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      clearTimeout(timer)
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [tab, sync])

  /* Tab switch with fade */
  const switchTab = (t) => {
    if (t === tab) return
    setFade(false)
    setTimeout(() => { setTab(t); setFade(true) }, 180)
  }

  /* Arrow scroll */
  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    const cardW = el.firstElementChild?.offsetWidth ?? 320
    el.scrollBy({ left: dir * (cardW + 24), behavior: 'smooth' })
  }

  /* Dot click */
  const scrollToIdx = (i) => {
    const el = trackRef.current
    if (!el) return
    const cardW = el.firstElementChild?.offsetWidth ?? 320
    el.scrollTo({ left: i * (cardW + 24), behavior: 'smooth' })
  }

  return (
    <section id="projects" className="py-12 md:py-20 px-6" style={{ backgroundColor: '#0d0d22' }}>
        <div className="max-w-6xl mx-auto">

          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4">
            My Work
          </p>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-8">
            Featured Projects
          </h2>

          {/* ── Tabs + Arrows row ── */}
          <div className="flex items-center justify-between mb-8 gap-3">

            {/* Filter tabs */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar flex-shrink-0">
              {TABS.map(t => (
                <button
                  key={t.key}
                  onClick={() => switchTab(t.key)}
                  className="px-4 sm:px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                  style={
                    tab === t.key
                      ? { background: 'linear-gradient(130deg,#7c3aed,#ec4899)', color: '#fff' }
                      : {
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.4)',
                        }
                  }
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              {[
                { dir: -1, Icon: ChevronLeft,  can: canPrev },
                { dir:  1, Icon: ChevronRight, can: canNext },
              ].map(({ dir, Icon, can }) => (
                <button
                  key={dir}
                  onClick={() => scroll(dir)}
                  disabled={!can}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background:   can ? 'rgba(124,58,237,0.18)' : 'rgba(255,255,255,0.04)',
                    border:       can ? '1px solid rgba(124,58,237,0.4)' : '1px solid rgba(255,255,255,0.08)',
                    color:        can ? '#a855f7' : 'rgba(255,255,255,0.18)',
                    cursor:       can ? 'pointer' : 'not-allowed',
                  }}
                >
                  <Icon size={16} strokeWidth={2} />
                </button>
              ))}
            </div>
          </div>

          {/* ── Carousel track ── */}
          <div
            ref={trackRef}
            className="no-scrollbar flex gap-6 overflow-x-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              opacity: fade ? 1 : 0,
              transition: 'opacity 0.18s ease',
            }}
          >
            {filtered.map((project) => (
              <article
                key={project.title}
                onClick={() => {
                  const url = project.github || project.link
                  if (!project.wip && url) window.open(url, '_blank', 'noopener,noreferrer')
                }}
                className="flex-shrink-0 w-[88vw] sm:w-[75vw] md:w-[calc(33.33%-16px)] rounded-2xl overflow-hidden transition-colors duration-300 group"
                style={{
                  background:   project.wip ? 'rgba(124,58,237,0.04)' : 'rgba(255,255,255,0.03)',
                  border:       project.wip ? '1.5px dashed rgba(168,85,247,0.25)' : '1px solid rgba(255,255,255,0.07)',
                  cursor:       !project.wip && (project.github || project.link) ? 'pointer' : 'default',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = project.wip ? 'rgba(168,85,247,0.5)' : 'rgba(168,85,247,0.35)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = project.wip ? 'rgba(168,85,247,0.25)' : 'rgba(255,255,255,0.07)' }}
              >
                {/* Thumbnail */}
                <div
                  className="relative h-48 flex items-center justify-center overflow-hidden"
                  style={{ background: project.image ? undefined : thumbStyles[project.thumbVariant] }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : project.wip ? (
                    <div className="flex flex-col items-center gap-3">
                      <Clock size={32} style={{ color: 'rgba(168,85,247,0.4)' }} strokeWidth={1.5} />
                      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(168,85,247,0.4)' }}>
                        In Progress
                      </span>
                    </div>
                  ) : (
                    <span
                      className="font-grotesk font-black text-4xl select-none"
                      style={{ color: 'rgba(255,255,255,0.08)', letterSpacing: '0.1em' }}
                    >
                      {thumbLabel[project.thumbVariant]}
                    </span>
                  )}
                  {!project.wip && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ArrowUpRight size={28} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6">
                  <span
                    className="text-xs font-medium rounded-full px-3 py-1"
                    style={
                      project.wip
                        ? { background: 'rgba(168,85,247,0.12)', color: 'rgba(168,85,247,0.7)' }
                        : { background: 'rgba(124,58,237,0.15)', color: '#a78bfa' }
                    }
                  >
                    {project.tag}
                  </span>
                  <h3
                    className="font-grotesk font-bold text-lg mt-4 mb-2"
                    style={{ color: project.wip ? 'rgba(255,255,255,0.5)' : '#fff' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map(t => (
                        <span
                          key={t}
                          className="text-xs text-white/50 px-2 py-0.5 rounded"
                          style={{ background: 'rgba(255,255,255,0.06)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action buttons */}
                  {!project.wip && (
                    <div className="flex items-center gap-4 flex-wrap">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-violet-400 text-sm font-medium hover:text-white transition-colors"
                        >
                          <Github size={14} /> Go to GitHub
                        </a>
                      )}
{!project.github && project.link && (
                        <a
                          href={project.link}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-violet-400 text-sm font-medium hover:text-white transition-colors"
                        >
                          View Project <span>→</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* ── Dot indicators ── */}
          {filtered.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIdx(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: '4px',
                    width:  i === activeIdx ? '20px' : '6px',
                    background: i === activeIdx
                      ? 'linear-gradient(90deg,#7c3aed,#ec4899)'
                      : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
          )}

        </div>
      </section>
  )
}
