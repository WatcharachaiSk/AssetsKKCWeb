import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import NavbarItem from "../../../components/navbar/NavbarItem";
import NavbarTop from "../../../components/navbar/NavbarTop";
import { GetKanitFont } from "../../../config/fonts";
import ButtonAdd from "../components/ButtonAdd";
import TableListTypeCate from "../../../components/table/TableListTypeCate";
import axios from "axios";
import { API } from "../../../axios/swr/endpoint";
import configAxios from "../../../axios/configAxios";
import checkToken from "../../../config/checkToken";

function TypeItemSetting() {
  const navigate = useNavigate();
  const [getTypeItem, setGetTypeItem] = useState<{}>({});

  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getTypeItem));
      setGetTypeItem(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  return (
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={"setting"} />
      <NavbarItem clickPage={"setting"} />
      <div className="d-flex justify-content-center mt-5 mb-2">
        <h3>ชนิดครุภัณฑ์</h3>
      </div>
      <ButtonAdd
        titleButton={"เพิ่มชนิดครุภัณฑ์"}
        pageAdd={"/type_item/newTypeItem"}
      />
      <TableListTypeCate itemList={getTypeItem} isPage={"Type"} />
    </div>
  );
}

export default TypeItemSetting;
