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

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-8 py-20">

        {/* Left — text content */}
        <div className="flex-1 max-w-xl text-center md:text-left">

          {/* Badge */}
          <div
            className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 mb-6 tracking-wide"
            style={{
              background: 'rgba(124,58,237,0.22)',
              border: '1px solid rgba(167,100,255,0.45)',
            }}
          >
            {owner.badge}
          </div>

          {/* Name */}
          <h1 className="font-playfair font-bold mb-4" style={{ lineHeight: 1.05 }}>
            <span className="block text-[64px] md:text-[88px] text-white">
              {owner.name.split(' ')[0]}
            </span>
            <span
              className="block text-[64px] md:text-[88px] italic grad-text"
              style={{ paddingBottom: '10px' }}
            >
              {owner.name.split(' ')[1]}
            </span>
          </h1>

          {/* Tagline — two lines matching the image */}
          <p className="text-white font-semibold text-lg md:text-xl leading-snug mb-2 max-w-md mx-auto md:mx-0">
            {owner.tagline}
          </p>
          <p className="text-white/50 text-sm md:text-base mb-8 max-w-sm mx-auto md:mx-0 leading-relaxed">
            {owner.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-grotesk font-semibold px-7 py-3 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(130deg, #7c3aed, #ec4899)' }}
            >
              View Work ↓
            </a>
            <a
              href="#contact"
              className="font-grotesk font-semibold px-7 py-3 rounded-full text-white/85 text-sm hover:text-white transition-colors"
              style={{ border: '1.5px solid rgba(255,255,255,0.22)' }}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right — profile visual */}
        {/*
          Outer box: 420×420 (desktop). Ring: 310×310 centered → 55 px margin each side.
          Ring center in box: (210, 210), radius 155.
          "UI/UX Design" chip: placed at ~1:30 o'clock (top-right) — close to ring edge.
          "Figma" chip:        placed at ~7:30 o'clock (bottom-left) — close to ring edge.
        */}
        <div
          className="relative flex items-center justify-center flex-shrink-0 w-[300px] h-[300px] md:w-[420px] md:h-[420px]"
        >
          {/* Glow behind ring */}
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 68%)' }}
          />

          {/* Spinning gradient ring */}
          <div
            className="ring-grad rounded-full p-[3px] w-[230px] h-[230px] md:w-[310px] md:h-[310px]"
          >
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

          {/* Chip — UI/UX Design (top-right, ~1:30 o'clock) */}
          <div
            className="absolute hidden md:flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-white/90 whitespace-nowrap"
            style={{
              background: 'rgba(10,8,28,0.82)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(10px)',
              top: '76px',
              right: '10px',
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: '#a855f7' }}
            />
            UI/UX Design
          </div>

          {/* Chip — Figma (bottom-left, ~7:30 o'clock) */}
          <div
            className="absolute hidden md:flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-white/90 whitespace-nowrap"
            style={{
              background: 'rgba(10,8,28,0.82)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(10px)',
              bottom: '80px',
              left: '38px',
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: '#22d3ee' }}
            />
            Figma
          </div>
        </div>
      </div>
    </section>
  )
}
