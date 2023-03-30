import { AxiosResponse } from "axios";
import { TaskType } from "../types/TaskType";

import { ApiClient } from "./axios.service";

export const getAllTask = async (): Promise<AxiosResponse<TaskType[]>> => {
  return ApiClient.get("/todos");
};

export const createTask = async (payload: TaskType): Promise<AxiosResponse> => {
  return ApiClient.post("/todos", payload);
};

export const updateTask = async (payload: TaskType): Promise<AxiosResponse> => {
  return ApiClient.put(`/todos/${payload.id}`, payload);
};

export const deleteTask = async (id: string): Promise<AxiosResponse> => {
  return ApiClient.delete(`/todos/${id}`);
};
