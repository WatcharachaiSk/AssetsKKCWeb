import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Items from "../pages/ItemPage/Items";
import Login from "../pages/LandingPages/Login/Login";
import Register from "../pages/LandingPages/Register/Register";
import Faculty from "../pages/LocationsPages/Faculty";
import FormNewItem from "../pages/ItemPage/FormNewItem";
import EditItem from "../pages/ItemPage/EditItem";
function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="/items" element={<Items />} />
        {/* Setting */}
        <Route path="/faculty" element={<Faculty />} />
        {/* Add */}
        <Route path="/items/newitem" element={<FormNewItem />} />
        <Route path="/items/editItem" element={<EditItem />} />
      </Routes>
    </>
  );
}

export default RoutesPath;
