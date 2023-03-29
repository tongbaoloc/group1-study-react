import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { useEffect, useState } from "react";
import { TaskType } from "./types/TaskType";
import { Input } from "./components/Input";
import axios from "axios";
function App() {
  const [data, setData] = useState<Array<TaskType>>([]);

  const getAllTask = () => {
    axios.get(`https://6423d862d6152a4d48008bd3.mockapi.io/todos`)
      .then(res => {
        setData(res.data)
      })
  }

  useEffect(() => {
    getAllTask()
  }, [])
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteTask = (id: string) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleInput = () => {
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
      {isOpen ? (
        <>
          <Input actionSubmit={handleSubmit} />
          <Button name="Cancel" actionHandleInput={handleInput} />
        </>
      ) : (
        <Button name="New Task" actionHandleInput={handleInput} />
      )}
    </>
  );
}

export default App;
