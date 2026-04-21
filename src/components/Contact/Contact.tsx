import { useState } from 'react'
import './Contact.css'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', service: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Dirección',
      value: 'Av. El Dorado #68C-61, Bogotá, Colombia',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      label: 'Teléfono',
      value: '+57 (1) 800-IUC-CO',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email',
      value: 'info@iucco.com.co',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      label: 'Horario',
      value: 'Lun - Vie: 8:00am - 6:00pm',
    },
  ]

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact__header">
          <div className="section-badge">Contacto</div>
          <h2 className="section-title">
            Hablemos de su <span>Próximo Proyecto</span>
          </h2>
          <p className="section-subtitle">
            Cuéntenos su visión y nuestro equipo de expertos le presentará una propuesta personalizada.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info Panel */}
          <div className="contact__info">
            <h3 className="contact__info-title">Información de Contacto</h3>
            <div className="contact__info-list">
              {contactInfo.map((item, i) => (
                <div key={i} className="contact__info-item">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <div className="contact__info-label">{item.label}</div>
                    <div className="contact__info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="contact__social">
              <span className="contact__social-label">Síguenos en</span>
              <div className="contact__social-links">
                {['LinkedIn', 'Instagram', 'Facebook'].map((s) => (
                  <a key={s} href="#" className="contact__social-link" id={`social-${s.toLowerCase()}`}>
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Decoration */}
            <div className="contact__info-deco">
              <div className="contact__info-deco-circle"></div>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <h3>¡Mensaje Enviado!</h3>
                <p>Gracias por contactarnos. Un especialista de IUC&CO se comunicará con usted dentro de las próximas 24 horas.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name" className="contact__label">Nombre completo *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className="contact__input"
                      placeholder="Ej: Juan García"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-email" className="contact__label">Correo electrónico *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="contact__input"
                      placeholder="correo@empresa.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-phone" className="contact__label">Teléfono</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className="contact__input"
                      placeholder="+57 300 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-service" className="contact__label">Tipo de proyecto *</label>
                    <select
                      id="contact-service"
                      name="service"
                      className="contact__input contact__select"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccionar servicio</option>
                      <option value="residencial">Construcción Residencial</option>
                      <option value="comercial">Proyectos Comerciales</option>
                      <option value="infraestructura">Infraestructura</option>
                      <option value="remodelacion">Remodelación</option>
                      <option value="consultoria">Consultoría Técnica</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">Descripción del proyecto *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="contact__input contact__textarea"
                    placeholder="Cuéntenos sobre su proyecto: ubicación, dimensiones, presupuesto aproximado..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary contact__submit"
                  id="contact-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="contact__spinner"></span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Cotización Gratuita
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
