import { TaskType } from "../types/TaskType";

type props = {
  name: string,
  actionOpenModal: () => void;
};

export const Button = (props: props) => {
  return (
    <button className="button-add-task mt-5" onClick={props.actionOpenModal}>
      {props.name}
    </button>
  );
};
