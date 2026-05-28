import { useNavigate } from 'react-router-dom'
import type { Apartment } from '../../types'
import { MapPin, BedDouble, Bath, SquareArea, ArrowRight } from '../icons'

interface Props { apartment: Apartment }

const statusConfig = {
  available: { label: 'Disponible',  cls: 'bg-emerald-500/10 border-emerald-500/15 text-emerald-700' },
  reserved:  { label: 'Reservado',   cls: 'bg-amber-500/10  border-amber-500/15  text-amber-700'  },
  sold:      { label: 'Vendido',     cls: 'bg-red-500/10    border-red-500/15    text-red-700'    },
}

const ApartmentCard = ({ apartment }: Props) => {
  const navigate = useNavigate()
  const sc = statusConfig[apartment.status]
  const onClick = () => navigate(`/apartamentos/${apartment.id}`)

  return (
    <article
      className="group bg-white border border-[#6E7E65]/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-1.5 hover:border-[#6E7E65]/25 hover:shadow-gold-lg"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-bg-base">
        <img
          src={apartment.thumbnail}
          alt={apartment.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"/>

        {/* Status */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${sc.cls}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current"/>
            {sc.label}
          </span>
        </div>

        {/* Floor */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-[#454C47] shadow-sm backdrop-blur-md">
            Piso {apartment.floor}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-[#7C837E] text-xs mb-2 font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#6E7E65]" />
          {apartment.location}, {apartment.city}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-[#1C201E] text-base mb-4 leading-snug group-hover:text-[#6E7E65] transition-colors duration-300 line-clamp-2">
          {apartment.title}
        </h3>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { Icon: BedDouble, val: apartment.bedrooms === 1 ? '1 Hab' : `${apartment.bedrooms} Hab` },
            { Icon: Bath,      val: `${apartment.bathrooms} Baño${apartment.bathrooms > 1 ? 's' : ''}` },
            { Icon: SquareArea, val: `${apartment.area} m²` },
          ].map(({ Icon, val }, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[#454C47] text-xs font-light">
              <Icon className="w-3.5 h-3.5 text-[#6E7E65]/60" />
              <span>{val}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-[#6E7E65]/8 mb-4"/>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#7C837E] text-[9px] font-bold uppercase tracking-wider">Precio</p>
            <p className="font-display font-black text-lg text-[#D97E60] leading-none mt-1">
              {apartment.priceFormatted}
            </p>
          </div>
          <button
            id={`apt-card-${apartment.id}`}
            onClick={onClick}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#6E7E65]/8 border border-[#6E7E65]/15 text-[#6E7E65] text-xs font-display font-bold rounded-xl transition-all duration-300 group-hover:bg-[#6E7E65] group-hover:text-white group-hover:border-transparent cursor-pointer"
          >
            Detalles
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default ApartmentCard
