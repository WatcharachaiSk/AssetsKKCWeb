import axios from "axios";
import { useState, useMemo } from "react";
import { Button, Form, Container } from "react-bootstrap";
import configAxios from "../../../axios/configAxios";
import { API } from "../../../axios/swr/endpoint";
import checkToken from "../../../config/checkToken";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

function FormAddItem(props: any) {
  const { nameItem, setNameItem, codeItem, setCodeItem } = props;

  const navigate = useNavigate();
  const [getFaculty, setGetFaculty] = useState<{}>({});
  const [getDepartment, setGetDepartment] = useState<{}>({});
  const [getBuilding, setGetBuilding] = useState<{}>({});
  const [getLocation, setGetLocation] = useState<{}>({});

  const [idFty, setIdFty] = useState<number>(0);
  const [idDpm, setIdDpm] = useState<number>(0);
  const [IdBud, setIdBul] = useState<number>(0);
  const [idLocat, setIdLocat] = useState<number>(0);
  const [status, setStatus] = useState<number>(1);

  // getFaculty
  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getFaculty));
      setGetFaculty(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  //  getDepartmentByFtyId
  useMemo(async () => {
    try {
      const res = await axios(
        configAxios("get", `${API.getDepartmentByFtyId}${idFty}`)
      );
      // console.log(res.data);

      setGetDepartment(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [idFty]);
  //  setGetBuilding
  useMemo(async () => {
    try {
      const res = await axios(
        configAxios("get", `${API.getBuildingByDpmId}${idDpm}`)
      );
      // console.log(res.data);
      setGetBuilding(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [idDpm]);
  //  getLocation
  useMemo(async () => {
    try {
      const res = await axios(
        configAxios("get", `${API.getLocationByBudId}${IdBud}`)
      );
      // console.log(res.data);
      setGetLocation(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [IdBud]);

  const handleChangeFty = (event: any) => {
    const value = event.target.value;
    if (value == 0) {
      setIdDpm(value);
      setIdBul(value);
      setIdLocat(value);
    }
    setIdFty(value);
  };

  const handleChangeDpm = (event: any) => {
    const value = event.target.value;
    if (value == 0) {
      setIdBul(value);
      setIdLocat(value);
    }
    setIdDpm(value);
  };

  const handleChangeBud = (event: any) => {
    const value = event.target.value;
    if (value == 0) {
      setIdLocat(value);
    }
    setIdBul(value);
  };
  const handleChangeLocat = (event: any) => {
    const value = event.target.value;
    setIdLocat(value);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
  };

  const handleChangeName = (event: any) => {
    const name = event.target.value;
    setNameItem(name);
  };

  const handleChangeCode = (event: any) => {
    const name = event.target.value;
    setCodeItem(name);
  };

  const handleChangeStatus = (event: any) => {
    const status = event.target.value;
    // console.log(status);

    setStatus(status);
  };

  // console.log("IdLocat = " + IdLocat);

  return (
    <Container style={{ borderRadius: 15, width: "100%", height: "100%" }}>
      <Form>
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>ชื่อ ครุภัณฑ์</Form.Label>
          <Form.Control
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="ชื่อ"
            value={nameItem}
            onChange={handleChangeName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCodeItem">
          <Form.Label>รหัสครุภัณฑ์</Form.Label>
          <Form.Control
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="Code"
            value={codeItem}
            onChange={handleChangeCode}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-3" controlId="formStatusItem">
          <Form.Label>สภานะครุภัณฑ์</Form.Label>
          <Form.Select
            onChange={(event: any) => {
              handleChangeStatus(event);
            }}
            size="lg"
          >
            <option value="1">ปกติ</option>
            <option value="0">ชำรุด</option>
          </Form.Select>
        </Form.Group>
        {/*  */}

        <Form.Group className="mb-3" controlId="formFaculty">
          <Form.Label>เลือกคณะ</Form.Label>
          <Form.Select
            onChange={(event: any) => {
              handleChangeFty(event);
            }}
            size="lg"
          >
            <option value={0}>กรุณาเลือกคณะ</option>
            {_.map(getFaculty, (item: any, idx) => {
              return (
                <>
                  <option key={item.f_id} value={item.f_id}>
                    {item.nameTH}
                  </option>
                </>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDepartment">
          <Form.Label>เลือกสาขา</Form.Label>
          <Form.Select
            style={{ backgroundColor: idFty != 0 ? "" : "#DCDCDC" }}
            onChange={(event: any) => {
              handleChangeDpm(event);
            }}
            size="lg"
          >
            {!idFty || idFty != 0 ? (
              <option value={0}>กรุณาเลือกสาขา</option>
            ) : (
              <option value={0}>กรุณาเลือกคณะ</option>
            )}

            {_.map(getDepartment, (item: any, idx) => {
              return (
                <>
                  <option key={item.d_id} value={item.d_id}>
                    {item.nameTH}
                  </option>
                </>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBuilding">
          <Form.Label>เลือกตึก</Form.Label>
          <Form.Select
            style={{ backgroundColor: idDpm != 0 ? "" : "#DCDCDC" }}
            onChange={(event: any) => {
              handleChangeBud(event);
            }}
            size="lg"
          >
            {!idDpm || idDpm != 0 ? (
              <option value={0}>กรุณาเลือกตึก</option>
            ) : (
              <option value={0}>กรุณาเลือกสาขา</option>
            )}

            {_.map(getBuilding, (item: any, idx) => {
              return (
                <>
                  <option key={item.b_id} value={item.b_id}>
                    {item.nameTH}
                  </option>
                </>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>เลือกสถานที่</Form.Label>
          <Form.Select
            style={{ backgroundColor: IdBud != 0 ? "" : "#DCDCDC" }}
            onChange={(event: any) => {
              handleChangeLocat(event);
            }}
            size="lg"
          >
            {!IdBud || IdBud != 0 ? (
              <option value={0}>กรุณาเลือกสถานที่</option>
            ) : (
              <option value={0}>กรุณาเลือกตึก</option>
            )}

            {_.map(getLocation, (item: any, idx) => {
              return (
                <>
                  <option key={item.l_id} value={item.l_id}>
                    {item.nameTH}
                  </option>
                </>
              );
            })}
          </Form.Select>
        </Form.Group>

        {/*  */}
        <div className="d-flex justify-content-center">
          <Button
            // style={{}}
            onClick={(e) => {
              onSubmit(e);
            }}
            className="mb-3 mt-3 p-2"
            variant={
              idFty != 0 &&
              idDpm != 0 &&
              IdBud != 0 &&
              idLocat != 0 &&
              nameItem &&
              codeItem
                ? "success"
                : "secondary"
            }
            type="submit"
            size="lg"
          >
            {idFty != 0 &&
            idDpm != 0 &&
            IdBud != 0 &&
            idLocat != 0 &&
            nameItem &&
            codeItem
              ? "Submit"
              : "กรุณากรอกข้อมูลให้ครบ"}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormAddItem;
function setGetFaculty(data: any) {
  throw new Error("Function not implemented.");
}
