// import React, { useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import { TodoModel, todoState } from "../../store/RecoildStore";
// import "./todo.css";
// export default function Todo(props:any) {
//   const [hide, setHide] = useState(false);
//   const [list, setList] = useRecoilState(todoState);
//   function handleDelete(){
//     var temp = list.filter(item=>item.id !== props.todo.id);
//     setList(temp);
//   }
//   return (
//     <div className="container m-auto ">
//       <div className=" p-2 px-5  text-center flex justify-start w-5/6 border-spacing-x-3.5 mx-auto my-3">
//         <input type="checkbox" className=" mr-8 checkbox bg-purple-600 w-4" onClick={()=>setHide(!hide)} />
//         <p className={` text-xl w-5/6 text-left ${hide?"strike-through text-zinc-400":""}`}  >{props.todo.content}</p>
//         <i className="cursor-pointer hover:text-red-600 fa fa-trash-o mt-2 ml-5" aria-hidden="true" onClick={handleDelete}></i>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TodoModel, todoState } from "../../store/RecoildStore";
import "./todo.css";
type Props = {
  todo: TodoModel;
  handleUpdateList: () => void;
}
export default function TodoAPI(props:Props) {
  const [hide, setHide] = useState(false);
  const [list, setList] = useRecoilState(todoState);
  function handleUpdateList(){
    props.handleUpdateList;
  }
  return (
    <div className="container m-auto ">
      <div className=" p-2 px-5  text-center flex justify-start w-5/6 border-spacing-x-3.5 mx-auto my-3">
        <input type="checkbox" className=" mr-8 checkbox bg-purple-600 w-4" onClick={()=>setHide(!hide)} />
        <p className={` text-xl w-5/6 text-left ${hide?"strike-through text-zinc-400":""}`}  >{props.todo.content}</p>
        <i className="cursor-pointer hover:text-red-600 fa fa-trash-o mt-2 ml-5" aria-hidden="true" onClick={props.handleUpdateList}></i>
      </div>
    </div>
  );
}

