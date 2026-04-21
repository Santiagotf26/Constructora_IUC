import { useState } from 'react'

interface Props {
  images: string[]
  title: string
}

const ImageGallery = ({ images, title }: Props) => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const prev = () => setActiveIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setActiveIdx(i => (i + 1) % images.length)

  // Keyboard support
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') setLightbox(false)
  }

  return (
    <>
      <div className="space-y-3">
        {/* Main image */}
        <div
          className="relative aspect-video rounded-2xl overflow-hidden cursor-zoom-in group"
          onClick={() => setLightbox(true)}
        >
          <img
            src={images[activeIdx]}
            alt={`${title} - imagen ${activeIdx + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent"/>

          {/* Nav arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                id="gallery-prev"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 cursor-pointer"
              >
                ‹
              </button>
              <button
                onClick={e => { e.stopPropagation(); next() }}
                id="gallery-next"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 cursor-pointer"
              >
                ›
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute bottom-3 right-4 glass rounded-full px-3 py-1 text-xs text-white font-semibold">
            {activeIdx + 1} / {images.length}
          </div>

          {/* Zoom hint */}
          <div className="absolute top-3 right-4 glass rounded-lg px-2.5 py-1.5 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            Ampliar
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                id={`gallery-thumb-${i}`}
                onClick={() => setActiveIdx(i)}
                className={`aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                  i === activeIdx
                    ? 'border-primary shadow-gold'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover"/>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-dark/95 flex items-center justify-center"
          onClick={() => setLightbox(false)}
          onKeyDown={handleKey}
          tabIndex={0}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-6 right-6 w-10 h-10 glass rounded-full flex items-center justify-center text-white text-xl hover:bg-white/20 transition-colors z-10 cursor-pointer"
          >
            ×
          </button>

          <div className="relative max-w-5xl w-full mx-6" onClick={e => e.stopPropagation()}>
            <img
              src={images[activeIdx]}
              alt={title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            {images.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white text-2xl hover:bg-white/20 transition-colors cursor-pointer">‹</button>
                <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white text-2xl hover:bg-white/20 transition-colors cursor-pointer">›</button>
              </>
            )}
          </div>

          {/* Thumbnails strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${i === activeIdx ? 'bg-primary w-6' : 'bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery
