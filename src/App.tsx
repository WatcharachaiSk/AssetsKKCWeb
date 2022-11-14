import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import HomeHeader from "./components/headers/HomeHeader";
import HomeFooter from "./components/footers/HomeFooter";
import { testitems } from "./components/footers/data/testItem";
import Login from "./pages/LandingPages/Login/Login";
import Register from "./pages/LandingPages/Register/Register";
import Home from "./pages/HomePage/Home";
import Faculty from "./pages/LocationsPages/Faculty";
import Items from "./pages/ItemPage/Items";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
//rfec

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
    </>
  );
};

export default App;
