import { useState } from 'react'
import { exocadCases } from '../data/exocadCases.js'
import useSwipe from '../hooks/useSwipe.js'
import ExocadCase from './ExocadCase.jsx'
import './ExocadSection.css'

// Digital Dentistry · Exocad section. The id matches the "Exocad" navbar item.
// One case is shown at a time; there is no modal or expanded viewer.
export default function ExocadSection() {
  const [index, setIndex] = useState(0)

  const last = exocadCases.length - 1
  const go = (delta) => setIndex((i) => Math.min(last, Math.max(0, i + delta)))

  // Swipe left -> next case, swipe right -> previous case.
  const swipe = useSwipe({ onSwipeLeft: () => go(1), onSwipeRight: () => go(-1) })

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') go(-1)
    if (event.key === 'ArrowRight') go(1)
  }

  return (
    <section
      className="exocad"
      id="exocad"
      aria-label="Digital Dentistry · Exocad"
      onKeyDown={handleKeyDown}
    >
      <div className="exocad__inner">
        <div
          className="exocad__viewport"
          {...swipe}
          role="group"
          aria-roledescription="carousel"
          aria-label="Exocad cases"
        >
          <div className="exocad__track" style={{ '--index': index }}>
            {exocadCases.map((c, i) => (
              <div className="exocad__slide" key={c.id} aria-hidden={i !== index}>
                <ExocadCase caseData={c} active={i === index} />
              </div>
            ))}
          </div>
        </div>

        <div className="exocad__controls">
          <button
            type="button"
            className="icon-btn"
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Previous Exocad case"
          >
            <span className="chevron chevron--left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={() => go(1)}
            disabled={index === last}
            aria-label="Next Exocad case"
          >
            <span className="chevron chevron--right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}