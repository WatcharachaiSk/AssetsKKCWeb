import axios from "axios";
import { useState, useMemo } from "react";
import { Button, Form, Container } from "react-bootstrap";
import configAxios from "../../../axios/configAxios";
import { API } from "../../../axios/swr/endpoint";
import checkToken from "../../../config/checkToken";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { sweet_basic } from "../../../components/sweetalert2/sweet";

function FormAddItem(props: any) {
  const {
    nameItem,
    setNameItem,
    codeItem,
    setCodeItem,
    setModalShowCheck,
    setPostItemCheck,
    setPostItem,
  } = props;

  const navigate = useNavigate();
  const [getTypeItem, setGetTypeItem] = useState<{}>({});

  const [getFaculty, setGetFaculty] = useState<{}>({});
  const [getDepartment, setGetDepartment] = useState<{}>({});
  const [getBuilding, setGetBuilding] = useState<{}>({});
  const [getLocation, setGetLocation] = useState<{}>({});

  const [idFty, setIdFty] = useState<number>(0);
  const [idDpm, setIdDpm] = useState<number>(0);
  const [IdBud, setIdBul] = useState<number>(0);
  const [idLocat, setIdLocat] = useState<number>(0);
  const [idcate, setIdcate] = useState<number>(0);
  const [idType, setIdType] = useState<number>(0);
  //
  const [status, setStatus] = useState<number>(1);
  const [nameCate, setNameCate] = useState<string>();

  const [description, setDescription] = useState<string>();
  const [price, setPrice] = useState<number>();
  //
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const obj = {
      name: nameItem,
      code: codeItem,
      status_item: {
        id: status,
        name: status == 1 ? "ปกติ" : "ชำรุด",
      },
      description: description,
      price: price,
      faculty: {
        id: idFty,
        faculty: _.filter(getFaculty, (item: any) => {
          return item.f_id == idFty;
        }),
      },
      department: {
        id: idDpm,
        department: _.filter(getDepartment, (item: any) => {
          return item.d_id == idDpm;
        }),
      },
      building: {
        id: IdBud,
        building: _.filter(getBuilding, (item: any) => {
          return item.b_id == IdBud;
        }),
      },
      location: {
        id: idLocat,
        location: _.filter(getLocation, (item: any) => {
          return item.l_id == idLocat;
        }),
      },
      typeItemType: {
        id: idType,
        typeItem: _.filter(getTypeItem, (item: any) => {
          return item.type_id == idType;
        }),
      },
    };
    const dataform = {
      name: nameItem,
      code: codeItem,
      status_item: status,
      description: description,
      price: price,
      facultyFId: idFty,
      departmentDId: idDpm,
      buildingBId: IdBud,
      categoryCateId: idcate,
      locationLId: idLocat,
      typeItemTypeId: idType,
    };
    setPostItem(dataform);

    setPostItemCheck(obj);

    onSubmitChk();
  };

  const onSubmitChk = () => {
    setModalShowCheck(true);
  };

  // getFaculty
  useMemo(async () => {
    try {
      const resFacu = await axios(configAxios("get", API.getFaculty));
      setGetFaculty(resFacu.data);
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  //
  useMemo(async () => {
    try {
      if (idFty != 0) {
        const res = await axios(
          configAxios("get", `${API.getDepartmentByFtyId}${idFty}`)
        );
        setGetDepartment(res.data);
      }
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [idFty]);
  //  getDepartmentByFtyId
  //  setGetBuilding
  useMemo(async () => {
    try {
      if (idDpm != 0) {
        const res = await axios(
          configAxios("get", `${API.getBuildingByDpmId}${idDpm}`)
        );
        const resType = await axios(
          configAxios("get", `${API.getTypeItemByDpmId}${idDpm}`)
        );
        setGetTypeItem(resType.data);
        setGetBuilding(res.data);
      }
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [idDpm]);
  //  getLocation
  useMemo(async () => {
    try {
      if (IdBud != 0) {
        const res = await axios(
          configAxios("get", `${API.getLocationByBud_Id}${IdBud}`)
        );
        setGetLocation(res.data);
      }
    } catch (error: any) {
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
    setStatus(status);
  };

  const handleChangeType = (event?: any) => {
    const id = event.target.value;

    const typeItemById: any = _.filter(getTypeItem, (item: any) => {
      return item.type_id == id;
    });

    if (id != 0) {
      setNameCate(typeItemById[0].category.name);
      setIdcate(typeItemById[0].category.cate_id);
    } else {
      setNameCate(undefined);
    }

    setIdType(id);
  };

  // console.log("IdLocat = " + IdLocat);

  return (
    <Container style={{ borderRadius: 15, width: "100%", height: "100%" }}>
      {/*  */}

      {/*  */}
      <Form>
        <Form.Group className="mb-2" controlId="formNameItem">
          <Form.Label>ชื่อครุภัณฑ์</Form.Label>
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>รายละเอียดครุภัณฑ์</Form.Label>
          <Form.Control
            onChange={(event: any) => {
              const value = event.target.value;
              // console.log(value);

              setDescription(value);
            }}
            size="lg"
            placeholder="สี/ขนาดจอ/ความสูง/ความกว้าง/ยี่ห้อ"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCodeItem">
          <Form.Label>ราคาครุภัณฑ์</Form.Label>
          <Form.Control
            size="lg"
            // style={{ height: "3rem" }}
            type="number"
            placeholder="ราคาครุภัณฑ์"
            value={price}
            onChange={(event: any) => {
              const value = event.target.value;
              setPrice(value);
            }}
          />
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
            {idFty != 0 ? (
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
        {/*  */}
        <Form.Group className="mb-3" controlId="formFaculty">
          <Form.Label>เลือกชนิดครุภัณฑ์</Form.Label>
          <Form.Select
            onChange={(event: any) => {
              handleChangeType(event);
            }}
            size="lg"
          >
            <option value={0}>เลือกชนิดครุภัณฑ์</option>
            {_.map(getTypeItem, (item: any, idx) => {
              return (
                <>
                  <option key={item.type_id} value={item.type_id}>
                    {item.name}
                  </option>
                </>
              );
            })}
          </Form.Select>
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-3">
          <Form.Label>หมวดหมู่ครุภัณฑ์ (อิงตามชนิดครุภัณฑ์)</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder={`${
              nameCate != undefined ? nameCate : "กรุณาเลือกชนิดครุภัณฑ์"
            }`}
            disabled
            readOnly
          />
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
            {idDpm != 0 ? (
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
            {IdBud != 0 ? (
              <option value={0}>กรุณาเลือกสถานที่</option>
            ) : (
              <option value={0}>กรุณาเลือกตึก</option>
            )}

            {_.map(getLocation, (item: any, idx) => {
              return (
                <>
                  <option key={item.l_id} value={item.l_id}>
                    {item.nameTH} ชั้น {item.floor}
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
            onClick={(event) => {
              if (
                idFty != 0 &&
                idDpm != 0 &&
                IdBud != 0 &&
                idLocat != 0 &&
                idType != 0 &&
                nameItem &&
                codeItem &&
                description &&
                price
              ) {
                onSubmit(event);
              } else {
                event.preventDefault();
                sweet_basic("warning", "ข้อมูลไม่ครบ", "กรุณากรอกข้อมูลให้ครบ");
              }
            }}
            className="mb-3 mt-3 p-2"
            variant={
              idFty != 0 &&
              idDpm != 0 &&
              IdBud != 0 &&
              idLocat != 0 &&
              idType != 0 &&
              nameItem &&
              codeItem &&
              description &&
              price
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
            idType != 0 &&
            nameItem &&
            codeItem &&
            description &&
            price
              ? "Submit"
              : "กรุณากรอกข้อมูลให้ครบ"}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormAddItem;
