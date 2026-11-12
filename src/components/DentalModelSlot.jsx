import { useState } from 'react'

const VIEWS = [
  { id: 'pre', label: 'PRE' },
  { id: 'post', label: 'POST' },
]

// Paths in src/data/exocadCases.js are relative to the site root (the files live in /public).
function toUrl(path) {
  return `${import.meta.env.BASE_URL}${path}`
}

// One self-contained model page. The parent gives it `key={src}`, so each file is a fresh
// iframe that fades in once it has loaded.
function ModelFrame({ src, title }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <iframe
      className={`exocad-case__frame${loaded ? ' is-loaded' : ''}`}
      src={src}
      title={title}
      onLoad={() => setLoaded(true)}
      allowFullScreen
    />
  )
}

/**
 * The 3D area of an Exocad case. It shows ONE self-contained HTML model (PRE or POST) in an
 * iframe that fills the area, with PRE / POST buttons in the top-right corner.
 *
 * - Only the active case mounts an iframe, so hidden cases never load their models.
 * - The iframe has no `sandbox`, so the model pages keep all their own behaviour.
 * - If a case has no model files, the original placeholder is shown instead.
 */
function DentalModelSlot({ model, active }) {
  const hasFiles = Boolean(model.pre || model.post)
  const [view, setView] = useState(model.pre ? 'pre' : 'post')
  const src = model[view]

  return (
    <div
      className="exocad-case__model"
      role="group"
      aria-label={hasFiles ? model.label : `${model.label} (placeholder)`}
    >
      {hasFiles ? (
        active && (
          <>
            <div className="exocad-case__switch" role="group" aria-label="Model view">
              {VIEWS.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  className={`exocad-case__switch-btn${view === id ? ' is-active' : ''}`}
                  aria-pressed={view === id}
                  disabled={!model[id]}
                  onClick={() => setView(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            {src && <ModelFrame key={src} src={toUrl(src)} title={`${model.label} (${view.toUpperCase()})`} />}
          </>
        )
      ) : (
        <>
          <span className="exocad-case__model-label">{model.label}</span>
          <span className="exocad-case__model-note">3D model placeholder</span>
        </>
      )}
    </div>
  )
}

export default DentalModelSlot