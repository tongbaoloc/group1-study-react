import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  text: string;
  deleteTodo: (index: number) => void;
  index: number;
};

const deleteIconStyle = {
  color: "#BFAFB2",
  "&:hover": {
    color: "#8B5CF6",
  },
};

const truncateTodoText = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

function TodoItem(props: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    checked ? setIsChecked(true) : setIsChecked(false);
  };

  return (
    <div className="flex items-center w-full justify-between pl-8 pr-8">
      <FormControlLabel
        control={<Checkbox />}
        className="w-10/12"
        label={
          <Typography
            sx={
              isChecked
                ? { ...truncateTodoText, textDecorationLine: "line-through" }
                : { ...truncateTodoText }
            }
          >
            {props.text}
          </Typography>
        }
        onChange={handleChange}
      />

      <div
        className="hover:cursor-pointer"
        onClick={() => props.deleteTodo(props.index)}
      >
        <DeleteIcon sx={deleteIconStyle} />
      </div>
    </div>
  );
}

export default TodoItem;
