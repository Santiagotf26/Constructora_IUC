import { useEffect, useRef, useState } from 'react'
import './About.css'

const values = [
  { icon: '🎯', title: 'Excelencia', desc: 'Estándares de calidad superiores en cada etapa del proyecto.' },
  { icon: '💡', title: 'Innovación', desc: 'Tecnologías de vanguardia y metodologías modernas.' },
  { icon: '🤝', title: 'Compromiso', desc: 'Dedicación total con cada cliente y cada obra.' },
  { icon: '🌱', title: 'Sostenibilidad', desc: 'Construcción responsable con el medio ambiente.' },
]

const About = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="about" ref={ref}>
      <div className="container">
        <div className={`about__grid ${visible ? 'about__grid--visible' : ''}`}>
          {/* Left: Image */}
          <div className="about__image-wrapper">
            <div className="about__image-frame">
              <img src="/about_team.png" alt="Equipo IUC&CO" className="about__image" />
              <div className="about__image-overlay"></div>
            </div>
            {/* Experience badge */}
            <div className="about__exp-badge">
              <div className="about__exp-num">20</div>
              <div className="about__exp-text">Años de<br/>Experiencia</div>
            </div>
            {/* Decorative */}
            <div className="about__deco-corner"></div>
          </div>

          {/* Right: Content */}
          <div className="about__content">
            <div className="section-badge">Sobre Nosotros</div>
            <h2 className="section-title">
              Líderes en <span>Ingeniería</span> y Construcción
            </h2>
            <div className="gold-divider"></div>
            <p className="about__text">
              En <strong>IUC&CO</strong> — Ingenieros Unidos Construcciones & CO, somos más que una constructora. 
              Somos artífices del desarrollo urbano, comprometidos con la excelencia técnica y el cumplimiento 
              irrestricto de cada proyecto.
            </p>
            <p className="about__text">
              Nuestro equipo de ingenieros, arquitectos y especialistas trabaja con la más alta tecnología 
              para garantizar que cada estructura no solo cumpla los estándares técnicos, sino que supere 
              las expectativas de nuestros clientes.
            </p>

            {/* Values */}
            <div className="about__values">
              {values.map((val, i) => (
                <div key={i} className="about__value-item">
                  <div className="about__value-icon">{val.icon}</div>
                  <div>
                    <div className="about__value-title">{val.title}</div>
                    <div className="about__value-desc">{val.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contacto" className="btn-primary about__cta" onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Conocer más
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
