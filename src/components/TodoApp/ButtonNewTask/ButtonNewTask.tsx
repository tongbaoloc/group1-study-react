import './ButtonNewTask.scss';
import { FiPlus } from "react-icons/fi";

export default function ButtonNewTask(
  { name }:
    { name: string }
) {
  return (
    <div className="buttonnewtask">
      <button>
        <FiPlus />
        {name}
      </button>
    </div>
  )
}