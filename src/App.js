import React from "react";
import MainPage from "./Pages/MainPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import FoodList from "./Pages/ProdukPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Daftar-menu" element={<FoodList />} />
        <Route path="/Tentang" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
