import { AxiosResponse } from "axios";

import {
  ToDoCreateRequest,
  ToDoResponse,
  ToDoUpdateRequest,
} from "../interfaces/TodoInterface";
import { ApiClient } from "./axios.service";

export const getAllToDo = async (): Promise<AxiosResponse<ToDoResponse[]>> => {
  return ApiClient.get("/todos");
};

export const createToDo = async (
  payload: ToDoCreateRequest
): Promise<AxiosResponse> => {
  return ApiClient.post("/todos", payload);
};

export const updateToDo = async (payload: ToDoUpdateRequest) => {
  return ApiClient.put(`/todos/${payload.id}`, payload);
};

export const deleteToDo = async (id: string) => {
  return ApiClient.delete(`/todos/${id}`);
};
