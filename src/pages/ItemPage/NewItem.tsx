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
import { sweet_popUpTimer } from "../../components/sweetalert2/sweet";

function NewItem() {
  const navigate = useNavigate();
  const [showFrom, setShowFrom] = useState<string>("AddItem");
  const [modalShowCheck, setModalShowCheck] = useState(false);
  const [postItemCheck, setPostItemCheck] = useState<object>();
  const [postItem, setPostItem] = useState<object>();
  // FormNewItem
  const [nameItem, setNameItem] = useState<string>("");
  const [codeItem, setCodeItem] = useState<string>("");

  const onSubmitFn = async (status: number) => {
    // console.log(status);
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
        }
      } catch (error: any) {
        // console.log("err = ", error.request.status);
        checkToken(error.response.data.status, error.request.status, navigate);
      }
    }
  };
  console.log(postItem);

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
      {showFrom == "AddCategory" && <FormAddCateItem />}
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
