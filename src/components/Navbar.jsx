import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import portfolioData from '../data/portfolioData'
import useActiveSection from '../hooks/useActiveSection'
import useMobileMenu from '../hooks/useMobileMenu'

export default function Navbar() {
  const { nav } = portfolioData
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()
  const { isOpen, toggle, close } = useMobileMenu()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07071a]/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-grotesk font-bold text-xl text-white tracking-wider"
        >
          {nav.logo}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-white'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={toggle}
          className="md:hidden text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden border-t border-white/5"
          style={{ background: 'rgba(7,7,26,0.97)', backdropFilter: 'blur(12px)' }}
        >
          <nav className="flex flex-col px-6 py-5 gap-5">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
