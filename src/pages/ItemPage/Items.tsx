import { useState } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
function Items() {
  const [clickPage, setClickPage] = useState<string>("items");
  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div>items</div>
    </>
  );
}

export default Items;
