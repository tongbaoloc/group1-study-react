import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Todos } from "./components/Todos";
import {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
} from "./services/todos.service";
import { TaskType } from "./types/TaskType";
function App() {
  const [data, setData] = useState<Array<TaskType>>([]);

  const callAPIGetAllTask = async () => {
    const res = await getAllTask();
    setData(res.data);
  };

  useEffect(() => {
    callAPIGetAllTask();
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteTask = async (id: string) => {
    await toast.promise(deleteTask(id), {
      loading: "Deleting...",
      success: <b>Delete task completed!</b>,
      error: <b>Could not delete task.</b>,
    });
    callAPIGetAllTask();
  };

  const handleCreateTask = async (nameTask: string) => {
    setIsOpen(false);
    const newTask: TaskType = {
      id: uuidv4(),
      name: nameTask,
      status: false,
    };
    await toast.promise(createTask(newTask), {
      loading: "Create...",
      success: <b>Create new task success!</b>,
      error: <b>Could not create new task.</b>,
    });
    callAPIGetAllTask();
  };

  const handleUpdateTask = async (task: TaskType) => {
    await toast.promise(updateTask(task), {
      loading: "Updating...",
      success: <b>Update task success!</b>,
      error: <b>Could not update task.</b>,
    });
  };

  const handleInput = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Toaster />
      <Header />
      <Todos
        isOpen={isOpen}
        data={data}
        actionDelete={handleDeleteTask}
        actionUpdate={handleUpdateTask}
      />
      {isOpen ? (
        <>
          <Input actionSubmit={handleCreateTask} />
          <Button name="Cancel" actionHandleInput={handleInput} />
        </>
      ) : (
        <Button name="New Task" actionHandleInput={handleInput} />
      )}
    </>
  );
}

export default App;
