import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { APARTMENTS } from '../data/apartments'
import ImageGallery from '../components/detail/ImageGallery'
import AmenitiesList from '../components/detail/AmenitiesList'
import {
  MapPin, BedDouble, Bath, SquareArea, Layers, Car,
  ArrowLeft, ArrowRight, Check, Send, WhatsApp
} from '../components/icons'

const statusConfig = {
  available: { label: 'Disponible', cls: 'bg-emerald-500/10 border-emerald-500/15 text-emerald-700' },
  reserved:  { label: 'Reservado',  cls: 'bg-amber-500/10  border-amber-500/15  text-amber-700'  },
  sold:      { label: 'Vendido',    cls: 'bg-red-500/10    border-red-500/15    text-red-700'    },
}

const inputCls = 'w-full bg-[#FAF9F6] border border-[#6E7E65]/15 rounded-xl px-4 py-3 text-[#1C201E] text-sm placeholder-[#7C837E] focus:border-[#6E7E65] focus:bg-[#6E7E65]/3 transition-all duration-200 shadow-sm'

const UnitDetail = () => {
  const { id }   = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [contactOpen, setContactOpen] = useState(false)
  const [contactDone, setContactDone] = useState(false)
  const [sending, setSending]         = useState(false)

  const apt = APARTMENTS.find(a => a.id === id)

  if (!apt) return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center pt-20 text-center px-6">
      <div className="w-16 h-16 rounded-2xl bg-[#6E7E65]/8 border border-[#6E7E65]/12 flex items-center justify-center mx-auto mb-6 text-[#6E7E65]">
        <Layers className="w-8 h-8" />
      </div>
      <h1 className="font-display font-black text-2xl text-[#1C201E] mb-2">Apartamento no encontrado</h1>
      <p className="text-[#7C837E] mb-8 text-sm font-light">El apartamento que buscas no está disponible actualmente.</p>
      <Link to="/apartamentos" className="px-6 py-3 bg-[#6E7E65] text-white font-bold rounded-xl text-xs hover:bg-[#5D6B54] transition-colors">
        Ver catálogo de unidades
      </Link>
    </div>
  )

  const sc = statusConfig[apt.status]
  const waMsg = encodeURIComponent(`Hola, me interesa recibir más información y plazos de pago para la tipología de apartamento "${apt.title}" (${apt.priceFormatted}) en Duitama, Boyacá.`)
  const waUrl = `https://wa.me/573142767572?text=${waMsg}`

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault(); setSending(true)
    setTimeout(() => { setSending(false); setContactDone(true) }, 1200)
  }

  const related = APARTMENTS.filter(a => a.id !== apt.id && a.project === apt.project).slice(0, 2)

  const specCards = [
    { Icon: BedDouble,  value: apt.bedrooms === 1 ? '1 Hab' : `${apt.bedrooms} hab`, label: 'Habitaciones' },
    { Icon: Bath,       value: `${apt.bathrooms}`, label: 'Baños' },
    { Icon: SquareArea, value: `${apt.area} m²`,   label: 'Área total' },
    { Icon: Layers,     value: `Piso ${apt.floor}`, label: 'Ubicación' },
  ]

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-20">
      
      {/* Breadcrumbs */}
      <div className="border-b border-[#6E7E65]/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-xs text-[#7C837E] font-medium">
            <Link to="/" className="hover:text-[#6E7E65] transition-colors">Inicio</Link>
            <span>›</span>
            <Link to="/apartamentos" className="hover:text-[#6E7E65] transition-colors">Apartamentos</Link>
            <span>›</span>
            <span className="text-[#454C47] font-bold line-clamp-1">{apt.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ── LEFT: Gallery & Details (8 Cols) ── */}
          <div className="lg:col-span-8 space-y-8">
            <ImageGallery images={apt.images} title={apt.title}/>

            {/* Main Title Header */}
            <div className="p-6 bg-white border border-[#6E7E65]/8 rounded-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${sc.cls}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"/>
                  {sc.label}
                </span>
                <span className="text-[#6E7E65] text-xs font-bold uppercase tracking-wider">{apt.project}</span>
              </div>
              <h1 className="font-display font-black text-2xl lg:text-3xl text-[#1C201E] mb-3 leading-snug">
                {apt.title}
              </h1>
              <div className="flex items-center gap-1.5 text-[#7C837E] text-xs font-medium">
                <MapPin className="w-4 h-4 text-[#6E7E65]" />
                {apt.location}, {apt.city} (Duitama, Boyacá)
              </div>
            </div>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {specCards.map(({ Icon, value, label }, i) => (
                <div key={i} className="bg-white border border-[#6E7E65]/8 rounded-2xl p-4 text-center shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#6E7E65]/8 flex items-center justify-center mx-auto mb-3 text-[#6E7E65]">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div className="font-display font-extrabold text-[#1C201E] text-base leading-none">{value}</div>
                  <div className="text-[#7C837E] text-[10px] uppercase font-bold tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="p-6 bg-white border border-[#6E7E65]/8 rounded-3xl">
              <h2 className="font-display font-black text-lg text-[#1C201E] uppercase tracking-wider mb-4 border-b border-[#6E7E65]/6 pb-2">Descripción</h2>
              <p className="text-[#454C47] leading-relaxed text-sm font-light">{apt.description}</p>
            </div>

            {/* Technical Specifications */}
            <div className="p-6 bg-white border border-[#6E7E65]/8 rounded-3xl">
              <h2 className="font-display font-black text-lg text-[#1C201E] uppercase tracking-wider mb-5 border-b border-[#6E7E65]/6 pb-2">Especificaciones Técnicas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {apt.features.map((f, i) => (
                  <div key={i} className="flex items-center justify-between py-3 px-4 bg-[#FAF9F6] border border-[#6E7E65]/6 rounded-xl">
                    <span className="text-[#7C837E] text-xs font-bold uppercase tracking-wider">{f.label}</span>
                    <span className="text-[#1C201E] font-bold text-sm">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <AmenitiesList amenities={apt.amenities}/>

            {/* Location Map */}
            <div className="p-6 bg-white border border-[#6E7E65]/8 rounded-3xl">
              <h2 className="font-display font-black text-lg text-[#1C201E] uppercase tracking-wider mb-5 border-b border-[#6E7E65]/6 pb-2">Ubicación y Entorno</h2>
              <div className="rounded-2xl overflow-hidden border border-[#6E7E65]/10 shadow-sm aspect-[16/9]">
                <iframe
                  title={`Ubicación del apartamento - ${apt.title}`}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${apt.coordinates.lat},${apt.coordinates.lng}&z=15&output=embed`}
                  className="block border-none"
                />
              </div>
            </div>

            {/* Related apartments */}
            {related.length > 0 && (
              <div className="p-6 bg-white border border-[#6E7E65]/8 rounded-3xl">
                <h2 className="font-display font-black text-lg text-[#1C201E] uppercase tracking-wider mb-5 border-b border-[#6E7E65]/6 pb-2">Más en {apt.project}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map(r => (
                    <div
                      key={r.id}
                      onClick={() => navigate(`/apartamentos/${r.id}`)}
                      className="group flex gap-4 bg-[#FAF9F6] border border-[#6E7E65]/8 rounded-2xl p-4 cursor-pointer hover:border-[#6E7E65]/20 transition-all duration-300 shadow-sm"
                    >
                      <img src={r.thumbnail} alt={r.title} className="w-20 h-20 rounded-xl object-cover flex-shrink-0 border border-[#6E7E65]/8"/>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-bold text-sm text-[#1C201E] group-hover:text-[#6E7E65] transition-colors line-clamp-1 mb-1">{r.title}</p>
                        <p className="text-[#7C837E] text-[10px] font-bold uppercase tracking-wider">{r.area} m² · {r.bedrooms === 1 ? '1 hab' : `${r.bedrooms} habs`}</p>
                        <p className="text-[#D97E60] font-extrabold text-sm mt-1">{r.priceFormatted}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Pricing & Action Sidebar (4 Cols) ── */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* Financial Card */}
              <div className="bg-white border border-[#6E7E65]/10 rounded-3xl p-6 shadow-gold">
                <div className="mb-6">
                  <p className="text-[#7C837E] text-[9px] font-bold uppercase tracking-widest mb-1">Precio de venta</p>
                  <p className="font-display font-black text-3xl text-[#D97E60] leading-none">{apt.priceFormatted}</p>
                  <p className="text-[#454C47] text-xs mt-3 flex items-center gap-1.5 font-medium">
                    <Car className="w-4 h-4 text-[#6E7E65]" />
                    {apt.parking === 0 ? 'Sin parqueadero' : `${apt.parking} parqueadero${apt.parking > 1 ? 's' : ''}`} · Estrato {apt.stratum}
                  </p>
                </div>

                <div className="space-y-0 mb-6 border border-[#6E7E65]/8 rounded-2xl overflow-hidden divide-y divide-[#6E7E65]/6 bg-[#FAF9F6]">
                  {[
                    { label: 'Entrega Estimada', value: apt.deliveryDate },
                    { label: 'Área Total',        value: `${apt.area} m²` },
                    { label: 'Estado Actual',     value: sc.label, colorClass: 'text-[#6E7E65]' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between px-4 py-3 text-xs font-medium">
                      <span className="text-[#7C837E] font-semibold uppercase tracking-wider">{row.label}</span>
                      <span className={row.colorClass ? `${row.colorClass} font-bold` : 'text-[#1C201E] font-bold'}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <button
                    id="detail-contact-btn"
                    onClick={() => setContactOpen(true)}
                    disabled={apt.status === 'sold'}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#D97E60] text-white font-display font-bold text-base rounded-xl transition-all duration-300 hover:bg-[#C86B4D] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Solicitar Cotización
                    <ArrowRight className="w-5 h-5" strokeWidth={2.2} />
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="detail-whatsapp-btn"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-display font-bold text-sm rounded-xl transition-all duration-300 hover:bg-[#25D366]/20"
                  >
                    <WhatsApp className="w-5 h-5" />
                    Consultar WhatsApp
                  </a>

                  <button
                    onClick={() => navigate(-1)}
                    className="w-full flex items-center justify-center gap-2 py-3 border border-[#6E7E65]/20 text-[#6E7E65] text-xs font-bold rounded-xl hover:bg-[#6E7E65]/5 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al Catálogo
                  </button>
                </div>

                {/* Trust symbols */}
                <div className="mt-6 pt-5 border-t border-[#6E7E65]/10 space-y-2.5">
                  {['Brochure digital completo', 'Acompañamiento fiduciario', 'Crédito con bancos locales'].map(t => (
                    <div key={t} className="flex items-center gap-2 text-[#454C47] text-xs font-medium">
                      <Check className="w-4 h-4 text-[#6E7E65]" strokeWidth={2.5} />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Advisor Card */}
              <div className="bg-white border border-[#6E7E65]/8 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#6E7E65]/10 border border-[#6E7E65]/15 flex items-center justify-center font-display font-black text-[#6E7E65] text-sm flex-shrink-0">
                  MA
                </div>
                <div>
                  <p className="font-display font-extrabold text-[#1C201E] text-xs">María Asesora</p>
                  <p className="text-[#7C837E] text-[10px] font-medium mb-1.5">Asesora Senior Duitama</p>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer"
                    className="text-[#D97E60] text-xs font-bold hover:underline flex items-center gap-1">
                    Chatear Directamente
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Contact Modal (Overlay) ── */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-[90] bg-[#1C201E]/40 flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="bg-white border border-[#6E7E65]/10 rounded-3xl p-8 max-w-md w-full shadow-gold-lg"
            onClick={e => e.stopPropagation()}
          >
            {contactDone ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#6E7E65]/10 border border-[#6E7E65]/15 flex items-center justify-center mx-auto mb-5 text-[#6E7E65]">
                  <Check className="w-8 h-8" strokeWidth={2.5}/>
                </div>
                <h3 className="font-display font-black text-xl text-[#1C201E] mb-2">¡Solicitud Enviada!</h3>
                <p className="text-[#7C837E] mb-6 text-xs font-light">Un asesor se pondrá en contacto contigo en breve para entregarte la información.</p>
                <button
                  onClick={() => { setContactOpen(false); setContactDone(false) }}
                  className="px-6 py-2.5 bg-[#6E7E65] text-white font-bold rounded-xl text-xs hover:bg-[#5D6B54] cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display font-black text-lg text-[#1C201E] uppercase tracking-wider">Solicitar Asesoría</h3>
                    <p className="text-[#7C837E] text-xs mt-1 line-clamp-1 font-semibold">{apt.title}</p>
                  </div>
                  <button
                    onClick={() => setContactOpen(false)}
                    className="text-[#7C837E] hover:text-[#1C201E] text-xl transition-colors cursor-pointer w-8 h-8 rounded-lg hover:bg-[#6E7E65]/5 flex items-center justify-center font-bold"
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleSend} className="space-y-4">
                  <input id="modal-name" type="text" required placeholder="Nombre completo" className={inputCls}/>
                  <input id="modal-phone" type="tel" required placeholder="Teléfono de contacto (WhatsApp)" className={inputCls}/>
                  <input id="modal-email" type="email" required placeholder="Correo electrónico" className={inputCls}/>
                  <textarea id="modal-message" rows={3} placeholder="¿Tienes alguna pregunta sobre el plan de financiamiento o acabados?"
                    className={`${inputCls} resize-none`}/>
                  <button
                    id="modal-submit"
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#D97E60] text-white font-display font-bold rounded-xl hover:bg-[#C86B4D] transition-colors disabled:opacity-60 cursor-pointer"
                  >
                    {sending
                      ? <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"/>
                      : <><Send className="w-4 h-4" /> Enviar Consulta</>
                    }
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UnitDetail
