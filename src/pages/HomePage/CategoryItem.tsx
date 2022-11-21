import { useState } from "react";
import { useLocation } from "react-router-dom";
function CategoryItem() {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <div>CategoryItem</div>
    </>
  );
}

export default CategoryItem;
