import React from 'react'
import Todo from './Todo'
import TodoHeader from './TodoHeader'

export default function TodoList() {
  return (
    <div  className='container w-1/2 m-auto'>
      

      <TodoHeader />
     <div className='border-2 bg-fuchsia-100 text-center text-zinc-900'>
     <Todo />
      <Todo />
      <Todo />
      <Todo />
     </div>
    </div>
  )
}
