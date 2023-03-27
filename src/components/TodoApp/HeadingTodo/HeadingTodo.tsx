import './HeadingTodo.scss'

export default function HeadingTodo(
  { title }:
    { title: string }
) {
  return (
    <div className="w-full h-12 flex justify-center items-center text-white font-bold text-xl leading-normal bg-dark border-2 border-solid border-black mb-3">
      {title}
    </div>
  )
}