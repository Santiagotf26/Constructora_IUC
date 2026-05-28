import { TrendUp, MapPin, Ruler, CreditCard, Tree, ArrowRight } from '../icons'

const benefits = [
  {
    Icon: TrendUp,
    title: 'Alta Valorización',
    desc: 'Duitama se consolida como el principal eje comercial e industrial de Boyacá. Invertir en La Floresta garantiza un retorno sólido respaldado por la constante valorización del sector residencial premium.',
    highlight: true,
  },
  {
    Icon: MapPin,
    title: 'Ubicación Estratégica',
    desc: 'Situado en la prestigiosa zona de La Floresta. Conectividad directa con las avenidas principales (Avenida de las Américas), centros comerciales (CC Innovo Plaza) y las rutas turísticas clave de Boyacá.',
    highlight: false,
  },
  {
    Icon: Ruler,
    title: 'Diseño Moderno & Bioclimático',
    desc: 'Arquitectura premium inteligente que maximiza la captura de luz solar y ofrece un excelente confort térmico natural, ideal para el clima de Duitama. Acabados elegantes e importados.',
    highlight: false,
  },
  {
    Icon: CreditCard,
    title: 'Financiamiento Flexible',
    desc: 'Múltiples opciones y alianzas activas con las entidades financieras líderes de Colombia para agilizar tu preaprobación y facilitarte las mejores tasas del mercado hipotecario.',
    highlight: false,
  },
  {
    Icon: Tree,
    title: 'Calidad de Vida Superior',
    desc: 'Combina aire puro, seguridad reforzada 24/7 y extraordinarias zonas comunes (rooftop campestre con fogatas y sendero verde) diseñadas para el bienestar físico y mental de tu familia.',
    highlight: true,
  },
]

const WhyUs = () => {
  return (
    <section id="beneficios" className="py-24 bg-bg-base relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#6E7E65]/5 blur-[120px] pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="pill mb-4" style={{ margin: '0 auto' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E7E65] block"/>
            Valorización Inmobiliaria
          </div>
          <h2 className="font-display font-black text-[#1C201E] tracking-tight mt-4 leading-tight">
            <span className="block text-3xl lg:text-5xl font-light">¿Por qué invertir en</span>
            <span className="block text-4xl lg:text-6xl text-gold font-extrabold mt-1">DUITAMA BOYACÁ?</span>
          </h2>
          <p className="text-[#454C47] text-sm mt-4 leading-relaxed font-light">
            Inversión inteligente en un entorno seguro y próspero, diseñado para ofrecer el máximo confort y rentabilidad a mediano y largo plazo.
          </p>
        </div>

        {/* Optimized Flexible Layout - 5 cards centering nicely */}
        <div className="flex flex-wrap gap-6 justify-center items-stretch">
          {benefits.map(({ Icon, title, desc, highlight }, i) => (
            <div
              key={i}
              className={`group relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                highlight
                  ? 'bg-white border-[#6E7E65]/20 shadow-gold hover:-translate-y-1 hover:border-[#6E7E65]/40'
                  : 'bg-white/60 border-[#6E7E65]/8 hover:-translate-y-1 hover:border-[#6E7E65]/20 hover:bg-white'
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  highlight
                    ? 'bg-[#D97E60]/10 text-[#D97E60]'
                    : 'bg-[#6E7E65]/10 text-[#6E7E65]'
                }`}>
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="font-display font-extrabold text-[#1C201E] text-lg mb-3 group-hover:text-[#6E7E65] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-[#454C47] text-sm leading-relaxed font-light">{desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#6E7E65]/5 flex justify-end">
                <ArrowRight className="w-5 h-5 text-[#6E7E65] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0" strokeWidth={2} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
