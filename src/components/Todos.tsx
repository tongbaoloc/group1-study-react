import { Spinner } from "../Icons/Spinner";
import { TaskType } from "../types/TaskType";
import { Task } from "./Task";

type props = {
  data: Array<TaskType>;
  isOpen: boolean;
  actionDelete: (id: string) => void;
  actionUpdate: (task: TaskType) => void;
};

export const Todos = (props: props) => {
  return (
    <div className="todos">
      {props.data.length === 0 && !props.isOpen && (
        <div role="status" className="flex justify-center">
          <Spinner />
        <span className="sr-only">Loading...</span>
    </div>
      )}
      {props.data.map((task) => (
        <Task
          key={task.id}
          data={task}
          actionDelete={props.actionDelete}
          actionUpdate={props.actionUpdate}
        />
      ))}
    </div>
  );
};
