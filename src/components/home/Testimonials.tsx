import { Star } from '../icons'

const testimonials = [
  {
    name: 'Carlos Mendoza y Familia',
    role: 'Propietarios en La Floresta',
    city: 'Duitama',
    avatar: 'CM',
    content: 'La mejor decisión de inversión que hemos tomado. El barrio La Floresta tiene un crecimiento y tranquilidad inigualables. Los acabados del apartamento superaron nuestras expectativas y las tardes junto a las fogatas del rooftop son mágicas.',
    rating: 5,
  },
  {
    name: 'Dra. Andrea Silva',
    role: 'Compradora Altos del Prado',
    city: 'Tunja / Duitama',
    avatar: 'AS',
    content: 'Como profesional de la salud, valoró muchísimo el silencio y la seguridad. Vivir a solo pasos de Innovo Plaza y mi centro de consulta me ha facilitado la vida. La seriedad constructiva y el respaldo de la fiducia nos dieron total tranquilidad.',
    rating: 5,
  },
  {
    name: 'Fernando Rojas y Sra.',
    role: 'Inversionistas Mirador de la Villa',
    city: 'Bogotá (Origen Boyacense)',
    avatar: 'FR',
    content: 'Queríamos regresar a nuestra tierra Boyacá a un espacio campestre sin perder las comodidades modernas. La ubicación al lado de Pueblito Boyacense nos enamoró. El confort bioclimático del apartamento es espectacular.',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#D97E60]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="pill mb-4" style={{ margin: '0 auto' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E7E65] block"/>
            Clientes Satisfechos
          </div>
          <h2 className="font-display font-black text-[#1C201E] tracking-tight leading-tight mt-2 text-3xl lg:text-5xl">
            HISTORIAS QUE INSPIRAN<br />
            <span className="text-gold font-extrabold uppercase">CONFIANZA</span>
          </h2>
          <p className="text-[#454C47] text-sm leading-relaxed mt-4 font-light">
            Nuestros clientes nos eligen por la calidad constructiva, el cumplimiento en las entregas y la seriedad en cada uno de nuestros procesos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#6E7E65]/8 p-8 rounded-3xl shadow-gold flex flex-col justify-between hover:border-[#6E7E65]/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top part: stars and content */}
              <div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-[#DFBA6B] fill-current" />
                  ))}
                </div>
                <p className="text-[#454C47] text-sm leading-relaxed font-light italic">
                  "{test.content}"
                </p>
              </div>

              {/* Bottom part: Author Info */}
              <div className="flex items-center gap-4 mt-8 pt-4 border-t border-[#6E7E65]/5">
                <div className="w-12 h-12 rounded-full bg-[#6E7E65]/10 border border-[#6E7E65]/15 flex items-center justify-center font-display font-black text-[#6E7E65] text-sm flex-shrink-0">
                  {test.avatar}
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-extrabold text-sm text-[#1C201E] leading-tight truncate">
                    {test.name}
                  </h4>
                  <p className="text-[11px] text-[#7C837E] font-semibold mt-0.5">
                    {test.role} · <span className="text-[#D97E60]">{test.city}</span>
                  </p>
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
