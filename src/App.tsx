import "./App.css";
import { v4 as uuidv4 } from 'uuid';
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
    {
      id: uuidv4(),
      name: "TypeScripts",
    },
  ]);

  const [isOpen, setIsOpen] = useState<Boolean>(false)

  const handleDeleteTask = (id: string) => {
    setData(data.filter(item => item.id !== id));
  };

  const openModal = () => {
    setIsOpen(true)
  }

  const handleSubmit = (nameTask: string) => {
    const newTask: TaskType = {
      id: uuidv4(),
      name: nameTask
    }
    setData([...data, newTask])
    setIsOpen(false)
  }
  
  return (
    <div className="App">
      <Header />
      <Todos data={data} actionDelete={handleDeleteTask} />
      <Button actionOpenModal={openModal}/>
      {
        isOpen && (
          <Modal actionSubmit={handleSubmit}/>
        )
      }
    </div>
  );
}

export default App;
