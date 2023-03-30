import AddIcon from "@mui/icons-material/Add";
import { Box, Button, FormGroup, Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { addTodo, getTodos } from "../../../services/todos.service";
import TodoItem from "./TodoItem";

const buttonStyle = {
  borderRadius: "15px 15px",
  backgroundColor: "#8B5CF6",
  "&:hover": { backgroundColor: "#8141FF" },
  textTransform: "none",
};

const modalBoxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Todo() {
  const [todoText, setTodoText] = useState<string>("");
  const [todoTexts, setTodoTexts] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (event: React.SyntheticEvent<Element, Event>) => {
    // let newItems = [...todoTexts, todoText];
    // setTodoTexts(newItems);

    // axios
    //   .post("https://64234439001cb9fc203c1047.mockapi.io/api/v1/todos", {
    //     todoText,
    //   })
    //   .then((res) => console.log(res.data));

    addTodo({ todoText }).then((res) => {
      let newItems = [...todoTexts, res.data.todoText];
      setTodoTexts(newItems);
    });

    setIsModalOpen(false);
    setTodoText("");
  };

  const deleteTodo = (index: number) => {
    let newItems = [...todoTexts];
    newItems.splice(index, 1);
    setTodoTexts(newItems);
  };

  useEffect(() => {
    getTodos().then((res) => setTodoTexts(res.data.map((d) => d.todoText)));
  }, []);

  return (
    <>
      <FormGroup className="bg-white w-1/2 items-center">
        <div className="h-8" />

        {todoTexts.map((todoText, index) => (
          <TodoItem
            text={todoText}
            deleteTodo={deleteTodo}
            index={index}
            key={index}
          />
        ))}

        <div className="h-12" />
      </FormGroup>

      <div className="-mt-4">
        <Button
          variant="contained"
          onClick={() => setIsModalOpen(true)}
          sx={buttonStyle}
        >
          <AddIcon />
          New task
        </Button>
      </div>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box sx={modalBoxStyle}>
          <div className="flex justify-between">
            <TextField
              id="standard-basic"
              label="New task"
              variant="standard"
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
            />
            <Button
              variant="contained"
              sx={buttonStyle}
              onClick={handleClick}
              disabled={todoText.trim().length === 0}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Todo;
