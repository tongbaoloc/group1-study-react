import { useState } from "react";
import { IconTrash } from "../Icons/IconTrash";
import { TaskType } from "../types/TaskType";

type props = {
  data: TaskType,
  actionDelete: (id: string) => void
}

export const Task = (props: props) => {
  const [isChoose, setIsChoose] = useState(false);

  const handleChange = () => {
    setIsChoose(!isChoose);
  };

  const handleDeleteTask = () =>{
    props.actionDelete(props.data.id)
  }

  return (
    <div className="task mt-5">
      <input className="flex justify-items-center mt-1.5 ml-5 w-5 h-5" type="checkbox" onChange={handleChange}></input>
      {isChoose ? (
        <h3 className="text-xl font-bold line-through text-gray-500">{props.data.name}</h3>
      ) : (
        <h3 className="text-xl font-bold">{props.data.name}</h3>
      )}
      <button className="icon" onClick={handleDeleteTask}>
        <IconTrash />
      </button>
    </div>
  );
};
