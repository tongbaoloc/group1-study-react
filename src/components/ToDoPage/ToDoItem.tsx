import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Checkbox from "@mui/material/Checkbox";

import { ToDo } from "../../interfaces/TodoInterface";
import { deleteToDo, updateToDo } from "../../services/todos.service";

type Props = {
  toDo: ToDo;
  isReloadData: boolean;
  setIsReloadData: React.Dispatch<boolean>;
};

export const TodoItem = (props: Props) => {
  const toDo = props.toDo;

  const isReloadData = props.isReloadData;
  const setIsReloadData = props.setIsReloadData;

  const handleChangeCheckbox = async (toDo: ToDo) => {
    try {
      const newToDo = {
        id: toDo.id,
        isFinish: !toDo.isFinish,
      };

      await updateToDo(newToDo);

      setIsReloadData(!isReloadData);
    } catch (err: any) {
      console.log("ERROR: Something went wrong when update to do status!");
    }
  };

  const handleClickDelete = async (toDo: ToDo) => {
    try {
      await deleteToDo(toDo.id);

      setIsReloadData(!isReloadData);
    } catch (err: any) {
      console.log("ERROR: Something went wrong when delete to do!");
    }
  };

  return (
    <div className="z-0 w-full flex flex-row justify-center items-center ease-in duration-300 rounded-3xl hover:bg-purple-400">
      <label className="w-8/12 flex flex-row justify-center items-center cursor-pointer">
        <div className="w-4/12 m-2">
          <Checkbox
            checked={toDo.isFinish}
            onChange={() => handleChangeCheckbox(toDo)}
          />
        </div>
        {toDo.isFinish ? (
          <div className="w-8/12 line-through text-gray-500 tracking-wide">
            {toDo.name}
          </div>
        ) : (
          <div className="w-8/12">{toDo.name}</div>
        )}
      </label>

      <div className="w-4/12 flex justify-center items-center z-10">
        <div
          className="w-8 h-8 m-2 flex justify-center items-center text-black bg-white rounded-3xl cursor-pointer ease-in duration-300 hover:scale-125"
          onClick={() => handleClickDelete(toDo)}
        >
          <DeleteOutlineIcon />
        </div>
      </div>
    </div>
  );
};
