import { useState, useMemo } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
// import colors from "../../config/colors";
import ButtonAdd from "./components/ButtonAdd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import checkToken from "../../config/checkToken";
import TableListItem from "../../components/table/TableListItem";
import { GetKanitFont } from "../../config/fonts";

function Items() {
  const navigate = useNavigate();
  const [getItems, setGetItems] = useState<{}>({});
  const [clickPage, setClickPage] = useState<string>("items");

  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getItem));
      setGetItems(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);

  const navigatePage = (page: string, idItem?: any) => {
    navigate(page, { state: { id: idItem } });
  };

  return (
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={clickPage} />
      <div className="d-flex justify-content-center mt-5 mb-2">
        <h3>ครุภัณฑ์ทั้งหมด</h3>
      </div>
      <ButtonAdd pageAdd={"/items/newitem"} titleButton={"เพิ่มครุภัณฑ์"} />
      <TableListItem itemList={getItems} editPage={"/items/editItem"} />
    </div>
  );
}

export default Items;
