import { useState } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import ButtonBack from "../../components/buttons/ButtonBack";
import FormAddItem from "./components/FormAddItem";
import SelectForm from "./components/SelectForm";
import FormAddTypeItem from "./components/FormAddTypeItem";
import FormAddCateItem from "./components/FormAddCateItem";
function NewItem() {
  const [showFrom, setShowFrom] = useState<string>("AddItem");

  // FormNewItem
  const [nameItem, setNameItem] = useState<string>("");
  const [codeItem, setCodeItem] = useState<string>("");

  return (
    <>
      <NavbarTop clickPage={"items"} />
      <div className="d-flex justify-content-center mt-4 mb-2">
        <h3>เพิ่มครุภัณฑ์</h3>
      </div>
      <ButtonBack titleButton={"ย้อนกลับ"} />
      <SelectForm setShowFrom={setShowFrom} showFrom={showFrom} />
      {showFrom == "AddItem" && (
        <FormAddItem
          nameItem={nameItem}
          setNameItem={setNameItem}
          codeItem={codeItem}
          setCodeItem={setCodeItem}
        />
      )}
      {showFrom == "AddType" && <FormAddTypeItem />}
      {showFrom == "AddCategory" && <FormAddCateItem />}
    </>
  );
}

export default NewItem;
