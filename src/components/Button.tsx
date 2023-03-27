import { TaskType } from "../types/TaskType";

type props = {
  actionOpenModal: () => void;
};

export const Button = (props: props) => {
  return (
    <button className="button-add-task" onClick={props.actionOpenModal}>
      New Task
    </button>
  );
};
