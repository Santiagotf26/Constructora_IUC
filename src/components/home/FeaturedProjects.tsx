import { useNavigate } from 'react-router-dom'
import { PROJECTS } from '../../data/apartments'
import { ArrowRight, MapPin } from '../icons'

const formatShortPrice = (price: number) =>
  `$${(price / 1_000_000).toFixed(0)}M`

const FeaturedProjects = () => {
  const navigate = useNavigate()

  return (
    <section id="proyectos" className="py-28 bg-[#13161E]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="pill mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A617] block"/>
              Proyectos Destacados
            </div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[#F0F2F8] leading-tight">
              Nuestros<br/><span className="text-gold">Desarrollos</span>
            </h2>
          </div>
          <p className="text-[#8A90A4] max-w-md leading-relaxed text-sm">
            Selección de proyectos que marcan la diferencia en el mercado inmobiliario colombiano.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              onClick={() => navigate('/apartamentos')}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)] ${
                i === 0 ? 'lg:col-span-2 min-h-[440px]' : 'min-h-[360px]'
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with warm tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14]/98 via-[#0D0F14]/40 to-transparent"/>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F14]/30 to-transparent"/>

              {/* Status badge */}
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm ${
                  project.status === 'Preventa'
                    ? 'bg-blue-500/15 border border-blue-400/30 text-blue-300'
                    : project.status === 'Últimas unidades'
                    ? 'bg-red-500/15 border border-red-400/30 text-red-300'
                    : 'bg-emerald-500/15 border border-emerald-400/30 text-emerald-300'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"/>
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 text-[#8A90A4] text-xs mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </div>
                <h3 className="font-display font-black text-2xl text-[#F0F2F8] mb-2 group-hover:text-[#E8A617] transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-[#8A90A4] text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#8A90A4] text-[10px] uppercase tracking-wider">Desde</span>
                    <div className="font-display font-black text-xl text-[#E8A617] leading-none">
                      {formatShortPrice(project.priceFrom)}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#E8A617] text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                    Ver unidades
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/apartamentos')}
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/12 text-[#8A90A4] hover:text-[#E8A617] hover:border-[#E8A617]/40 font-display font-bold rounded-xl transition-all duration-300 cursor-pointer"
          >
            Ver todos los apartamentos
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
