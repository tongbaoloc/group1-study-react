import { Button } from '@mui/material';
import './App.css';
import Title from './components/ex2/title/Title';
import Todo from './components/ex2/todo/Todo';
import AddIcon from '@mui/icons-material/Add';

function App() {
  return (
    <div className="flex flex-col items-center">
      <Title />
      <Todo />
      <Button variant="contained">
        <AddIcon />
        New task
      </Button>
    </div>
  );
}

export default App;
