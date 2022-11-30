import axios from "axios";
import { useState, useMemo, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import configAxios from "../../../../axios/configAxios";
import { API } from "../../../../axios/swr/endpoint";
import { useNavigate } from "react-router-dom";
import checkToken from "../../../../config/checkToken";
import _ from "lodash";
import { sweet_basic } from "../../../../components/sweetalert2/sweet";

function FormEditItem(props: any) {
  const {
    getItems,
    setModalShowCheckEditItem,
    setPostEditItemCheck,
    setPostEditItem,
  } = props;
  const navigate = useNavigate();
  const [getFaculty, setGetFaculty] = useState<{}>({});
  const [getDepartment, setGetDepartment] = useState<{}>({});
  const [getBuilding, setGetBuilding] = useState<{}>({});

  const [getTypeItem, setGetTypeItem] = useState<{}>({});

  const [nameItem_Old, setNameItem_Old] = useState<string>();
  const [nameItem, setNameItem] = useState<string>();
  // console.log(nameItem);

  const [codeItem_Old, setCodeItem_Old] = useState<string>();
  const [codeItem, setCodeItem] = useState<string>();

  const [typeItemTypeId_Old, setTypeItemTypeId_Old] = useState<number>(0);
  const [typeItemTypeId, setTypeItemTypeId] = useState<number>(0);

  const [nameCate, setnNameCate] = useState<string>();

  const [categoryCateId_Old, setCategoryCateId_Old] = useState<number>(0);
  const [categoryCateId, setCategoryCateId] = useState<number>(0);

  const [facultyFId, setFacultyFId] = useState<number>(0);
  const [facultyFId_Old, setFacultyFId_Old] = useState<number>(0);

  const [departmentDId, setDepartmentDId] = useState<number>(0);
  const [departmentDId_Old, setDepartmentDId_Old] = useState<number>(0);

  const [buildingBId_Old, setBuildingBId_Old] = useState<number>(0);
  const [buildingBId, setBuildingBId] = useState<number>(0);

  const [submit, setSubmit] = useState<any>();

  // console.log("facultyFId = " + facultyFId);
  // console.log("departmentDId = " + departmentDId);
  // console.log("buildingBId = " + buildingBId);

  // console.log(
  //   "categoryCateId_Old = " +
  //     categoryCateId_Old +
  //     " categoryCateId = " +
  //     categoryCateId
  // );

  useEffect(() => {
    let arrCh = [];
    if (nameItem_Old === nameItem) {
      // console.log("nameItem เหมือน");
    } else {
      // console.log("nameItem ไม่เหมือน");
      arrCh.push(1);
    }
    if (codeItem_Old === codeItem) {
      // console.log("codeItem เหมือน");
    } else {
      // console.log("codeItem ไม่เหมือน");
      arrCh.push(1);
    }
    if (typeItemTypeId_Old == typeItemTypeId) {
      // console.log("typeItemTypeId เหมือน");
    } else {
      // console.log("typeItemTypeId ไม่เหมือน");
      arrCh.push(1);
    }
    if (facultyFId_Old == facultyFId) {
      // console.log("facultyFId เหมือน");
    } else {
      // console.log("facultyFId ไม่เหมือน");
      arrCh.push(1);
    }
    if (departmentDId_Old == departmentDId) {
      // console.log("departmentDId เหมือน");
    } else {
      // console.log("departmentDId ไม่เหมือน");
      arrCh.push(1);
    }
    if (buildingBId_Old == buildingBId) {
      // console.log("buildingBId เหมือน");
    } else {
      // console.log("buildingBId ไม่เหมือน");
      arrCh.push(1);
    }
    // console.log(arrCh);
    if (arrCh) {
      setSubmit(arrCh[0]);
    } else {
      setSubmit(undefined);
    }
  }, [
    nameItem,
    codeItem,
    typeItemTypeId,
    facultyFId,
    departmentDId,
    buildingBId,
  ]);

  useEffect(() => {
    setNameItem_Old(getItems?.name);
    setNameItem(getItems?.name);

    setCodeItem_Old(getItems?.code);
    setCodeItem(getItems?.code);

    setTypeItemTypeId_Old(getItems?.typeItemTypeId);
    setTypeItemTypeId(getItems?.typeItemTypeId);

    setCategoryCateId_Old(getItems?.category?.cate_id);
    setCategoryCateId(getItems?.category?.cate_id);

    setFacultyFId_Old(getItems?.facultyFId);
    setFacultyFId(getItems?.facultyFId);

    setDepartmentDId_Old(getItems?.departmentDId);
    setDepartmentDId(getItems?.departmentDId);

    setBuildingBId_Old(getItems?.buildingBId);
    setBuildingBId(getItems?.buildingBId);
    // setLocationLId(getItems?.locationLId);
  }, [getItems]);

  // getFaculty
  useMemo(async () => {
    try {
      const resFacu = await axios(configAxios("get", API.getFaculty));
      const resType = await axios(configAxios("get", API.getTypeItem));
      setGetTypeItem(resType.data);
      setGetFaculty(resFacu.data);
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  //  getDepartmentByFtyId
  useMemo(async () => {
    try {
      if (facultyFId != 0) {
        const res = await axios(
          configAxios("get", `${API.getDepartmentByFtyId}${facultyFId}`)
        );
        setGetDepartment(res.data);
      }
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [facultyFId]);
  //  setGetBuilding
  useMemo(async () => {
    try {
      if (departmentDId != 0) {
        const res = await axios(
          configAxios("get", `${API.getBuildingByDpmId}${departmentDId}`)
        );
        setGetBuilding(res.data);
      }
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [departmentDId]);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const obj = {
      name: nameItem,
      code: codeItem,

      faculty: _.filter(getFaculty, (item: any) => {
        return (
          item.f_id ==
          (facultyFId != facultyFId_Old ? facultyFId : facultyFId_Old)
        );
      }),
      department: _.filter(getDepartment, (item: any) => {
        return (
          item.d_id ==
          (departmentDId != departmentDId_Old
            ? departmentDId
            : departmentDId_Old)
        );
      }),
      building: _.filter(getBuilding, (item: any) => {
        return (
          item.b_id ==
          (buildingBId != buildingBId_Old ? buildingBId : buildingBId_Old)
        );
      }),
      typeItem: _.filter(getTypeItem, (item: any) => {
        return (
          item.type_id ==
          (typeItemTypeId != typeItemTypeId_Old
            ? typeItemTypeId
            : typeItemTypeId_Old)
        );
      }),
    };
    const dataform = {
      name: nameItem,
      code: codeItem,
      facultyFId: facultyFId != facultyFId_Old ? facultyFId : facultyFId_Old,
      departmentDId:
        departmentDId != departmentDId_Old ? departmentDId : departmentDId_Old,
      buildingBId:
        buildingBId != buildingBId_Old ? buildingBId : buildingBId_Old,
      typeItemTypeId:
        typeItemTypeId != typeItemTypeId_Old
          ? typeItemTypeId
          : typeItemTypeId_Old,
      categoryCateId:
        categoryCateId != categoryCateId_Old
          ? categoryCateId
          : categoryCateId_Old,
    };
    // console.log("dataform = ", dataform);

    setPostEditItemCheck(obj);
    setPostEditItem(dataform);
    setModalShowCheckEditItem(true);
  };

  return (
    <Container style={{ borderRadius: 15, width: "100%", height: "100%" }}>
      {/*  */}

      <Form>
        <Form.Group className="mb-2">
          <Form.Label>ชื่อ ครุภัณฑ์</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="ชื่อ"
            value={nameItem !== nameItem_Old ? nameItem : nameItem_Old}
            onChange={(event: any) => {
              const value = event.target.value;
              setNameItem(value);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-3">
          <Form.Label>รหัสครุภัณฑ์</Form.Label>
          <Form.Control
            size="lg"
            // style={{ height: "3rem" }}
            type="text"
            placeholder="Code"
            value={codeItem !== codeItem_Old ? codeItem : codeItem_Old}
            onChange={(event: any) => {
              const value = event.target.value;
              setCodeItem(value);
            }}
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-3" controlId="formFaculty">
          <Form.Label>เลือกชนิดครุภัณฑ์</Form.Label>
          <Form.Select
            onChange={(event: any) => {
              const value = event.target.value;
              // console.log(value);
              const typeItemById: any = _.filter(getTypeItem, (item: any) => {
                return item.type_id == value;
              });
              // console.log(typeItemById);

              if (value != 0) {
                // console.log(typeItemById[0].category.name);
                setnNameCate(typeItemById[0].category.name);
                setCategoryCateId(typeItemById[0].category.cate_id);
                // console.log(
                //   "111111111111111111111111115155155 = " +
                //     typeItemById[0].category.cate_id
                // );
              } else {
                setnNameCate(undefined);
              }
              setTypeItemTypeId(value);
            }}
            size="lg"
          >
            <option value={typeItemTypeId}>{getItems?.typeItem?.name}</option>
            {_.map(getTypeItem, (item: any) => {
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
              nameCate != undefined ? nameCate : getItems?.category?.name
            }`}
            disabled
            readOnly
          />
        </Form.Group>
        {/*  */}
        <Form.Group className="mb-3" controlId="formFaculty">
          <Form.Label>เลือกคณะ</Form.Label>
          <Form.Select
            // value={facultyFId}
            onChange={(event: any) => {
              const value = event.target.value;
              setDepartmentDId(0);
              setBuildingBId(0);
              setFacultyFId(value);
            }}
            size="lg"
          >
            <option value={facultyFId_Old}>
              {getItems?.faculty?.nameTH} {getItems?.faculty?.nameEN}
            </option>

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
        <Form.Group className="mb-3">
          <Form.Label>เลือกสาขา</Form.Label>
          <Form.Select
            // value={departmentDId}
            // disabled={facultyFId == facultyFId_Old ? true : false}
            onChange={(event: any) => {
              const value = event.target.value;
              if (value == 0) {
                setBuildingBId(0);
              }
              setDepartmentDId(value);
            }}
            size="lg"
          >
            {facultyFId == facultyFId_Old ? (
              <option value={departmentDId_Old}>
                {getItems?.department?.nameTH} {getItems?.department?.nameEN}
              </option>
            ) : (
              <option value={0}>เลือกสาขา</option>
            )}

            {_.map(getDepartment, (item: any, idx) => {
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
        <Form.Group className="mb-3">
          <Form.Label>เลือกอาคาร</Form.Label>
          <Form.Select
            disabled={departmentDId == 0 ? true : false}
            //  value={buildingBId}
            onChange={(event: any) => {
              const value = event.target.value;
              setBuildingBId(value);
            }}
            size="lg"
          >
            {departmentDId == departmentDId_Old ? (
              <option value={buildingBId_Old}>
                {getItems?.building?.nameTH} {getItems?.building?.nameEN}
              </option>
            ) : (
              <option value={0}>เลือกอาคาร</option>
            )}

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
              if (submit && departmentDId != 0 && buildingBId != 0) {
                onSubmit(event);
              } else {
                event.preventDefault();
                sweet_basic("warning", "ข้อมูลไม่ครบ", "กรุณากรอกข้อมูลให้ครบ");
              }
            }}
            className="mb-3 mt-3 p-2"
            variant={
              submit && departmentDId != 0 && buildingBId != 0
                ? "success"
                : "secondary"
            }
            type="submit"
            size="lg"
          >
            {submit && departmentDId != 0 && buildingBId != 0
              ? "Submit"
              : "ยังไม่มีข้อมูลที่เปลี่ยนแปลงหรือข้อมูลไม่ครบ"}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormEditItem;
