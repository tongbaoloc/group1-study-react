import Header from "./component/Header";
import Main from "./component/Main";
import TodoList from "./component/TodoLists/TodoLists";
import { Toaster } from 'react-hot-toast';
function App() {
  
  return (
    <div className="App">
      <Main>
        <Header/>
        <TodoList/>
      </Main>      
      <Toaster/>
    </div>
  );
}

export default App;
