import axios from "axios";
import { useState, useMemo, useContext, createContext } from "react";
import configAxios from "../../../axios/configAxios";
import { API } from "../../../axios/swr/endpoint";
import NavbarTop from "../../../components/navbar/NavbarTop";
import TableListUsers from "../../../components/table/TableListUsers";
import ButtonAdd from "../../ItemPage/components/ButtonAdd";
import { useNavigate } from "react-router-dom";
import checkToken from "../../../config/checkToken";
import { GetKanitFont } from "../../../config/fonts";
import NavbarItem from "../../../components/navbar/NavbarItem";

// const UserContext = createContext<any>();
function Users() {
  const navigate = useNavigate();
  const [getUsers, setGetUsers] = useState<object>({});
  const [resetUsers, setResetUsers] = useState<boolean>(false);

  // setGetUsers
  useMemo(async () => {
    try {
      const resUsers = await axios(configAxios("get", API.getUsers));
      setGetUsers(resUsers.data);
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [resetUsers]);
  return (
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={"admin"} />
      <NavbarItem clickPage={"admin"} />
      <div className="d-flex justify-content-center mt-4 mb-2">
        <h3>สำหรับผู้ดูแลระบบ</h3>
      </div>
      <ButtonAdd pageAdd={"/admin/new_user"} titleButton={"เพิ่มผู้ใช้งาน"} />
      <TableListUsers
        itemList={getUsers}
        setResetUsers={setResetUsers}
        resetUsers={resetUsers}
      />
    </div>
  );
}

export default Users;
