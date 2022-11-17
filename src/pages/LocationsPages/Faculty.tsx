import { useState } from "react";

import NavbarTop from "../../components/navbar/NavbarTop";
import TableList from "../../components/table/TableList";
import ButtonAdd from "../ItemPage/components/ButtonAdd";
import { testDataFaculty, thFaculty } from "./components/datatest/DataFaculty";
function Faculty() {
  const [clickPage, setClickPage] = useState<string>("setting");

  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div>Faculty</div>
      <ButtonAdd titleButton={"เพิ่มคณะ"} pageAdd={"/faculty/newfaculty"} />
      <TableList
        thTable={thFaculty}
        itemList={testDataFaculty}
        editPage={"/faculty/editfaculty"}
      />
    </>
  );
}

export default Faculty;
