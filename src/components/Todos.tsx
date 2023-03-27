import { TaskType } from "../types/TaskType";
import { Task } from "./Task";

type props = {
  data: Array<TaskType>;
  actionDelete: (id: string) => void
};

export const Todos = (props: props) => {
  return (
    <div className="todos">
      {props.data.map((task) => (
        <Task key={task.id} data={task} actionDelete={props.actionDelete}/>
      ))}
    </div>
  );
};
