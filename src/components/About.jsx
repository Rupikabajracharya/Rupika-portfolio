import portfolioData from '../data/portfolioData'

export default function About() {
  const { about } = portfolioData

  return (
    <section id="about" className="py-28 px-6" style={{ backgroundColor: '#07071a' }}>
      <div className="max-w-6xl mx-auto">

        {/* "About Me" label with decorative quotes */}
        <div className="relative inline-block mb-14">
          <span
            className="absolute -top-5 -left-3 pointer-events-none select-none leading-none"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '4rem',
              fontWeight: 900,
              lineHeight: 1,
              background: 'linear-gradient(130deg, rgba(167,100,255,0.55), rgba(124,58,237,0.15))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            &ldquo;
          </span>
          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase px-2">
            About Me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-32">

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

            {/* Languages — horizontal bars */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h3 className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                Languages
              </h3>
              <div className="flex flex-col gap-4">
                {about.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-4">
                    <span className="text-sm font-medium text-white/80 w-14 shrink-0">{lang.name}</span>
                    <div className="flex-1 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${lang.level}%`,
                          background: 'linear-gradient(90deg, #7c3aed, #ec4899)',
                          transition: 'width 0.8s ease',
                        }}
                      />
                    </div>
                    <span className="text-xs text-white/50 w-9 text-right shrink-0">{lang.level}%</span>
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
