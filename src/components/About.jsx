import portfolioData from '../data/portfolioData'

export default function About() {
  const { about } = portfolioData

  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: '#07071a' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-12">
          About Me
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div className="reveal">
            <h2 className="about-quote font-grotesk font-bold text-2xl md:text-3xl text-white leading-snug mb-6">
              &ldquo;{about.quote}&rdquo;
            </h2>
            <p className="text-white/50 leading-relaxed">{about.bio}</p>
          </div>

          {/* Right */}
          <div className="reveal">
            <div className="mb-8">
              <h3 className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Interests &amp; Hobbies
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-1.5 border border-white/[0.08] rounded-full px-3 py-1.5 text-sm text-white/70"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    {item.emoji} {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.languages.map((lang) => (
                  <span
                    key={lang}
                    className="border rounded-full px-3 py-1 text-sm text-violet-400"
                    style={{
                      background: 'rgba(124,58,237,0.12)',
                      borderColor: 'rgba(124,58,237,0.3)',
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
