import { useState } from 'react'
import { APARTMENTS } from '../../data/apartments'
import { MapPin, BedDouble, Bath, SquareArea, Layers, Check, WhatsApp, ArrowRight } from '../icons'

const FeaturedProjectDetail = () => {
  // Filter apartments belonging to "La Floresta Club Residencial"
  const laFlorestaUnits = APARTMENTS.filter(a => a.project === 'La Floresta Club Residencial')
  
  // State for the selected apartment typology
  const [selectedAptId, setSelectedAptId] = useState(laFlorestaUnits[0]?.id || '')
  
  // Find current active unit
  const activeUnit = laFlorestaUnits.find(u => u.id === selectedAptId) || laFlorestaUnits[0]
  
  // State for image gallery within active unit
  const [activeImageIdx, setActiveImageIdx] = useState(0)

  if (!activeUnit) return null

  // WhatsApp click handler
  const waMsg = encodeURIComponent(
    `Hola, estoy en la página web y quiero solicitar información sobre la tipología "${activeUnit.title}" en La Floresta Club Residencial, Duitama. Precio de lista: ${activeUnit.priceFormatted}.`
  )
  const waUrl = `https://wa.me/573142767572?text=${waMsg}`

  const specItems = [
    { Icon: SquareArea, label: 'Área Total', value: `${activeUnit.area} m²` },
    { Icon: BedDouble,  label: 'Habitaciones', value: activeUnit.bedrooms === 1 ? '1 hab' : `${activeUnit.bedrooms} habs` },
    { Icon: Bath,       label: 'Baños', value: `${activeUnit.bathrooms} baño${activeUnit.bathrooms > 1 ? 's' : ''}` },
    { Icon: Layers,     label: 'Ubicación', value: `Piso ${activeUnit.floor}` },
  ]

  return (
    <section id="proyecto-destacado" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="pill pill-terracotta mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97E60] block"/>
              Lanzamiento Exclusivo
            </div>
            <h2 className="font-display font-black text-3xl lg:text-5xl text-[#1C201E] tracking-tight leading-tight">
              PROYECTO DESTACADO<br />
              <span className="text-gold">LA FLORESTA CLUB RESIDENCIAL</span>
            </h2>
            <div className="flex items-center gap-2 text-[#7C837E] text-sm mt-3 font-medium">
              <MapPin className="w-4.5 h-4.5 text-[#6E7E65]" />
              Barrio La Floresta · Duitama, Boyacá (Zonas Residenciales de Mayor Valorización)
            </div>
          </div>

          {/* Typology Select Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#FAF9F6] border border-[#6E7E65]/10 rounded-2xl">
            {laFlorestaUnits.map(unit => {
              const label = unit.type === '1br' ? '1 Habitación' : unit.type === '3br' ? '3 Habitaciones' : 'Penthouse Dúplex'
              return (
                <button
                  key={unit.id}
                  onClick={() => {
                    setSelectedAptId(unit.id)
                    setActiveImageIdx(0)
                  }}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                    selectedAptId === unit.id
                      ? 'bg-[#6E7E65] text-white shadow-md'
                      : 'text-[#454C47] hover:text-[#6E7E65] hover:bg-[#6E7E65]/5'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Interactive Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Image Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#6E7E65]/8 shadow-gold bg-bg-base">
              <img
                src={activeUnit.images[activeImageIdx]}
                alt={activeUnit.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
              />
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md">
                {activeUnit.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeImageIdx === idx ? 'bg-[#6E7E65] w-5' : 'bg-[#6E7E65]/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {activeUnit.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all ${
                    activeImageIdx === idx
                      ? 'border-[#6E7E65] ring-2 ring-[#6E7E65]/10'
                      : 'border-[#6E7E65]/10 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Specs, Amenities & Conversion Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Title & Price */}
            <div className="p-6 bg-[#FAF9F6] border border-[#6E7E65]/8 rounded-3xl">
              <span className="text-[10px] font-bold text-[#7C837E] uppercase tracking-widest block mb-1">
                Tipología Disponible
              </span>
              <h3 className="font-display font-black text-2xl text-[#1C201E] mb-3 leading-snug">
                {activeUnit.title}
              </h3>
              <p className="text-[#454C47] text-sm leading-relaxed mb-4 font-light">
                {activeUnit.description}
              </p>
              
              <div className="flex items-baseline gap-2 pt-3 border-t border-[#6E7E65]/8">
                <span className="text-[#7C837E] text-xs font-semibold">Precio de lista:</span>
                <span className="text-3xl font-display font-extrabold text-[#D97E60] tracking-tight">
                  {activeUnit.priceFormatted}
                </span>
                <span className="text-[#7C837E] text-xs">COP</span>
              </div>
            </div>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-2 gap-3">
              {specItems.map((spec, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-[#6E7E65]/8 rounded-2xl shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#6E7E65]/8 flex items-center justify-center text-[#6E7E65] flex-shrink-0">
                    <spec.Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#7C837E] font-bold uppercase leading-none">{spec.label}</div>
                    <div className="text-sm font-extrabold text-[#1C201E] mt-1">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Amenities list */}
            <div>
              <h4 className="font-display font-bold text-sm text-[#1C201E] uppercase tracking-wider mb-3">
                Amenidades Premium Incluidas:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeUnit.amenities.slice(7, 13).map((amenity, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#454C47] text-xs font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#6E7E65]/8 flex items-center justify-center flex-shrink-0 text-[#6E7E65]">
                      <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </div>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion action buttons */}
            <div className="pt-4 space-y-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#D97E60] text-white font-display font-bold text-base rounded-xl transition-all duration-300 hover:bg-[#C86B4D] hover:-translate-y-0.5 hover:shadow-lg"
              >
                <WhatsApp className="w-5 h-5" />
                Cotizar por WhatsApp
              </a>
              <a
                href="#contacto"
                className="w-full flex items-center justify-center gap-2 py-3 bg-transparent border border-[#6E7E65]/20 text-[#6E7E65] font-display font-semibold text-sm rounded-xl transition-all duration-300 hover:border-[#6E7E65] hover:bg-[#6E7E65]/5"
              >
                Programar cita presencial
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectDetail
