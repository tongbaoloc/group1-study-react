import { useState } from "react";

import { AddNewToDo } from "../components/ToDoPage/AddNewToDo";
import { TodoContent } from "../components/ToDoPage/ToDoContent";
import { ToDoHeader } from "../components/ToDoPage/ToDoHeader";

type Props = {};

export const ToDoPage = (props: Props) => {
  const [toDoList, setToDoList] = useState([
    {
      id: "todo01",
      name: "This is todo number 01",
      isFinish: false,
    },
    {
      id: "todo02",
      name: "This is todo number 02",
      isFinish: false,
    },
    {
      id: "todo03",
      name: "This is todo number 03",
      isFinish: false,
    },
    {
      id: "todo04",
      name: "This is todo number 04",
      isFinish: false,
    },
  ]);

  return (
    <>
      <ToDoHeader />
      <TodoContent toDoList={toDoList} setToDoList={setToDoList} />
      <AddNewToDo toDoList={toDoList} setToDoList={setToDoList} />
    </>
  );
};
