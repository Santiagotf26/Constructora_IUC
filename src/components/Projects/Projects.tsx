import { useEffect, useRef, useState } from 'react'
import './Projects.css'

const projects = [
  {
    image: '/project_residential.png',
    category: 'Residencial',
    title: 'Conjunto Residencial El Parque',
    location: 'Bogotá, Colombia',
    year: '2024',
    area: '12,500 m²',
    description: 'Conjunto residencial de lujo con 80 apartamentos y zonas comunes de primer nivel.',
  },
  {
    image: '/project_commercial.png',
    category: 'Comercial',
    title: 'Torre Empresarial Centro',
    location: 'Medellín, Colombia',
    year: '2023',
    area: '28,000 m²',
    description: 'Edificio de oficinas clase A con 22 pisos y certificación LEED Gold.',
  },
  {
    image: '/project_infrastructure.png',
    category: 'Infraestructura',
    title: 'Viaducto Regional Norte',
    location: 'Cundinamarca, Colombia',
    year: '2024',
    area: '2.3 km',
    description: 'Viaducto de conexión regional con tecnología de avanzada en diseño sísmico.',
  },
]

const Projects = () => {
  const [visible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
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
    <section id="proyectos" className="projects" ref={ref}>
      <div className="container">
        <div className="projects__header">
          <div>
            <div className="section-badge">Portafolio</div>
            <h2 className="section-title">
              Proyectos que <span>Hablan</span> por Sí Solos
            </h2>
            <div className="gold-divider"></div>
          </div>
          <p className="section-subtitle projects__subtitle">
            Una selección de nuestros proyectos más destacados, reflejo de nuestra capacidad técnica y compromiso con la calidad.
          </p>
        </div>

        <div className={`projects__grid ${visible ? 'projects__grid--visible' : ''}`}>
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card ${activeIndex === i ? 'project-card--active' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{ '--delay': `${i * 0.15}s` } as React.CSSProperties}
            >
              <div className="project-card__img-wrap">
                <img src={project.image} alt={project.title} className="project-card__img" />
                <div className="project-card__img-overlay"></div>
                <span className="project-card__category">{project.category}</span>
              </div>
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__year">{project.year}</span>
                  <span className="project-card__sep">·</span>
                  <span className="project-card__area">{project.area}</span>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {project.location}
                </div>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__footer">
                  <button className="project-card__btn" id={`project-btn-${i}`}>
                    Ver detalles
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="projects__cta">
          <p>¿Quiere ver más proyectos?</p>
          <a href="#contacto" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Contactar para más información
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
