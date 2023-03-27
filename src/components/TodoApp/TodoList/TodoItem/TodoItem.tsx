import { Todo } from '../../Todo.model';
import './TodoItem.scss';
import { FiTrash2 } from "react-icons/fi";

export default function TodoItem(todo: Todo) {
  return (
    <div className="todo border-2 border-solid border-black bg-darkest text-white px-3 py-1 flex justify-between items-center gap-x-2">
      <div className="truncate">{todo.title}</div>
      <button><FiTrash2 className="shrink-0" /></button>
    </div>
  )
}