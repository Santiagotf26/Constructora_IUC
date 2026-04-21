import { Link, useNavigate } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ArrowRight } from '../icons'

const Footer = () => {
  const navigate = useNavigate()
  const year = new Date().getFullYear()

  const quickLinks = [
    { label: 'Inicio',        path: '/' },
    { label: 'Apartamentos',  path: '/apartamentos' },
    { label: 'Proyectos',     path: '/#proyectos' },
    { label: 'Contacto',      path: '/#contacto' },
  ]
  const services = [
    'Venta de apartamentos',
    'Consultoría inmobiliaria',
    'Proyectos en preventa',
    'Gestión de crédito hipotecario',
    'Asesoría en inversión',
  ]
  const contactInfo = [
    { icon: MapPin, text: 'Av. El Dorado #68C-61, Bogotá' },
    { icon: Phone,  text: '+57 314 276 7572' },
    { icon: Mail,   text: 'info@iucco.com.co' },
    { icon: Clock,  text: 'Lun–Vie 8:00am – 6:00pm' },
  ]

  return (
    <footer className="bg-[#0A0C11] border-t border-white/5">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8A617]/50 to-transparent"/>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="IUC&CO — Ingenieros Unidos"
                className="h-20 w-auto object-contain brightness-105"
              />
            </Link>
            <p className="text-[#8A90A4] text-sm leading-relaxed mb-6">
              Construimos hogares de calidad con innovación y excelencia. Más de 20 años transformando visiones en realidad.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['ISO 9001', 'Camacol', 'RETIE'].map(b => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-[#8A90A4] font-bold tracking-widest uppercase"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-xs text-[#F0F2F8] uppercase tracking-widest mb-6">Navegación</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.path}>
                  <button
                    onClick={() => navigate(l.path)}
                    className="text-[#8A90A4] hover:text-[#E8A617] text-sm transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-xs text-[#F0F2F8] uppercase tracking-widest mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s} className="text-[#8A90A4] text-sm flex items-start gap-2">
                  <span className="text-[#E8A617] mt-0.5 flex-shrink-0">—</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-xs text-[#F0F2F8] uppercase tracking-widest mb-6">Contacto</h4>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8A617]/10 border border-[#E8A617]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-[#E8A617]" />
                  </div>
                  <span className="text-[#8A90A4] text-sm leading-snug pt-1.5">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#4E5468] text-xs">
            © {year} IUC&CO — Ingenieros Unidos Construcciones & CO. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            {['Privacidad', 'Términos', 'Cookies'].map(l => (
              <a key={l} href="#" className="text-[#4E5468] hover:text-[#E8A617] text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
