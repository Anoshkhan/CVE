import { useEffect, useState } from 'react'

/**
 * images: [{ src, caption }]
 * Renders a responsive grid of thumbnails; clicking one opens a lightbox
 * with prev/next navigation and Escape-to-close.
 */
export default function Gallery({ images }) {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (openIndex === null) return
    function onKey(e) {
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex, images.length])

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button
            key={img.src}
            className="gallery-thumb"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open image: ${img.caption}`}
          >
            <img src={img.src} alt={img.caption} loading="lazy" />
            <span className="gallery-caption">{img.caption}</span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpenIndex(null)}>
          <button className="lightbox-close" onClick={() => setOpenIndex(null)} aria-label="Close">✕</button>
          <button
            className="lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); setOpenIndex((i) => (i - 1 + images.length) % images.length) }}
            aria-label="Previous image"
          >‹</button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={images[openIndex].src} alt={images[openIndex].caption} />
            <figcaption>{images[openIndex].caption}</figcaption>
          </figure>
          <button
            className="lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); setOpenIndex((i) => (i + 1) % images.length) }}
            aria-label="Next image"
          >›</button>
        </div>
      )}
    </>
  )
}
