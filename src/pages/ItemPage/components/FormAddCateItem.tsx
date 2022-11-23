import { useState, useMemo } from "react";
import _ from "lodash";
import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";

function FormAddCateItem() {
  const [nameCategory, setNameCategory] = useState<string>();

  const onSubmit = async (event: any) => {
    event.preventDefault();
  };
  return (
    <Container style={{ borderRadius: 15, width: "100%", height: "100%" }}>
      <Form>
        {/* name */}
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>ชื่อหมวดหมู่ครุภัณฑ์</Form.Label>
          <Form.Control
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="หมวดหมู่ครุภัณฑ์"
            // value={}
            // onChange={}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            // style={{}}
            onClick={(e) => {
              onSubmit(e);
            }}
            className="mb-3 mt-3 p-2"
            variant={nameCategory ? "success" : "secondary"}
            type="submit"
            size="lg"
          >
            {nameCategory ? "Submit" : "กรุณากรอกข้อมูลให้ครบ"}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormAddCateItem;