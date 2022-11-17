import { useState } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import colors from "../../config/colors";
import TableList from "../../components/table/TableList";
import { thTable, testData } from "./components/dataItem";
import ButtonAdd from "./components/ButtonAdd";
import { useNavigate } from "react-router-dom";

function Items() {
  const navigate = useNavigate();
  const [clickPage, setClickPage] = useState<string>("items");

  const navigatePage = (page: string, idItem?: any) => {
    navigate(page, { state: { id: idItem } });
  };

  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div style={{ backgroundColor: colors.greyD9 }}>items</div>
      <ButtonAdd pageAdd={"/items/newitem"} titleButton={"เพิ่มครุภัณฑ์"} />
      <TableList
        thTable={thTable}
        itemList={testData}
        editPage={"/items/editItem"}
      />
    </>
  );
}

export default Items;
