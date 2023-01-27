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
import LoaderCard from "../../components/lottiefiles/LoaderCard";
import pathRoutesPage from "../../router/pathPage";
function HomeType() {
  const navigate = useNavigate();
  const clickPage = "items";
  const [getTypeItem, setGetTypeItem] = useState<{}>();
  const [dataFilter, setDataFilter] = useState<any>(undefined);
  // console.log(getTypeItem);
  useMemo(async () => {
    try {
      const resType = await axios(configAxios("get", API.getTypeItem));
      setGetTypeItem(resType.data);
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
          <h3>ชนิดครุภัณฑ์</h3>
        </div>
        <ButtonAdd
          titleButton={"เพิ่มชนิดครุภัณฑ์"}
          pageAdd={"/type_item/newTypeItem"}
        />
        {getTypeItem ? (
          <>
            <div className="mt-3 d-flex justify-content-end flex-wrap">
              <SearchCatType
                getItems={getTypeItem}
                setDataFilter={setDataFilter}
              />
            </div>
            <CardList
              listItem={dataFilter ? dataFilter : getTypeItem}
              isShow={"type"}
              pageShowItem={pathRoutesPage.TypeItems}
            />
          </>
        ) : (
          <LoaderCard />
        )}
      </div>
    </>
  );
}

export default HomeType;
