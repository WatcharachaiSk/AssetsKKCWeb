import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./components/FormInput";

function Login() {
  const navigate = useNavigate();

  const setlocalStorage = async (token: string) => {
    localStorage.setItem("Token", token);
  };

  return (
    <>
      <FormInput navigate={navigate} setlocalStorage={setlocalStorage} />
    </>
  );
}

export default Login;
