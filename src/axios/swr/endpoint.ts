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
  getItemById: baseURL + `/getItem/`,
  getItemCategory: baseURL + `/getItemCategory/`,
  getCategoryByDpm_Id: baseURL + `/getCategoryByDpm_Id/`,
  getItemByTypeID: baseURL + `/getItemByTypeID/`,
  getDepartmentByFtyId: baseURL + `/getDepartmentByFtyId/`,
  getDepartmentById: baseURL + `/getDepartmentById/`,
  getBuildingByDpmId: baseURL + `/getBuildingByDpmId/`,
  getLocationByBud_Id: baseURL + `/getLocationByBud_Id/`,
  getHistoryStatusItem: baseURL + `/getHistoryStatusItem/`,

  //POST
  createUser: baseURL + `/createUser`,
  createItem: baseURL + `/createItem`,
  createCategory: baseURL + `/createCategory`,
  createTypeItem: baseURL + `/createTypeItem`,
  createFaculty: baseURL + `/createFaculty`,
  createDepartment: baseURL + `/createDepartment`,
  createBuilding: baseURL + `/createBuilding`,
  createLocation: baseURL + `/createLocation`,
  updateStetus: baseURL + `/updateStetus`,

  //PUT
  updateUser: baseURL + `/updateUser/`,
  updateItem: baseURL + `/updateItem/`,
  updateFaculty: baseURL + `/updateFaculty/`,
  updateDepartment: baseURL + `/updateDepartment/`,
  updateBuilding: baseURL + `/updateBuilding/`,
  updateLocation: baseURL + `/updateLocation/`,
  updateCategory: baseURL + `/updateCategory/`,
  updateTypeItem: baseURL + `/updateTypeItem/`,
};

/*
// Category
router.post("/createCategory", 
router.get("/getCategory", 
router.put("/updateCategory/:id",
router.post("/deleteCategory", 
*/
