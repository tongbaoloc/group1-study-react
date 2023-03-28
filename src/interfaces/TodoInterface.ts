export type ToDo = {
  id: string;
  name: string;
  isFinish: boolean;
};

export type ToDoResponse = {
  id: string;
  name: string;
  isFinish: boolean;
};

export type ToDoCreateRequest = {
  name: string;
  isFinish: boolean;
};

export type ToDoUpdateRequest = {
  id: string;
  isFinish: boolean;
};
