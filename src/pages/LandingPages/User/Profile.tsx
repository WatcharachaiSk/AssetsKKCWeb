import { useState, useEffect } from "react";
import NavbarTop from "../../../components/navbar/NavbarTop";
import ShowProfile from "./components/ShowProfile";

function Profile() {
  const [clickPage, setClickPage] = useState<string>("admin");
  const [getProfile, setGetProfile] = useState<any>({});
  // console.log("getProfile = ",getProfile);

  useEffect(() => {
    let profile: any = localStorage.getItem("Profile");
    profile = JSON.parse(profile);
    setGetProfile(profile);
  }, []);

  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div className="d-flex justify-content-center mt-4 mb-2">
        <h3>Profile ของ {getProfile?.firstname}</h3>
      </div>
      <ShowProfile />
    </>
  );
}

export default Profile;
