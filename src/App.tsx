import './App.scss';
import Aside from './components/Aside/Aside';
import Boxes from './components/Boxes/Boxes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Aside />
      <Boxes amount={5} />
      <Footer />
    </div>
  )
}

export default App
