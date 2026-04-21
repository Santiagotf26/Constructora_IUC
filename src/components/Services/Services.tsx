import { useEffect, useRef, useState } from 'react'
import './Services.css'

const services = [
  {
    icon: '🏙️',
    title: 'Construcción Residencial',
    description: 'Diseñamos y construimos casas y conjuntos residenciales de alta calidad, adaptados a las necesidades de cada familia.',
    features: ['Casas unifamiliares', 'Conjuntos cerrados', 'Apartamentos premium', 'Renovaciones integrales'],
    color: '#F5C518',
  },
  {
    icon: '🏢',
    title: 'Proyectos Comerciales',
    description: 'Edificios de oficinas, centros comerciales y espacios corporativos con diseño funcional y arquitectura de impacto.',
    features: ['Oficinas corporativas', 'Centros comerciales', 'Hoteles y hospitales', 'Bodegas industriales'],
    color: '#C0C0C0',
  },
  {
    icon: '🌉',
    title: 'Infraestructura',
    description: 'Obras civiles de gran envergadura: puentes, vías, acueductos y proyectos de impacto regional.',
    features: ['Puentes y viaductos', 'Vías y carreteras', 'Redes de alcantarillado', 'Obras hidráulicas'],
    color: '#F5C518',
  },
  {
    icon: '📐',
    title: 'Diseño Arquitectónico',
    description: 'Servicio integral de diseño arquitectónico, planos estructurales y gestión de licencias de construcción.',
    features: ['Diseño y planos', 'Renders 3D', 'Licencias y permisos', 'Interventoría'],
    color: '#C0C0C0',
  },
  {
    icon: '🔧',
    title: 'Remodelación',
    description: 'Transformamos espacios existentes con remodelaciones completas que mejoran la funcionalidad y el valor del inmueble.',
    features: ['Remodelación total', 'Acabados premium', 'Instalaciones eléctricas', 'Plomería y gas'],
    color: '#F5C518',
  },
  {
    icon: '📊',
    title: 'Consultoría Técnica',
    description: 'Asesoría especializada en ingeniería civil, análisis estructural y gestión de proyectos de construcción.',
    features: ['Estudios de suelos', 'Diseño estructural', 'Supervisión de obras', 'Presupuestación'],
    color: '#C0C0C0',
  },
]

const Services = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" className="services" ref={ref}>
      {/* Background decorations */}
      <div className="services__bg-deco"></div>

      <div className="container">
        <div className="services__header">
          <div className="section-badge">Nuestros Servicios</div>
          <h2 className="section-title">
            Soluciones Integrales de <span>Construcción</span>
          </h2>
          <p className="section-subtitle">
            Ofrecemos un portafolio completo de servicios para cada etapa de su proyecto, 
            desde la concepción hasta la entrega final.
          </p>
        </div>

        <div className={`services__grid ${visible ? 'services__grid--visible' : ''}`}>
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card"
              style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}
            >
              <div className="service-card__icon-wrap" style={{ '--accent': service.color } as React.CSSProperties}>
                <span className="service-card__icon">{service.icon}</span>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <ul className="service-card__features">
                {service.features.map((f, j) => (
                  <li key={j}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="service-card__hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
