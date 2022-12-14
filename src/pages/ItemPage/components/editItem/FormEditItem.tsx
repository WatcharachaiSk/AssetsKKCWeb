import axios from "axios";
import { useState, useMemo, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import configAxios from "../../../../axios/configAxios";
import { API } from "../../../../axios/swr/endpoint";
import { useNavigate } from "react-router-dom";
import checkToken from "../../../../config/checkToken";
import _ from "lodash";
import { sweet_basic } from "../../../../components/sweetalert2/sweet";
import colors from "../../../../config/colors";

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
  const [description, setDescription] = useState<string>();
  const [description_Old, setDescription_Old] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [price_Old, setPrice_Old] = useState<number>();

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

  const [faculty_Old, setFaculty_Old] = useState<any>();
  const [department_Old, setDepartment_Old] = useState<any>();
  const [building_Old, setBuilding_Old] = useState<any>();

  const [category_Old, setCategory_Old] = useState<any>();
  const [typeItem_Old, setTypeItem_Old] = useState<any>();

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

    setDescription(getItems?.description);
    setDescription_Old(getItems?.description);

    setPrice(getItems?.price);
    setPrice_Old(getItems?.price);

    setFaculty_Old(getItems?.faculty);
    setDepartment_Old(getItems?.department);
    setBuilding_Old(getItems?.building);

    setTypeItem_Old(getItems?.typeItem);
    setCategory_Old(getItems?.category);
    // setLocationLId(getItems?.locationLId);
  }, [getItems]);

  // getFaculty
  useMemo(async () => {
    try {
      const resFacu = await axios(configAxios("get", API.getFaculty));

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
        const resType = await axios(
          configAxios("get", `${API.getTypeItemByDpmId}${departmentDId}`)
        );
        setGetTypeItem(resType.data);
        setGetBuilding(res.data);
      }
    } catch (error: any) {
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [departmentDId]);

  const onSubmit = async (event: any) => {
    const faculty = _.filter(getFaculty, (item: any) => {
      return (
        item.f_id ==
        (facultyFId != facultyFId_Old ? facultyFId : facultyFId_Old)
      );
    });
    const department = _.filter(getDepartment, (item: any) => {
      return (
        item.d_id ==
        (departmentDId != departmentDId_Old ? departmentDId : departmentDId_Old)
      );
    });
    const building = _.filter(getBuilding, (item: any) => {
      return (
        item.b_id ==
        (buildingBId != buildingBId_Old ? buildingBId : buildingBId_Old)
      );
    });
    const typeItem = _.filter(getTypeItem, (item: any) => {
      return (
        item.type_id ==
        (typeItemTypeId != typeItemTypeId_Old
          ? typeItemTypeId
          : typeItemTypeId_Old)
      );
    });
    event.preventDefault();
    const obj = {
      name: !nameItem ? nameItem_Old : nameItem,
      code: !codeItem ? codeItem_Old : codeItem,
      description: !description ? description_Old : description,
      price: !price ? price_Old : price,

      faculty: faculty,
      department: department,
      building: building,
      typeItem: typeItem,
    };
    const dataform = {
      name: !nameItem ? nameItem_Old : nameItem,
      code: !codeItem ? codeItem_Old : codeItem,
      description: !description ? description_Old : description,
      price: !price ? price_Old : price,
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
            style={{
              borderColor:
                nameItem_Old !== nameItem && nameItem
                  ? colors.borderColorEdit
                  : "",
            }}
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
            style={{
              borderColor:
                codeItem_Old !== codeItem && codeItem
                  ? colors.borderColorEdit
                  : "",
            }}
            type="text"
            placeholder="Code"
            value={codeItem !== codeItem_Old ? codeItem : codeItem_Old}
            onChange={(event: any) => {
              const value = event.target.value;
              setCodeItem(value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>รายละเอียดครุภัณฑ์</Form.Label>
          <Form.Control
            value={description}
            style={{
              borderColor:
                description_Old !== description && description
                  ? colors.borderColorEdit
                  : "",
            }}
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
            style={{
              borderColor:
                price_Old != price && price ? colors.borderColorEdit : "",
            }}
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

        {/*  */}
        <Form.Group className="mb-3" controlId="formFaculty">
          <Form.Label>
            เลือกคณะ ตอนนี้อยู่{" "}
            <span style={{ color: "#4c00ff", fontSize: 18 }}>
              ({faculty_Old?.nameTH + " " + faculty_Old?.nameEN})
            </span>
          </Form.Label>
          <Form.Select
            // value={facultyFId}
            style={{
              borderColor:
                facultyFId_Old != facultyFId && facultyFId != 0
                  ? colors.borderColorEdit
                  : "",
            }}
            onChange={(event: any) => {
              const value = event.target.value;
              setDepartmentDId(0);
              setBuildingBId(0);
              setFacultyFId(value);
            }}
            size="lg"
          >
            <option value={0}>เลือกคณะ</option>

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
          <Form.Label>
            เลือกสาขา ตอนนี้อยู่{" "}
            <span style={{ color: "#4c00ff", fontSize: 18 }}>
              ({department_Old?.nameTH + " " + department_Old?.nameEN})
            </span>
          </Form.Label>
          <Form.Select
            // value={departmentDId}
            disabled={facultyFId == 0 ? true : false}
            onChange={(event: any) => {
              const value = event.target.value;
              if (value == 0) {
                setBuildingBId(0);
              }
              setDepartmentDId(value);
            }}
            size="lg"
          >
            <option value={0}>เลือกสาขา</option>

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

        {/*  */}
        <Form.Group className="mb-3">
          <Form.Label>
            เลือกอาคาร ตอนนี้อยู่{" "}
            <span style={{ color: "#4c00ff", fontSize: 18 }}>
              ({building_Old?.nameTH + " " + building_Old?.nameEN})
            </span>
          </Form.Label>
          <Form.Select
            disabled={departmentDId == 0 ? true : false}
            //  value={buildingBId}
            onChange={(event: any) => {
              const value = event.target.value;
              setBuildingBId(value);
            }}
            size="lg"
          >
            <option value={0}>เลือกอาคาร</option>

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
        <Form.Group className="mb-3" controlId="formFaculty">
          <Form.Label>
            เลือกชนิดครุภัณฑ์ ตอนนี้อยู่{" "}
            <span style={{ color: "#4c00ff", fontSize: 18 }}>
              ({typeItem_Old?.name})
            </span>
          </Form.Label>
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
            <option value={0}>เลือกชนิดครุภัณฑ์</option>
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
          <Form.Label>
            หมวดหมู่ครุภัณฑ์ (อิงตามชนิดครุภัณฑ์) ตอนนี้อยู่{" "}
            <span style={{ color: "#4c00ff", fontSize: 18 }}>
              ({category_Old?.name})
            </span>
          </Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder={`${
              nameCate != undefined ? nameCate : "เลือกชนิดครุภัณฑ์"
            }`}
            disabled
            readOnly
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            // style={{}}
            onClick={(event) => {
              if (submit && departmentDId != 0 && buildingBId != 0) {
                onSubmit(event);
              } else {
                event.preventDefault();
                sweet_basic(
                  "warning",
                  "ยังไม่มีข้อมูลเปลี่ยนแปลง",
                  "กรุณาแก้ไขข้อมูล"
                );
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
              ? "บันทึก"
              : "ยังไม่มีข้อมูลเปลี่ยนแปลง"}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormEditItem;
