import { ToDo } from "../../interfaces/TodoInterface";
import { TodoItem } from "./ToDoItem";

type Props = {
  toDoList: ToDo[];
  isReloadData: boolean;
  setIsReloadData: React.Dispatch<boolean>;
};

export const TodoContent = (props: Props) => {
  const toDoList = props.toDoList;
  const isReloadData = props.isReloadData;
  const setIsReloadData = props.setIsReloadData;

  return (
    <div className="p-20 mt-32 bg-slate-300 m-5 rounded-3xl">
      <div className="h-96 overflow-x-auto">
        {toDoList.map((toDoItem) => {
          return (
            <TodoItem
              toDo={toDoItem}
              isReloadData={isReloadData}
              setIsReloadData={setIsReloadData}
            />
          );
        })}
      </div>
    </div>
  );
};
