import Header from "./component/Header";
import Main from "./component/Main";
import TodoList from "./component/TodoLists/TodoLists";

function App() {
  
  return (
    <div className="App">
      <Main>
        <Header/>
        <TodoList/>
      </Main>      
    </div>
  );
}

export default App;
