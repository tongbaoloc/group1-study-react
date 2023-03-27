import './HeadingTodo.scss'

export default function HeadingTodo(
  { title }:
    { title: string }
) {
  return (
    <div className="headingtodo">
      {title}
    </div>
  )
}