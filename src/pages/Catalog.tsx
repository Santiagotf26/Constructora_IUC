import { useState, useEffect, useMemo } from 'react'
import { APARTMENTS, PRICE_MIN, PRICE_MAX, AREA_MIN, AREA_MAX } from '../data/apartments'
import type { FilterState } from '../types'
import FilterBar from '../components/catalog/FilterBar'
import ApartmentCard from '../components/catalog/ApartmentCard'
import SkeletonCard from '../components/catalog/SkeletonCard'
import { Filter, ArrowRight } from '../components/icons'

const DEFAULT_FILTERS: FilterState = {
  priceMin: PRICE_MIN, priceMax: PRICE_MAX,
  areaMin:  AREA_MIN,  areaMax:  AREA_MAX,
  bedrooms: null, type: null, status: null,
}

type SortKey = 'price-asc' | 'price-desc' | 'area-asc' | 'area-desc' | 'default'

const Catalog = () => {
  const [filters,           setFilters]           = useState<FilterState>(DEFAULT_FILTERS)
  const [sort,              setSort]              = useState<SortKey>('default')
  const [loading,           setLoading]           = useState(true)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [filters])

  const filtered = useMemo(() => {
    let result = APARTMENTS.filter(apt => {
      if (apt.price < filters.priceMin || apt.price > filters.priceMax) return false
      if (apt.area  < filters.areaMin  || apt.area  > filters.areaMax)  return false
      if (filters.bedrooms !== null) {
        if (filters.bedrooms === 3 && apt.bedrooms < 3)  return false
        if (filters.bedrooms !== 3 && apt.bedrooms !== filters.bedrooms) return false
      }
      if (filters.status && apt.status !== filters.status) return false
      return true
    })
    switch (sort) {
      case 'price-asc':  return [...result].sort((a, b) => a.price - b.price)
      case 'price-desc': return [...result].sort((a, b) => b.price - a.price)
      case 'area-asc':   return [...result].sort((a, b) => a.area  - b.area)
      case 'area-desc':  return [...result].sort((a, b) => b.area  - a.area)
      default:           return result
    }
  }, [filters, sort])

  const clearFilters = () => setFilters(DEFAULT_FILTERS)

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-20">
      {/* Page header */}
      <div className="bg-white border-b border-[#6E7E65]/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="pill mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E7E65] block"/>
            Catálogo de Unidades
          </div>
          <h1 className="font-display font-black text-4xl text-[#1C201E] mb-3">
            Apartamentos <span className="text-gold">Disponibles</span>
          </h1>
          <p className="text-[#454C47] max-w-xl text-sm font-light">
            Explora las diferentes tipologías en venta y preventa en las zonas residenciales de mayor exclusividad de Duitama, Boyacá.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar — desktop */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <FilterBar filters={filters} onChange={setFilters} onClear={clearFilters} totalResults={filtered.length}/>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-6 p-4 bg-white border border-[#6E7E65]/8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                {/* Mobile filter btn */}
                <button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#FAF9F6] border border-[#6E7E65]/15 text-[#1C201E] text-xs font-bold rounded-xl hover:border-[#6E7E65] transition-colors cursor-pointer"
                >
                  <Filter className="w-4 h-4 text-[#6E7E65]" />
                  Filtros
                </button>
                <p className="text-[#454C47] text-xs font-semibold">
                  Resultados: <span className="text-[#6E7E65] font-black">{loading ? '—' : filtered.length}</span> unidades
                </p>
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-2">
                <span className="text-[#7C837E] text-[10px] uppercase font-bold tracking-wider">Ordenar:</span>
                <select
                  id="catalog-sort"
                  value={sort}
                  onChange={e => setSort(e.target.value as SortKey)}
                  className="bg-[#FAF9F6] border border-[#6E7E65]/15 text-[#1C201E] text-xs font-bold rounded-xl px-3 py-2 cursor-pointer focus:border-[#6E7E65] transition-colors"
                >
                  <option value="default">Relevancia</option>
                  <option value="price-asc">Precio menor a mayor</option>
                  <option value="price-desc">Precio mayor a menor</option>
                  <option value="area-asc">Área menor a mayor</option>
                  <option value="area-desc">Área mayor a menor</option>
                </select>
              </div>
            </div>

            {/* Mobile filters panel */}
            {mobileFiltersOpen && (
              <div className="lg:hidden mb-6">
                <FilterBar filters={filters} onChange={setFilters} onClear={clearFilters} totalResults={filtered.length}/>
              </div>
            )}

            {/* Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i}/>)}
              </div>
            ) : filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-white border border-[#6E7E65]/8 rounded-3xl p-8">
                <div className="w-16 h-16 rounded-2xl bg-[#6E7E65]/8 border border-[#6E7E65]/12 flex items-center justify-center mx-auto mb-5 text-[#6E7E65]">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-[#1C201E] mb-2">Sin Resultados</h3>
                <p className="text-[#7C837E] mb-6 max-w-sm text-xs font-light">
                  No hemos encontrado apartamentos con los filtros seleccionados. Intenta modificarlos.
                </p>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-6 py-3 bg-[#6E7E65] text-white font-bold rounded-xl text-xs hover:bg-[#5D6B54] transition-colors cursor-pointer"
                >
                  Limpiar todos los filtros
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map(apt => <ApartmentCard key={apt.id} apartment={apt}/>)}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Catalog
