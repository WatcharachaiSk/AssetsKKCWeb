import { useState } from "react";
import { useLocation } from "react-router-dom";
function EditFaculty() {
  const { state } = useLocation();
  return (
    <>
      <div>EditFaculty</div>
      <div>{state.id}</div>
    </>
  );
}

export default EditFaculty;
