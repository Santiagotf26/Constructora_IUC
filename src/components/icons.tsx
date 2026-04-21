import React from 'react'

// ── Centralized elegant SVG icons (no emojis) ──────────────────────────────
// All icons accept className prop for sizing/coloring via Tailwind

interface IconProps {
  className?: string
  strokeWidth?: number
}

const i = (d: string | React.ReactElement) =>
  ({ className = 'w-5 h-5', strokeWidth = 1.75 }: IconProps) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {typeof d === 'string' ? <path d={d}/> : d}
    </svg>
  )

// Navigation / UI
export const ArrowRight    = i('M5 12h14M12 5l7 7-7 7')
export const ArrowLeft     = i('M19 12H5m7-7-7 7 7 7')
export const Check         = i('M20 6 9 17 4 12')
export const Close         = i('M18 6 6 18M6 6l12 12')
export const ChevronDown   = i('M6 9l6 6 6-6')
export const Menu          = i(<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>)
export const ExternalLink  = i(<><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></>)
export const Filter        = i(<><line x1="21" y1="4" x2="14" y2="4"/><line x1="10" y1="4" x2="3" y2="4"/><circle cx="17" cy="4" r="3"/><line x1="21" y1="12" x2="12" y2="12"/><line x1="8" y1="12" x2="3" y2="12"/><circle cx="11" cy="12" r="3"/><line x1="21" y1="20" x2="16" y2="20"/><line x1="12" y1="20" x2="3" y2="20"/><circle cx="15" cy="20" r="3"/></>)
export const Search        = i(<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>)
export const ZoomIn        = i(<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></>)

// Real estate
export const Building      = i(<><rect x="3" y="2" width="18" height="20" rx="1"/><path d="M9 22V12h6v10"/><rect x="7" y="6" width="3" height="3"/><rect x="14" y="6" width="3" height="3"/><rect x="7" y="12" width="3" height="3"/><rect x="14" y="12" width="3" height="3"/></>)
export const Building2     = i(<><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></>)
export const MapPin        = i(<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>)
export const BedDouble     = i(<><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></>)
export const Bath          = i(<><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" y1="5" x2="8" y2="3"/><line x1="5" y1="10" x2="3" y2="8"/><path d="M14 7l3 3"/></>)
export const SquareArea    = i(<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></>)
export const Layers        = i(<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>)
export const Car           = i(<><path d="M19 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2Z"/><path d="M3 11h18M7 17v2m10-2v2"/><circle cx="7.5" cy="14" r="0.5" fill="currentColor"/><circle cx="16.5" cy="14" r="0.5" fill="currentColor"/></>)
export const FloorPlan     = i(<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></>)
export const Key           = i(<><circle cx="7.5" cy="15.5" r="5.5"/><path d="M21 2l-9.6 9.6"/><path d="M15.5 7.5l3 3L22 7l-3-3"/></>)

// Amenities
export const Pool          = i(<><path d="M2 12h20M2 16h20M2 20h20"/><path d="M4 4h16a2 2 0 0 1 2 2v4"/><path d="M4 4a2 2 0 0 0-2 2v4"/></>)
export const Gym           = i(<><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></>)
export const SocialRoom    = i(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>)
export const Bbq           = i(<><path d="M4 11h16"/><path d="M12 11V5a2 2 0 0 1 2-2"/><path d="M10 3a2 2 0 0 1 2 2"/><path d="M5 19h14"/><path d="M7 11v4"/><path d="M17 11v4"/><path d="M7 19v2"/><path d="M17 19v2"/><path d="M12 19v2"/></>)
export const Tree          = i(<><path d="M12 22v-7l-2-2"/><path d="M17 8V2H7v6l2.5 3.5c.83 1.17.83 2.83 0 4L7 19v3h10v-3l-2.5-3.5a3.5 3.5 0 0 1 0-4Z"/></>)
export const Shield        = i(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>)
export const Cctv          = i(<><path d="M16.75 12c0 2.62-2.13 4.75-4.75 4.75-2.62 0-4.75-2.13-4.75-4.75 0-2.62 2.13-4.75 4.75-4.75 2.62 0 4.75 2.13 4.75 4.75Z"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="M12 5V2"/><path d="M12 22v-3"/></>)
export const Bike          = i(<><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 0 0-1-1h-1"/><path d="M9.5 14H3"/><path d="M5.5 14 7 8"/><path d="m12 8 1.5 6"/><path d="m12 8 5 9.5"/></>)
export const Spa           = i(<><path d="M12 22c2-4 7-6 7-12A7 7 0 0 0 5 10c0 6 5 8 7 12Z"/><path d="M12 22c-2-4-7-6-7-12"/></>)
export const Laptop        = i(<><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></>)
export const PawPrint      = i(<><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></>)
export const Bell          = i(<><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>)
export const Package       = i(<><path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>)
export const Concierge     = i(<><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6H3"/><path d="M7 6a5 5 0 0 1 10 0"/><path d="M19 6h-2"/></>)

// Features
export const Award         = i(<><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></>)
export const TrendUp       = i(<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>)
export const Leaf          = i(<><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></>)
export const Clock         = i(<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>)
export const Phone         = i(<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></>)
export const Mail          = i(<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>)
export const Star          = i(<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>)
export const Users         = i(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>)
export const Lock          = i(<><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>)
export const Send          = i(<><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></>)
export const Lightning     = i(<><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>)
export const Certificate   = i(<><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>)
export const Ruler         = i(<><path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z"/><path d="m7.5 10.5 2 2"/><path d="m10.5 7.5 2 2"/><path d="m13.5 4.5 2 2"/><path d="m4.5 13.5 2 2"/></>)
export const CreditCard    = i(<><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></>)
export const DollarSign    = i(<><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>)

// WhatsApp (filled)
export const WhatsApp = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)
