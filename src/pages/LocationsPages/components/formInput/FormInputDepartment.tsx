import { useState, useMemo } from "react";
import _ from "lodash";
import { Button, Form, Container } from "react-bootstrap";
import { sweet_basic } from "../../../../components/sweetalert2/sweet";
import axios from "axios";
import configAxios from "../../../../axios/configAxios";
import { API } from "../../../../axios/swr/endpoint";
import checkToken from "../../../../config/checkToken";
import { useNavigate } from "react-router-dom";

function FormInputDepartment(props: any) {
  const {
    setModalShowCheckBuilding,
    setPostBuildingCheck,
    setPostBuilding,
  } = props;
  const navigate = useNavigate();
  const [getFaculty, setGetFaculty] = useState<{}>({});
  const [nameDepartmentTH, setNameDepartmentTH] = useState<string>();
  const [nameDepartmentEN, setNameDepartmentEN] = useState<string>();
  const [facultyFId, setFacultyFId] = useState<number>(0);

  // getFaculty
  useMemo(async () => {
    try {
      const resFacu = await axios(configAxios("get", API.getFaculty));
      setGetFaculty(resFacu.data);
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const obj = {
      nameTH: nameDepartmentTH,
      nameEN: nameDepartmentEN,
      faculty: _.filter(getFaculty, (item: any) => {
        return item.f_id == facultyFId;
      }),
    };
    const dataform = {
      nameTH: nameDepartmentTH,
      nameEN: nameDepartmentEN,
      facultyFId: facultyFId,
    };

    setPostBuildingCheck(obj);
    setPostBuilding(dataform);
    setModalShowCheckBuilding(true);
  };
  return (
    <Container style={{ borderRadius: 15, width: "100%", height: "100%" }}>
      <Form>
        {/* nameTH */}
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>ชื่อสาขา (ไทย)</Form.Label>
          <Form.Control
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="ชื่อสาขา (ไทย)"
            value={nameDepartmentTH}
            onChange={(event: any) => {
              const value = event.target.value;
              setNameDepartmentTH(value);
            }}
          />
        </Form.Group>
        {/* nameEN */}
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>ชื่อสาขา (อังกฤษ)</Form.Label>
          <Form.Control
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="ชื่อสาขา (อังกฤษ)"
            value={nameDepartmentEN}
            onChange={(event: any) => {
              const value = event.target.value;
              setNameDepartmentEN(value);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-3" controlId="formFaculty">
          <Form.Label>เลือกคณะ</Form.Label>
          <Form.Select
            onChange={(event: any) => {
              const value = event.target.value;
              setFacultyFId(value);
            }}
            size="lg"
          >
            <option value={0}>กรุณาเลือกคณะ</option>
            {_.map(getFaculty, (item: any, idx) => {
              return (
                <>
                  <option key={item.f_id} value={item.f_id}>
                    {item.nameTH} {item.nameEN}
                  </option>
                </>
              );
            })}
          </Form.Select>
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button
            // style={{}}
            onClick={(event) => {
              if (nameDepartmentTH && nameDepartmentEN && facultyFId != 0) {
                onSubmit(event);
              } else {
                event.preventDefault();
                sweet_basic("warning", "ข้อมูลไม่ครบ", "กรุณากรอกข้อมูลให้ครบ");
              }
            }}
            className="mb-3 mt-3 p-2"
            variant={
              nameDepartmentTH && nameDepartmentEN && facultyFId != 0
                ? "success"
                : "secondary"
            }
            type="submit"
            size="lg"
          >
            {nameDepartmentTH && nameDepartmentEN && facultyFId != 0
              ? "Submit"
              : "กรุณากรอกข้อมูลให้ครบ"}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormInputDepartment;
