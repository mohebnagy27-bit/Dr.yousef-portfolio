import DentalModelSlot from './DentalModelSlot.jsx'

// One Exocad case: a single glass surface holding the information (top) and the 3D design (below).
export default function ExocadCase({ caseData }) {
  const { title, description, details, model } = caseData

  return (
    <article className="exocad-case">
      <div className="exocad-case__info">
        <h3 className="exocad-case__title">{title}</h3>
        <p className="exocad-case__text">{description}</p>
        <dl className="exocad-case__details">
          {details.map((detail) => (
            <div className="exocad-case__detail" key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <DentalModelSlot model={model} />
    </article>
  )
}