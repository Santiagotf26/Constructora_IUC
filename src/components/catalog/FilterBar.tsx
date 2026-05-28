import type { FilterState } from '../../types'
import { PRICE_MIN, PRICE_MAX, AREA_MIN, AREA_MAX } from '../../data/apartments'
import { Check, WhatsApp } from '../icons'

interface Props {
  filters: FilterState
  onChange: (f: FilterState) => void
  onClear: () => void
  totalResults: number
}

const formatM = (n: number) =>
  `$${(n / 1_000_000).toFixed(0)}M`

const bedroomOpts = [
  { value: null, label: 'Todos' },
  { value: 1, label: '1 Hab' },
  { value: 2, label: '2 Hab' },
  { value: 3, label: '3+ Hab' },
]

const statusOpts = [
  { value: null,        label: 'Todos' },
  { value: 'available', label: 'Disponible' },
  { value: 'reserved',  label: 'Reservado' },
]

const FilterBar = ({ filters, onChange, onClear, totalResults }: Props) => {
  const update = (partial: Partial<FilterState>) => onChange({ ...filters, ...partial })

  const hasActive =
    filters.priceMin > PRICE_MIN || filters.priceMax < PRICE_MAX ||
    filters.areaMin > AREA_MIN   || filters.areaMax < AREA_MAX   ||
    filters.bedrooms !== null    || filters.type !== null         || filters.status !== null

  const rangeInputCls = 'w-full h-1 bg-[#6E7E65]/20 rounded-lg cursor-pointer accent-[#6E7E65]'

  return (
    <aside className="bg-white border border-[#6E7E65]/10 rounded-3xl p-6 sticky top-24 space-y-6 shadow-gold">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#6E7E65]/6">
        <h2 className="font-display font-black text-[#1C201E] text-base uppercase tracking-wider">Filtros</h2>
        {hasActive && (
          <button
            onClick={onClear}
            className="text-[#6E7E65] text-xs font-bold hover:text-[#5D6B54] transition-colors cursor-pointer"
          >
            Limpiar ×
          </button>
        )}
      </div>

      {/* Results counter */}
      <div className="bg-[#6E7E65]/5 border border-[#6E7E65]/12 rounded-2xl px-4 py-3.5 text-center">
        <span className="font-display font-black text-2xl text-[#6E7E65]">{totalResults}</span>
        <p className="text-[#7C837E] text-[10px] uppercase font-bold tracking-wider mt-0.5">apartamentos encontrados</p>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-[10px] font-bold text-[#7C837E] uppercase tracking-widest mb-4">Precio (COP)</label>
        <div className="flex justify-between text-xs text-[#454C47] font-semibold mb-3">
          <span>{formatM(filters.priceMin)}</span>
          <span>{formatM(filters.priceMax)}</span>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-[#7C837E] text-[9px] font-semibold mb-1 block">Mínimo</label>
            <input id="filter-price-min" type="range" min={PRICE_MIN} max={PRICE_MAX} step={5_000_000}
              value={filters.priceMin}
              onChange={e => update({ priceMin: Math.min(+e.target.value, filters.priceMax - 10_000_000) })}
              className={rangeInputCls}/>
          </div>
          <div>
            <label className="text-[#7C837E] text-[9px] font-semibold mb-1 block">Máximo</label>
            <input id="filter-price-max" type="range" min={PRICE_MIN} max={PRICE_MAX} step={5_000_000}
              value={filters.priceMax}
              onChange={e => update({ priceMax: Math.max(+e.target.value, filters.priceMin + 10_000_000) })}
              className={rangeInputCls}/>
          </div>
        </div>
      </div>

      {/* Area Range */}
      <div>
        <label className="block text-[10px] font-bold text-[#7C837E] uppercase tracking-widest mb-4">Área (m²)</label>
        <div className="flex justify-between text-xs text-[#454C47] font-semibold mb-3">
          <span>{filters.areaMin} m²</span>
          <span>{filters.areaMax} m²</span>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-[#7C837E] text-[9px] font-semibold mb-1 block">Mínimo</label>
            <input id="filter-area-min" type="range" min={AREA_MIN} max={AREA_MAX} step={2}
              value={filters.areaMin}
              onChange={e => update({ areaMin: Math.min(+e.target.value, filters.areaMax - 4) })}
              className={rangeInputCls}/>
          </div>
          <div>
            <label className="text-[#7C837E] text-[9px] font-semibold mb-1 block">Máximo</label>
            <input id="filter-area-max" type="range" min={AREA_MIN} max={AREA_MAX} step={2}
              value={filters.areaMax}
              onChange={e => update({ areaMax: Math.max(+e.target.value, filters.areaMin + 4) })}
              className={rangeInputCls}/>
          </div>
        </div>
      </div>

      {/* Bedrooms filter */}
      <div>
        <label className="block text-[10px] font-bold text-[#7C837E] uppercase tracking-widest mb-3">Habitaciones</label>
        <div className="grid grid-cols-4 gap-1.5">
          {bedroomOpts.map(opt => (
            <button
              key={String(opt.value)}
              id={`filter-br-${opt.value}`}
              onClick={() => update({ bedrooms: opt.value })}
              className={`py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                filters.bedrooms === opt.value
                  ? 'bg-[#6E7E65] text-white shadow-md'
                  : 'bg-[#FAF9F6] text-[#454C47] hover:bg-[#6E7E65]/10 hover:text-[#1C201E]'
              }`}
            >
              {opt.label === 'Todos' ? 'All' : opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Status filter */}
      <div>
        <label className="block text-[10px] font-bold text-[#7C837E] uppercase tracking-widest mb-3">Estado</label>
        <div className="space-y-1.5">
          {statusOpts.map(opt => (
            <button
              key={String(opt.value)}
              id={`filter-status-${opt.value}`}
              onClick={() => update({ status: opt.value })}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                filters.status === opt.value
                  ? 'bg-[#6E7E65]/8 border border-[#6E7E65]/25 text-[#6E7E65]'
                  : 'border border-[#6E7E65]/10 text-[#454C47] hover:border-[#6E7E65]/25 hover:text-[#1C201E] bg-[#FAF9F6]'
              }`}
            >
              {opt.label}
              {filters.status === opt.value && (
                <Check className="w-3.5 h-3.5 text-[#6E7E65]" strokeWidth={2.5} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Helper CTA */}
      <div className="bg-[#FAF9F6] border border-[#6E7E65]/8 rounded-2xl p-4 text-center">
        <p className="text-[#7C837E] text-[11px] font-medium mb-3">¿Prefieres asesoría directa?</p>
        <a
          href="https://wa.me/573142767572?text=Hola, busco un apartamento en Duitama. Me gustaría recibir asesoría."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-xl hover:bg-[#1fb958] transition-colors"
        >
          <WhatsApp className="w-4.5 h-4.5" />
          Preguntar WhatsApp
        </a>
      </div>
    </aside>
  )
}

export default FilterBar
