import { TaskType } from "../types/TaskType";
import { Task } from "./Task";

type props = {
  data: Array<TaskType>;
  isOpen: boolean;
  actionDelete: (id: string) => void;
};

export const Todos = (props: props) => {
  return (
    <div className="todos">
      {(props.data.length === 0 && !props.isOpen) && (
        <p className="flex text-xl font-bold text-gray-400 justify-center mt-5">No tasks</p>
      )}
      {props.data.map((task) => (
        <Task key={task.id} data={task} actionDelete={props.actionDelete} />
      ))}
    </div>
  );
};
