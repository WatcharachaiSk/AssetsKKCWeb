import axios from "axios";
import { useState, useMemo } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import _ from "lodash";

function FormAddTypeItem() {
  const [unitItem, setUnitItem] = useState<any>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [priceUnit, setPriceUnit] = useState<number>();
  const [totalPrice, setTotalPrice] = useState<number>();

  const handleChangeUnit = (event: any) => {
    const value = event.target.value;
    console.log(value);
    setUnitItem(value);
  };
  const handleChangeQty = (event: any) => {
    const value = event.target.value;
    setQuantity(value);

    if (priceUnit != undefined) {
      setPriceUnit(0);
    }
    if (totalPrice != undefined) {
      setTotalPrice(0);
    }
  };
  const handleChangePUT = (event: any) => {
    const value = event.target.value;
    setPriceUnit(value);
    setTotalPrice(value * quantity);
  };
  const handleChangeTp = (event: any) => {
    const value = event.target.value;
    setTotalPrice(value);
    setPriceUnit(value / quantity);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
  };
  // console.log("quantity = " + quantity);
  // console.log("priceUnit = " + priceUnit);
  // console.log("totalPrice = " + totalPrice);

  return (
    <Container style={{ borderRadius: 15, width: "100%", height: "100%" }}>
      <Form>
        {/* name */}
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>ชื่อชนิดครุภัณฑ์</Form.Label>
          <Form.Control
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="ชื่อ"
            // value={}
            // onChange={}
          />
        </Form.Group>
        {/* code */}
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>รหัสชนิดครุภัณฑ์</Form.Label>
          <Form.Control
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="Code"
            // value={}
            // onChange={}
          />
        </Form.Group>
        {/*  */}
        <Row className="mb-2">
          {/* quantity */}
          <Form.Group as={Col} controlId="formQuantity">
            <Form.Label>จำนวน/หน่วยนับ</Form.Label>
            <Form.Control
              onChange={handleChangeQty}
              size="lg"
              type="number"
              placeholder="จำนวน"
            />
          </Form.Group>
          {unitItem == -1 && (
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>หน่วยนับอื่นๆ</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="ชุด / เครื่อง / แผง / ตัว ..."
              />
            </Form.Group>
          )}
          <Form.Group as={Col} controlId="formUnit">
            {/* unit */}
            <Form.Label>หน่วยนับ</Form.Label>
            <Form.Select
              onChange={(event: any) => {
                handleChangeUnit(event);
              }}
              size="lg"
            >
              <option value="0">เลือกหน่วยนับ</option>
              <option>ตู้</option>
              <option>ชุด</option>
              <option>ตัว</option>
              <option>แผง</option>
              <option>เครื่อง</option>
              <option value="-1">อื่นๆ</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-2">
          {/* price_unit */}
          <Form.Group as={Col} controlId="formQuantity">
            <Form.Label>ราคาต่อหน่วย</Form.Label>
            <Form.Control
              onChange={handleChangePUT}
              value={priceUnit}
              size="lg"
              type="number"
              placeholder="ราคา"
            />
          </Form.Group>
          {/* total_price */}
          <Form.Group as={Col} controlId="formQuantity">
            <Form.Label>ราคารวม</Form.Label>
            <Form.Control
              size="lg"
              type="number"
              // disabled={priceUnit != 0 ? true : false}
              // readOnly={priceUnit != 0 ? true : false}
              placeholder="ราคารวม"
              value={totalPrice}
              onChange={handleChangeTp}
            />
          </Form.Group>
        </Row>

        {/* Department */}
        <Form.Group className="mb-2" controlId="formFaculty">
          <Form.Label>เลือกสาขา</Form.Label>
          <Form.Select
            onChange={(event: any) => {
              // handleChangeDpm(event);
            }}
            size="lg"
          >
            <option value={0}>กรุณาเลือกสาขา</option>
            {/* {_.map(getFaculty, (item: any, idx) => {
              return (
                <>
                  <option key={item.f_id} value={item.f_id}>
                    {item.nameTH}
                  </option>
                </>
              );
            })} */}
          </Form.Select>
        </Form.Group>

        {/* Category */}
        <Form.Group className="mb-2" controlId="formFaculty">
          <Form.Label>เลือกหมวดหมู่ครุภัณฑ์</Form.Label>
          <Form.Select
            onChange={(event: any) => {
              // handleChangeCategory(event);
            }}
            size="lg"
          >
            <option value={0}>กรุณาเลือกหมวดหมู่ครุภัณฑ์</option>
            {/* {_.map(getFaculty, (item: any, idx) => {
              return (
                <>
                  <option key={item.f_id} value={item.f_id}>
                    {item.nameTH}
                  </option>
                </>
              );
            })} */}
          </Form.Select>
          {/*  */}
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            // style={{}}
            onClick={(e) => {
              onSubmit(e);
            }}
            className="mb-3 mt-3 p-2"
            variant={
              unitItem != 0 &&
              quantity != 0 &&
              priceUnit != 0 &&
              totalPrice != 0
                ? "success"
                : "secondary"
            }
            type="submit"
            size="lg"
          >
            {unitItem != 0 && quantity != 0 && priceUnit != 0 && totalPrice != 0
              ? "Submit"
              : "กรุณากรอกข้อมูลให้ครบ"}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormAddTypeItem;
