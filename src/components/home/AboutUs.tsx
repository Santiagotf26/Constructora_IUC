import { Award, Shield, Leaf, Users } from '../icons'

const AboutUs = () => {
  const stats = [
    { label: 'Años de Trayectoria', value: '20+' },
    { label: 'Familias Felices', value: '500+' },
    { label: 'Proyectos Entregados', value: '15+' },
  ]

  const pillars = [
    {
      Icon: Award,
      title: 'Trayectoria en Boyacá',
      desc: 'Llevamos más de dos décadas impulsando el crecimiento inmobiliario de Duitama, Sogamoso y Tunja con proyectos emblemáticos.',
    },
    {
      Icon: Leaf,
      title: 'Compromiso Sostenible',
      desc: 'Nuestros desarrollos incorporan ecotecnologías y diseño bioclimático, reduciendo el consumo de servicios y la huella ecológica.',
    },
    {
      Icon: Shield,
      title: 'Calidad & Garantía Legal',
      desc: 'Todas las obras cumplen estrictamente la norma sismorresistente NSR-10, respaldadas por fiducias reconocidas para tu total tranquilidad.',
    },
    {
      Icon: Users,
      title: 'Asesoría Personalizada',
      desc: 'Te acompañamos en todo el proceso de compra, desde la selección del plan de pagos hasta la firma de las escrituras de tu hogar.',
    },
  ]

  return (
    <section id="nosotros" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative Blur Glow */}
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#6E7E65]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Image & Stats Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#6E7E65]/8 shadow-gold-lg aspect-[4/3] bg-bg-base">
              <img
                src="/about_team.png"
                alt="Equipo IUC&CO Construcciones"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-around p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-md border border-white/20">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="font-display font-extrabold text-2xl text-[#6E7E65]">{stat.value}</div>
                    <div className="text-[10px] text-[#7C837E] font-bold uppercase tracking-wider mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Text & Pillars Column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="pill mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6E7E65] block"/>
                Sobre Nosotros
              </div>
              <h2 className="font-display font-black text-3xl lg:text-4xl text-[#1C201E] tracking-tight leading-tight mt-2">
                CONSTRUIMOS CON CONFIANZA,<br />
                <span className="text-gold">DISEÑAMOS PARA TU FUTURO</span>
              </h2>
              <p className="text-[#454C47] text-sm leading-relaxed mt-4 font-light">
                En IUC&CO no solo levantamos muros; creamos hogares pensados para durar generaciones. Nos apasiona el desarrollo de Boyacá, implementando innovación arquitectónica que respeta y complementa el hermoso entorno natural de la provincia del Tundama.
              </p>
            </div>

            {/* Grid of Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6E7E65]/8 flex items-center justify-center text-[#6E7E65] flex-shrink-0">
                    <pillar.Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-[#1C201E] text-sm mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-[#7C837E] text-xs leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs
