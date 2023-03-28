// import React, { useEffect, useState } from 'react'
// import Todo from './Todo'
// import TodoHeader from './TodoHeader'
// import "./todo.css";
// import TodoButton from './TodoButton';
// import todoList from "../../store/todo.json";
// import { useRecoilState } from 'recoil';
// import { todoState } from '../../store/RecoildStore';

// export default function TodoList() {
//   const [list, setList] = useRecoilState(todoState);
  
//  useEffect(() => {
//   setList(todoList);
//  }, [])
 
//   return (
//     <div  className='container w-1/2 m-auto my-20 mb-20'>
//       <TodoHeader />
//      <div className='border-2 bg-fuchsia-100 text-center text-zinc-900 py-8 my-1'>
//       {list && list.map((todo)=>{
//          return  <Todo todo={todo} />
//       })}
//      </div>
//      <TodoButton />
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import Todo from './TodoAPI'
import TodoHeader from './TodoHeaderAPI'
import "./todo.css";
import TodoButton from './TodoButtonAPI';
import todoList from "../../store/todo.json";
import { useRecoilState } from 'recoil';
import { api, TodoModel, todoState } from '../../store/RecoildStore';
import axios from 'axios';

export default function TodoListAPI() {
  const [list, setList] = useState([] as TodoModel[]);
  const handleAdd = async(item:TodoModel) =>{
    await api
    .post(`todo`, item)
    .then((res) => {
      var temp = [...list, item];
    setList(temp);
    });
   
  }
  var item:TodoModel;
  async function handleUpdateList(id:number){
    await api
    .delete(`todo/${id}`)
    .then((res) => {
      setList(list.filter(item=>item.id !== id))
    });
  }
  const loadData = async ()=>{
    await api
    .get("todo")
    .then((res) => {
      setList(res.data);
    });
  }
 useEffect(() => {
  loadData();
 }, [])
 
  return (
    <div  className='container w-1/2 m-auto my-9 mb-20'>
      <TodoHeader />
     <div className='border-2 bg-fuchsia-100 text-center text-zinc-900 py-8 my-1'>
      {list && list.map((todo)=>{
         return  <Todo todo={todo} handleUpdateList={()=>handleUpdateList(todo.id)}/>
      })}
     </div>
     <TodoButton handleAdd={(item)=>handleAdd(item)} />
    </div>
  )
}

