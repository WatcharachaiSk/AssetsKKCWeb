import { baseURL } from "../config";
export const API = {
  login: baseURL + `/loginUser`,
  // GET
  getUsers: baseURL + `/getUsers`,
  getItem: baseURL + `/getItem`,
  getCategory: baseURL + `/getCategory`,
  getFaculty: baseURL + `/getFaculty`,
  getDepartment: baseURL + `/getDepartment`,
  getBuilding: baseURL + `/getBuilding`,
  getLocation: baseURL + `/getLocation`,
  getTypeItem: baseURL + `/getTypeItem`,
  // GETById
  getItemCategory: baseURL + `/getItemCategory/`,
  getDepartmentByFtyId: baseURL + `/getDepartmentByFtyId/`,
  getDepartmentById: baseURL + `/getDepartmentById/`,
  getBuildingByDpmId: baseURL + `/getBuildingByDpmId/`,
  getLocationByBudId: baseURL + `/getLocationByBudId/`,

  //POST
  createItem: baseURL + `/createItem`,
  createCategory: baseURL + `/createCategory`,
  createTypeItem: baseURL + `/createTypeItem`,
  createFaculty: baseURL + `/createFaculty`,
  createDepartment: baseURL + `/createDepartment`,
  createBuilding: baseURL + `/createBuilding`,
  createLocation: baseURL + `/createLocation`,
};

/*
// Category
router.post("/createCategory", 
router.get("/getCategory", 
router.put("/updateCategory/:id",
router.post("/deleteCategory", 
*/
