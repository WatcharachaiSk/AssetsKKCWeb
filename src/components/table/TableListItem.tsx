import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { GetFontWeight, GetKanitFont } from "../../config/fonts";

function TableListItem(props: any) {
  const { itemList, editPage } = props;
  const navigate = useNavigate();

  const navigatePage = (page: string, idItem?: any) => {
    navigate(page, { state: { id: idItem } });
  };
  return (
    <div style={{ margin: 30 }}>
      <Table
        style={{ paddingTop: 50, textAlign: "center", fontSize: 22 }}
        responsive="lg"
        size="lg"
        //   striped
        bordered
        hover
      >
        {/*  */}
        <thead>
          <tr>
            <th>แก้ไข</th>
            <th>ลำดับ</th>
            <th>รหัสครุภัณฑ์</th>
            <th>ชื่อ(ไทย)</th>
            <th>หมวดหมู่</th>
            <th>ราคา</th>
            <th>สถานะ</th>
            <th>คณะ</th>
            <th>สาขา</th>
            <th>อาคาร</th>
            <th>ชั้น</th>
            <th>สถานที่</th>
            <th>Creator</th>
            <th>Created at</th>
          </tr>
        </thead>
        {/*  */}
        <tbody>
          {_.map(itemList, (item, idx: string) => {
            return (
              <tr
                key={idx}
                style={{
                  fontSize: 24,
                  height: "5rem",
                  ...GetKanitFont("KanitLight"),
              
                }}
              >
                <td>
                  <Button
                    size="lg"
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
                <td>{item.typeItem.price_unit}</td>
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
        </tbody>
        {/*  */}
      </Table>
    </div>
  );
}

export default TableListItem;
