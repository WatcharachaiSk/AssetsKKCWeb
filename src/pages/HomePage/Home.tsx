import { useState } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import styled from "styled-components";
import GridList from "./components/GridList";
import colors from "../../config/colors";

function Home() {
  const [clickPage, setClickPage] = useState<string>("home");

  const BgHome = styled.body`
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
  `;
  const testData = [
    { type: "ครุภัณฑ์สำนักงาน", value: "158" },
    { type: "ครุภัณฑ์ไฟฟ้าเเละวิทยุ", value: "79" },
    { type: "ครุภัณฑ์คอมพิวเตอร์", value: "198" },
    { type: "ครุภัณฑการศึกษา", value: "28" },
    { type: "ครุภัณฑ์โฆษณาและเผยแพร่", value: "198" },
    { type: "ครุภัณฑ์โฆษณาและเผยแพร่", value: "250" },
  ];
  return (
    <BgHome>
      <NavbarTop clickPage={clickPage} setClickPage={setClickPage} />
      <div style={{ backgroundColor: colors.greyD9 }}>-</div>
      <GridList listItem={testData} />
    </BgHome>
  );
}

export default Home;
