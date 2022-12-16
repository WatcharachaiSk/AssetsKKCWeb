import { Routes, Route, Link } from "react-router-dom";
// HOME
import Home from "../pages/HomePage/Home";
import CategoryItem from "../pages/HomePage/CategoryItem";
import TypeItems from "../pages/HomePage/TypeItems";
import Items from "../pages/ItemPage/Items";

import Login from "../pages/LandingPages/Login/Login";

import Faculty from "../pages/LocationsPages/Faculty";
import Department from "../pages/LocationsPages/Department";
import Building from "../pages/LocationsPages/Building";
import Location from "../pages/LocationsPages/Location";
import TypeItemSetting from "../pages/ItemPage/TypeItem/TypeItemSetting";
import CategorySetting from "../pages/ItemPage/Category/CategorySetting";
// ADD
import NewItem from "../pages/ItemPage/NewItem";
import NewFaculty from "../pages/LocationsPages/components/addPage/NewFaculty";
import NewDepartment from "../pages/LocationsPages/components/addPage/NewDepartment";
import NewBuilding from "../pages/LocationsPages/components/addPage/NewBuilding";
import NewLocation from "../pages/LocationsPages/components/addPage/NewLocation";
import NewUser from "../pages/LandingPages/User/NewUser";
import NewTypeItem from "../pages/ItemPage/TypeItem/NewTypeItem";
import NewCateItem from "../pages/ItemPage/Category/NewCategory";
// Edit
import EditItem from "../pages/ItemPage/EditItem";
import EditFaculty from "../pages/LocationsPages/components/editPage/EditFaculty";
import EditDepartment from "../pages/LocationsPages/components/editPage/EditDepartment";
import EditBuilding from "../pages/LocationsPages/components/editPage/EditBuilding";
import EditLocation from "../pages/LocationsPages/components/editPage/EditLocation";
import EditCategory from "../pages/ItemPage/Category/EditCategory";
import EditTypeItem from "../pages/ItemPage/TypeItem/EditTypeItem";
import EditUser from "../pages/LandingPages/User/EditUser";
//
import Profile from "../pages/LandingPages/User/Profile";
import Users from "../pages/LandingPages/User/Users";

//test
import UpTestt from "../pages/upTest/UpTestt";

function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test_Up" element={<UpTestt />} />
        
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
        <Route path="/type_item" element={<TypeItemSetting />} />
        <Route path="/category" element={<CategorySetting />} />

        {/* Add */}
        <Route path="/items/newitem" element={<NewItem />} />
        <Route path="/faculty/newfaculty" element={<NewFaculty />} />
        <Route path="/department/newdepartment" element={<NewDepartment />} />
        <Route path="/building/newbuilding" element={<NewBuilding />} />
        <Route path="/location/newlocation" element={<NewLocation />} />
        <Route path="/type_item/newTypeItem" element={<NewTypeItem />} />
        <Route path="/category/newCategory" element={<NewCateItem />} />

        {/* Edit */}
        <Route path="/items/editItem" element={<EditItem />} />
        <Route path="/faculty/editfaculty" element={<EditFaculty />} />
        <Route path="/departmen/editdepartmen" element={<EditDepartment />} />
        <Route path="/building/editbuilding" element={<EditBuilding />} />
        <Route path="/location/editlocation" element={<EditLocation />} />
        <Route path="/category/editCategory" element={<EditCategory />} />
        <Route path="/type_item/editTypeItem" element={<EditTypeItem />} />
        <Route path="/admin/editUser" element={<EditUser />} />

        
        {/* User */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Users />} />
        <Route path="/admin/new_user" element={<NewUser />} />
      </Routes>
    </>
  );
}

export default RoutesPath;
