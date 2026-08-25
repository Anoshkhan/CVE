export default function SectionHead({ eyebrow, title, lede }) {
  return (
    <div className="section-head">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {lede && <p>{lede}</p>}
    </div>
  )
}
