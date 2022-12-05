import { useState, useMemo } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import styled from "styled-components";
import CardList from "./components/CardList";
import { useNavigate } from "react-router-dom";
// import colors from "../../config/colors";
import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import checkToken from "../../config/checkToken";
import { Button } from "react-bootstrap";
import { GetKanitFont } from "../../config/fonts";
import NavbarItem from "../../components/navbar/NavbarItem";

function Home(): JSX.Element {
  const [clickPage, setClickPage] = useState<string>("home");
  const [isComponent, setIsComponent] = useState<string>("cate");
  // console.log("isComponent = " + isComponent);

  const [getCategory, setGetCategory] = useState<{}>({});
  const [getTypeItem, setGetTypeItem] = useState<{}>({});
  const navigate = useNavigate();

  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getCategory));
      setGetCategory(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [isComponent]);
  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getTypeItem));
      setGetTypeItem(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [isComponent]);
  //console.log(category);

  const testData = [
    { type: "ครุภัณฑ์สำนักงาน", value: "158" },
    { type: "ครุภัณฑ์ไฟฟ้าเเละวิทยุ", value: "79" },
    { type: "ครุภัณฑ์คอมพิวเตอร์", value: "198" },
    { type: "ครุภัณฑการศึกษา", value: "28" },
    { type: "ครุภัณฑ์โฆษณาและเผยแพร่", value: "198" },
    { type: "ครุภัณฑ์โฆษณาและเผยแพร่", value: "250" },
  ];

  const Fullscreen = styled.div`
    background: #fcfcfc no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  `;

  return (
    <>
      <Fullscreen style={{ ...GetKanitFont("KanitLight") }}>
        <NavbarTop clickPage={clickPage} setClickPage={setClickPage} />
        <NavbarItem clickPage={clickPage} />
        <div className="d-flex justify-content-center mt-5 mb-2">
          <Button
            onClick={() => {
              setIsComponent("cate");
            }}
            variant="light"
          >
            {isComponent === "cate" ? (
              <h3>หมวดหมู่ครุภัณฑ์</h3>
            ) : (
              <h4 style={{ color: "#818181" }}>หมวดหมู่ครุภัณฑ์</h4>
            )}
          </Button>
          <Button
            variant="light"
            onClick={() => {
              setIsComponent("type");
            }}
          >
            {isComponent === "type" ? (
              <h3>ชนิดครุภัณฑ์</h3>
            ) : (
              <h4 style={{ color: "#818181" }}>ชนิดครุภัณฑ์</h4>
            )}
          </Button>
        </div>
        {isComponent == "cate" && (
          <CardList
            listItem={getCategory}
            isShow={"cate"}
            pageShowItem={"/home/category_item"}
          />
        )}
        {isComponent == "type" && (
          <CardList
            listItem={getTypeItem}
            isShow={"type"}
            pageShowItem={"/home/type_item"}
          />
        )}
      </Fullscreen>
    </>
  );
}

export default Home;
