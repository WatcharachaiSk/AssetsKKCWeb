import React, { FC } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import HomeHeader from "./components/headers/HomeHeader";
import HomeFooter from "./components/footers/HomeFooter";
import { testitems } from "./components/footers/data/testItem";
import Login from "./pages/LandingPages/Login/Login";
import Register from "./pages/LandingPages/Register/Register";
//rfec

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
