import { useEffect, useState } from 'react'
import { ArrowRight, Phone, Building2, TrendUp, Award } from '../icons'

const Hero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-bg-base pt-20">
      {/* ── Background Image & Gradients ────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/apt_hero_bg.png"
          alt="La Floresta Club Residencial"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-center transition-transform duration-10000 ease-out scale-100 hover:scale-105"
          style={{ filter: 'brightness(1.05) contrast(0.95) saturate(1.05)' }}
        />
        {/* Soft, luminous gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/98 via-[#FAF9F6]/85 to-[#FAF9F6]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent" />
        {/* Subtle decorative dot grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, #6E7E65 1.5px, transparent 1.5px)',
          backgroundSize: '48px 48px'
        }}/>
      </div>

      {/* ── Luminous Ambient Glows ──────────────────────── */}
      <div className="absolute left-10 top-1/4 w-[500px] h-[500px] bg-[#8C9C83]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-10 w-[400px] h-[400px] bg-[#D97E60]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* ── Content Container ──────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className={`max-w-3xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="pill mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D97E60] animate-pulse block"/>
            Proyecto Exclusivo en Duitama, Boyacá
          </div>

          {/* Heading */}
          <h1 className="font-display font-black leading-[1.05] mb-6 tracking-tight text-[#1C201E]">
            <span className="block text-[clamp(2.5rem,6.5vw,5.5rem)] font-light">El arte de vivir en</span>
            <span className="block text-[clamp(2.8rem,7vw,6rem)] text-gold font-extrabold uppercase">La Floresta</span>
            <span className="block text-[clamp(1.4rem,3.2vw,2.5rem)] text-[#454C47] font-medium tracking-normal mt-2">
              Tranquilidad campestre, confort moderno
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-[#454C47] text-lg leading-relaxed mb-8 max-w-xl font-light">
            Descubre apartamentos premium diseñados con arquitectura bioclimática de primer nivel, en la zona residencial más exclusiva y de mayor valorización en Duitama, Boyacá.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#proyecto-destacado"
              className="group flex items-center gap-3 px-8 py-4 bg-[#6E7E65] text-white font-display font-semibold text-base rounded-xl transition-all duration-300 hover:bg-[#5D6B54] hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
            >
              Ver Proyecto Destacado
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.2} />
            </a>
            <a
              href="#contacto"
              className="flex items-center gap-3 px-8 py-4 bg-white/70 border border-[#6E7E65]/20 text-[#6E7E65] font-display font-semibold text-base rounded-xl backdrop-blur-md transition-all duration-300 hover:border-[#6E7E65] hover:bg-white"
            >
              <Phone className="w-5 h-5" />
              Agendar Visita
            </a>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 sm:gap-12 mt-12 pt-8 border-t border-[#6E7E65]/10">
            {[
              { num: '+12%', label: 'Valorización Anual', icon: TrendUp },
              { num: 'La Floresta', label: 'Ubicación Privilegiada',  icon: Building2 },
              { num: 'Bioclimático',  label: 'Diseño Inteligente', icon: Award },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#6E7E65]/6 border border-[#6E7E65]/12 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-[#6E7E65]" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-display font-extrabold text-xl text-[#1C201E] leading-none">{s.num}</div>
                  <div className="text-[#7C837E] text-xs mt-1 font-medium">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Card - Premium units (La Floresta promo card) */}
      <div className="absolute right-10 bottom-24 hidden xl:block animate-float" style={{ animationDelay: '0.8s' }}>
        <div className="card-elevated rounded-2xl p-6 w-64 border-[#6E7E65]/10 bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#D97E60]/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#D97E60]" />
            </div>
            <div>
              <div className="text-[#1C201E] text-xs font-bold leading-none">Precios de Lanzamiento</div>
              <div className="text-[#7C837E] text-[10px] mt-1">La Floresta Club</div>
            </div>
          </div>
          <div className="text-3xl font-display font-extrabold text-[#D97E60] leading-none">$195M <span className="text-xs font-normal text-[#7C837E]">COP</span></div>
          <p className="text-[#7C837E] text-[10px] mt-2 font-medium">Desde 52m² hasta 135m²</p>
          <div className="mt-3 pt-3 border-t border-[#6E7E65]/8 flex justify-between text-[9px] text-[#454C47] font-semibold">
            <span>Rooftop</span>
            <span>·</span>
            <span>Zona Pet</span>
            <span>·</span>
            <span>Fogatas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
