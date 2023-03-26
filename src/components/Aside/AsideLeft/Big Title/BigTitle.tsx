import './BigTitle.scss'

export default function BigTitle(
  { title }:
    { title: string }
) {
  return (
    <div className="big-title">
      <h2>{title}</h2>
    </div>
  )
}