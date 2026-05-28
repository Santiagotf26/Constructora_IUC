import { Link, useNavigate } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ArrowRight, WhatsApp } from '../icons'

const Footer = () => {
  const navigate = useNavigate()
  const year = new Date().getFullYear()

  const quickLinks = [
    { label: 'Inicio',        path: '/' },
    { label: 'Catálogo',      path: '/apartamentos' },
    { label: 'Proyecto La Floresta', path: '/#proyecto-destacado' },
    { label: 'Contacto',      path: '/#contacto' },
  ]
  
  const developments = [
    { label: 'La Floresta Club Residencial', path: '/apartamentos' },
    { label: 'Mirador de la Villa', path: '/apartamentos' },
    { label: 'Altos del Prado', path: '/apartamentos' },
  ]

  const contactInfo = [
    { icon: MapPin, text: 'Carrera 16 # 14-22, Barrio La Floresta, Duitama, Boyacá' },
    { icon: Phone,  text: '+57 314 276 7572' },
    { icon: Mail,   text: 'ventas@iucco.com.co' },
    { icon: Clock,  text: 'Lun–Vie 8:00am–6:00pm | Sáb 9:00am–4:00pm' },
  ]

  const waMsg = encodeURIComponent("Hola, me gustaría recibir asesoría sobre sus proyectos inmobiliarios en Duitama, Boyacá.")
  const waUrl = `https://wa.me/573142767572?text=${waMsg}`

  return (
    <footer className="bg-white border-t border-[#6E7E65]/10 relative z-10">
      {/* Top subtle organic green line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#6E7E65]/30 to-transparent"/>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="IUC&CO — Ingenieros Unidos"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-[#454C47] text-sm leading-relaxed font-light">
              Desarrollamos proyectos residenciales premium que integran confort contemporáneo, valorización segura y el respeto por el paisaje boyacense.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['NSR-10', 'Camacol', 'Fiduciaria'].map(b => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-full bg-[#6E7E65]/5 border border-[#6E7E65]/12 text-[9px] text-[#6E7E65] font-bold tracking-widest uppercase"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Navigation links */}
          <div>
            <h4 className="font-display font-extrabold text-xs text-[#1C201E] uppercase tracking-widest mb-6">Navegación</h4>
            <ul className="space-y-3">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  {l.path.startsWith('/#') ? (
                    <a
                      href={l.path.substring(1)}
                      className="text-[#454C47] hover:text-[#6E7E65] text-sm transition-colors duration-200 flex items-center gap-2 group cursor-pointer font-light"
                    >
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#6E7E65]" />
                      {l.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => navigate(l.path)}
                      className="text-[#454C47] hover:text-[#6E7E65] text-sm transition-colors duration-200 flex items-center gap-2 group cursor-pointer font-light"
                    >
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#6E7E65]" />
                      {l.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Developments in Duitama */}
          <div>
            <h4 className="font-display font-extrabold text-xs text-[#1C201E] uppercase tracking-widest mb-6">Desarrollos Duitama</h4>
            <ul className="space-y-3">
              {developments.map((dev, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate(dev.path)}
                    className="text-[#454C47] hover:text-[#6E7E65] text-sm transition-colors duration-200 flex items-center gap-2 group cursor-pointer font-light text-left"
                  >
                    <span className="text-[#6E7E65] font-bold">—</span>
                    {dev.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & WhatsApp Link */}
          <div>
            <h4 className="font-display font-extrabold text-xs text-[#1C201E] uppercase tracking-widest mb-6">Contacto y Ventas</h4>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6E7E65]/6 border border-[#6E7E65]/12 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#6E7E65]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[#454C47] text-xs leading-relaxed font-light pt-1.5">{text}</span>
                </div>
              ))}
              
              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-display font-bold text-xs rounded-xl hover:bg-[#25D366]/20 transition-all"
                >
                  <WhatsApp className="w-4 h-4" />
                  Chatear con Ventas
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-[#6E7E65]/8 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#7C837E] text-[11px] font-medium text-center sm:text-left">
            © {year} IUC&CO — Ingenieros Unidos Construcciones & CO. Todos los derechos reservados. Desarrollos inmobiliarios de confianza en Boyacá, Colombia.
          </p>
          <div className="flex gap-4">
            {['Políticas de Privacidad', 'Condiciones de Uso'].map((l, i) => (
              <a key={i} href="#" className="text-[#7C837E] hover:text-[#6E7E65] text-[11px] font-semibold transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
