import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ArrowRight } from '../icons'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/',             label: 'Inicio' },
    { to: '/apartamentos', label: 'Apartamentos' },
    { to: '/#proyectos',   label: 'Proyectos' },
    { to: '/#contacto',    label: 'Contacto' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'glass-dark border-b border-white/6 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* ── Logo ──────────────────────────────── */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
          <img
            src="/logo.png"
            alt="IUC&CO"
            className={`${scrolled ? 'h-14' : 'h-16'} w-auto object-contain transition-all duration-300 group-hover:brightness-110 drop-shadow-[0_0_8px_rgba(232,166,23,0.4)]`}
          />
        </Link>

        {/* ── Desktop links ──────────────────────── */}
        <ul className="hidden lg:flex items-center">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive && !link.to.includes('#')
                      ? 'text-[#E8A617]'
                      : 'text-white/55 hover:text-white hover:bg-white/4'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── CTA ───────────────────────────────── */}
        <button
          onClick={() => navigate('/apartamentos')}
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gold text-[#0D0F14] font-display font-bold text-sm rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-gold cursor-pointer"
        >
          Ver Apartamentos
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>

        {/* ── Hamburger ─────────────────────────── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Menú"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block h-px bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block h-px bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </div>
        </button>
      </div>

      {/* ── Mobile menu ──────────────────────────── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-6 pb-5 pt-3 flex flex-col gap-1 glass-dark border-t border-white/5">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-4 text-sm font-medium text-white/60 hover:text-[#E8A617] border-b border-white/5 transition-colors"
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => { navigate('/apartamentos'); setMenuOpen(false) }}
            className="mt-3 px-5 py-3 bg-gold text-[#0D0F14] font-display font-bold text-sm rounded-lg cursor-pointer"
          >
            Ver Apartamentos
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
