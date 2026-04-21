import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ]

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        {/* Logo */}
        <a href="#inicio" className="navbar__logo" onClick={() => handleNavClick('#inicio')}>
          <div className="navbar__logo-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="2" y="8" width="10" height="26" fill="#F5C518" rx="1"/>
              <rect x="14" y="4" width="10" height="30" fill="#C0C0C0" rx="1"/>
              <rect x="26" y="12" width="8" height="22" fill="#F5C518" rx="1"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">IUC<span className="navbar__logo-amp">&amp;</span>CO</span>
            <span className="navbar__logo-sub">Ingenieros Unidos</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="navbar__cta btn-primary"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contacto') }}
        >
          Cotizar Proyecto
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          className="btn-primary navbar__mobile-cta"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contacto') }}
        >
          Cotizar Proyecto
        </a>
      </div>
    </nav>
  )
}

export default Navbar
