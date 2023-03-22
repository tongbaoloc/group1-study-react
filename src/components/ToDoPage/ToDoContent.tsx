import { TodoItem } from "./ToDoItem";

type ToDo = {
  id: string;
  name: string;
  isFinish: boolean;
};

type Props = {
  toDoList: ToDo[];
  setToDoList: React.Dispatch<ToDo[]>;
};

export const TodoContent = (props: Props) => {
  const toDoList = props.toDoList;

  const setToDoList = props.setToDoList;

  return (
    <div className="mt-10 bg-slate-300 p-20">
      {toDoList.map((toDoItem) => {
        return (
          <TodoItem
            toDo={toDoItem}
            toDoList={toDoList}
            setToDoList={setToDoList}
          />
        );
      })}
    </div>
  );
};
