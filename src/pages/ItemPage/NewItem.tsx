import { useState } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import ButtonBack from "../../components/buttons/ButtonBack";
import FormAddItem from "./components/FormAddItem";
import SelectForm from "./components/SelectForm";
import FormAddTypeItem from "./components/FormAddTypeItem";
import FormAddCateItem from "./components/FormAddCateItem";
import ModalPostItem from "../../components/modal/ModalPostItem";
import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import { useNavigate } from "react-router-dom";
import checkToken from "../../config/checkToken";
import {
  sweet_basic,
  sweet_popUpTimer,
} from "../../components/sweetalert2/sweet";
import ModalPostCate from "../../components/modal/ModalPostCate";

function NewItem() {
  const navigate = useNavigate();
  const [showFrom, setShowFrom] = useState<string>("AddItem");
  const [modalShowCheck, setModalShowCheck] = useState(false);
  const [modalShowCheckCate, setModalShowCheckCate] = useState(false);
  const [postItemCheck, setPostItemCheck] = useState<object>();
  const [postItemCheckCate, setPostItemCheckCate] = useState<object>();
  const [postItem, setPostItem] = useState<object>();

  // FormNewItem
  const [nameItem, setNameItem] = useState<string>("");
  const [codeItem, setCodeItem] = useState<string>("");

  // Submit
  const onSubmitFn = async (status: number) => {
    setModalShowCheck(false);
    if (status == 1) {
      try {
        const res = await axios(configAxios("post", API.createItem, postItem));
        if (res.status == 200) {
          sweet_popUpTimer(
            "top-end",
            "success",
            "เพิ่มครุภัณฑ์เสร็จสิ้น",
            1500
          );
        } else {
          sweet_basic(
            "error",
            "Server Error",
            "มีบางอย่างผิดพลาดลองใหม่อีกครั้ง"
          );
        }
      } catch (error: any) {
        checkToken(error.response.data.status, error.request.status, navigate);
      }
    }
  };
  const onSubmitFnCate = async (status: number) => {
    console.log(status);

    setModalShowCheckCate(false);
    if (status == 1) {
      try {
        const res = await axios(
          configAxios("post", API.createCategory, postItemCheckCate)
        );
        if (res.status == 200) {
          sweet_popUpTimer(
            "top-end",
            "success",
            "เพิ่มหมวดหมู่ครุภัณฑ์เสร็จสิ้น",
            1500
          );
        } else {
          sweet_basic(
            "error",
            "Server Error",
            "มีบางอย่างผิดพลาดลองใหม่อีกครั้ง"
          );
        }
      } catch (error: any) {
        checkToken(error.response.data.status, error.request.status, navigate);
      }
    }
  };

  return (
    <>
      <NavbarTop clickPage={"items"} />
      <div className="d-flex justify-content-center mt-4 mb-2">
        <h3>เพิ่มครุภัณฑ์</h3>
      </div>
      <ButtonBack titleButton={"ย้อนกลับ"} />
      <SelectForm setShowFrom={setShowFrom} showFrom={showFrom} />
      {/* Modal */}
      {modalShowCheck && (
        <ModalPostItem
          modalShowCheck={modalShowCheck}
          onSubmitFn={onSubmitFn}
          chackData={postItemCheck}
        />
      )}
      {modalShowCheckCate && (
        <ModalPostCate
          modalShowCheckCate={modalShowCheckCate}
          onSubmitFnCate={onSubmitFnCate}
          chackDataCate={postItemCheckCate}
        />
      )}
      {/*  */}
      {showFrom == "AddItem" && (
        <FormAddItem
          nameItem={nameItem}
          setNameItem={setNameItem}
          codeItem={codeItem}
          setCodeItem={setCodeItem}
          setPostItemCheck={setPostItemCheck}
          setModalShowCheck={setModalShowCheck}
          setPostItem={setPostItem}
        />
      )}
      {showFrom == "AddType" && <FormAddTypeItem />}
      {showFrom == "AddCategory" && (
        <FormAddCateItem
          setModalShowCheckCate={setModalShowCheckCate}
          setPostItemCheckCate={setPostItemCheckCate}
        />
      )}
    </>
  );
}

export default NewItem;

/*
   const dataform = {
      name: nameItem,
      code: codeItem,
      status_item: status,
      faculty: idFty,
      department: idDpm,
      building: IdBud,
      location: idLocat,
      typeItemType: idType,
    };
    setPostItem(dataform);


*/
