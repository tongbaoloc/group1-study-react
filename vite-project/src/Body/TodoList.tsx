import { useState } from "react";
import { Todo } from "./Todo";

export interface ITodo {
  id: number;
  name: string;
}

export function TodoList() {
  let initTodoes: ITodo[] = [];
  const [todoes, setTodoes] = useState(initTodoes);
  const [text, setText] = useState('');
  
  const handleClickAdd = () => {
    if (!text) {
      return;
    } 
    let newTodoes = [...todoes];
    newTodoes.push({id: new Date().getTime(), name: text});
    setTodoes(newTodoes);
    setText('');
  };

  const handleDeleteItem = (id: number) => {
    let newTodoes = [...todoes];
    newTodoes = newTodoes.filter(todo => todo.id !== id);
    setTodoes(newTodoes);
  }

  return (
    <>
      <div className="flex flex-col gap-10 max-w-xl p-10 border">
          <h1 className="font-bold text-4xl text-center text-red-500">TODO LIST</h1>
          <div className="h-96 overflow-y-auto w-full p-4 border border-gray-100 rounded">
            {todoes.map(todo => <Todo onclickDelete={handleDeleteItem} name={todo.name} id={todo.id} />)}
          </div>

          <div className="flex justify-center">
            <input type="text" id="todoText"  onChange={(e) => setText(e.target.value)} value={text} className="w-full mr-2 p-4 border border-gray-300" />
            <button className="bg-blue-300 border text-2xl rounded py-4 px-5" onClick={e => handleClickAdd()}>Add</button>
          </div>
        </div>
    </>
  )
}