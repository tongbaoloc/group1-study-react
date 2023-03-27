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
    <div className="task mt-5 mb-5">
      <input type="checkbox" onChange={handleChange}></input>
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
