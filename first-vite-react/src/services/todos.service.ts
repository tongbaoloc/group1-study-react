import axios, { AxiosResponse } from "axios";

type Todo = {
  id: string;
  todoText: string;
};

type TodoReq = {
  todoText: string;
};

export const getTodos = async (): Promise<AxiosResponse<Todo[]>> =>
  axios.get("https://64234439001cb9fc203c1047.mockapi.io/api/v1/todos");

export const addTodo = async (
  todoTextReq: TodoReq
): Promise<AxiosResponse<Todo>> =>
  axios.post(
    "https://64234439001cb9fc203c1047.mockapi.io/api/v1/todos",
    todoTextReq
  );
