import { useState, useMemo, useEffect } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import ButtonAdd from "../ItemPage/components/ButtonAdd";
import TableListLocat from "../../components/table/TableListLocat";

import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import checkToken from "../../config/checkToken";
import { useNavigate } from "react-router-dom";
import { GetKanitFont } from "../../config/fonts";
import NavbarItem from "../../components/navbar/NavbarItem";

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

  const [getProfile, setGetProfile] = useState<any>({});
  // console.log(getProfile);

  useEffect(() => {
    let profile: any = localStorage.getItem("Profile");
    profile = JSON.parse(profile);
    setGetProfile(profile);
  }, []);

  return (
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={clickPage} />
      <NavbarItem clickPage={clickPage} />
      <div className="d-flex justify-content-center mt-5 mb-2">
        <h3>สาขา</h3>
      </div>
      {getProfile?.user?.admin === true && (
        <ButtonAdd
          titleButton={"เพิ่มสาขา"}
          pageAdd={"/department/newdepartment"}
        />
      )}
      <TableListLocat
        itemList={getDepartment}
        isPage={"d"}
        editPage={"/departmen/editdepartmen"}
      />
    </div>
  );
}

export default Department;
