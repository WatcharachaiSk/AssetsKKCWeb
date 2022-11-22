import { useState, useMemo } from "react";
import TableListLocat from "../../components/table/TableListLocat";
import NavbarTop from "../../components/navbar/NavbarTop";
import ButtonAdd from "../ItemPage/components/ButtonAdd";
import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import checkToken from "../../config/checkToken";
import { useNavigate } from "react-router-dom";

function Faculty() {
  const navigate = useNavigate();
  const [clickPage, setClickPage] = useState<string>("setting");
  const [getFaculty, setGetFaculty] = useState<{}>({});

  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getFaculty));
      setGetFaculty(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div>Faculty</div>
      <ButtonAdd titleButton={"เพิ่มคณะ"} pageAdd={"/faculty/newfaculty"} />
      <TableListLocat itemList={getFaculty} isPage="f" />
    </>
  );
}

export default Faculty;