import { useEffect, useRef, useState } from 'react'
import { clinicalCases } from '../data/clinicalCases.js'
import useSwipe from '../hooks/useSwipe.js'
import CaseViewer from './CaseViewer.jsx'
import './ClinicalCases.css'

// Level 1 navigation: moves between cases. Opening a case hands over to CaseViewer (Level 2).
export default function ClinicalCases() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [openId, setOpenId] = useState(null)

  const casesRef = useRef(null)
  const openCase = clinicalCases.find((c) => c.id === openId)

  // The carousel stays visible (blurred) behind an open case, but must not be reachable.
  useEffect(() => {
    casesRef.current?.toggleAttribute('inert', Boolean(openCase))
  }, [openCase])

  const last = clinicalCases.length - 1
  const go = (delta) => setActiveIndex((i) => Math.min(last, Math.max(0, i + delta)))

  // Swipe left -> next case, swipe right -> previous case.
  const swipe = useSwipe({ onSwipeLeft: () => go(1), onSwipeRight: () => go(-1) })

  const handleKeyDown = (event) => {
    if (openCase) return // keys belong to the open viewer, not the carousel
    if (event.key === 'ArrowLeft') go(-1)
    if (event.key === 'ArrowRight') go(1)
  }

  return (
    <div className="cases" ref={casesRef} onKeyDown={handleKeyDown}>
      <div
        className="cases__stage"
        {...swipe}
        role="group"
        aria-roledescription="carousel"
        aria-label="Clinical cases"
      >
        {clinicalCases.map((c, index) => {
          const offset = index - activeIndex
          const distance = Math.abs(offset)
          return (
            <button
              key={c.id}
              type="button"
              className="case-card"
              style={{ '--offset': offset }}
              data-distance={Math.min(distance, 3)}
              tabIndex={distance > 2 ? -1 : 0}
              aria-label={`Open case: ${c.title}`}
              onClick={() => {
                setActiveIndex(index)
                setOpenId(c.id)
              }}
            >
              <img className="case-card__image" src={c.previewImage} alt="" />
              <span className="case-card__body">
                <span className="case-card__title">{c.title}</span>
                <span className="case-card__text">{c.description}</span>
              </span>
            </button>
          )
        })}
      </div>

      <div className="cases__controls">
        <button
          type="button"
          className="icon-btn"
          onClick={() => go(-1)}
          disabled={activeIndex === 0}
          aria-label="Previous case"
        >
          <span className="chevron chevron--left" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="icon-btn"
          onClick={() => go(1)}
          disabled={activeIndex === last}
          aria-label="Next case"
        >
          <span className="chevron chevron--right" aria-hidden="true" />
        </button>
      </div>

      {openCase && (
        // `key` guarantees a freshly opened case always starts at its first image.
        <CaseViewer key={openCase.id} caseData={openCase} onClose={() => setOpenId(null)} />
      )}
    </div>
  )
}