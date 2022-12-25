import axios from "axios";
import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import ButtonBack from "../../components/buttons/ButtonBack";
import NavbarTop from "../../components/navbar/NavbarTop";
import checkToken from "../../config/checkToken";
import FormEditItem from "./components/editItem/FormEditItem";
import FormEditStatus from "./components/editItem/FormEditStatus";
import HistoryItem from "./components/editItem/HistoryItem";
import ModalPostEdit from "../../components/modal/ModalPostEdit";
import checkStatus from "../../config/checkStatus";
import DeleteItem from "../../components/buttons/DeleteItem";
import { GetKanitFont } from "../../config/fonts";
import ModalDeletel from "../../components/modal/ModalDeletel";

function EditItem() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [getItems, setGetItems] = useState<{}>({});
  const [edit_updateEn, setedit_updateEn] = useState(false);

  const [modalShowCheckEditItem, setModalShowCheckEditItem] = useState(false);
  const [postEditItemCheck, setPostEditItemCheck] = useState<object>();
  const [postEditItem, setPostEditItem] = useState<object>();

  const [modalShowCheckUpdateItem, setModalShowCheckUpdateItem] =
    useState(false);
  const [postUpdateItemCheck, setPostUpdateItemCheck] = useState<object>();
  const [postUpdateItem, setPostUpdateItem] = useState<object>();
  // console.log(postEditItem);
  const [userUrl, setuserUrl] = useState<boolean>(false);

  useMemo(async () => {
    try {
      const res = await axios(
        configAxios("get", `${API.getItemById}${state.id}`)
      );

      setGetItems(res.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, [edit_updateEn]);

  const onSubmitFnEditItem = async (status: number) => {
    setModalShowCheckEditItem(false);
    let sendUrl = userUrl ? API.updateItemPhoto : API.updateItem;
    if (status == 1) {
      try {
        const res = await axios(
          configAxios("put", `${sendUrl}${state?.id}`, postEditItem)
        );
        checkStatus(res, "แก้ไขครุภัณฑ์สร็จสิ้น");
        setedit_updateEn(!edit_updateEn);
      } catch (error: any) {
        checkToken(error.response.data.status, error.request.status, navigate);
      }
    }
  };
  const onSubmitFnUpdateItem = async (status: number) => {
    setModalShowCheckUpdateItem(false);
    if (status == 1) {
      try {
        const res = await axios(
          configAxios("post", API.updateStetus, postUpdateItem)
        );
        checkStatus(res, "ย้ายสถานที่หรือเปลี่ยนถานะครุภัณฑ์สร็จสิ้น");
        setedit_updateEn(!edit_updateEn);
      } catch (error: any) {
        checkToken(error.response.data.status, error.request.status, navigate);
      }
    }
  };

  const [modalShowDeletel, setModalShowDeletel] = useState(false);
  // // console.log(modalShowDeletel);
  // const onSubmitFnDeletel = async (status: number) => {
  //   setModalShowDeletel(false);
  // };

  return (
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={state.isPage} />
      <div className="d-flex justify-content-between">
        <div>
          <ButtonBack titleButton={"ย้อนกลับ"} />
        </div>
        <div>
          <DeleteItem
            titleButton={"ลบครุภัณฑ์"}
            setModal={setModalShowDeletel}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5 mb-2">
        <h3>แก้ไขครุภัณฑ์</h3>
      </div>
      {modalShowDeletel && (
        <ModalDeletel
          setModal={setModalShowDeletel}
          modalShowDeletel={modalShowDeletel}
          title={"ครุภัณฑ์"}
          item={getItems}
          isPage={"item"}
        />
      )}
      {modalShowCheckEditItem && (
        <ModalPostEdit
          onSubmitFnEdit={onSubmitFnEditItem}
          modalShowCheckEditItem={modalShowCheckEditItem}
          chackDataEdit={postEditItemCheck}
          isEdit={"item"}
          title={"การแก้ไขข้อมูลครุภัณฑ์"}
        />
      )}
      {modalShowCheckUpdateItem && (
        <ModalPostEdit
          onSubmitFnEdit={onSubmitFnUpdateItem}
          modalShowCheckEditItem={modalShowCheckUpdateItem}
          chackDataEdit={postUpdateItemCheck}
          isEdit={"status"}
          title={"การย้ายสถานที่หรือเปลี่ยนสถานะ"}
        />
      )}
      {getItems && (
        <FormEditItem
          getItems={getItems}
          setModalShowCheckEditItem={setModalShowCheckEditItem}
          setPostEditItemCheck={setPostEditItemCheck}
          setPostEditItem={setPostEditItem}
          setuserUrl={setuserUrl}
        />
      )}
      <div className="mt-5">
        <FormEditStatus
          getItems={getItems}
          setModalShowCheckUpdateItem={setModalShowCheckUpdateItem}
          setPostUpdateItemCheck={setPostUpdateItemCheck}
          setPostUpdateItem={setPostUpdateItem}
        />
      </div>

      <div className="mt-5">
        <HistoryItem getItems={getItems} />
      </div>
    </div>
  );
}

export default EditItem;
