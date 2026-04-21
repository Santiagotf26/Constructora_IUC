import {
  Pool, Gym, SocialRoom, Bbq, Tree, Shield,
  Cctv, Bike, Spa, Laptop, PawPrint, Bell, Package, Concierge
} from '../icons'

const amenityIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Piscina cubierta':  Pool,
  'Gimnasio equipado': Gym,
  'Salón social':      SocialRoom,
  'Zona BBQ':          Bbq,
  'Parque infantil':   Tree,
  'Portería 24h':      Shield,
  'CCTV':              Cctv,
  'Cuarto de bicicletas': Bike,
  'Terraza rooftop':   Bell,
  'Spa y sauna':       Spa,
  'Coworking':         Laptop,
  'Pet zone':          PawPrint,
  'Concierge':         Concierge,
  'Bodegas':           Package,
}

interface Props { amenities: string[] }

const AmenitiesList = ({ amenities }: Props) => (
  <div>
    <h3 className="font-display font-bold text-xl text-[#F0F2F8] mb-5">Amenidades del Conjunto</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {amenities.map((amenity, i) => {
        const Icon = amenityIconMap[amenity]
        return (
          <div
            key={i}
            className="flex items-center gap-3 p-3.5 bg-[#1A1E2A] border border-white/6 rounded-xl hover:border-[#E8A617]/25 hover:bg-[#E8A617]/4 transition-all duration-200 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#E8A617]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8A617]/20 transition-colors duration-200">
              {Icon
                ? <Icon className="w-4 h-4 text-[#E8A617]" />
                : <span className="w-2 h-2 rounded-full bg-[#E8A617] block"/>
              }
            </div>
            <span className="text-[#8A90A4] text-sm font-medium leading-tight">{amenity}</span>
          </div>
        )
      })}
    </div>
  </div>
)

export default AmenitiesList
