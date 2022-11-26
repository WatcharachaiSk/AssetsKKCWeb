import { Form, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useMemo } from "react";
// import configAxios from "../../../../axios/configAxios";
// import axios from "axios";
// import { API } from "../../../../axios/swr/endpoint";
// import checkToken from "../../../../config/checkToken";
// import { useNavigate } from "react-router-dom";
/*
"pf_id": 1,
"firstname": "cbcb",
"lastname": "asddd",
"nickname": "asdasd",
"telephone": "08080808",
"email": "asdasd@adwad.com",
"createdAt": "2022-11-20T09:50:11.000Z",
"updatedAt": "2022-11-20T09:50:11.000Z",
"userUserId": 1,
"facultyFId": 1,
"departmentDId": 1
*/
function ShowProfile(props: any) {
  // const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState<any>();

  useEffect(() => {
    let profile: any = localStorage.getItem("Profile");
    profile = JSON.parse(profile);
    setShowProfile(profile);
    console.log(profile);
  }, []);

  return (
    <Container style={{ borderRadius: 15, width: "100%", height: "100%" }}>
      <Form>
        {/* ชื่อ */}
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>ชื่อ</Form.Label>
          <Form.Control
            readOnly
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="ชื่อ"
            value={showProfile?.firstname}
            // onChange={(event: any) => {
            //   const value = event.target.value;
            //   setNameDepartmentTH(value);
            // }}
          />
        </Form.Group>
        {/* นามสกุล */}
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>นามสกุล</Form.Label>
          <Form.Control
            readOnly
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="นามสกุล"
            value={showProfile?.lastname}
          />
        </Form.Group>
        {/*  */}
        <Row className="mb-2">
          <Form.Group as={Col} className="mb-2" controlId="formNameItem">
            <Form.Label>ชื่อเล่น</Form.Label>
            <Form.Control
              readOnly
              size="lg"
              // style={{ height: "3rem" }}
              type="text"
              placeholder="ชื่อเล่น"
              value={showProfile?.nickname}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-2" controlId="formNameItem">
            <Form.Label>เบอร์โทร</Form.Label>
            <Form.Control
              readOnly
              size="lg"
              // style={{ height: "3rem" }}
              type="text"
              placeholder="เบอร์โทร"
              value={showProfile?.telephone}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>อีเมล</Form.Label>
          <Form.Control
            readOnly
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="อีเมล"
            value={showProfile?.email}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>คณะ</Form.Label>
          <Form.Control
            readOnly
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="คณะ"
            value={showProfile?.faculty?.nameTH}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>สาขา</Form.Label>
          <Form.Control
            readOnly
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="สาขา"
            value={showProfile?.department?.nameTH}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default ShowProfile;

// as={Col}
