import { useState } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import colors from "../../config/colors";
import TableList from "./components/TableList";
import testData from "./components/data";
import BottonAdd from "./components/BottonAdd";
import { useNavigate } from "react-router-dom";

function Items() {
  const navigate = useNavigate();
  const [clickPage, setClickPage] = useState<string>("items");

  const navigatePage = (page: string, idItem?: any) => {
    navigate(page, { state: { id: idItem } });
  };
  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div style={{ backgroundColor: colors.greyD9 }}>items</div>
      <BottonAdd navigatePage={navigatePage} />
      <TableList navigatePage={navigatePage} itemList={testData} />
    </>
  );
}

export default Items;
