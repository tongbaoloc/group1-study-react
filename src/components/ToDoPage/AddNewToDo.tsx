import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

import { createToDo } from "../../services/todos.service";

type Props = {
  isReloadData: boolean;
  setIsReloadData: React.Dispatch<boolean>;
};

export const AddNewToDo = (props: Props) => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [toDoName, setToDoName] = useState("");

  const handleClickAddToDo = () => {
    setIsShowInput(true);
  };

  const handleClickCloseAddToDo = () => {
    setIsShowInput(false);
  };

  const handleAddNewToDo = async () => {
    if (!toDoName) {
      alert("Your To Do name is empty!");
      return;
    }

    const isReloadData = props.isReloadData;
    const setIsReloadData = props.setIsReloadData;

    const newToDo = {
      name: toDoName,
      isFinish: false,
    };

    try {
      await createToDo(newToDo);

      setIsReloadData(!isReloadData);
    } catch (err: any) {
      console.log("ERROR: Something went wrong when create new to do!");
    }

    setToDoName("");
    setIsShowInput(false);
  };

  return (
    <div className="w-full flex justify-center items-center relative bottom-10">
      {isShowInput ? (
        <div className="w-3/4 flex justify-center items-center flex-row p-2 bg-purple-500 text-white rounded-3xl">
          <div className="w-10/12 px-2 py-1">
            <input
              type="text"
              className="w-full rounded-3xl h-10 text-black px-5"
              onChange={(e) => setToDoName(e.target.value)}
            />
          </div>

          <div className="w-2/12 flex justify-end items-center flex-row">
            <div
              className="w-8 h-8 m-2 flex justify-center items-center text-black bg-white rounded-3xl cursor-pointer ease-in duration-300 hover:scale-125"
              onClick={handleAddNewToDo}
            >
              <CheckIcon />
            </div>
            <div
              className="w-8 h-8 m-2 flex justify-center items-center text-black bg-white rounded-3xl cursor-pointer ease-in duration-300 hover:scale-125"
              onClick={handleClickCloseAddToDo}
            >
              <ClearIcon />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="w-1/4 flex justify-center items-center p-2 px-2 bg-purple-500 text-white text-base font-bold tracking-widest rounded-3xl cursor-pointer ease-in duration-300 hover:scale-110"
          onClick={handleClickAddToDo}
        >
          Add new To Do
        </div>
      )}
    </div>
  );
};
