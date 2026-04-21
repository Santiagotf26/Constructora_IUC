import './Testimonials.css'

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    role: 'Gerente General, Grupo Inmobiliario CR',
    avatar: 'CR',
    rating: 5,
    text: 'IUC&CO superó todas nuestras expectativas. El Conjunto Residencial El Parque se entregó antes de lo programado y con una calidad impecable. Sin duda, los mejores con quienes hemos trabajado.',
  },
  {
    name: 'María Elena Vargas',
    role: 'Directora de Infraestructura, Gobernación',
    avatar: 'MV',
    rating: 5,
    text: 'La profesionalidad del equipo de IUC&CO es incomparable. Gestionaron todos los aspectos del viaducto con precisión milimétrica. Cumplieron cada especificación técnica y plazo establecido.',
  },
  {
    name: 'Andrés Felipe Torres',
    role: 'CEO, Torres & Asociados',
    avatar: 'AT',
    rating: 5,
    text: 'Contratamos a IUC&CO para la Torre Empresarial Centro y los resultados fueron extraordinarios. Su capacidad técnica y transparencia en el proceso constructivo los distingue del sector.',
  },
]

const Stars = ({ count }: { count: number }) => (
  <div className="testimonial__stars">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5C518" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  return (
    <section className="testimonials">
      {/* Background */}
      <div className="testimonials__bg">
        <div className="testimonials__bg-gradient"></div>
      </div>

      <div className="container">
        <div className="testimonials__header">
          <div className="section-badge">Testimonios</div>
          <h2 className="section-title">
            Lo que Dicen Nuestros <span>Clientes</span>
          </h2>
          <div className="gold-divider" style={{ margin: '0 auto 0' }}></div>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card" style={{ '--delay': `${i * 0.15}s` } as React.CSSProperties}>
              <div className="testimonial__quote">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="rgba(245,197,24,0.2)">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              <Stars count={t.rating} />
              <p className="testimonial__text">"{t.text}"</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{t.avatar}</div>
                <div>
                  <div className="testimonial__name">{t.name}</div>
                  <div className="testimonial__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
