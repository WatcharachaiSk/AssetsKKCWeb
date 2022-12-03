import axios from "axios";
import { useState, useMemo } from "react";
import { Button, Form, Container } from "react-bootstrap";
import configAxios from "../../../../axios/configAxios";
import { API } from "../../../../axios/swr/endpoint";
import { sweet_basic } from "../../../../components/sweetalert2/sweet";
import checkToken from "../../../../config/checkToken";
import colors from "../../../../config/colors";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

function FormEditLocation(props: any) {
  const navigate = useNavigate();
  const {
    nameTH_Old,
    nameEN_Old,
    floor_Old,
    facultyFId_Old,
    faculty_Old,
    departmentDId_Old,
    department_Old,
    buildingBId_Old,
    building_Old,
    setModalShowCheckLocation,
    setPostLocationCheck,
    setPostLocation,
  } = props;

  const [getFaculty, setGetFaculty] = useState<{}>({});
  const [getDepartment, setGetDepartment] = useState<{}>({});
  const [getBuilding, setGetBuilding] = useState<{}>({});

  const [nameTH, setnameTH] = useState<string>(nameTH_Old);
  const [nameEN, setnameEN] = useState<string>(nameEN_Old);
  const [floor, setFloor] = useState<string>(floor_Old);

  const [facultyFId, setFacultyFId] = useState<number>(0);
  const [departmentDId, setdepartmentDId] = useState<number>(0);
  const [buildingBId, setbuildingBId] = useState<number>(0);
  // console.log(buildingBId_Old);
  // console.log(buildingBId);
  

  // console.log(departmentDId);

  // getFaculty
  useMemo(async () => {
    try {
      const resFacu = await axios(configAxios("get", API.getFaculty));
      setGetFaculty(resFacu.data);
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  useMemo(async () => {
    try {
      if (facultyFId != 0 || facultyFId_Old) {
        const res = await axios(
          configAxios(
            "get",
            `${API.getDepartmentByFtyId}${
              facultyFId != 0 ? facultyFId : facultyFId_Old
            }`
          )
        );
        setGetDepartment(res.data);
      }
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [facultyFId, facultyFId_Old]);
  //  setGetBuilding
  useMemo(async () => {
    try {
      if (departmentDId != 0 || departmentDId_Old) {
        const res = await axios(
          configAxios(
            "get",
            `${API.getBuildingByDpmId}${
              departmentDId != 0 ? departmentDId : departmentDId_Old
            }`
          )
        );
        setGetBuilding(res.data);
      }
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [departmentDId, departmentDId_Old]);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const obj = {
      nameTH: nameTH != nameTH_Old ? nameTH : nameTH_Old,
      nameEN: nameEN != nameEN_Old ? nameEN : nameEN_Old,
      floor: floor != floor_Old ? floor : floor_Old,
      faculty: _.filter(getFaculty, (item: any) => {
        return (
          item.f_id ==
          (facultyFId != facultyFId_Old && facultyFId != 0
            ? facultyFId
            : facultyFId_Old)
        );
      }),
      department: _.filter(getDepartment, (item: any) => {
        return (
          item.d_id ==
          (departmentDId != departmentDId_Old && departmentDId != 0
            ? departmentDId
            : departmentDId_Old)
        );
      }),
      building: _.filter(getBuilding, (item: any) => {
        return (
          item.b_id ==
          (buildingBId != buildingBId_Old && buildingBId != 0
            ? buildingBId
            : buildingBId_Old)
        );
      }),
    };
    const dataform = {
      nameTH: nameTH != nameTH_Old ? nameTH : nameTH_Old,
      nameEN: nameEN != nameEN_Old ? nameEN : nameEN_Old,
      floor: floor != floor_Old ? floor : floor_Old,
      facultyFId:
        facultyFId != facultyFId_Old && facultyFId != 0
          ? facultyFId
          : facultyFId_Old,
      departmentDId:
        departmentDId != departmentDId_Old && departmentDId != 0
          ? departmentDId
          : departmentDId_Old,
      buildingBId:
        buildingBId != buildingBId_Old && buildingBId != 0
          ? buildingBId
          : buildingBId_Old,
    };
    console.log(obj);
    console.log(dataform);
    setPostLocationCheck(obj);
    setPostLocation(dataform);
    setModalShowCheckLocation(true);
  };
  return (
    <Container style={{ borderRadius: 15, width: "100%", height: "100%" }}>
      <Form>
        {/* nameTH */}
        <Form.Group className="mb-2">
          <Form.Label style={{ fontSize: 22 }}>ชื่อ(ไทย)</Form.Label>
          <Form.Control
            size="lg"
            style={{
              borderColor:
                nameTH !== nameTH_Old && nameTH ? colors.borderColorEdit : "",
            }}
            type="text"
            placeholder="ชื่อ(ไทย)"
            value={nameTH == nameTH_Old ? nameTH_Old : nameTH}
            onChange={(event: any) => {
              const value = event.target.value;
              setnameTH(value);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-2">
          <Form.Label style={{ fontSize: 22 }}>ชื่อ(อังกฤษ)</Form.Label>
          <Form.Control
            size="lg"
            style={{
              borderColor:
                nameEN !== nameEN_Old && nameEN ? colors.borderColorEdit : "",
            }}
            type="text"
            placeholder="ชื่อ(อังกฤษ)"
            value={nameEN == nameEN_Old ? nameEN_Old : nameEN}
            onChange={(event: any) => {
              const value = event.target.value;
              setnameEN(value);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-2">
          <Form.Label style={{ fontSize: 22 }}>ชั้นที่</Form.Label>
          <Form.Control
            size="lg"
            style={{
              borderColor:
                floor !== floor_Old && floor ? colors.borderColorEdit : "",
            }}
            type="text"
            placeholder="ชื่อ(อังกฤษ)"
            value={floor == floor_Old ? floor_Old : floor}
            onChange={(event: any) => {
              const value = event.target.value;
              setFloor(value);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-3" controlId="formFaculty">
          <Form.Label style={{ fontSize: 22 }}>
            เลือกคณะ ตอนนี้อยู่{" "}
            <span style={{ color: "#4c00ff", fontSize: 18 }}>
              ({faculty_Old?.nameTH + " " + faculty_Old?.nameEN})
            </span>
          </Form.Label>
          <Form.Select
            style={{
              borderColor:
                facultyFId != facultyFId_Old && facultyFId != 0
                  ? colors.borderColorEdit
                  : "",
            }}
            onChange={(event: any) => {
              const value = event.target.value;
              setFacultyFId(value);
              setdepartmentDId(0);
              setbuildingBId(0);
            }}
            size="lg"
          >
            <option value={0}>เลือกเปลี่ยนคณะ</option>

            {_.map(getFaculty, (item: any) => {
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
        {/*  */}
        <Form.Group className="mb-3" controlId="formFaculty">
          <Form.Label style={{ fontSize: 22 }}>
            เลือกสาขา ตอนนี้อยู่{" "}
            <span style={{ color: "#4c00ff", fontSize: 18 }}>
              ({department_Old?.nameTH + " " + department_Old?.nameEN})
            </span>
          </Form.Label>
          <Form.Select
            // disabled={facultyFId == 0 ? true : false}
            value={departmentDId}
            style={{
              borderColor:
                departmentDId != departmentDId_Old && departmentDId != 0
                  ? colors.borderColorEdit
                  : "",
            }}
            onChange={(event: any) => {
              const value = event.target.value;
              setdepartmentDId(value);
              setbuildingBId(0);
            }}
            size="lg"
          >
            <option value={0}>เลือกเปลี่ยนสาขา</option>

            {_.map(getDepartment, (item: any) => {
              return (
                <>
                  <option key={item.d_id} value={item.d_id}>
                    {item.nameTH} {item.nameEN}
                  </option>
                </>
              );
            })}
          </Form.Select>
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-3" controlId="formFaculty">
          <Form.Label style={{ fontSize: 22 }}>
            เลือกตึก ตอนนี้อยู่{" "}
            <span style={{ color: "#4c00ff", fontSize: 18 }}>
              ({building_Old?.nameTH + " " + building_Old?.nameEN})
            </span>
          </Form.Label>
          <Form.Select
            // disabled={facultyFId == 0 ? true : false}
            value={buildingBId}
            style={{
              borderColor:
                buildingBId != buildingBId_Old && buildingBId != 0
                  ? colors.borderColorEdit
                  : "",
            }}
            onChange={(event: any) => {
              const value = event.target.value;
              setbuildingBId(value);
            }}
            size="lg"
          >
            <option value={0}>เลือกเปลี่ยนตึก</option>

            {_.map(getBuilding, (item: any) => {
              return (
                <>
                  <option key={item.b_id} value={item.b_id}>
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
              if (
                (nameTH !== nameTH_Old && nameTH) ||
                (nameEN !== nameEN_Old && nameEN) ||
                (floor !== floor_Old && floor) ||
                (facultyFId != facultyFId_Old && facultyFId != 0) ||
                (departmentDId != departmentDId_Old && departmentDId != 0) ||
                (buildingBId != buildingBId_Old && buildingBId != 0)
              ) {
                onSubmit(event);
              } else {
                event.preventDefault();
                sweet_basic("warning", "ข้อมูลไม่ครบ", "กรุณากรอกข้อมูลให้ครบ");
              }
            }}
            className="mb-3 mt-3 p-2"
            variant={
              (nameTH !== nameTH_Old && nameTH) ||
              (nameEN !== nameEN_Old && nameEN) ||
              (floor !== floor_Old && floor) ||
              (facultyFId != facultyFId_Old && facultyFId != 0) ||
              (departmentDId != departmentDId_Old && departmentDId != 0) ||
              (buildingBId != buildingBId_Old && buildingBId != 0)
                ? "success"
                : "secondary"
            }
            type="submit"
            size="lg"
          >
            {(nameTH !== nameTH_Old && nameTH) ||
            (nameEN !== nameEN_Old && nameEN) ||
            (floor !== floor_Old && floor) ||
            (facultyFId != facultyFId_Old && facultyFId != 0) ||
            (departmentDId != departmentDId_Old && departmentDId != 0) ||
            (buildingBId != buildingBId_Old && buildingBId != 0)
              ? "Submit"
              : "กรุณากรอกข้อมูลให้ครบหรือยังไม่มีข้อมูลที่เปลี่ยนแปลง"}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormEditLocation;
