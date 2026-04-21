import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [loaded, setLoaded] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContact = () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="hero">
      {/* Background */}
      <div className="hero__bg" ref={videoRef}>
        <img src="/hero_bg.png" alt="IUC&CO construcción" className="hero__bg-img" />
        <div className="hero__bg-overlay"></div>
        <div className="hero__bg-grid"></div>
      </div>

      {/* Content */}
      <div className={`hero__content container ${loaded ? 'hero__content--visible' : ''}`}>
        <div className="hero__badge section-badge">
          Ingeniería de Excelencia
        </div>

        <h1 className="hero__title">
          Construimos el<br />
          <span className="hero__title-highlight">Futuro</span> con<br />
          Precisión
        </h1>

        <p className="hero__description">
          Más de 20 años transformando visiones en estructuras reales.<br />
          Proyectos residenciales, comerciales e infraestructura de alto impacto.
        </p>

        <div className="hero__actions">
          <button className="btn-primary hero__btn-primary" onClick={scrollToContact} id="hero-cta-primary">
            <span>Cotizar Proyecto</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn-secondary hero__btn-secondary" onClick={scrollToProjects} id="hero-cta-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <span>Ver Proyectos</span>
          </button>
        </div>

        {/* Trust badges */}
        <div className="hero__trust">
          <div className="hero__trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>ISO 9001 Certificada</span>
          </div>
          <div className="hero__trust-divider"></div>
          <div className="hero__trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Garantía Total</span>
          </div>
          <div className="hero__trust-divider"></div>
          <div className="hero__trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>Entrega a Tiempo</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line"></div>
        <span>Scroll</span>
      </div>

      {/* Floating cards */}
      <div className="hero__floating-card hero__floating-card--left">
        <div className="hero__floating-icon">🏗️</div>
        <div>
          <div className="hero__floating-num">+200</div>
          <div className="hero__floating-label">Proyectos</div>
        </div>
      </div>
      <div className="hero__floating-card hero__floating-card--right">
        <div className="hero__floating-icon">⭐</div>
        <div>
          <div className="hero__floating-num">4.9/5</div>
          <div className="hero__floating-label">Satisfacción</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
