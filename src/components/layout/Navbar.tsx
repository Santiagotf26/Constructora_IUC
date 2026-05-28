import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { ArrowRight } from '../icons'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const hash = to.split('#')[1]
    
    if (location.pathname === '/') {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/#' + hash)
    }
  }

  const navLinks = [
    { to: '/',                     label: 'Inicio' },
    { to: '/apartamentos',         label: 'Catálogo' },
    { to: '/#proyecto-destacado',  label: 'Proyecto Destacado' },
    { to: '/#contacto',            label: 'Contacto' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-border-subtle py-2 shadow-gold'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* ── Logo ──────────────────────────────── */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
          <img
            src="/logo.png"
            alt="IUC&CO"
            className={`${scrolled ? 'h-11' : 'h-14'} w-auto object-contain transition-all duration-300 group-hover:brightness-105`}
          />
        </Link>

        {/* ── Desktop links ──────────────────────── */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.to}>
              {link.to.startsWith('/#') ? (
                <a
                  href={link.to}
                  onClick={(e) => handleHashClick(e, link.to)}
                  className="px-4 py-2 text-sm font-medium rounded-lg text-[#454C47] hover:text-[#6E7E65] hover:bg-[#6E7E65]/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-[#6E7E65] font-semibold bg-[#6E7E65]/6'
                        : 'text-[#454C47] hover:text-[#6E7E65] hover:bg-[#6E7E65]/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* ── CTA ───────────────────────────────── */}
        <button
          onClick={() => navigate('/apartamentos')}
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#6E7E65] text-white font-display font-semibold text-sm rounded-xl transition-all duration-200 hover:bg-[#5E6D56] hover:-translate-y-px hover:shadow-lg cursor-pointer"
        >
          Explorar Unidades
          <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
        </button>

        {/* ── Hamburger ─────────────────────────── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-[#6E7E65]/5 transition-colors"
          aria-label="Menú"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-[#1C201E] rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block h-0.5 bg-[#1C201E] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block h-0.5 bg-[#1C201E] rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </div>
        </button>
      </div>

      {/* ── Mobile menu ──────────────────────────── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[350px] opacity-100 border-b border-border-subtle shadow-gold' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-6 pb-5 pt-3 flex flex-col gap-1 bg-[#FFFFFF] shadow-sm">
          {navLinks.map(link => (
            link.to.startsWith('/#') ? (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => handleHashClick(e, link.to)}
                className="py-3 px-4 text-sm font-medium text-[#454C47] hover:text-[#6E7E65] border-b border-border/40 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 text-sm font-medium text-[#454C47] hover:text-[#6E7E65] border-b border-border/40 transition-colors"
              >
                {link.label}
              </NavLink>
            )
          ))}
          <button
            onClick={() => { navigate('/apartamentos'); setMenuOpen(false) }}
            className="mt-3 px-5 py-3 bg-[#6E7E65] text-white font-display font-semibold text-sm rounded-xl hover:bg-[#5E6D56] cursor-pointer"
          >
            Explorar Unidades
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
