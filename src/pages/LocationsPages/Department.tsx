import { useState } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import ButtonAdd from "../ItemPage/components/ButtonAdd";
import TableList from "../../components/table/TableList";
import {
  testDataDepartment,
  thDepartment,
} from "./components/datatest/DataDepartment";

function Department() {
  const [clickPage, setClickPage] = useState<string>("setting");
  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div>Department</div>
      <ButtonAdd
        titleButton={"เพิ่มสาขา"}
        pageAdd={"/department/newdepartment"}
      />
      <TableList
        thTable={thDepartment}
        itemList={testDataDepartment}
        editPage={"/departmen/editdepartmen"}
      />
    </>
  );
}

export default Department;
