import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import useSwipe from '../hooks/useSwipe.js'

// Level 2 navigation: moves between the images of ONE case. One image is shown at a time.
export default function CaseViewer({ caseData, onClose }) {
  const { title, images } = caseData
  const total = images.length
  const [view, setView] = useState({ index: 0, dir: 0 })
  const rootRef = useRef(null)
  const pressedOnBackdrop = useRef(false)
  const current = images[view.index]

  useEffect(() => {
    rootRef.current?.focus()
  }, [])

  // Arrows wrap around: first -> last and last -> first.
  const step = (delta) =>
    setView((v) => ({ index: (v.index + delta + total) % total, dir: delta }))
  const jump = (target) =>
    setView((v) => ({ index: target, dir: target > v.index ? 1 : -1 }))

  // Swipe left -> next image, swipe right -> previous image (wraps like the arrows).
  const swipe = useSwipe({ onSwipeLeft: () => step(1), onSwipeRight: () => step(-1) })

  // Close only when a press STARTS and ENDS on the backdrop itself. Presses inside the
  // viewer (or drags that merely end on the backdrop) never close it.
  const handleBackdropPointerDown = (event) => {
    pressedOnBackdrop.current = event.target === event.currentTarget
  }
  const handleBackdropClick = (event) => {
    if (pressedOnBackdrop.current && event.target === event.currentTarget) onClose()
    pressedOnBackdrop.current = false
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') onClose()
    if (total > 1 && event.key === 'ArrowLeft') step(-1)
    if (total > 1 && event.key === 'ArrowRight') step(1)
  }

  return createPortal(
    <div
      className="viewer-backdrop"
      onPointerDown={handleBackdropPointerDown}
      onClick={handleBackdropClick}
    >
    <section
      className="viewer"
      ref={rootRef}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label={`${title}: images`}
    >
      <header className="viewer__header">
        <h3 className="viewer__title">{title}</h3>
        <button type="button" className="viewer__close" onClick={onClose}>
          Close
        </button>
      </header>

      <figure className="viewer__figure">
        <div className="viewer__media">
          {total > 1 && (
            <button
              type="button"
              className="icon-btn viewer__arrow viewer__arrow--prev"
              onClick={() => step(-1)}
              aria-label="Previous image"
            >
              <span className="chevron chevron--left" aria-hidden="true" />
            </button>
          )}

          <div className="viewer__frame" {...swipe}>
            <img
              key={view.index}
              className="viewer__image"
              src={current.src}
              alt={current.caption}
              style={{ '--dir': view.dir }}
            />
          </div>

          {total > 1 && (
            <button
              type="button"
              className="icon-btn viewer__arrow viewer__arrow--next"
              onClick={() => step(1)}
              aria-label="Next image"
            >
              <span className="chevron chevron--right" aria-hidden="true" />
            </button>
          )}
        </div>

        <figcaption key={view.index} className="viewer__caption" aria-live="polite">
          {current.caption}
        </figcaption>

        <div className="viewer__dots">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              className={`viewer__dot${i === view.index ? ' is-active' : ''}`}
              onClick={() => jump(i)}
              aria-label={`Image ${i + 1} of ${total}`}
              aria-current={i === view.index ? 'true' : undefined}
            />
          ))}
        </div>
      </figure>
    </section>
    </div>,
    document.body,
  )
}