import axios from "axios";
import configAxios from "../../axios/configAxios";
import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API } from "../../axios/swr/endpoint";
import checkToken from "../../config/checkToken";
import NavbarTop from "../../components/navbar/NavbarTop";
import styled from "styled-components";
import TableListItem from "../../components/table/TableListItem";
import { thTable } from "../ItemPage/components/dataItem";
import _ from "lodash";

function CategoryItem() {
  const { state } = useLocation();
  const [getItems, setgetItems] = useState<any>({});
  const [itemList, setItemList] = useState<any>([]);
  const navigate = useNavigate();
  // console.log(state);

  useMemo(async () => {
    try {
      const res = await axios(
        configAxios("get", `${API.getItemCategory}${state.id}`)
      );
      setgetItems(res.data);
    } catch (error: any) {
      // console.log("err = ", error);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);

  return (
    <>
      <NavbarTop clickPage={"home"} />
      <div className="d-flex justify-content-center mt-5 mb-2">
        <h3>{state.name}</h3>
      </div>

      <TableListItem itemList={getItems} />
    </>
  );
}

export default CategoryItem;
