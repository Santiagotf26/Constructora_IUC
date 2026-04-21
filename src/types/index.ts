// ── Apartment types ──────────────────────────────────────────────────────────
export interface Apartment {
  id: string
  title: string
  project: string
  price: number
  priceFormatted: string
  area: number         // m²
  bedrooms: number
  bathrooms: number
  floor: number
  type: 'studio' | '1br' | '2br' | '3br' | 'penthouse'
  status: 'available' | 'reserved' | 'sold'
  images: string[]
  thumbnail: string
  location: string
  city: string
  description: string
  amenities: string[]
  features: Feature[]
  coordinates: { lat: number; lng: number }
  deliveryDate: string
  stratum: number
  parking: number
}

export interface Feature {
  label: string
  value: string
}

export interface Project {
  id: string
  name: string
  description: string
  image: string
  location: string
  units: number
  status: string
  priceFrom: number
}

// ── Filter types ──────────────────────────────────────────────────────────────
export interface FilterState {
  priceMin: number
  priceMax: number
  areaMin: number
  areaMax: number
  bedrooms: number | null
  type: string | null
  status: string | null
}
