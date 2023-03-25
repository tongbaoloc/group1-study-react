import "./App.css";
import Title from "./components/ex2/title/Title";
import Todo from "./components/ex2/todo/Todo";

function App() {
  return (
    <div className="flex flex-col items-center bg-gray-300">
      <Title />
      <Todo />
    </div>
  );
}

export default App;
