// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./components/FormInput";

function Login() {
  const navigate = useNavigate();

  const setlocalStorage = async (
    token: string,
    user: string,
    profile?: object
  ) => {
    localStorage.setItem("Token", token);
    localStorage.setItem("UserAdmin", user);
    localStorage.setItem("Profile", JSON.stringify(profile));
  };

  /*
 ! {} 
 ! []
 ! asdasd
 ! 1231231
 ! 0,1
 ! {[]}
 ! any

  */
  return (
    <>
      <FormInput navigate={navigate} setlocalStorage={setlocalStorage} />
    </>
  );
}

export default Login;
