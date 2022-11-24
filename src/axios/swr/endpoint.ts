import { baseURL } from "../config";
export const API = {
  login: baseURL + `/loginUser`,
  // GET
  getItem: baseURL + `/getItem`,
  getCategory: baseURL + `/getCategory`,
  getItemCategory: baseURL + `/getItemCategory/`,
  getFaculty: baseURL + `/getFaculty`,
  getDepartment: baseURL + `/getDepartment`,
  getDepartmentByFtyId: baseURL + `/getDepartmentByFtyId/`,
  getBuilding: baseURL + `/getBuilding`,
  getBuildingByDpmId: baseURL + `/getBuildingByDpmId/`,
  getLocation: baseURL + `/getLocation`,
  getLocationByBudId: baseURL + `/getLocationByBudId/`,
  getTypeItem: baseURL + `/getTypeItem`,

  //POST
  createItem: baseURL + `/createItem`,
};

/*
// Category
router.post("/createCategory", 
router.get("/getCategory", 
router.put("/updateCategory/:id",
router.post("/deleteCategory", 
*/
