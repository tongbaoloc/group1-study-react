import "./App.css";
import Aside from "./component/Aside";
import Header from "./component/Header";
import Footer from "./component/footer";
import Main from "./component/Main";
import Contents from "./component/Contents";
import Boxes from "./component/Boxes";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Main>
        <Contents />
        <Aside />
      </Main>
      <Boxes />
      <Footer />
    </div>
  );
}

export default App;
