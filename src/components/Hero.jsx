import portfolioData from '../data/portfolioData'
import rupikaPhoto from '../assets/Rupika.jpg'

export default function Hero() {
  const { owner } = portfolioData

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ backgroundColor: '#07071a' }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl animate-blobFloat pointer-events-none"
        style={{ background: 'rgba(124,58,237,0.18)', animationDelay: '0s' }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl animate-blobFloat pointer-events-none"
        style={{ background: 'rgba(236,72,153,0.1)', animationDelay: '3.5s' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        {/* Left — text content */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-white/70 mb-6"
            style={{ background: 'rgba(255,255,255,0.04)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-dotPulse" />
            {owner.availabilityBadge}
          </div>

          {/* Name */}
          <h1 className="font-grotesk font-extrabold leading-[1.1] mb-5">
            <span className="block text-5xl md:text-[96px] text-white">{owner.name.split(' ')[0]}</span>
            <span className="block text-5xl md:text-[96px] grad-text">{owner.name.split(' ')[1]}</span>
          </h1>

          <p className="text-white/50 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
            {owner.tagline}
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="font-grotesk font-semibold px-6 py-3 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(130deg, #7c3aed, #ec4899)' }}
            >
              Hire Me!
            </a>
            <a
              href="#contact"
              className="font-grotesk font-semibold px-6 py-3 rounded-full border text-white/80 text-sm hover:text-white transition-all"
              style={{ borderColor: 'rgba(124,58,237,0.5)' }}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right — profile visual */}
        <div className="relative flex items-center justify-center w-72 h-72 md:w-[540px] md:h-[540px] flex-shrink-0">
          {/* Glow behind ring */}
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)' }}
          />

          {/* Spinning gradient ring */}
          <div className="relative ring-grad rounded-full p-[3px] w-64 h-64 md:w-[380px] md:h-[380px]">
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{ background: '#07071a' }}
            >
              <img
                src={rupikaPhoto}
                alt={owner.name}
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>

          {/* Floating chips */}
          <div
            className="absolute left-0 top-1/4 border border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 animate-chipFloat whitespace-nowrap"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', animationDelay: '0s' }}
          >
            ✦ UI / UX
          </div>
          <div
            className="absolute right-0 top-1/3 border border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 animate-chipFloat whitespace-nowrap"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', animationDelay: '0.3s' }}
          >
            ✦ Design
          </div>
          <div
            className="absolute left-1/4 -bottom-2 border border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 animate-chipFloat whitespace-nowrap"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', animationDelay: '0.6s' }}
          >
            ✦ Creative
          </div>
        </div>
      </div>
    </section>
  )
}
