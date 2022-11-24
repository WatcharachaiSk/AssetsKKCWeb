import { useState, useMemo } from "react";
import _ from "lodash";
import { Button, Form, Container } from "react-bootstrap";

function FormAddCateItem(props: any) {
  const { setModalShowCheckCate, setPostItemCheckCate } = props;
  const [nameCategory, setNameCategory] = useState<string>();

  const handleChangeName = (event: any) => {
    const name = event.target.value;
    setNameCategory(name);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const dataform = {
      name: nameCategory,
    };
    setPostItemCheckCate(dataform);
    setModalShowCheckCate(true);
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
            value={nameCategory}
            onChange={handleChangeName}
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
