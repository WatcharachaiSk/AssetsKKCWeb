import { useState } from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Stack, Card } from "react-bootstrap";
function CardList(props: any) {
  const { listItem, pageShowItem, isShow } = props;
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className="d-flex flex-row flex-wrap bd-highlight mb-3">
          {_.map(listItem, (item, index) => {
            return (
              <Card
                className="m-5 p-2 bd-highlight shadow rounded"
                style={{ width: "20rem" }}
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
                {isShow === "cate" && (
                  <Card.Body>
                    <Card.Title style={{ fontSize: 20 }}>
                      {item?.name}
                    </Card.Title>
                    <Card.Subtitle style={{ height: "5rem" }}></Card.Subtitle>
                    <Card.Text></Card.Text>
                    <Card.Text style={{ textAlign: "end" }}>
                      จำนวน{" "}
                      <span style={{ fontSize: 40 }}>
                        {item?.items?.length}
                      </span>{" "}
                      ชิ้น
                    </Card.Text>
                  </Card.Body>
                )}
                {isShow === "type" && (
                  <Card.Body>
                    <Card.Title style={{ fontSize: 20 }}>
                      {item?.name}
                    </Card.Title>
                    <Card.Subtitle>
                      <Card.Text>รหัสครุภัณฑ์: {item?.code}</Card.Text>
                    </Card.Subtitle>
                    <Card.Subtitle>
                      <Card.Text>
                        จำนวน: {item?.quantity} {item?.unit}
                      </Card.Text>
                    </Card.Subtitle>
                    <Card.Subtitle>
                      <Card.Text>ราคา/หน่วย: {item?.price_unit}</Card.Text>
                    </Card.Subtitle>
                    <Card.Subtitle>
                      <Card.Text>ราคารวม: {item?.total_price}</Card.Text>
                    </Card.Subtitle>
                    <Card.Text style={{ textAlign: "end" }}>
                      จำนวน{" "}
                      <span style={{ fontSize: 40 }}>
                        {item?.items?.length}
                      </span>{" "}
                      ชิ้น
                    </Card.Text>
                  </Card.Body>
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
