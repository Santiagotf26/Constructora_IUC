import './Footer.css'

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ]

  const services = [
    'Construcción Residencial',
    'Proyectos Comerciales',
    'Infraestructura',
    'Remodelación',
    'Consultoría Técnica',
    'Diseño Arquitectónico',
  ]

  return (
    <footer className="footer">
      <div className="footer__top-line"></div>
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                  <rect x="2" y="8" width="10" height="26" fill="#F5C518" rx="1"/>
                  <rect x="14" y="4" width="10" height="30" fill="#C0C0C0" rx="1"/>
                  <rect x="26" y="12" width="8" height="22" fill="#F5C518" rx="1"/>
                </svg>
              </div>
              <div>
                <div className="footer__logo-name">IUC<span>&amp;</span>CO</div>
                <div className="footer__logo-tagline">Ingenieros Unidos</div>
              </div>
            </div>
            <p className="footer__brand-text">
              Construimos el futuro con excelencia, innovación y compromiso. 
              Más de 20 años transformando visiones en estructuras que perduran.
            </p>
            <div className="footer__certifications">
              <span className="footer__cert-badge">ISO 9001</span>
              <span className="footer__cert-badge">RETIE</span>
              <span className="footer__cert-badge">Camacol</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navegación</h4>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Servicios</h4>
            <ul className="footer__links">
              {services.map((s) => (
                <li key={s}>
                  <a href="#servicios" className="footer__link" onClick={(e) => { e.preventDefault(); scrollTo('#servicios') }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__col">
            <h4 className="footer__col-title">Boletín Informativo</h4>
            <p className="footer__newsletter-text">
              Recibe noticias sobre proyectos, tendencias y oportunidades del sector.
            </p>
            <div className="footer__newsletter-form">
              <input
                type="email"
                id="footer-email"
                className="footer__newsletter-input"
                placeholder="tu@email.com"
              />
              <button className="footer__newsletter-btn" id="footer-subscribe">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} IUC&CO — Ingenieros Unidos Construcciones & CO. Todos los derechos reservados.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Política de Privacidad</a>
            <a href="#" className="footer__bottom-link">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
