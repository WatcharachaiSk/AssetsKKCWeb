import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
/*
Faculty
Department
Building
Location
*/

function TableListLocat(props: any) {
  const { itemList, editPage, isPage } = props;
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
            <th>แก้ไข</th>
            <th>ลำดับ</th>
            <th>ชื่อ(ไทย)</th>
            <th>ชื่อ(อังกฤษ)</th>
            {isPage == "d" && (
              <>
                <th>ชื่อ(คณะ)</th>
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
                      let getid: any;
                      if (isPage === "f") {
                        getid = item.f_id;
                      } else if (isPage === "d") {
                        getid = item.d_id;
                      } else if (isPage === "b") {
                        getid = item.b_id;
                      } else if (isPage === "l") {
                        getid = item.l_id;
                      }
                      console.log("item.item_id = " + getid);
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
