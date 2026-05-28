import { useState } from 'react'
import { MapPin, Check } from '../icons'

type Category = 'comercio' | 'educacion' | 'salud' | 'vias'

interface LocationItem {
  name: string
  distance: string
  desc: string
}

const locationsData: Record<Category, LocationItem[]> = {
  comercio: [
    { name: 'C.C. Innovo Plaza', distance: '3 min / 1.0 km', desc: 'El centro comercial más grande de la provincia: cines, zona gourmet, bancos y comercio premium.' },
    { name: 'Carulla Duitama', distance: '4 min / 1.3 km', desc: 'Supermercado de alta gama con amplia oferta de productos nacionales e importados.' },
    { name: 'Almacenes Éxito', distance: '3 min / 1.0 km', desc: 'Hipermercado ubicado dentro de Innovo Plaza para compras de hogar y víveres.' },
  ],
  educacion: [
    { name: 'Colegio Salesiano Duitama', distance: '4 min / 1.2 km', desc: 'Reconocida institución educativa con alta excelencia académica en la región.' },
    { name: 'Colegio La Presentación', distance: '5 min / 1.5 km', desc: 'Prestigioso plantel educativo tradicional femenino a corta distancia.' },
    { name: 'Colegio Campestre Sol Naciente', distance: '8 min / 2.8 km', desc: 'Opción campestre bilingüe para el desarrollo integral infantil.' },
  ],
  salud: [
    { name: 'Clínica Boyacá', distance: '3 min / 900 m', desc: 'Centro de salud con especialidades médicas avanzadas y atención prioritaria.' },
    { name: 'Hospital Regional de Duitama', distance: '6 min / 2.1 km', desc: 'Centro de atención médica principal de nivel intermedio para Boyacá.' },
  ],
  vias: [
    { name: 'Avenida de las Américas', distance: '1 min / 300 m', desc: 'Arteria vial principal que conecta el sector con todo el casco urbano de Duitama.' },
    { name: 'Avenida Circunvalar', distance: '2 min / 600 m', desc: 'Facilita la salida rápida hacia Nobsa, Sogamoso y el norte del departamento.' },
    { name: 'Doble Calzada Duitama - Paipa', distance: '5 min / 2.5 km', desc: 'Conectividad rápida que permite llegar a las piscinas termales de Paipa en solo 12 minutos.' },
  ],
}

const InteractiveMap = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('comercio')

  const categories = [
    { id: 'comercio', label: 'Comercio & Ocio' },
    { id: 'educacion', label: 'Educación / Colegios' },
    { id: 'salud', label: 'Salud & Clínicas' },
    { id: 'vias', label: 'Conectividad & Vías' },
  ]

  return (
    <section id="ubicacion" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="pill mb-4" style={{ margin: '0 auto' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E7E65] block"/>
            Conectividad Urbana
          </div>
          <h2 className="font-display font-black text-[#1C201E] tracking-tight leading-tight mt-2 text-3xl lg:text-5xl">
            UBICACIÓN PRIVILEGIADA EN<br />
            <span className="text-gold font-extrabold uppercase">DUITAMA</span>
          </h2>
          <p className="text-[#454C47] text-sm leading-relaxed mt-4 font-light">
            Vivir en La Floresta te sitúa en un oasis residencial exclusivo, rodeado de tranquilidad pero a solo minutos de las mejores facilidades de educación, salud y esparcimiento de Boyacá.
          </p>
        </div>

        {/* Interactive map layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: Category Select & Nearby Lists */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Category Select Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#FAF9F6] border border-[#6E7E65]/10 rounded-2xl">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Category)}
                  className={`px-4 py-3 text-xs font-bold rounded-xl transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#6E7E65] text-white shadow-md'
                      : 'text-[#454C47] hover:text-[#6E7E65] hover:bg-[#6E7E65]/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* List items depending on category */}
            <div className="flex-1 space-y-4 pt-2">
              <h3 className="font-display font-extrabold text-sm text-[#1C201E] uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D97E60]" />
                Sitios de interés a pocos pasos
              </h3>
              
              <div className="space-y-3">
                {locationsData[activeCategory].map((loc, idx) => (
                  <div key={idx} className="p-4 bg-[#FAF9F6] border border-[#6E7E65]/6 rounded-2xl hover:border-[#6E7E65]/20 transition-all shadow-sm">
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <h4 className="font-display font-extrabold text-[#1C201E] text-sm leading-snug">{loc.name}</h4>
                      <span className="text-[10px] font-bold text-[#D97E60] bg-[#D97E60]/8 px-2 py-0.5 rounded-full flex-shrink-0">
                        {loc.distance}
                      </span>
                    </div>
                    <p className="text-[#7C837E] text-xs leading-relaxed font-light">{loc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="p-4 border border-[#6E7E65]/10 rounded-2xl bg-[#6E7E65]/4 flex gap-3 items-center">
              <div className="w-8 h-8 rounded-lg bg-[#6E7E65]/10 flex items-center justify-center text-[#6E7E65] flex-shrink-0">
                <Check className="w-4.5 h-4.5" strokeWidth={2.5} />
              </div>
              <span className="text-[11px] text-[#454C47] font-semibold">
                Perfecta conectividad regional hacia Paipa, Tunja y el Valle de Sugamuxi.
              </span>
            </div>

          </div>

          {/* RIGHT: Embedded Google Map */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-[#6E7E65]/10 shadow-gold h-full min-h-[400px] relative bg-bg-base">
              <iframe
                title="Mapa de La Floresta Club Residencial, Duitama"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=5.8263,-73.0326&z=15&output=embed"
                className="block min-h-[400px] border-none"
              />
              
              {/* Map Floating Pin Overlay */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 border border-[#6E7E65]/10 rounded-xl shadow-md flex items-center gap-2 pointer-events-none">
                <MapPin className="w-4 h-4 text-[#D97E60]" />
                <span className="text-[10px] font-bold text-[#1C201E]">La Floresta Club</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default InteractiveMap
