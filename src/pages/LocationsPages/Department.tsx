import { useState, useMemo } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import ButtonAdd from "../ItemPage/components/ButtonAdd";
import TableListLocat from "../../components/table/TableListLocat";

import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import checkToken from "../../config/checkToken";
import { useNavigate } from "react-router-dom";
import { GetKanitFont } from "../../config/fonts";

function Department() {
  const navigate = useNavigate();
  const [clickPage, setClickPage] = useState<string>("setting");
  const [getDepartment, setGetDepartment] = useState<{}>({});

  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getDepartment));
      setGetDepartment(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  return (
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={clickPage} />
      <div>Department</div>
      <ButtonAdd
        titleButton={"เพิ่มสาขา"}
        pageAdd={"/department/newdepartment"}
      />
      <TableListLocat itemList={getDepartment} isPage={"d"} />
    </div>
  );
}

export default Department;
