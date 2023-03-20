import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/main_page/Main";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import axios from "axios";
import { useRecoilState } from "recoil";
import { wineState } from "./store/RecoildStore";
import Login from "./components/login_page/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [wine, setWine] = useRecoilState(wineState);
  async function loadData() {
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
      .then((res) => {
        setData(res.data.drinks);
        if (Object.keys(wine).length === 0) {
          setWine(res.data.drinks[0]);
        }
      });
  }
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="bg-emerald-100 w-screen text-white min-h-screen ">
      <Navbar />
      {/* <ToastContainer newestOnTop/> */}
      <Routes>
        <Route path="/" element={<Main data={data} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
