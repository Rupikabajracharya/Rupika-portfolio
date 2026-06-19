import portfolioData from '../data/portfolioData'

export default function Footer() {
  const { footer } = portfolioData

  return (
    <footer
      className="py-8 text-center border-t"
      style={{ backgroundColor: '#07071a', borderColor: 'rgba(255,255,255,0.05)' }}
    >
      <p className="text-white/30 text-sm">
        © <span className="grad-text">{footer.name}</span>. All rights reserved.
      </p>
    </footer>
  )
}
