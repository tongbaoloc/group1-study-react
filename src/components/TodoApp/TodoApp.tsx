import HeadingTodo from './HeadingTodo/HeadingTodo'
import './TodoApp.scss'
import ButtonNewTask from './ButtonNewTask/ButtonNewTask'
import TodoList from './TodoList/TodoList'

export default function TodoApp() {

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem]">
      <HeadingTodo title='Website Todo' />

      <TodoList />
      <ButtonNewTask name='New Task' />
    </div>
  )
}