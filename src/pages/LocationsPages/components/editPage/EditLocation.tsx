import { useState } from "react";
import { useLocation } from "react-router-dom";
function EditLocation() {
  const { state } = useLocation();
  return (
    <>
      <div>EditLocation</div>
      <div>{state.id}</div>
    </>
  );
}

export default EditLocation;
