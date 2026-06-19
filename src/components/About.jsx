import { Palette, Camera, Music, Plane, Monitor } from 'lucide-react'
import portfolioData from '../data/portfolioData'

const iconMap = { Palette, Camera, Music, Plane, Monitor }

function LangRing({ level, name }) {
  const size = 72
  const stroke = 3
  const r = (size - stroke * 2) / 2
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - level / 100)
  const gradId = `lang-grad-${name.toLowerCase()}`
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <defs>
        <linearGradient id={gradId} x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#9f67f0" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#d472aa" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      {/* Track */}
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={stroke}
      />
      {/* Progress arc */}
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={`url(#${gradId})`} strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.8s ease' }}
      />
    </svg>
  )
}

export default function About() {
  const { about } = portfolioData

  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: '#07071a' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-12">
          About Me
        </p>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left — quote + bio */}
          <div className="reveal">
            {/* Accent line */}
            <div
              className="w-10 h-1 rounded mb-5"
              style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }}
            />

            {/* Heading — clean, no quotes */}
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white leading-snug mb-8">
              {about.quote}
            </h2>

            {/* Bio wrapped with decorative " " */}
            <div className="relative pl-1">
              {/* Opening quote */}
              <span
                className="absolute -top-7 -left-2 leading-none pointer-events-none select-none"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '5.5rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  background: 'linear-gradient(130deg, rgba(167,100,255,0.45), rgba(124,58,237,0.1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                &ldquo;
              </span>

              <p className="text-white/55 leading-relaxed">{about.bio}</p>

              {/* Closing quote */}
              <span
                className="block text-right leading-none pointer-events-none select-none -mt-1"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '5.5rem',
                  fontWeight: 900,
                  lineHeight: 0.6,
                  background: 'linear-gradient(130deg, rgba(167,100,255,0.45), rgba(124,58,237,0.1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                &rdquo;
              </span>
            </div>
          </div>

          {/* Right — interests + languages */}
          <div className="reveal">

            {/* Interests & Hobbies — circular icon buttons */}
            <div className="mb-10">
              <h3 className="text-white/40 text-xs tracking-widest uppercase mb-5">
                Interests &amp; Hobbies
              </h3>
              <div className="flex flex-wrap gap-5">
                {about.interests.map((item) => {
                  const Icon = iconMap[item.icon]
                  return (
                    <div key={item.label} className="flex flex-col items-center gap-2">
                      <div
                        className="w-[62px] h-[62px] rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        {Icon && <Icon size={22} strokeWidth={1.6} className="text-white/80" />}
                      </div>
                      <span className="text-xs text-white/50 text-center max-w-[64px] leading-tight">
                        {item.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Languages — circular progress rings */}
            <div>
              <h3 className="text-white/40 text-xs tracking-widest uppercase mb-5">
                Languages
              </h3>
              <div className="flex flex-wrap gap-6">
                {about.languages.map((lang) => (
                  <div key={lang.name} className="flex flex-col items-center gap-1.5">
                    {/* Ring + % label */}
                    <div className="relative">
                      <LangRing level={lang.level} name={lang.name} />
                      {/* Centered text over the ring */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-sm font-bold text-white leading-none">
                          {lang.level}%
                        </span>
                      </div>
                    </div>
                    {/* Language name */}
                    <span className="text-sm font-medium text-white/80">{lang.name}</span>
                    {/* Fluency label */}
                    <span
                      className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full"
                      style={{
                        background: lang.level >= 80
                          ? 'rgba(124,58,237,0.18)'
                          : 'rgba(255,255,255,0.06)',
                        color: lang.level >= 80
                          ? '#c084fc'
                          : 'rgba(255,255,255,0.35)',
                        border: lang.level >= 80
                          ? '1px solid rgba(124,58,237,0.3)'
                          : '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      {lang.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
