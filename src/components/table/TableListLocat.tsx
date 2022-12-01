import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { GetKanitFont } from "../../config/fonts";
/*
Faculty
Department
Building
Location
*/

function TableListLocat(props: any) {
  const { itemList, editPage, isPage } = props;
  const navigate = useNavigate();

  const navigatePage = (idItem?: any, item?: any) => {
    navigate(editPage, { state: { id: idItem, item: item } });
  };
  return (
    <div style={{ margin: 30 }}>
      <Table
        style={{ paddingTop: 50, textAlign: "center", fontSize: 22 }}
        responsive="sm"
        // striped
        bordered
        hover
      >
        {/*  */}
        <thead style={{ ...GetKanitFont("KanitMedium") }}>
          <tr>
            <th>แก้ไข</th>
            <th>ลำดับ</th>
            <th>ชื่อ(ไทย)</th>
            <th>ชื่อ(อังกฤษ)</th>
            {isPage == "d" && (
              <>
                <th>ชื่อ(คณะ)</th>
              </>
            )}
            {isPage == "b" && (
              <>
                <th>ชื่อ(คณะ)</th>
                <th>ชื่อ(สาขา)</th>
              </>
            )}
            {isPage == "l" && (
              <>
                <th>ชื่อ(คณะ)</th>
                <th>ชื่อ(สาขา)</th>
                <th>ชื่อ(ตึก)</th>
                <th>ชั้น</th>
              </>
            )}
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
                      let getId: any;
                      if (isPage === "f") {
                        getId = item.f_id;
                      } else if (isPage === "d") {
                        getId = item.d_id;
                      } else if (isPage === "b") {
                        getId = item.b_id;
                      } else if (isPage === "l") {
                        getId = item.l_id;
                      }

                      // console.log("item.item_id = " + getId);
                      navigatePage(getId, item);
                    }}
                  >
                    <AiFillEdit color="red" size={20} />
                  </Button>
                </td>
                <td>{idx + 1}</td>
                <td>{item.nameTH}</td>
                <td>{item.nameEN}</td>
                {isPage == "d" && (
                  <>
                    <td>{item.faculty.nameTH}</td>
                  </>
                )}
                {isPage == "b" && (
                  <>
                    <td>{item.faculty.nameTH}</td>
                    <td>{item.department.nameTH}</td>
                  </>
                )}
                {isPage == "l" && (
                  <>
                    <td>{item.faculty.nameTH}</td>
                    <td>{item.department.nameTH}</td>
                    <td>{item.building.nameTH}</td>
                    <td>{item.floor}</td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
        {/*  */}
      </Table>
    </div>
  );
}

export default TableListLocat;
