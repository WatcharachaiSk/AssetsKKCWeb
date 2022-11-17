import { useState } from "react";
import NavbarTop from "../../../components/navbar/NavbarTop";

function Users() {
  const [clickPage, setClickPage] = useState<string>("admin");
  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div>Users</div>
    </>
  );
}

export default Users;
