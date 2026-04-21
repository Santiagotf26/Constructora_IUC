import { useNavigate } from 'react-router-dom'
import type { Apartment } from '../../types'
import { MapPin, BedDouble, Bath, SquareArea, ArrowRight } from '../icons'

interface Props { apartment: Apartment }

const statusConfig = {
  available: { label: 'Disponible',  cls: 'bg-emerald-500/12 border-emerald-400/25 text-emerald-400' },
  reserved:  { label: 'Reservado',   cls: 'bg-amber-500/12  border-amber-400/25  text-amber-400'  },
  sold:      { label: 'Vendido',     cls: 'bg-red-500/12    border-red-400/25    text-red-400'    },
}

const ApartmentCard = ({ apartment }: Props) => {
  const navigate = useNavigate()
  const sc = statusConfig[apartment.status]
  const onClick = () => navigate(`/apartamentos/${apartment.id}`)

  return (
    <article
      className="group bg-[#1A1E2A] border border-white/6 rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:border-[#E8A617]/20 hover:shadow-[0_24px_56px_rgba(0,0,0,0.5)]"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={apartment.thumbnail}
          alt={apartment.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1E2A]/90 to-transparent"/>

        {/* Status */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-sm ${sc.cls}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current"/>
            {sc.label}
          </span>
        </div>

        {/* Floor */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#0D0F14]/75 text-[#8A90A4] backdrop-blur-sm">
            Piso {apartment.floor}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-[#4E5468] text-xs mb-2">
          <MapPin className="w-3.5 h-3.5" />
          {apartment.location}, {apartment.city}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-[#F0F2F8] text-base mb-4 leading-snug group-hover:text-[#E8A617] transition-colors duration-300 line-clamp-2">
          {apartment.title}
        </h3>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4">
          {[
            { Icon: BedDouble, val: apartment.bedrooms === 0 ? 'Estudio' : `${apartment.bedrooms} Hab` },
            { Icon: Bath,      val: `${apartment.bathrooms} Baños` },
            { Icon: SquareArea, val: `${apartment.area} m²` },
          ].map(({ Icon, val }, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[#8A90A4] text-xs">
              <Icon className="w-3.5 h-3.5 text-[#4E5468]" />
              {val}
            </div>
          ))}
        </div>

        <div className="h-px bg-white/5 mb-4"/>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#4E5468] text-[10px] uppercase tracking-wider">Precio</p>
            <p className="font-display font-black text-lg text-[#E8A617] leading-none mt-0.5">
              {apartment.priceFormatted}
            </p>
          </div>
          <button
            id={`apt-card-${apartment.id}`}
            onClick={onClick}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-[#E8A617]/8 border border-[#E8A617]/20 text-[#E8A617] text-xs font-display font-bold rounded-lg transition-all duration-300 group-hover:bg-gold group-hover:text-[#0D0F14] group-hover:border-transparent cursor-pointer"
          >
            Ver detalle
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default ApartmentCard
