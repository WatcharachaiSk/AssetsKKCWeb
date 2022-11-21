import { useState, useEffect, useMemo } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import styled from "styled-components";
import GridList from "./components/GridList";
import colors from "../../config/colors";
import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";

function Home() {
  const [clickPage, setClickPage] = useState<string>("home");
  const [category, setCategory] = useState<{}>({});

  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getCategory));
      setCategory(res.data);
    } catch (error) {
      console.log("err = ", error);
    }
  }, []);
  console.log(category);

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
      <GridList listItem={category} />
    </BgHome>
  );
}

export default Home;
