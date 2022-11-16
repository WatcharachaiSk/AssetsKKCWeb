import { useState } from "react";
import { useLocation } from "react-router-dom";

function EditItem() {
  // const { state } = props;
  const { state } = useLocation();

  return (
    <>
      <div>EditItem</div>
      <div>{state.id}</div>
    </>
  );
}

export default EditItem;
