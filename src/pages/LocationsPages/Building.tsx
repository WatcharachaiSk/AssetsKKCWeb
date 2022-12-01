import { useState, useMemo } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";

import TableListLocat from "../../components/table/TableListLocat";
import ButtonAdd from "../ItemPage/components/ButtonAdd";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import checkToken from "../../config/checkToken";
import { GetKanitFont } from "../../config/fonts";

function Building() {
  const navigate = useNavigate();
  const [clickPage, setClickPage] = useState<string>("setting");
  const [getBuilding, setGetBuilding] = useState<{}>({});

  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getBuilding));
      setGetBuilding(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  return (
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={clickPage} />
      <div>Building</div>
      <ButtonAdd titleButton={"เพิ่มอาคาร"} pageAdd={"/building/newbuilding"} />
      <TableListLocat isPage={"b"} itemList={getBuilding} />
    </div>
  );
}

export default Building;
