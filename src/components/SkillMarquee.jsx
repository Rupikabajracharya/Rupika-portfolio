const SKILLS = [
  'Wireframing', 'Visual Design', 'HTML & CSS', 'JavaScript',
  'Java', 'Canva', 'Figma', 'UI Design', 'UX Research', 'C',
]

const SEP = (
  <span
    className="mx-6 text-violet-500 select-none"
    aria-hidden="true"
    style={{ fontSize: '0.45rem' }}
  >
    ◆
  </span>
)

export default function SkillMarquee() {
  const items = [...SKILLS, ...SKILLS]

  return (
    <div
      className="overflow-hidden py-4"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(255,255,255,0.02)',
      }}
    >
      <div className="marquee-track">
        {items.map((skill, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {skill}
            </span>
            {SEP}
          </span>
        ))}
      </div>
    </div>
  )
}
