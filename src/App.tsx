import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { useState } from "react";
import { TaskType } from "./types/TaskType";
import { Modal } from "./components/Modal";

function App() {
  const [data, setData] = useState<Array<TaskType>>([
    {
      id: uuidv4(),
      name: "React",
    },
    {
      id: uuidv4(),
      name: "Vite",
    },
  ]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteTask = (id: string) => {
    setData(data.filter((item) => item.id !== id));
  };

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (nameTask: string) => {
    const newTask: TaskType = {
      id: uuidv4(),
      name: nameTask,
    };
    setData([...data, newTask]);
    setIsOpen(false);
  };

  return (
    <>
      <Header />
      <Todos isOpen={isOpen} data={data} actionDelete={handleDeleteTask} />
      {isOpen && <Modal actionSubmit={handleSubmit} />}
      {isOpen ? (
        <Button name="Cancel" actionOpenModal={openModal} />
      ) : (
        <Button name="New Task" actionOpenModal={openModal} />
      )}
    </>
  );
}

export default App;
