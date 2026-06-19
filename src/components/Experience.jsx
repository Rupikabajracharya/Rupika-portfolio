import portfolioData from '../data/portfolioData'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-24 px-6" style={{ backgroundColor: '#07071a' }}>
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-0.5 h-4 rounded-full"
            style={{ background: 'linear-gradient(180deg, #7c3aed, #ec4899)' }}
          />
          <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase">
            Background
          </p>
        </div>

        <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-12">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative pl-8 max-w-3xl">
          {/* Vertical spine */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, #7c3aed 60%, transparent)',
            }}
          />

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {experience.map((item) => (
              <div
                key={item.org}
                className="reveal rounded-xl p-6 border transition-colors duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                }}
              >
                {/* Org + role */}
                <h3 className="font-grotesk font-bold text-lg text-white mb-1">
                  {item.org}
                </h3>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: '#7c3aed' }}
                >
                  {item.role}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2">
                  {item.bullets.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      <span className="mt-px flex-shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        –
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
