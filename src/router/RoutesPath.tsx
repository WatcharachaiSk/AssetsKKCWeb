import { Routes, Route, Link } from "react-router-dom";
// HOME
import Home from "../pages/HomePage/Home";
import CategoryItem from "../pages/HomePage/CategoryItem";
import TypeItems from "../pages/HomePage/TypeItems";
import Items from "../pages/ItemPage/Items";

import Login from "../pages/LandingPages/Login/Login";
import Register from "../pages/LandingPages/Register/Register";
import Faculty from "../pages/LocationsPages/Faculty";
import Department from "../pages/LocationsPages/Department";
import Building from "../pages/LocationsPages/Building";
import Location from "../pages/LocationsPages/Location";
// ADD
import NewItem from "../pages/ItemPage/NewItem";
import NewFaculty from "../pages/LocationsPages/components/addPage/NewFaculty";
import NewDepartment from "../pages/LocationsPages/components/addPage/NewDepartment";
import NewBuilding from "../pages/LocationsPages/components/addPage/NewBuilding";
import NewLocation from "../pages/LocationsPages/components/addPage/NewLocation";
import NewUser from "../pages/LandingPages/User/NewUser";
// Edit
import EditItem from "../pages/ItemPage/EditItem";
import EditFaculty from "../pages/LocationsPages/components/editPage/EditFaculty";
import EditDepartment from "../pages/LocationsPages/components/editPage/EditDepartment";
import EditBuilding from "../pages/LocationsPages/components/editPage/EditBuilding";
import EditLocation from "../pages/LocationsPages/components/editPage/EditLocation";

//
import Profile from "../pages/LandingPages/User/Profile";
import Users from "../pages/LandingPages/User/Users";

function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Home */}
        <Route path="/home" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/home/category_item" element={<CategoryItem />} />
        <Route path="/home/type_item" element={<TypeItems />} />

        {/* Setting */}
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/department" element={<Department />} />
        <Route path="/building" element={<Building />} />
        <Route path="/location" element={<Location />} />
        {/* Add */}
        <Route path="/items/newitem" element={<NewItem />} />
        <Route path="/faculty/newfaculty" element={<NewFaculty />} />
        <Route path="/department/newdepartment" element={<NewDepartment />} />
        <Route path="/building/newbuilding" element={<NewBuilding />} />
        <Route path="/location/newlocation" element={<NewLocation />} />

        {/* Edit */}
        <Route path="/items/editItem" element={<EditItem />} />
        <Route path="/faculty/editfaculty" element={<EditFaculty />} />
        <Route path="/departmen/editdepartmen" element={<EditDepartment />} />
        <Route path="/building/editbuilding" element={<EditBuilding />} />
        <Route path="/location/editlocation" element={<EditLocation />} />

        {/* User */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Users />} />
        <Route path="/admin/new_user" element={<NewUser />} />
      </Routes>
    </>
  );
}

export default RoutesPath;
