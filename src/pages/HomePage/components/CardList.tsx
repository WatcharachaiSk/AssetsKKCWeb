import { useState } from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Stack, Card } from "react-bootstrap";
function CardList(props: any) {
  const { listItem } = props;
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
                  navigate("/home/category_item", {
                    state: { id: item.cate_id, name: item.name },
                  });
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: 20 }}>{item.name}</Card.Title>
                  <Card.Subtitle style={{ height: "5rem" }}></Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Text style={{ textAlign: "end" }}>
                    จำนวน{" "}
                    <span style={{ fontSize: 40 }}>{item.items.length}</span>{" "}
                    ชิ้น
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default CardList;
