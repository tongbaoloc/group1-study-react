import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import TodoHeader from './TodoHeader'
import "./todo.css";
import TodoButton from './TodoButton';
import todoList from "../../store/todo.json";
import { useRecoilState } from 'recoil';
import { todoState } from '../../store/RecoildStore';

export default function TodoList() {
  const [list, setList] = useRecoilState(todoState);
  
 useEffect(() => {
  setList(todoList);
 }, [])
 
  return (
    <div  className='container w-1/2 m-auto my-9 mb-20'>
      <TodoHeader />
     <div className='border-2 bg-fuchsia-100 text-center text-zinc-900 py-8 my-1'>
      {list && list.map((todo)=>{
         return  <Todo todo={todo} />
      })}
     </div>
     <TodoButton />
    </div>
  )
}
