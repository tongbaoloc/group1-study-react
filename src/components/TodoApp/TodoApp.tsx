import HeadingTodo from './HeadingTodo/HeadingTodo'
import './TodoApp.scss'
import ButtonNewTask from './ButtonNewTask/ButtonNewTask'
import TodoList from './TodoList/TodoList'

export default function TodoApp() {

  return (
    <div className="todoapp">
      <HeadingTodo title='Website Todo' />

      <TodoList />
      <ButtonNewTask name='New Task' />
    </div>
  )
}