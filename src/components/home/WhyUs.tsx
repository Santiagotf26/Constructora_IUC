import {
  Certificate, Ruler, CreditCard, Clock,
  Leaf, Users, ArrowRight
} from '../icons'

const features = [
  {
    Icon: Certificate,
    title: 'Construcción Certificada',
    desc: 'Cumplimos las normas NSR-10 y contamos con certificación ISO 9001 en todos nuestros procesos constructivos.',
    highlight: false,
  },
  {
    Icon: Ruler,
    title: 'Diseño Arquitectónico Premium',
    desc: 'Cada proyecto es diseñado por arquitectos de renombre con materiales de importación de primera calidad.',
    highlight: true,
  },
  {
    Icon: CreditCard,
    title: 'Financiación Flexible',
    desc: 'Alianzas con los principales bancos del país para facilitar tu crédito hipotecario con las mejores tasas.',
    highlight: false,
  },
  {
    Icon: Clock,
    title: 'Entrega Garantizada',
    desc: 'Comprometidos con los plazos de entrega. Tu inversión protegida con garantías respaldadas por ley.',
    highlight: false,
  },
  {
    Icon: Leaf,
    title: 'Construcción Sostenible',
    desc: 'Proyectos con certificación LEED que reducen el consumo energético y huella de carbono.',
    highlight: true,
  },
  {
    Icon: Users,
    title: 'Asesoría Personalizada',
    desc: 'Un asesor dedicado te acompaña en todo el proceso desde la selección hasta la escrituración.',
    highlight: false,
  },
]

const WhyUs = () => (
  <section className="py-28 bg-[#0D0F14] relative overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E8A617]/4 blur-[120px] pointer-events-none"/>

    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="pill mb-6" style={{ margin: '0 auto 1.5rem' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8A617] block"/>
          ¿Por qué IUC&CO?
        </div>
        <h2 className="font-display font-black text-[#F0F2F8] leading-tight mb-6">
          <span className="block text-4xl lg:text-6xl">UNA PLATAFORMA</span>
          <span className="block text-4xl lg:text-6xl text-gold">INMOBILIARIA</span>
          <span className="block text-2xl lg:text-4xl font-light text-[#8A90A4]">moderna y de confianza</span>
        </h2>
        <p className="text-[#4E5468] max-w-lg mx-auto text-sm leading-relaxed">
          Herramientas digitales avanzadas combinadas con la experiencia local de más de 20 años.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {features.map(({ Icon, title, desc, highlight }, i) => (
          <div
            key={i}
            className={`group flex items-start gap-5 p-6 rounded-2xl border transition-all duration-300 cursor-default ${
              highlight
                ? 'bg-[#E8A617]/5 border-[#E8A617]/15 hover:bg-[#E8A617]/10 hover:border-[#E8A617]/35'
                : 'bg-[#1A1E2A] border-white/6 hover:border-white/12'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
              highlight
                ? 'bg-[#E8A617]/15 group-hover:bg-[#E8A617]/25'
                : 'bg-[#E8A617]/8 group-hover:bg-[#E8A617]/15'
            }`}>
              <Icon className="w-5 h-5 text-[#E8A617]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-[#F0F2F8] text-sm group-hover:text-[#E8A617] transition-colors duration-300">
                  {title}
                </h3>
                <ArrowRight className="w-4 h-4 text-[#E8A617] opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
              </div>
              <p className="text-[#8A90A4] text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhyUs
