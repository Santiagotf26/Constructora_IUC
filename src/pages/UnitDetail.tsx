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
  available: { label: 'Disponible', cls: 'bg-emerald-500/12 border-emerald-400/25 text-emerald-400' },
  reserved:  { label: 'Reservado',  cls: 'bg-amber-500/12  border-amber-400/25  text-amber-400'  },
  sold:      { label: 'Vendido',    cls: 'bg-red-500/12    border-red-400/25    text-red-400'    },
}

const inputCls = 'w-full bg-[#13161E] border border-white/8 rounded-xl px-4 py-3 text-[#F0F2F8] text-sm placeholder-[#4E5468] focus:border-[#E8A617]/50 transition-all'

const UnitDetail = () => {
  const { id }   = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [contactOpen, setContactOpen] = useState(false)
  const [contactDone, setContactDone] = useState(false)
  const [sending, setSending]         = useState(false)

  const apt = APARTMENTS.find(a => a.id === id)

  if (!apt) return (
    <div className="min-h-screen bg-[#0D0F14] flex flex-col items-center justify-center pt-20 text-center px-6">
      <div className="w-20 h-20 rounded-2xl bg-[#E8A617]/10 border border-[#E8A617]/20 flex items-center justify-center mx-auto mb-6">
        <Layers className="w-10 h-10 text-[#E8A617]" />
      </div>
      <h1 className="font-display font-black text-3xl text-[#F0F2F8] mb-3">Apartamento no encontrado</h1>
      <p className="text-[#8A90A4] mb-8">El apartamento que buscas no existe o ya no está disponible.</p>
      <Link to="/apartamentos" className="px-6 py-3 bg-gold text-[#0D0F14] font-bold rounded-xl">
        Ver catálogo completo
      </Link>
    </div>
  )

  const sc = statusConfig[apt.status]
  const waMsg = encodeURIComponent(`Hola, me interesa el apartamento "${apt.title}" (${apt.priceFormatted}). ¿Podría brindarme más información?`)
  const waUrl = `https://wa.me/573142767572?text=${waMsg}`

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault(); setSending(true)
    setTimeout(() => { setSending(false); setContactDone(true) }, 1500)
  }

  const related = APARTMENTS.filter(a => a.id !== apt.id && a.project === apt.project).slice(0, 2)

  const specCards = [
    { Icon: BedDouble,  value: apt.bedrooms === 0 ? 'Estudio' : `${apt.bedrooms} hab`, label: 'Habitaciones' },
    { Icon: Bath,       value: `${apt.bathrooms}`, label: 'Baños' },
    { Icon: SquareArea, value: `${apt.area} m²`,   label: 'Área total' },
    { Icon: Layers,     value: `Piso ${apt.floor}`, label: 'Piso' },
  ]

  return (
    <div className="min-h-screen bg-[#0D0F14] pt-20">
      {/* Breadcrumb */}
      <div className="border-b border-white/5 bg-[#13161E]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-[#4E5468]">
            <Link to="/" className="hover:text-[#E8A617] transition-colors">Inicio</Link>
            <span>›</span>
            <Link to="/apartamentos" className="hover:text-[#E8A617] transition-colors">Apartamentos</Link>
            <span>›</span>
            <span className="text-[#8A90A4] line-clamp-1">{apt.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ── LEFT ─────────────────────────── */}
          <div className="lg:col-span-2 space-y-10">
            <ImageGallery images={apt.images} title={apt.title}/>

            {/* Title */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${sc.cls}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"/>
                  {sc.label}
                </span>
                <span className="text-[#4E5468] text-sm">{apt.project}</span>
              </div>
              <h1 className="font-display font-black text-3xl lg:text-4xl text-[#F0F2F8] mb-3 leading-tight">
                {apt.title}
              </h1>
              <div className="flex items-center gap-2 text-[#8A90A4] text-sm">
                <MapPin className="w-4 h-4 text-[#4E5468]" />
                {apt.location}, {apt.city}
              </div>
            </div>

            {/* Quick specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {specCards.map(({ Icon, value, label }, i) => (
                <div key={i} className="bg-[#1A1E2A] border border-white/6 rounded-2xl p-4 text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#E8A617]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[#E8A617]" />
                  </div>
                  <div className="font-display font-black text-[#F0F2F8] text-lg leading-none">{value}</div>
                  <div className="text-[#4E5468] text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="font-display font-bold text-xl text-[#F0F2F8] mb-4">Descripción</h2>
              <p className="text-[#8A90A4] leading-relaxed text-sm">{apt.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-display font-bold text-xl text-[#F0F2F8] mb-5">Características</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {apt.features.map((f, i) => (
                  <div key={i} className="flex items-center justify-between py-3 px-4 bg-[#1A1E2A] border border-white/6 rounded-xl">
                    <span className="text-[#8A90A4] text-sm">{f.label}</span>
                    <span className="text-[#F0F2F8] font-semibold text-sm">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <AmenitiesList amenities={apt.amenities}/>

            {/* Map */}
            <div>
              <h2 className="font-display font-bold text-xl text-[#F0F2F8] mb-5">Ubicación</h2>
              <div className="rounded-2xl overflow-hidden border border-white/6">
                <iframe
                  title={`Mapa - ${apt.title}`}
                  width="100%"
                  height="360"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${apt.coordinates.lat},${apt.coordinates.lng}&z=15&output=embed`}
                  className="block"
                />
              </div>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-xl text-[#F0F2F8] mb-5">Más en {apt.project}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map(r => (
                    <div
                      key={r.id}
                      onClick={() => navigate(`/apartamentos/${r.id}`)}
                      className="group flex gap-4 bg-[#1A1E2A] border border-white/6 rounded-2xl p-4 cursor-pointer hover:border-[#E8A617]/20 transition-all duration-300"
                    >
                      <img src={r.thumbnail} alt={r.title} className="w-20 h-20 rounded-xl object-cover flex-shrink-0"/>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-bold text-sm text-[#F0F2F8] group-hover:text-[#E8A617] transition-colors line-clamp-2 mb-1">{r.title}</p>
                        <p className="text-[#4E5468] text-xs">{r.area} m² · {r.bedrooms === 0 ? 'Estudio' : `${r.bedrooms} hab`}</p>
                        <p className="text-[#E8A617] font-bold text-sm mt-1">{r.priceFormatted}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT ────────────────────────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Price card */}
              <div className="bg-[#1A1E2A] border border-white/7 rounded-3xl p-7">
                <div className="mb-6">
                  <p className="text-[#4E5468] text-[10px] uppercase tracking-widest mb-1">Precio de venta</p>
                  <p className="font-display font-black text-4xl text-[#E8A617] leading-none">{apt.priceFormatted}</p>
                  <p className="text-[#4E5468] text-xs mt-2 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5" />
                    {apt.parking} parqueadero{apt.parking > 1 ? 's' : ''} · Estrato {apt.stratum}
                  </p>
                </div>

                <div className="space-y-0 mb-6 border border-white/6 rounded-xl overflow-hidden divide-y divide-white/5">
                  {[
                    { label: 'Entrega estimada', value: apt.deliveryDate },
                    { label: 'Área total',        value: `${apt.area} m²` },
                    { label: 'Estado',            value: sc.label, gold: true },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between px-4 py-3 text-sm">
                      <span className="text-[#8A90A4]">{row.label}</span>
                      <span className={row.gold ? 'text-[#E8A617] font-semibold' : 'text-[#F0F2F8] font-semibold'}>
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
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-[#0D0F14] font-display font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Solicitar información
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="detail-whatsapp-btn"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-display font-bold text-sm rounded-xl transition-all duration-300 hover:bg-[#25D366]/20"
                  >
                    <WhatsApp className="w-5 h-5" />
                    Consultar por WhatsApp
                  </a>

                  <button
                    onClick={() => navigate(-1)}
                    className="w-full flex items-center justify-center gap-2 py-3 border border-white/8 text-[#8A90A4] text-sm font-medium rounded-xl hover:border-white/20 hover:text-[#F0F2F8] transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al catálogo
                  </button>
                </div>

                {/* Trust bullets */}
                <div className="mt-6 pt-5 border-t border-white/6 space-y-2">
                  {['Asesoría sin costo', 'Respuesta en 2 horas', 'Gestión de crédito hipotecario'].map(t => (
                    <div key={t} className="flex items-center gap-2 text-[#4E5468] text-xs">
                      <Check className="w-3.5 h-3.5 text-[#E8A617]" strokeWidth={2.5} />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Agent card */}
              <div className="bg-[#1A1E2A] border border-white/6 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center font-display font-black text-[#0D0F14] text-lg flex-shrink-0">
                  MA
                </div>
                <div>
                  <p className="font-display font-bold text-[#F0F2F8] text-sm">María Asesora</p>
                  <p className="text-[#4E5468] text-xs mb-2">Asesora Comercial Senior</p>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer"
                    className="text-[#E8A617] text-xs font-semibold hover:underline flex items-center gap-1">
                    Contactar directamente
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contact Modal ───────────────────── */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-[90] bg-[#0D0F14]/85 flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="bg-[#1A1E2A] border border-white/8 rounded-3xl p-8 max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            {contactDone ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center mx-auto mb-5">
                  <Check className="w-8 h-8 text-emerald-400" strokeWidth={2.5}/>
                </div>
                <h3 className="font-display font-black text-2xl text-[#F0F2F8] mb-2">¡Mensaje enviado!</h3>
                <p className="text-[#8A90A4] mb-6 text-sm">Te contactaremos en menos de 2 horas hábiles.</p>
                <button
                  onClick={() => { setContactOpen(false); setContactDone(false) }}
                  className="px-6 py-3 bg-gold text-[#0D0F14] font-bold rounded-xl text-sm cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#F0F2F8]">Solicitar información</h3>
                    <p className="text-[#4E5468] text-sm mt-1 line-clamp-1">{apt.title}</p>
                  </div>
                  <button
                    onClick={() => setContactOpen(false)}
                    className="text-[#4E5468] hover:text-[#F0F2F8] text-xl transition-colors cursor-pointer w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleSend} className="space-y-4">
                  <input id="modal-name" type="text" required placeholder="Nombre completo" className={inputCls}/>
                  <input id="modal-phone" type="tel" required placeholder="Teléfono / WhatsApp" className={inputCls}/>
                  <input id="modal-email" type="email" required placeholder="Email" className={inputCls}/>
                  <textarea id="modal-message" rows={3} placeholder="¿Alguna pregunta específica?"
                    className={`${inputCls} resize-none`}/>
                  <button
                    id="modal-submit"
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-[#0D0F14] font-display font-bold rounded-xl transition-all hover:-translate-y-0.5 disabled:opacity-60 cursor-pointer"
                  >
                    {sending
                      ? <span className="w-5 h-5 border-2 border-[#0D0F14]/20 border-t-[#0D0F14] rounded-full animate-spin"/>
                      : <><Send className="w-4 h-4" /> Enviar solicitud</>
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
