import { useState } from "react";
import { Todo } from "./Todo";

export function Main_Content() {
  const [todoes, setTodoes] = useState(['Go to sleep', 'Wake up', 'Have lunch', 'Do homework']);
  const [text, setText] = useState('');
  const handleClickAdd = () => {
    if (!text) {
      return;
    } 
    setText('');
    setTodoes([...todoes, text]);
  };

  return (
    <>
      <div className="w-3/4 bg-slate-300 p-6">
        TODO LIST
        {todoes.map(todo => <Todo name={todo} />)}
        <input type="text" id="todoText" onChange={(e) => setText(e.target.value)} value={text} className="mr-2 p-2" />
        <button className="border rounded px-2 py-1" onClick={e => handleClickAdd()}>Add</button>
      </div>
    </>
  )
}