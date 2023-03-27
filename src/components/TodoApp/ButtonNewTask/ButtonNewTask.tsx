import './ButtonNewTask.scss'

export default function ButtonNewTask(
  { name }:
    { name: string }
) {
  return (
    <div className="buttonnewtask">
      <button className="py-3 px-6 bg-red border-2 border-solid border-black rounded-3xl font-bold text-white relative top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {name}
      </button>
    </div>
  )
}