import { useState } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import TableList from "../../components/table/TableList";
import ButtonAdd from "../ItemPage/components/ButtonAdd";
import {
  testDataBuilding,
  thBuilding,
} from "./components/datatest/DataBuilding";

function Building() {
  const [clickPage, setClickPage] = useState<string>("setting");
  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div>Building</div>
      <ButtonAdd titleButton={"เพิ่มอาคาร"} pageAdd={"/building/newbuilding"} />
      <TableList
        thTable={thBuilding}
        itemList={testDataBuilding}
        editPage={"/building/editbuilding"}
      />
    </>
  );
}

export default Building;
