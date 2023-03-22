import { Route, Routes } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ToDoPage } from "./pages/ToDoPage";

type Props = {};

function App(props: Props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<ToDoPage />} />
      </Routes>
    </>
  );
}

export default App;
