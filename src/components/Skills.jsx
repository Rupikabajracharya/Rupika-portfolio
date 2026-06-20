import { useRef } from 'react'
import { PenTool, Code2, Wrench } from 'lucide-react'
import portfolioData from '../data/portfolioData'
import useSkillTilt from '../hooks/useSkillTilt'

const iconMap = { design: PenTool, dev: Code2, tools: Wrench }

function SkillCard({ skill }) {
  const cardRef = useRef(null)
  useSkillTilt(cardRef)
  const Icon = iconMap[skill.iconKey]

  return (
    <article
      ref={cardRef}
      className="reveal rounded-2xl p-8 border transition-all duration-300 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.35)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 text-violet-400"
        style={{ background: 'rgba(124,58,237,0.2)' }}
      >
        <Icon size={20} />
      </div>
      <h3 className="font-grotesk font-semibold text-lg text-white mb-4">{skill.title}</h3>
      <ul className="space-y-2.5">
        {skill.items.map((item) => (
          <li key={item} className="text-white/50 text-sm flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-violet-400/50 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Skills() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="py-12 md:py-20 px-6" style={{ backgroundColor: '#0d0d22' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-0.5 h-4 rounded-full" style={{ background: 'linear-gradient(180deg, #7c3aed, #ec4899)' }} />
          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase">
            What I Know
          </p>
        </div>
        <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-12">
          Skills &amp; Toolbox
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
