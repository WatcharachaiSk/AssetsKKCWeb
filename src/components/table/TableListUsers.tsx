import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";

function TableListUsers(props: any) {
  const { itemList, editPage } = props;
  const navigate = useNavigate();

  const navigatePage = (page: string, idItem?: any) => {
    navigate(page, { state: { id: idItem } });
  };
  return (
    <div style={{ margin: 30 }}>
      <Table
        style={{ paddingTop: 50, textAlign: "center", fontSize: 22 }}
        responsive="sm"
        striped
        bordered
        hover
      >
        {/*  */}
        <thead>
          <tr>
            <th>คณะ</th>
            <th>สาขา</th>
            <th>รหัส</th>
            <th>ชื่อ</th>
            <th>นามสกุล</th>
            <th>ชื่อเล่น</th>
            <th>อีเมล</th>
            <th>เบอร์โทร</th>
            <th>Admin</th>
          </tr>
        </thead>
        {/*  */}
        {/* <tbody>
          {_.map(itemList, (item, idx: string) => {
            return (
              <tr key={idx}>
                <td>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      console.log("item.item_id = " + item?.item_id);
                    }}
                  >
                    <AiFillEdit color="red" size={20} />
                  </Button>
                </td>
                <td>{idx + 1}</td>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.category.name}</td>
                <td>{item.typeItem.total_price}</td>
                <td>{item.status_item ? "ปกติ" : "ชำรุด"}</td>
                <td>{item.faculty.nameTH}</td>
                <td>{item.department.nameTH}</td>
                <td>{item.building.nameTH}</td>
                <td>{item.location.floor}</td>
                <td>{item.location.nameTH}</td>
                <td>{item.profile.firstname + " " + item.profile.lastname}</td>
                <td>{item.createdAt}</td>
              </tr>
            );
          })}
        </tbody> */}
        {/*  */}
      </Table>
    </div>
  );
}

export default TableListUsers;
