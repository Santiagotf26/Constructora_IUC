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
    const t = setTimeout(() => setLoading(false), 1200)
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
    <div className="min-h-screen bg-[#0D0F14] pt-20">
      {/* Page header */}
      <div className="bg-[#13161E] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="pill mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A617] block"/>
            Catálogo Completo
          </div>
          <h1 className="font-display font-black text-4xl lg:text-5xl text-[#F0F2F8] mb-3">
            Apartamentos <span className="text-gold">Disponibles</span>
          </h1>
          <p className="text-[#8A90A4] max-w-xl text-sm">
            Encuentra el apartamento perfecto entre nuestra selección de unidades en los mejores sectores de Bogotá.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <FilterBar filters={filters} onChange={setFilters} onClear={clearFilters} totalResults={filtered.length}/>
          </div>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                {/* Mobile filter btn */}
                <button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-[#1A1E2A] border border-white/8 text-[#F0F2F8] text-sm font-semibold rounded-xl hover:border-[#E8A617]/30 transition-colors cursor-pointer"
                >
                  <Filter className="w-4 h-4" />
                  Filtros
                </button>
                <p className="text-[#8A90A4] text-sm">
                  <span className="font-bold text-[#F0F2F8]">{loading ? '—' : filtered.length}</span> apartamentos
                </p>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-[#4E5468] text-xs">Ordenar:</span>
                <select
                  id="catalog-sort"
                  value={sort}
                  onChange={e => setSort(e.target.value as SortKey)}
                  className="bg-[#1A1E2A] border border-white/8 text-[#F0F2F8] text-sm rounded-xl px-3 py-2 cursor-pointer appearance-none focus:border-[#E8A617]/40 transition-colors"
                >
                  <option value="default">Relevancia</option>
                  <option value="price-asc">Precio ↑</option>
                  <option value="price-desc">Precio ↓</option>
                  <option value="area-asc">Área ↑</option>
                  <option value="area-desc">Área ↓</option>
                </select>
              </div>
            </div>

            {/* Mobile filters */}
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
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-20 h-20 rounded-2xl bg-[#E8A617]/8 border border-[#E8A617]/15 flex items-center justify-center mx-auto mb-5">
                  <Filter className="w-10 h-10 text-[#E8A617]" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#F0F2F8] mb-3">Sin resultados</h3>
                <p className="text-[#8A90A4] mb-6 max-w-sm text-sm">
                  No encontramos apartamentos con esos filtros. Intenta ampliar tu búsqueda.
                </p>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-6 py-3 bg-gold text-[#0D0F14] font-bold rounded-xl text-sm hover:-translate-y-0.5 transition-transform cursor-pointer"
                >
                  Limpiar filtros
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
