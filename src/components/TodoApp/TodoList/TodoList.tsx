import TodoItem from './TodoItem/TodoItem'
import './TodoList.scss'

export default function TodoList() {
  return (
    <div className="todolist w-full border-2 border-solid border-black bg-medium px-4 pt-4 pb-12 max-h-[30rem] overflow-auto">
      <TodoItem title="This is my job todo" isDone={false} />
      <TodoItem title="This is my other todo" isDone={false} />
      <TodoItem title="And another todo" isDone={false} />
      <TodoItem title="But this is the last one" isDone={false} />
      <TodoItem title="And this is also the last one" isDone={false} />
      <TodoItem title="And this is also the last last one" isDone={false} />
      <TodoItem title="I don't know this is the last one or not but this is another another another todo task" isDone={false} />
      <TodoItem title="This is the last todo and I promise" isDone={false} />
      <TodoItem title="Yup!!!" isDone={false} />
    </div>
  )
}