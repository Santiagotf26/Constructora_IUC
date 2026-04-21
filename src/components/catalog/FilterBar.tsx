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
  n >= 1_000_000_000
    ? `$${(n / 1_000_000_000).toFixed(1)}B`
    : `$${(n / 1_000_000).toFixed(0)}M`

const bedroomOpts = [
  { value: null, label: 'Todos' },
  { value: 0, label: 'Estudio' },
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

  const rangeInputCls = 'w-full h-1 rounded cursor-pointer accent-[#E8A617]'

  return (
    <aside className="bg-[#1A1E2A] border border-white/6 rounded-2xl p-6 sticky top-24 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-display font-bold text-[#F0F2F8] text-base">Filtros</h2>
        {hasActive && (
          <button
            onClick={onClear}
            className="text-[#E8A617] text-xs font-semibold hover:text-[#F5C84A] transition-colors cursor-pointer"
          >
            Limpiar ×
          </button>
        )}
      </div>

      {/* Results counter */}
      <div className="bg-[#E8A617]/8 border border-[#E8A617]/20 rounded-xl px-4 py-3 text-center">
        <span className="font-display font-black text-2xl text-[#E8A617]">{totalResults}</span>
        <p className="text-[#8A90A4] text-xs mt-0.5">apartamentos encontrados</p>
      </div>

      {/* Price */}
      <div>
        <label className="block text-[10px] font-bold text-[#4E5468] uppercase tracking-widest mb-4">Precio</label>
        <div className="flex justify-between text-xs text-[#8A90A4] mb-3">
          <span>{formatM(filters.priceMin)}</span>
          <span>{formatM(filters.priceMax)}</span>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-[#4E5468] text-[10px] mb-1.5 block">Mínimo</label>
            <input id="filter-price-min" type="range" min={PRICE_MIN} max={PRICE_MAX} step={10_000_000}
              value={filters.priceMin}
              onChange={e => update({ priceMin: Math.min(+e.target.value, filters.priceMax - 10_000_000) })}
              className={rangeInputCls}/>
          </div>
          <div>
            <label className="text-[#4E5468] text-[10px] mb-1.5 block">Máximo</label>
            <input id="filter-price-max" type="range" min={PRICE_MIN} max={PRICE_MAX} step={10_000_000}
              value={filters.priceMax}
              onChange={e => update({ priceMax: Math.max(+e.target.value, filters.priceMin + 10_000_000) })}
              className={rangeInputCls}/>
          </div>
        </div>
      </div>

      {/* Area */}
      <div>
        <label className="block text-[10px] font-bold text-[#4E5468] uppercase tracking-widest mb-4">Área (m²)</label>
        <div className="flex justify-between text-xs text-[#8A90A4] mb-3">
          <span>{filters.areaMin} m²</span>
          <span>{filters.areaMax} m²</span>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-[#4E5468] text-[10px] mb-1.5 block">Mínimo</label>
            <input id="filter-area-min" type="range" min={AREA_MIN} max={AREA_MAX} step={5}
              value={filters.areaMin}
              onChange={e => update({ areaMin: Math.min(+e.target.value, filters.areaMax - 5) })}
              className={rangeInputCls}/>
          </div>
          <div>
            <label className="text-[#4E5468] text-[10px] mb-1.5 block">Máximo</label>
            <input id="filter-area-max" type="range" min={AREA_MIN} max={AREA_MAX} step={5}
              value={filters.areaMax}
              onChange={e => update({ areaMax: Math.max(+e.target.value, filters.areaMin + 5) })}
              className={rangeInputCls}/>
          </div>
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="block text-[10px] font-bold text-[#4E5468] uppercase tracking-widest mb-4">Habitaciones</label>
        <div className="grid grid-cols-3 gap-2">
          {bedroomOpts.map(opt => (
            <button
              key={String(opt.value)}
              id={`filter-br-${opt.value}`}
              onClick={() => update({ bedrooms: opt.value })}
              className={`py-2 px-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                filters.bedrooms === opt.value
                  ? 'bg-[#E8A617] text-[#0D0F14]'
                  : 'bg-[#13161E] text-[#8A90A4] hover:bg-[#252A38] hover:text-[#F0F2F8]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="block text-[10px] font-bold text-[#4E5468] uppercase tracking-widest mb-4">Estado</label>
        <div className="space-y-2">
          {statusOpts.map(opt => (
            <button
              key={String(opt.value)}
              id={`filter-status-${opt.value}`}
              onClick={() => update({ status: opt.value })}
              className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                filters.status === opt.value
                  ? 'bg-[#E8A617]/10 border border-[#E8A617]/35 text-[#E8A617]'
                  : 'border border-white/6 text-[#8A90A4] hover:border-white/12 hover:text-[#F0F2F8]'
              }`}
            >
              {opt.label}
              {filters.status === opt.value && (
                <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="bg-[#25D366]/8 border border-[#25D366]/18 rounded-xl p-4 text-center">
        <p className="text-[#8A90A4] text-xs mb-3">¿No encuentras lo que buscas?</p>
        <a
          href="https://wa.me/573142767572?text=Hola, busco un apartamento con IUC%26CO"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-lg hover:bg-[#1fb958] transition-colors"
        >
          <WhatsApp className="w-4 h-4" />
          Consultar por WhatsApp
        </a>
      </div>
    </aside>
  )
}

export default FilterBar
