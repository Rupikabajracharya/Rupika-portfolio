import portfolioData from '../data/portfolioData'

export default function About() {
  const { about } = portfolioData

  return (
    <section id="about" className="py-14 md:py-24 px-6" style={{ backgroundColor: '#07071a' }}>
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10 md:gap-20">

          {/* Left — quote + bio */}
          <div className="reveal">
            {/* "About Me" label */}
            <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4">
              About Me
            </p>

            {/* Accent line */}
            <div
              className="w-10 h-1 rounded mb-4"
              style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }}
            />

            {/* Decorative opening quote — below the gradient line, above heading */}
            <div
              className="pointer-events-none select-none mb-0"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '3.5rem',
                fontWeight: 900,
                lineHeight: 0.75,
                background: 'linear-gradient(130deg, rgba(167,100,255,0.55), rgba(124,58,237,0.15))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              &ldquo;
            </div>

            {/* Heading */}
            <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white leading-snug mb-8">
              {about.quote}
            </h2>

            <p className="text-white/55 leading-relaxed">{about.bio}</p>

            {/* Closing quote — sits below the paragraph */}
            <span
              className="block text-right pointer-events-none select-none mt-2"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '5.5rem',
                fontWeight: 900,
                lineHeight: 1.2,
                paddingBottom: '4px',
                overflow: 'visible',
                background: 'linear-gradient(130deg, rgba(167,100,255,0.45), rgba(124,58,237,0.1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              &rdquo;
            </span>
          </div>

          {/* Right — interests + languages */}
          <div className="reveal flex flex-col gap-6">

            {/* Beyond The Screen — pill tags */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h3 className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                Beyond The Screen
              </h3>
              <div className="flex flex-wrap gap-3">
                {about.interests.map((item) => (
                  <span
                    key={item.label}
                    className="px-4 py-1.5 rounded-full text-sm text-white/75"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h3 className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                Languages
              </h3>
              <div className="flex flex-row gap-3">
                {about.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex-1 flex flex-col gap-2 rounded-[18px] px-4 py-4"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <span className="text-sm text-white/75 leading-none">{lang.name}</span>
                    <span className="text-[10px] font-medium tracking-wide" style={{ color: '#A78BFA' }}>{lang.note}</span>
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
