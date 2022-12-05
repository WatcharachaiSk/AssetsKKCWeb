import { useState, useEffect } from "react";
import NavbarItem from "../../../components/navbar/NavbarItem";
import NavbarTop from "../../../components/navbar/NavbarTop";
import { GetKanitFont } from "../../../config/fonts";
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
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={clickPage} />
      <NavbarItem clickPage={clickPage} />
      <div className="d-flex justify-content-center mt-4 mb-2">
        <h3>Profile ของ {getProfile?.firstname}</h3>
      </div>
      <ShowProfile />
    </div>
  );
}

export default Profile;
