import { useState } from "react";
import { useLocation } from "react-router-dom";
function EditDepartment() {
  const { state } = useLocation();
  return (
    <>
      <div>EditDepartment</div>
      <div>{state.id}</div>
    </>
  );
}

export default EditDepartment;
