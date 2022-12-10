import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
// import { HiCheck, HiXMark } from "react-icons/hi2";
import colors from "../../config/colors";
import { useEffect, useState } from "react";
import Moment from "react-moment";

function TableListTypeCate(props: any) {
  const { itemList, editPage, isPage } = props;
  const navigate = useNavigate();
  const [getVauleNormal, setgetVauleNormal] = useState<any>();
  const [getVauleNotNormal, setgetVauleNotNormal] = useState<any>();

  useEffect(() => {
    let arrvauleNormal = [],
      arrvauleNotNormal = [];
    for (let i = 0; i < itemList?.length; i++) {
      let vauleNormal: any, vauleNotNormal: any;
      vauleNormal = _.filter(itemList[i]?.items, (item: any) => {
        return item.status_item == true;
      });
      vauleNotNormal = _.filter(itemList[i]?.items, (item: any) => {
        return item.status_item == false;
      });

      arrvauleNormal[i] = vauleNormal;
      arrvauleNotNormal[i] = vauleNotNormal;
    }
    // console.log(arrvauleNormal);
    setgetVauleNormal(arrvauleNormal);
    setgetVauleNotNormal(arrvauleNotNormal);
  }, [itemList]);
  const navigatePage = (page: string, idItem: any, item: any) => {
    navigate(page, { state: { id: idItem, item: item } });
  };
  return (
    <div style={{ margin: 30 }}>
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
            {isPage === "Type" && (
              <>
                <th>ลำดับที่</th>
                <th>แก้ไข</th>
                <th>ชื่อรายการ</th>
                <th>รหัสครุภัณฑ์</th>
                <th>จำนวน</th>
                <th>หน่วยนับ</th>
                <th>ราคา/หน่วย</th>
                <th>ราคารวม</th>
                <th>หน่วยงาน</th>
                <th>หมวดหมู่</th>
                <th>อยู่ในระบบ</th>
                <th style={{ color: colors.statusColor1 }}>ปกติ</th>
                <th style={{ color: colors.statusColor0 }}>ชำรุด</th>
                <th>วันที่ซื้อ</th>
              </>
            )}
            {isPage === "cate" && (
              <>
                <th>ลำดับที่</th>
                <th>แก้ไข</th>
                <th>ชื่อ</th>
                <th>หน่วยงาน</th>
                <th>อยู่ในระบบ</th>
                <th style={{ color: colors.statusColor1 }}>ปกติ</th>
                <th style={{ color: colors.statusColor0 }}>ชำรุด</th>
              </>
            )}
          </tr>
        </thead>
        {/*  */}
        <tbody>
          {_.map(itemList, (item, idx: string) => {
            return (
              <tr key={idx}>
                {isPage === "Type" && (
                  <>
                    <td>{idx + 1}</td>
                    <td>
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          //console.log("item.Type = " + item?.type_id);
                          navigatePage(
                            "/type_item/editTypeItem",
                            item.type_id,
                            item
                          );
                        }}
                      >
                        <AiFillEdit color="red" size={20} />
                      </Button>
                    </td>
                    <td>{item?.name}</td>
                    <td>{item?.code}</td>
                    <td>{item?.quantity}</td>
                    <td>{item?.unit}</td>
                    <td>{item?.price_unit}</td>
                    <td>{item?.total_price}</td>
                    <td>{item?.department?.nameTH}</td>
                    <td>{item?.category?.name}</td>
                    <td>{item?.items?.length}</td>
                    <td style={{ color: colors.statusColor1 }}>
                      {getVauleNormal == undefined
                        ? ""
                        : getVauleNormal[idx]?.length}{" "}
                    </td>
                    <td style={{ color: colors.statusColor0 }}>
                      {getVauleNotNormal == undefined
                        ? ""
                        : getVauleNotNormal[idx]?.length}
                    </td>
                    <td>
                      <Moment format="DD/MM/YYYY">{item?.purchase_date}</Moment>
                    </td>
                  </>
                )}
                {isPage == "cate" && (
                  <>
                    <td>{idx + 1}</td>
                    <td>
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                        //  console.log("item.cate = " + item?.cate_id);
                          navigatePage(
                            "/category/editCategory",
                            item.cate_id,
                            item
                          );
                        }}
                      >
                        <AiFillEdit color="red" size={20} />
                      </Button>
                    </td>
                    <td>{item.name}</td>
                    <td>{item?.department?.nameTH}</td>
                    <td>{item?.items?.length}</td>
                    <td style={{ color: colors.statusColor1 }}>
                      {getVauleNormal == undefined
                        ? ""
                        : getVauleNormal[idx]?.length}{" "}
                    </td>
                    <td style={{ color: colors.statusColor0 }}>
                      {getVauleNotNormal == undefined
                        ? ""
                        : getVauleNotNormal[idx]?.length}
                    </td>
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

export default TableListTypeCate;
