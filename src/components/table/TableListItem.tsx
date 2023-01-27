import _ from "lodash";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Button,
  Form,
  OverlayTrigger,
  Tooltip,
  Card,
  Overlay,
  Popover,
} from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { GetKanitFont } from "../../config/fonts";
import Moment from "react-moment";
import { IoQrCodeSharp } from "react-icons/io5";
import colors from "../../config/colors";
import ModalOneQr from "../modal/ModalQr/ModalOneQr";
import ModalSelectQr from "../modal/ModalQr/ModalSelectQr";
import { useEffect, useState, useRef } from "react";
import ModalDetails from "../modal/Details/ModalDetails";
import PaginationItem from "./components/PaginationItem";
// import ReactPaginate from "react-paginate";
import { BsClipboard } from "react-icons/bs";
import {
  chackStatusItem,
  chackStatusItemColor,
} from "../../config/chackStatusItem";
// import { NumericFormat } from "react-number-format";
import { toLocaleStringEn } from "../../config/number/formatEN";
import ListButton from "./components/ListButton";
// import pathRoutesPage from "../../router/pathPage";

function TableListItem(props: any) {
  const { itemList, editPage, isPage } = props;

  const [modalShowOne, setModalShowOne] = useState(false);
  const [modalShowAll, setModalShowAll] = useState(false);
  const [getItem, setGetItem] = useState();
  const [selectItem, setSelectItem] = useState<any>([]);
  const [selectItemAll, setSelectItemAll] = useState();
  // console.log(selectItem);
  // console.log(selectItemAll);

  // const [checkedAll, setCheckedAll] = useState(false);
  const [modalShowDetalis, setModalShowDetalis] = useState(false);

  const [paginationCount, setPaginationCount] = useState<any>();
  const [itemListPaninat, setItemListPaninat] = useState<any>(itemList);
  // console.log(itemListPaninat);

  useEffect(() => {
    let countPage = [];
    let j = 0;

    for (let i = 0; i < itemList.length; i++) {
      if (j == 24) {
        countPage.push(i);
        j = 0;
      }
      j++;
      if (itemList.length == i + 1) {
        countPage.push(i + 1);
      }
    }
    // console.log(countPage);
    if (countPage.length != 0) setPaginationCount(countPage);

    const itemListPT = _.filter(itemList, (item: any, idx: any) => {
      return idx >= 0 && idx <= 23;
    });
    setItemListPaninat(itemListPT);
    // console.log(itemListPT.length, itemListPT);
  }, [itemList]);

  const setItemList = (page: number) => {
    let min = 24 * page - 24;
    let max = 24 * page;
    if (page === paginationCount.length) {
      // console.log("page === pagination");
    } else {
      max = max - 1;
    }

    // console.log(paginationCount.length);

    // console.log("min = " + min + ", max = " + max);

    const itemListPT = _.filter(itemList, (item: any, idx: any) => {
      return idx >= min && idx <= max;
    });
    setItemListPaninat(itemListPT);
  };

  const navigate = useNavigate();
  const navigatePage = (idItem?: any) => {
    navigate(editPage, { state: { id: idItem, isPage: "items" } });
  };

  const [getUserAdmin, setGetUserAdmin] = useState<boolean>(true);
  useEffect(() => {
    let userAdmin: any = localStorage.getItem("UserAdmin");
    let profile: any = localStorage.getItem("Profile");
    profile = JSON.parse(profile);
    // console.log(profile);

    // setGetProfile(profile);
    if (userAdmin == "true") {
      setGetUserAdmin(true);
    } else {
      setGetUserAdmin(false);
    }
  }, []);

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event: any) => {
    setShow(!show);
    setTarget(event.target);
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
          idItems={selectItemAll ? selectItemAll : selectItem}
        />
      )}
      {modalShowDetalis && (
        <ModalDetails
          show={modalShowDetalis}
          onHide={() => setModalShowDetalis(false)}
          item={getItem}
        />
      )}
      <Card
        style={{
          width: "100%",
          // height: 250,
          display: "flex",
          overflow: "auto",
        }}
      >
        <Card.Header>
          <div className="d-flex justify-content-end">
            รายการที่แสดง {itemListPaninat.length} รายการทั้งหมด{" "}
            {itemList.length}
          </div>
        </Card.Header>
        <Table
          style={{
            textAlign: "center",
            fontSize: 20,
            width: "100%",
          }}
          responsive="lg"
          size="lg"
          striped
          bordered
          hover
        >
          {/*  */}
          <thead style={{ ...GetKanitFont("KanitMedium") }}>
            <tr>
              <th>
                เลือก
                <Form.Group className="mb-3">
                  <Form.Check
                    // checked
                    onChange={(event: any) => {
                      // console.log(event.target.checked);
                      let arrPut: any = [];
                      // console.log("arrPut = ", arrPut);

                      if (event.target.checked) {
                        for (let i = 0; i < itemListPaninat.length; i++) {
                          arrPut.push(itemListPaninat[i].item_id);
                        }
                      } else {
                        arrPut = undefined;
                      }
                      setSelectItemAll(arrPut);
                      // setSelectItem(arrPut);
                    }}
                  />
                </Form.Group>
              </th>
              <th>ลำดับ</th>
              <th>รายละเอียด</th>
              <th>แก้ไข</th>
              <th>QR Code</th>
              <th>รหัสครุภัณฑ์</th>
              <th>ชื่อครุภัณฑ์</th>
              {isPage != "category_item" && <th>หมวดหมู่</th>}

              <th>ราคา</th>
              <th>สถานะ</th>
              {getUserAdmin ? (
                <>
                  <th>คณะ</th>
                  <th>สาขา</th>
                </>
              ) : (
                <></>
              )}

              <th>อาคาร</th>
              <th>ชั้น</th>
              <th>สถานที่</th>
              <th>Creator</th>
              <th>Created at</th>
            </tr>
          </thead>
          {/*  */}
          <tbody>
            {_.map(itemListPaninat, (item, idx: string) => {
              return (
                <tr
                  key={idx}
                  style={{
                    fontSize: 18,
                    height: "5rem",
                    ...GetKanitFont("KanitLight"),
                  }}
                >
                  <td>
                    <Form.Group className="mb-3">
                      <Form.Check
                        // checked={checkedAll ? true : false}
                        disabled={selectItemAll ? true : false}
                        value={item?.item_id}
                        onChange={(event: any) => {
                          // console.log(event.target.checked);
                          let arrPut: any = selectItem ? selectItem : [];
                          if (event.target.checked) {
                            arrPut.push(event.target.value);
                            setSelectItem(arrPut);
                          } else {
                            for (var i = 0; i < arrPut.length; i++) {
                              if (arrPut[i] == event.target.value) {
                                arrPut.splice(i, 1);
                              }
                            }

                            setSelectItem(arrPut);
                          }
                          // console.log("arrPut = ", arrPut);
                        }}
                      />
                    </Form.Group>
                  </td>
                  <td>{idx + 1}</td>
                  {/*  */}

                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-disabled">
                        ดูรายละเอียดครุภัณฑ์
                      </Tooltip>
                    }
                  >
                    <td>
                      <Button
                        size="lg"
                        variant="outline-dark"
                        onClick={() => {
                          setGetItem(item);
                          setModalShowDetalis(true);
                        }}
                      >
                        <BsClipboard color={colors.black} size={20} />
                      </Button>
                    </td>
                  </OverlayTrigger>

                  {/*  */}
                  <td>
                    <div ref={ref}>
                      <Button
                        size="lg"
                        variant="warning"
                        onClick={(event: any) => {
                          handleClick(event);
                          localStorage.setItem("itemItemEdit", item?.item_id);

                          // navigatePage(item?.item_id);
                          //console.log("item.item_id = " + item?.item_id);
                        }}
                      >
                        <AiFillEdit color={colors.black} size={20} />
                      </Button>
                      <Overlay
                        show={show}
                        target={target}
                        placement="bottom"
                        container={ref}
                        containerPadding={30}
                      >
                        <Popover id="popover-contained">
                          <Popover.Body>
                            <ListButton setShow={setShow} show={show} />
                          </Popover.Body>
                        </Popover>
                      </Overlay>
                    </div>
                  </td>
                  <td>
                    <Button
                      size="lg"
                      variant="outline-dark"
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
                  <td> {item?.name}</td>

                  {isPage != "category_item" && <td>{item?.category?.name}</td>}

                  <td>{toLocaleStringEn(item?.price)}</td>
                  <td
                    style={{ color: chackStatusItemColor(item?.status_item) }}
                  >
                    {/* {item?.status_item ? "ปกติ" : "ชำรุด"} */}
                    {chackStatusItem(item?.status_item)}
                  </td>
                  {getUserAdmin ? (
                    <>
                      <td>{item?.faculty?.nameTH}</td>
                      <td>{item?.department?.nameTH}</td>
                    </>
                  ) : (
                    <></>
                  )}

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
        <Card.Footer>
          <div className="d-flex justify-content-end">
            {itemListPaninat.length} / {itemList.length}
          </div>
        </Card.Footer>
      </Card>
      <Button
        className="mt-2"
        size="lg"
        variant={"outline-primary"}
        onClick={() => {
          setModalShowAll(true);
        }}
      >
        สั่งพิมพ์ที่เลือก
      </Button>
      <div className="d-flex justify-content-center">
        {paginationCount && (
          <PaginationItem
            paginationCount={paginationCount}
            setItemList={setItemList}
          />
        )}
      </div>
    </div>
  );
}

export default TableListItem;
