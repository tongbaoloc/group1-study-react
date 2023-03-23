import { useRef } from "react";
import * as Icon from "react-feather";

type Props = {
  id: string;
  isFinished: boolean;
  content: string;
  onClickDeleteItem: (id: string) => void;
  onClickSaveItem: (id: string, value: string) => void;
  onClickFinshItem: (id: string) => void;
};

const Item: React.FC<Props> = (props: Props) => {
  const {
    id,
    isFinished,
    content,
    onClickDeleteItem,
    onClickSaveItem,
    onClickFinshItem,
  } = props;

  const textClass = isFinished ? "line-through w-4/6 text-violet-300" : "w-4/6 text-violet-300";
  const inputValueRef = useRef("");
  return (
    <>
      <div className="flex my-2 content-center">
        <div className="w-1/6">
          <input type="radio"  disabled={content.length === 0} checked={isFinished} onChange={()=>{
            onClickFinshItem(id);
          }} className='self-center hover:bg-violet-500 checked:bg-violet-300 checked:focus:bg-violet-400 checked:hover:bg-violet-600 checked:hover:ring checked:hover:ring-violet-400 checked:focus:ring checked:focus:ring-violet-400' />
        </div>

        {content.length === 0 ? (
          <input
            className="w-4/6 text-violet-500"
            type="text"
            placeholder="Enter your task"
            onChange={(e) => {
              inputValueRef.current = e.target.value;
            }}
          />
        ) : (
          <p
            className={textClass}
            onClick={() => {
              onClickFinshItem(id);
            }}
          >
            {content}
          </p>
        )}

        {content === "" ? (
          <Icon.Check
            className="self-center w-1/6 text-violet-300 hover:text-violet-500"
            onClick={() => {
              onClickSaveItem(id, inputValueRef.current);
            }}
          />
        ) : (
          <Icon.Trash2
            className="self-center w-1/6 text-violet-300 hover:text-violet-500"
            onClick={() => {
              onClickDeleteItem(id);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Item;
