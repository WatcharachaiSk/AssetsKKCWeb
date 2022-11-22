import { useState, useMemo } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import styled from "styled-components";
import CardList from "./components/CardList";
import { useNavigate } from "react-router-dom";
import colors from "../../config/colors";
import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import checkToken from "../../config/checkToken";

function Home() {
  const [clickPage, setClickPage] = useState<string>("home");
  const [category, setCategory] = useState<{}>({});
  const navigate = useNavigate();

  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getCategory));
      setCategory(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  console.log(category);

  const testData = [
    { type: "ครุภัณฑ์สำนักงาน", value: "158" },
    { type: "ครุภัณฑ์ไฟฟ้าเเละวิทยุ", value: "79" },
    { type: "ครุภัณฑ์คอมพิวเตอร์", value: "198" },
    { type: "ครุภัณฑการศึกษา", value: "28" },
    { type: "ครุภัณฑ์โฆษณาและเผยแพร่", value: "198" },
    { type: "ครุภัณฑ์โฆษณาและเผยแพร่", value: "250" },
  ];

  const Fullscreen = styled.div`
    background: #FCFCFC no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  `;

  return (
    <>
      <Fullscreen>
        <NavbarTop clickPage={clickPage} setClickPage={setClickPage} />
        <div className="d-flex justify-content-center mt-5 mb-2">
          <h3>หมวดหมู่ครุภัณฑ์</h3>
        </div>
        <CardList listItem={category} />
      </Fullscreen>
    </>
  );
}

export default Home;