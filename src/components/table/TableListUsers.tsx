import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Table, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { HiCheck, HiXMark } from "react-icons/hi2";
import colors from "../../config/colors";
import { useState } from "react";
import ModalBlockUser from "../modal/BlockUser/ModalBlockUser";

function TableListUsers(props: any) {
  const { itemList, editPage, setResetUsers, resetUsers } = props;
  const navigate = useNavigate();

  const navigatePage = (page: string, idItem: any, item: any) => {
    navigate(page, { state: { id: idItem, item: item } });
  };
  // console.log(itemList);

  const [modalShowBlockUser, setModalShowBlockUser] = useState(false);
  const [pickUser, setPickUser] = useState({});

  const fnBlock = (status: number) => {
    if (status == 1) {
      setResetUsers(!resetUsers);
    }
  };
  return (
    <div style={{ margin: 30 }}>
      {modalShowBlockUser && (
        <ModalBlockUser
          fnBlock={fnBlock}
          pickUser={pickUser}
          show={modalShowBlockUser}
          onHide={() => setModalShowBlockUser(false)}
        />
      )}
      <Table
        style={{ paddingTop: 50, textAlign: "center", fontSize: 22 }}
        responsive="sm"
        //striped
        bordered
        hover
      >
        {/*  */}
        <thead>
          <tr>
            <th>แก้ไข</th>
            <th>คณะ</th>
            <th>สาขา</th>
            <th>รหัส</th>
            <th>ชื่อ</th>
            <th>นามสกุล</th>
            <th>ชื่อเล่น</th>
            <th>อีเมล</th>
            <th>เบอร์โทร</th>
            <th>Active</th>
            <th>Admin</th>
          </tr>
        </thead>
        {/*  */}
        <tbody>
          {_.map(itemList, (item, idx: string) => {
            return (
              <tr key={idx}>
                <td>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      //console.log("item.item_id = " + item?.userUserId);
                      navigatePage("/admin/editUser", item?.userUserId, item);
                    }}
                  >
                    <AiFillEdit color="red" size={20} />
                  </Button>
                </td>
                <td>{item?.faculty?.nameTH}</td>
                <td>{item?.department?.nameTH}</td>
                <td>{item?.user?.username}</td>
                <td>{item?.firstname}</td>
                <td>{item?.lastname}</td>
                <td>{item?.nickname}</td>
                <td>{item?.email}</td>
                <td>{item?.telephone}</td>
                <td>
                  <>
                    {item?.user?.admin ? (
                      <>
                        <span
                          style={{
                            color: item?.user?.user_status
                              ? colors.statusColor1
                              : colors.statusColor0,
                          }}
                        >
                          {item?.user?.user_status ? "active" : "inactive"}
                        </span>
                      </>
                    ) : (
                      <div className="d-flex justify-content-center">
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-disabled">
                              {item?.user?.user_status
                                ? "ปิดใช้ผู้ ใช้งาน"
                                : "เปิดใช้ ผู้ใช้งาน"}
                            </Tooltip>
                          }
                        >
                          <td>
                            <Button
                              onClick={() => {
                                setModalShowBlockUser(true);
                                setPickUser(item);
                              }}
                              style={{ width: "5rem" }}
                              variant="outline-warning"
                            >
                              <span
                                style={{
                                  color: item?.user?.user_status
                                    ? colors.statusColor1
                                    : colors.statusColor0,
                                }}
                              >
                                {item?.user?.user_status
                                  ? "active"
                                  : "inactive"}
                              </span>
                            </Button>
                          </td>
                        </OverlayTrigger>
                      </div>
                    )}
                  </>
                </td>
                <td
                  style={{
                    color: item?.user?.admin
                      ? colors.statusColor1
                      : colors.statusColor0,
                  }}
                >
                  {item?.user?.admin ? <HiCheck /> : <HiXMark />}
                </td>
              </tr>
            );
          })}
        </tbody>
        {/*  */}
      </Table>
    </div>
  );
}

export default TableListUsers;
