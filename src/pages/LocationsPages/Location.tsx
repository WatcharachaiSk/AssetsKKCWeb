import { useState, useMemo } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import TableListLocat from "../../components/table/TableListLocat";
import TableList from "../../components/table/TableList";
import { useNavigate } from "react-router-dom";
import ButtonAdd from "../ItemPage/components/ButtonAdd";
import {
  testDataLocation,
  thLocation,
} from "./components/datatest/DataLocation";
import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import checkToken from "../../config/checkToken";
function Location() {
  const navigate = useNavigate();
  const [clickPage, setClickPage] = useState<string>("setting");
  const [getLocation, setGetLocation] = useState<{}>({});

  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getLocation));
      setGetLocation(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div>Location</div>
      <ButtonAdd
        titleButton={"เพิ่มสถานที่"}
        pageAdd={"/location/newlocation"}
      />
      <TableListLocat isPage={"l"} itemList={getLocation} />
    </>
  );
}

export default Location;
