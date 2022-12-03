import axios from "axios";
import configAxios from "../../axios/configAxios";
import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API } from "../../axios/swr/endpoint";
import checkToken from "../../config/checkToken";
import NavbarTop from "../../components/navbar/NavbarTop";
// import styled from "styled-components";
import TableListItem from "../../components/table/TableListItem";
// import { thTable } from "../ItemPage/components/dataItem";
import _ from "lodash";
import { GetKanitFont } from "../../config/fonts";
import ButtonBack from "../../components/buttons/ButtonBack";

function TypeItems() {
  const { state } = useLocation();
  const [getItems, setgetItems] = useState<any>({});
  // const [itemList, setItemList] = useState<any>([]);
  const navigate = useNavigate();
  // console.log(state);

  useMemo(async () => {
    try {
      const res = await axios(
        configAxios("get", `${API.getItemByTypeID}${state.id}`)
      );
      setgetItems(res.data);
    } catch (error: any) {
      // console.log("err = ", error);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);

  return (
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={"home"} />
      <div className="d-flex justify-content-center mt-5 mb-2">
        <h3>{state.name}</h3>
      </div>
      <ButtonBack titleButton={"ย้อนกลับ"} />

      <TableListItem itemList={getItems} editPage={"/items/editItem"} />
    </div>
  );
}

export default TypeItems;
