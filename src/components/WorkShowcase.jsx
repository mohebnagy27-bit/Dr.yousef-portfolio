import ClinicalCases from './ClinicalCases.jsx'
import './WorkShowcase.css'

// Clinical Cases section. The id matches the "Clinical Cases" navbar item.
export default function WorkShowcase() {
  return (
    <section className="showcase" id="clinical" aria-label="Clinical Cases">
      <div className="showcase__inner">
        <ClinicalCases />
      </div>
    </section>
  )
}