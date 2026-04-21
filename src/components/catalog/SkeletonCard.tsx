// Skeleton card for loading state
const SkeletonCard = () => (
  <div className="bg-dark-3 border border-white/5 rounded-2xl overflow-hidden">
    {/* Image skeleton */}
    <div className="h-56 animate-shimmer"/>

    {/* Content skeleton */}
    <div className="p-5 space-y-3">
      <div className="flex justify-between items-start">
        <div className="h-3 w-20 rounded animate-shimmer"/>
        <div className="h-3 w-16 rounded animate-shimmer"/>
      </div>
      <div className="h-5 w-3/4 rounded animate-shimmer"/>
      <div className="h-4 w-1/2 rounded animate-shimmer"/>

      {/* Specs row */}
      <div className="flex gap-4 pt-2">
        <div className="h-3 w-12 rounded animate-shimmer"/>
        <div className="h-3 w-12 rounded animate-shimmer"/>
        <div className="h-3 w-12 rounded animate-shimmer"/>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/5 my-2"/>

      {/* Bottom */}
      <div className="flex justify-between items-center">
        <div className="h-6 w-28 rounded animate-shimmer"/>
        <div className="h-9 w-24 rounded-lg animate-shimmer"/>
      </div>
    </div>
  </div>
)

export default SkeletonCard
