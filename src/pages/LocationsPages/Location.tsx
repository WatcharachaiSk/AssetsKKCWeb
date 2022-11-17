import { useState } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import TableList from "../../components/table/TableList";
import ButtonAdd from "../ItemPage/components/ButtonAdd";
import {
  testDataLocation,
  thLocation,
} from "./components/datatest/DataLocation";
function Location() {
  const [clickPage, setClickPage] = useState<string>("setting");
  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div>Location</div>
      <ButtonAdd
        titleButton={"เพิ่มสถานที่"}
        pageAdd={"/location/newlocation"}
      />
      <TableList
        thTable={thLocation}
        itemList={testDataLocation}
        editPage={"/location/editlocation"}
      />
    </>
  );
}

export default Location;
