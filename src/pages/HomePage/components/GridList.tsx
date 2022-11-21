import { useState } from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Stack, Card } from "react-bootstrap";
function GridList(props: any) {
  const { listItem } = props;
  const navigate = useNavigate();
  return (
    <>
      <Container
        style={{
          paddingTop: 50,
          // backgroundColor: "#dfdf",
        }}
      >
        <Row
          style={
            {
              // backgroundColor: "#fdf",
            }
          }
        >
          {_.map(listItem, (item, index) => {
            return (
              <Col key={index}>
                <Card
                  style={{ width: "20rem", margin: 20 }}
                  onClick={() => {
                    navigate("/home/category_item", {
                      state: { items: item.items },
                    });
                  }}
                >
                  <Card.Body>
                    <Card.Title style={{ fontSize: 20 }}>
                      {item.name}
                    </Card.Title>
                    <Card.Subtitle
                      style={{ height: "3rem", margin: 20 }}
                    ></Card.Subtitle>
                    <Card.Text></Card.Text>
                    <Card.Text style={{ textAlign: "end" }}>
                      จำนวน{" "}
                      <span style={{ fontSize: 40 }}>{item.items.length}</span>{" "}
                      ชิ้น
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default GridList;
