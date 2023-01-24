import { useState, useMemo } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import CardList from "./components/CardList";
import { useNavigate } from "react-router-dom";
import configAxios from "../../axios/configAxios";
import axios from "axios";
import checkToken from "../../config/checkToken";
import { API } from "../../axios/swr/endpoint";
import { GetKanitFont } from "../../config/fonts";
import SearchCatType from "./components/dropdowns/SearchCatType";
import NavbarItem from "../../components/navbar/NavbarItem";
import ButtonAdd from "../ItemPage/components/ButtonAdd";
// import { Container } from "react-bootstrap";

function HomeCate() {
  const clickPage = "items";
  const navigate = useNavigate();
  const [getCategory, setGetCategory] = useState<{}>({});
  const [dataFilter, setDataFilter] = useState<any>(undefined);
  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getCategory));
      setGetCategory(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  return (
    <>
      <div style={{ ...GetKanitFont("KanitLight") }}>
        <NavbarTop clickPage={clickPage} />
        <NavbarItem clickPage={clickPage} />
        <div className="d-flex justify-content-center mt-5 mb-2">
          <h3>หมวดหมู่ครุภัณฑ์</h3>
        </div>

        <ButtonAdd
          titleButton={"เพิ่มหมวดหมู่ครุภัณฑ์"}
          pageAdd={"/category/newCategory"}
        />

        <div className="mt-3 d-flex justify-content-end flex-wrap">
          {getCategory && (
            <SearchCatType
              getItems={getCategory}
              setDataFilter={setDataFilter}
            />
          )}
        </div>
        {getCategory && (
          <CardList
            listItem={dataFilter ? dataFilter : getCategory}
            isShow={"cate"}
            pageShowItem={"/home/category_item"}
          />
        )}
      </div>
    </>
  );
}

export default HomeCate;
