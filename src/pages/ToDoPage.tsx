import { useEffect, useState } from "react";

import { AddNewToDo } from "../components/ToDoPage/AddNewToDo";
import { TodoContent } from "../components/ToDoPage/ToDoContent";
import { ToDoHeader } from "../components/ToDoPage/ToDoHeader";
import { ToDoResponse } from "../interfaces/TodoInterface";
import { getAllToDo } from "../services/todos.service";

type Props = {};

export const ToDoPage = (props: Props) => {
  const [toDoList, setToDoList] = useState<ToDoResponse[]>([]);
  const [isReloadData, setIsReloadData] = useState<boolean>(false);

  const getToDos = async () => {
    try {
      const res = await getAllToDo();

      setToDoList(res.data);
    } catch (err: any) {
      console.log("ERROR: Something went wrong when get all to do!");
    }
  };

  useEffect(() => {
    getToDos();
  }, [isReloadData]);

  return (
    <>
      <ToDoHeader />
      <TodoContent
        toDoList={toDoList}
        isReloadData={isReloadData}
        setIsReloadData={setIsReloadData}
      />
      <AddNewToDo
        isReloadData={isReloadData}
        setIsReloadData={setIsReloadData}
      />
    </>
  );
};
