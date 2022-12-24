import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Table, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { GetKanitFont } from "../../config/fonts";
import Moment from "react-moment";
import { IoQrCodeSharp } from "react-icons/io5";
import colors from "../../config/colors";
import ModalOneQr from "../modal/ModalQr/ModalOneQr";
import ModalSelectQr from "../modal/ModalQr/ModalSelectQr";
import { useState } from "react";
import ModalDetails from "../modal/Details/ModalDetails";

function TableListItem(props: any) {
  const { itemList, editPage } = props;
  const [modalShowOne, setModalShowOne] = useState(false);
  const [modalShowAll, setModalShowAll] = useState(false);
  const [getItem, setGetItem] = useState();
  const [selectItem, setSelectItem] = useState();

  const [modalShowDetalis, setModalShowDetalis] = useState(false);

  // const [itemShow, setitemShow] = useState<any>();
  // console.log("itemShow = ", itemShow);

  // useEffect(() => {
  //   setitemShow(itemList);
  // }, [itemList]);
  const navigate = useNavigate();
  const navigatePage = (idItem?: any) => {
    navigate(editPage, { state: { id: idItem, isPage: "items" } });
  };

  return (
    <div style={{ margin: 30 }}>
      {modalShowOne && (
        <ModalOneQr
          show={modalShowOne}
          onHide={() => setModalShowOne(false)}
          item={getItem}
        />
      )}
      {modalShowAll && (
        <ModalSelectQr
          show={modalShowAll}
          onHide={() => setModalShowAll(false)}
          items={itemList}
          idItems={selectItem}
        />
      )}
      {modalShowDetalis && (
        <ModalDetails
          show={modalShowDetalis}
          onHide={() => setModalShowDetalis(false)}
          item={getItem}
        />
      )}
      <Table
        style={{ paddingTop: 50, textAlign: "center", fontSize: 22 }}
        responsive="lg"
        size="lg"
        //   striped
        bordered
        hover
      >
        {/*  */}
        <thead style={{ ...GetKanitFont("KanitMedium") }}>
          <tr>
            <th>
              เลือก{" "}
              <Form.Group className="mb-3">
                <Form.Check
                  // checked
                  onChange={(event: any) => {
                    // console.log(event.target.checked);
                    let arrPut: any = selectItem ? selectItem : [];
                    // if (event.target.checked) {
                    //   arrPut.push(event.target.value);
                    //   setSelectItem(arrPut);
                    // } else {
                    //   for (var i = 0; i < arrPut.length; i++) {
                    //     if (arrPut[i] === event.target.value) {
                    //       arrPut.splice(i, 1);
                    //     }
                    //   }

                    //   setSelectItem(arrPut);
                    // }
                    // console.log("arrPut = ", arrPut);
                  }}
                  // value={item.item_id}
                  // onClick={(event: any) => {
                  //   // console.log("event.target.value = ", event);

                  //   console.log(item.item_id);
                  // }}
                />
              </Form.Group>
            </th>
            <th>ลำดับ</th>
            <th>แก้ไข</th>
            <th>QR Code</th>
            <th>รหัสครุภัณฑ์</th>
            <th>ชื่อครุภัณฑ์</th>
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
                  <Form.Group className="mb-3">
                    <Form.Check
                      // checked

                      value={item?.item_id}
                      onChange={(event: any) => {
                        // console.log(event.target.checked);
                        let arrPut: any = selectItem ? selectItem : [];
                        if (event.target.checked) {
                          arrPut.push(event.target.value);
                          setSelectItem(arrPut);
                        } else {
                          for (var i = 0; i < arrPut.length; i++) {
                            if (arrPut[i] === event.target.value) {
                              arrPut.splice(i, 1);
                            }
                          }

                          setSelectItem(arrPut);
                        }
                        console.log("arrPut = ", arrPut);
                      }}

                      // onClick={(event: any) => {
                      //   // console.log("event.target.value = ", event);

                      //   console.log(item.item_id);
                      // }}
                    />
                  </Form.Group>
                </td>
                <td>{idx + 1}</td>
                {/*  */}
                <td>
                  <Button
                    size="lg"
                    variant="warning"
                    onClick={() => {
                      navigatePage(item?.item_id);
                      //console.log("item.item_id = " + item?.item_id);
                    }}
                  >
                    <AiFillEdit color={colors.black} size={20} />
                  </Button>
                </td>
                <td>
                  <Button
                    size="lg"
                    variant="outline-warning"
                    onClick={() => {
                      setGetItem(item);
                      setModalShowOne(true);
                    }}
                  >
                    <IoQrCodeSharp color={colors.black} size={20} />
                  </Button>
                </td>
                {/*  */}

                <td>{item?.code}</td>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">ดูรายละเอียด</Tooltip>
                  }
                >
                  <td>
                    <Button
                      onClick={() => {
                        setGetItem(item);
                        setModalShowDetalis(true);
                      }}
                      style={{ fontSize: 20 }}
                      variant="link"
                    >
                      {item?.name}
                    </Button>
                  </td>
                </OverlayTrigger>
                <td>{item?.category?.name}</td>
                <td>{item?.price}</td>
                <td style={{ color: item?.status_item ? "green" : "red" }}>
                  {item?.status_item ? "ปกติ" : "ชำรุด"}
                </td>
                <td>{item?.faculty?.nameTH}</td>
                <td>{item?.department?.nameTH}</td>
                <td>{item?.building?.nameTH}</td>
                <td>{item?.location.floor}</td>
                <td>{item?.location?.nameTH}</td>
                <td>
                  {item?.profile?.firstname + " " + item?.profile?.lastname}
                </td>
                <td>
                  <Moment format="DD/MM/YYYY">{item?.createdAt}</Moment>
                </td>
              </tr>
            );
          })}
        </tbody>
        {/*  */}
      </Table>
      <Button
        size="lg"
        variant="outline-primary"
        onClick={() => {
          setModalShowAll(true);
        }}
      >
        สั่งพิมพ์ที่เลือก
      </Button>
    </div>
  );
}

export default TableListItem;
