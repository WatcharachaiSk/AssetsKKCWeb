import { useState } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";

function Home() {
  const [clickPage, setClickPage] = useState<string>("home");
  return (
    <>
      <NavbarTop clickPage={clickPage} setClickPage={setClickPage} />
      <div>Home</div>
    </>
  );
}

export default Home;
