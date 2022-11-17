import { useState } from "react";
import { useLocation } from "react-router-dom";
function EditBuilding() {
  const { state } = useLocation();
  return (
    <>
      <div>EditBuilding</div>
      <div>{state.id}</div>
    </>
  );
}

export default EditBuilding;
