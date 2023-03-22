import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
    <div className="w-full flex flex-row justify-center items-center">
      <div className="w-1/12">
        <Checkbox
          checked={toDo.isFinish}
          onChange={() => handleChangeCheckbox(toDo)}
        />
      </div>
      {toDo.isFinish ? (
        <div className="w-8/12 line-through">{toDo.name}</div>
      ) : (
        <div className="w-8/12">{toDo.name}</div>
      )}
      <div
        className="w-3/12 flex justify-center cursor-pointer"
        onClick={() => handleClickDelete(toDo)}
      >
        <DeleteOutlineIcon />
      </div>
    </div>
  );
};
