import { useState } from "react";

type props = {
  actionSubmit: (nameTask: string) => void;
};

export const Modal = (props: props) => {
  const [nameTask, setNameTask] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.actionSubmit(nameTask);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="modal mt-5">
      <div className="relative">
        <input
          type="text"
          id="name-task"
          onChange={handleChangeName}
          className="block w-full p-4 pl-10 text-base text-gray-900 font-bold border border-gray-300 rounded-lg bg-gray-50"
          placeholder=""
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-pink-500 hover:bg-pink-400 font-medium rounded-lg text-sm px-4 py-2"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};
