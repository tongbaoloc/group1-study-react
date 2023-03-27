import { TaskType } from "../types/TaskType";

type props = {
  name: string,
  actionHandleInput: () => void;
};

export const Button = (props: props) => {
  return (
    <button className="button-add-task mt-5" onClick={props.actionHandleInput}>
      {props.name}
    </button>
  );
};
