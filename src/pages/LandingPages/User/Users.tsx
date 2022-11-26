import { useState } from "react";
import NavbarTop from "../../../components/navbar/NavbarTop";
import TableListUsers from "../../../components/table/TableListUsers";
import ButtonAdd from "../../ItemPage/components/ButtonAdd";

function Users() {
  const [clickPage, setClickPage] = useState<string>("admin");
  const [getUsers, setGetUsers] = useState<object>({});
  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div className="d-flex justify-content-center mt-4 mb-2">
        <h3>สำหรับผู้ดูแลระบบ</h3>
      </div>
      <ButtonAdd pageAdd={"/admin/new_user"} titleButton={"เพิ่มผู้ใช้งาน"} />
      <TableListUsers />
    </>
  );
}

export default Users;
