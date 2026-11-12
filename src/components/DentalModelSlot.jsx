/**
 * PLACEHOLDER for the interactive 3D dental design of an Exocad case.
 *
 * No 3D model exists in the project yet and no 3D library is installed, so this renders
 * only a labelled empty area. It is NOT a 3D model and is not interactive.
 *
 * To make it real:
 * 1. Add the model file (for example .glb) under /public/models/ and set `model.src`
 *    for each case in src/data/exocadCases.js.
 * 2. Add a 3D renderer (for example three.js, or Google's <model-viewer> element).
 * 3. Replace the contents of the <div> below with the 3D canvas. The area has a fixed
 *    height and `overflow: hidden`, so the scene stays inside it.
 *
 * Note: horizontal swiping changes the case. When this area becomes touch-rotatable,
 * the swipe handling in ExocadSection.jsx must ignore touches that start here.
 */
export default function DentalModelSlot({ model }) {
  return (
    <div className="exocad-case__model" role="group" aria-label={`${model.label} (placeholder)`}>
      <span className="exocad-case__model-label">{model.label}</span>
      <span className="exocad-case__model-note">3D model placeholder</span>
    </div>
  )
}