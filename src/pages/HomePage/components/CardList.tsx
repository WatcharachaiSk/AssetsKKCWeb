import { useState, useEffect } from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import Moment from "react-moment";
import colors from "../../../config/colors";
function CardList(props: any) {
  const { listItem, pageShowItem, isShow } = props;
  const navigate = useNavigate();
  const [getVauleNormal, setgetVauleNormal] = useState<any>();
  const [getVauleNotNormal, setgetVauleNotNormal] = useState<any>();

  useEffect(() => {
    let arrvauleNormal = [],
      arrvauleNotNormal = [];
    for (let i = 0; i < listItem.length; i++) {
      let vauleNormal: any, vauleNotNormal: any;
      vauleNormal = _.filter(listItem[i].items, (item: any) => {
        return item.status_item == true;
      });
      vauleNotNormal = _.filter(listItem[i].items, (item: any) => {
        return item.status_item == false;
      });

      arrvauleNormal[i] = vauleNormal;
      arrvauleNotNormal[i] = vauleNotNormal;
    }
    // console.log(arrvauleNormal);
    setgetVauleNormal(arrvauleNormal);
    setgetVauleNotNormal(arrvauleNotNormal);
  }, [listItem]);

  
  return (
    <>
      <Container>
        <div className="d-flex flex-row justify-content-center flex-wrap bd-highlight mb-3">
          {_.map(listItem, (item, index) => {
            // console.log('index = '+index);

            return (
              <Card
                className="m-4 p-1  bd-highlight shadow rounded"
                style={{ width: isShow === "cate" ? "20rem" : "30rem" }}
              >
                {isShow === "cate" && (
                  <>
                    <Card.Header style={{ backgroundColor: "#868686cc" }}>
                      <Card.Title style={{ fontSize: 20, textAlign: "center" }}>
                        {item?.name}
                      </Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Card.Subtitle style={{ height: "4rem" }}></Card.Subtitle>
                      <Card.Subtitle
                        className="mb-1"
                        style={{ textAlign: "end" }}
                      >
                        <Card.Text style={{ textAlign: "end" }}>
                          อยู่ในระบบจำนวน{" "}
                          <span style={{ fontSize: 40 }}>
                            {item?.items?.length}
                          </span>{" "}
                          ชิ้น
                        </Card.Text>
                      </Card.Subtitle>
                      <Card.Subtitle style={{ textAlign: "end" }}>
                        <Card.Text>
                          <span style={{ color: colors.statusColor1 }}>
                            ปกติ
                          </span>{" "}
                          {getVauleNormal == undefined
                            ? ""
                            : getVauleNormal[index]?.length}{" "}
                          ชิ้น /{" "}
                          <span style={{ color: colors.statusColor0 }}>
                            ชำรุด
                          </span>{" "}
                          {getVauleNotNormal == undefined
                            ? ""
                            : getVauleNotNormal[index]?.length}{" "}
                          ชิ้น
                        </Card.Text>
                      </Card.Subtitle>
                    </Card.Body>

                    <Card.Footer className="d-flex flex-row-reverse bd-highligh">
                      <Button
                        variant="warning"
                        onClick={() => {
                          if (isShow === "cate") {
                            navigate(pageShowItem, {
                              state: { id: item.cate_id, name: item.name },
                            });
                          } else {
                            navigate(pageShowItem, {
                              state: { id: item.type_id, name: item.name },
                            });
                          }
                        }}
                      >
                        ดูรายการครุภัณฑ์
                      </Button>
                    </Card.Footer>
                  </>
                )}
                {isShow === "type" && (
                  <>
                    <Card.Header style={{ backgroundColor: "#868686cc" }}>
                      <Card.Title style={{ fontSize: 20, textAlign: "center" }}>
                        {item?.name}
                      </Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Card.Subtitle className="mb-2">
                        <Card.Text>รหัสครุภัณฑ์: {item?.code}</Card.Text>
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2">
                        <Card.Text>
                          {" "}
                          จำนวน: {item?.quantity} {item?.unit}
                        </Card.Text>
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2">
                        <Card.Text>ราคา/หน่วย: {item?.price_unit}</Card.Text>
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2">
                        <Card.Text>ราคารวม: {item?.total_price}</Card.Text>
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2">
                        <Card.Text>หน่วยงาน: {item?.department?.nameTH}</Card.Text>
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2">
                        <Card.Text>หมวดหมู่: {item?.category?.name}</Card.Text>
                      </Card.Subtitle>
                      <Card.Subtitle>
                        <Card.Text>
                          วันที่ซื้อ:{" "}
                          <Moment format="DD/MM/YYYY">
                            {item?.purchase_date}
                          </Moment>
                        </Card.Text>
                      </Card.Subtitle>
                      {/* <Card.Subtitle className=" d-flex justify-content-around">
                        <Card.Text>ปกติ </Card.Text>
                        <Card.Text>ชำรุด </Card.Text>
                      </Card.Subtitle> */}
                      <Card.Subtitle className="mb-1">
                        <Card.Text style={{ textAlign: "end" }}>
                          อยู่ในระบบจำนวน{" "}
                          <span style={{ fontSize: 40 }}>
                            {item?.items?.length}
                          </span>{" "}
                          ชิ้น
                        </Card.Text>
                      </Card.Subtitle>

                      <Card.Subtitle
                        className="mb-2"
                        style={{ textAlign: "end" }}
                      >
                        <Card.Text>
                          <span style={{ color: colors.statusColor1 }}>
                            ปกติ
                          </span>{" "}
                          {getVauleNormal == undefined
                            ? ""
                            : getVauleNormal[index]?.length}{" "}
                          ชิ้น /{" "}
                          <span style={{ color: colors.statusColor0 }}>
                            ชำรุด
                          </span>{" "}
                          {getVauleNotNormal == undefined
                            ? ""
                            : getVauleNotNormal[index]?.length}{" "}
                          ชิ้น
                        </Card.Text>
                      </Card.Subtitle>
                    </Card.Body>
                    <Card.Footer className="d-flex flex-row-reverse bd-highligh">
                      <Button
                        variant="warning"
                        onClick={() => {
                          if (isShow === "cate") {
                            navigate(pageShowItem, {
                              state: { id: item.cate_id, name: item.name },
                            });
                          } else {
                            navigate(pageShowItem, {
                              state: { id: item.type_id, name: item.name },
                            });
                          }
                        }}
                      >
                        ดูรายการครุภัณฑ์
                      </Button>
                    </Card.Footer>
                  </>
                )}
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default CardList;
