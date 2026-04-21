import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Phone, Building2, Users, Award } from '../icons'

const Hero = () => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Background ─────────────────────────── */}
      <div className="absolute inset-0">
        <img
          src="/apt_hero_bg.png"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.35) saturate(0.9)' }}
        />
        {/* Warm gradient overlay instead of flat black */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F14]/95 via-[#0D0F14]/70 to-[#0D0F14]/20"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-[#0D0F14]/30"/>
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'radial-gradient(circle, #E8A617 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}/>
      </div>

      {/* ── Gold ambient glow ───────────────────── */}
      <div className="absolute left-1/4 top-1/3 w-[600px] h-[400px] bg-[#E8A617]/6 rounded-full blur-[100px] pointer-events-none"/>

      {/* ── Content ────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className={`max-w-2xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="pill mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A617] animate-pulse-gold block"/>
            Ingeniería de Excelencia — 20 años de trayectoria
          </div>

          {/* Heading */}
          <h1 className="font-display font-black leading-[0.92] mb-8 tracking-tight">
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] text-[#F0F2F8]">TU HOGAR</span>
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] text-gold">IDEAL</span>
            <span className="block text-[clamp(1.6rem,4vw,3rem)] text-[#8A90A4] font-light tracking-normal mt-2">
              te está esperando
            </span>
          </h1>

          <p className="text-[#8A90A4] text-lg leading-relaxed mb-10 max-w-lg">
            Apartamentos de lujo en los mejores sectores de Bogotá. Diseñados para vivir mejor, construidos para durar.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/apartamentos')}
              className="group flex items-center gap-3 px-8 py-4 bg-gold text-[#0D0F14] font-display font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-lg cursor-pointer"
            >
              Explorar Apartamentos
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </button>
            <a
              href="#contacto"
              className="flex items-center gap-3 px-8 py-4 border border-white/15 text-[#F0F2F8] font-display font-bold text-base rounded-xl transition-all duration-300 hover:border-[#E8A617]/50 hover:text-[#E8A617] hover:bg-[#E8A617]/5"
            >
              <Phone className="w-5 h-5" />
              Hablar con un asesor
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/8">
            {[
              { num: '+200', label: 'Proyectos entregados', icon: Building2 },
              { num: '+500', label: 'Familias satisfechas',  icon: Users },
              { num: '98%',  label: 'Índice de satisfacción', icon: Award },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8A617]/10 border border-[#E8A617]/20 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-[#E8A617]" />
                </div>
                <div>
                  <div className="font-display font-black text-2xl text-[#E8A617] leading-none">{s.num}</div>
                  <div className="text-[#8A90A4] text-xs mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <div className="w-px h-10 bg-gradient-to-b from-[#E8A617]/70 to-transparent"/>
        <span className="text-[#4E5468] text-[10px] tracking-widest uppercase">Scroll</span>
      </div>

      {/* Floating card — desktop only */}
      <div className="absolute right-10 bottom-28 hidden xl:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="card-elevated rounded-2xl p-5 w-56 border-[#E8A617]/15">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#E8A617]/15 flex items-center justify-center">
              <Building2 className="w-4.5 h-4.5 text-[#E8A617]" />
            </div>
            <div>
              <div className="text-[#F0F2F8] text-xs font-bold leading-none">Disponible ahora</div>
              <div className="text-[#8A90A4] text-[10px] mt-0.5">Torre Mirador</div>
            </div>
          </div>
          <div className="text-2xl font-display font-black text-[#E8A617] leading-none">$485M</div>
          <div className="text-[#8A90A4] text-[10px] mt-1.5 flex items-center gap-1">
            <span>98 m²</span><span>·</span><span>3 hab</span><span>·</span><span>Piso 14</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
