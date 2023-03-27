import './ButtonNewTask.scss'

export default function ButtonNewTask(
  { name }:
    { name: string }
) {
  return (
    <button className="buttonnewtask">
      {name}
    </button>
  )
}