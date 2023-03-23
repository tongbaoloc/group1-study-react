import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Checkbox from "@mui/material/Checkbox";

type ToDo = {
  id: string;
  name: string;
  isFinish: boolean;
};

type Props = {
  toDo: ToDo;
  toDoList: ToDo[];
  setToDoList: React.Dispatch<ToDo[]>;
};

export const TodoItem = (props: Props) => {
  const toDo = props.toDo;
  const toDoList = props.toDoList;
  const setToDoList = props.setToDoList;

  const handleChangeCheckbox = (toDo: ToDo) => {
    if (toDo.isFinish) {
      toDoList.forEach((toDoItem, index) => {
        if (toDoItem.id === toDo.id) {
          toDoList[index].isFinish = false;
        }
      });
    } else {
      toDoList.forEach((toDoItem, index) => {
        if (toDoItem.id === toDo.id) {
          toDoList[index].isFinish = true;
        }
      });
    }

    console.log("toDoList: ", toDoList);

    setToDoList([...toDoList]);
  };

  const handleClickDelete = (toDo: ToDo) => {
    const toDoListAfterDelete = toDoList.filter(
      (toDoItem) => toDoItem.id !== toDo.id
    );

    console.log("toDoList delete: ", toDoListAfterDelete);

    setToDoList([...toDoListAfterDelete]);
  };

  return (
    <label className="w-full flex flex-row justify-center items-center ease-in duration-300 rounded-3xl hover:bg-purple-400 cursor-pointer">
      <div className="w-1/12 m-2">
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
      <div className="w-4/12 flex justify-center items-center">
        <div
          className="w-8 h-8 m-2 flex justify-center items-center text-black bg-white rounded-3xl cursor-pointer ease-in duration-300 hover:scale-125"
          onClick={() => handleClickDelete(toDo)}
        >
          <DeleteOutlineIcon />
        </div>
      </div>
    </label>
  );
};
