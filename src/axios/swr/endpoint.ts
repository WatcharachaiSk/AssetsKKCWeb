import { baseURL } from "../config";
export const API = {
  login: baseURL + `/loginUser`,
  getItem: baseURL + `/getItem`,
  getCategory: baseURL + `/getCategory`,
  getItemCategory: baseURL + `/getItemCategory/`,
  getFaculty: baseURL + `/getFaculty`,
  getDepartment: baseURL + `/getDepartment`,
};

/*
// Category
router.post("/createCategory", 
router.get("/getCategory", 
router.put("/updateCategory/:id",
router.post("/deleteCategory", 
*/
