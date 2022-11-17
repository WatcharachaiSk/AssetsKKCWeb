import { useState } from "react";
import NavbarTop from "../../../components/navbar/NavbarTop";

function Profile() {
  const [clickPage, setClickPage] = useState<string>("admin");
  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div>Profile</div>
    </>
  );
}

export default Profile;
