import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { TodoModel, todoState } from "../../store/RecoildStore";
type Props = {
  handleAdd: (e:TodoModel) => void;
}
export default function TodoButtonAPI(props:Props) {
  const [content, setContent] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [list, setList] = useState([] as TodoModel[]);
  function handleAdd(){
    setIsAdd(!isAdd)
    var todo:TodoModel={
      id:list.length+1,
      content,
      status:true
    };
    
    props.handleAdd(todo);
    var temp= [...list, todo] ;
    setList(temp);
  }
  return (
    <div className="relative">
      {!isAdd && (
        <div onClick={()=>setIsAdd(!isAdd)}  className="absolute inset-x-0 -top-5 px-10 py-3 w-4/12 cursor-pointer hover:bg-purple-700 text-center rounded-lg text-xl bg-purple-500 m-auto  ">
        <i className="fa fa-plus" aria-hidden="true"></i>
        <span>New task</span>
      </div>
      )}
      {isAdd && (
       <div  className="absolute inset-x-0 -top-5 py-2 cursor-pointer hover:bg-purple-700 text-center rounded-lg text-xl bg-purple-500 m-auto  ">
        Content: <input autoFocus type="text" className="text-black w-3/5 mx-3 py-2" onChange={(e)=>setContent(e.target.value)} />
       <i className="fa fa-check w-12 hover:text-blue-500" onClick={handleAdd}  aria-hidden="true"></i>
      </div>
      )}
    </div>
  );
}
