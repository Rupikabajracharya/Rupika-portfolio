import portfolioData from '../data/portfolioData'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-24 px-6" style={{ backgroundColor: '#07071a' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4">
          My Journey
        </p>
        <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-12">
          Experience
        </h2>

        <div className="max-w-2xl">
          {experience.map((item) => (
            <div key={item.org} className="reveal flex gap-6">
              {/* Node + line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-full border flex items-center justify-center font-grotesk font-bold text-sm text-violet-400"
                  style={{
                    background: 'rgba(124,58,237,0.15)',
                    borderColor: 'rgba(124,58,237,0.4)',
                  }}
                >
                  {item.logoLetter}
                </div>
                {!item.isLast && (
                  <div
                    className="w-px flex-1 min-h-[3rem] my-2"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(124,58,237,0.4), transparent)',
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div className={item.isLast ? 'flex-1' : 'flex-1 pb-10'}>
                <span
                  className="text-xs text-violet-400 font-medium rounded-full px-3 py-1"
                  style={{ background: 'rgba(124,58,237,0.15)' }}
                >
                  {item.tag}
                </span>
                <h3 className="font-grotesk font-bold text-xl text-white mt-3 mb-1">
                  {item.org}
                </h3>
                <p className="text-violet-400 text-sm font-medium mb-3">{item.role}</p>
                <p className="text-white/45 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
