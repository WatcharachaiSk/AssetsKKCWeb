import { CSVLink, CSVDownload } from "react-csv";
import { useState, useMemo, useEffect } from "react";
import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import checkToken from "../../config/checkToken";
import { useNavigate } from "react-router-dom";
import { chackStatusItem } from "../../config/chackStatusItem";
import moment from "moment";
import ReactPaginate from "react-paginate";
// interface LineProps {
//   options: ChartOptions<"line">;
//   data: ChartData<"line">;
// }

function UpTestt() {
  const navigate = useNavigate();
  const [getItems, setGetItems] = useState<any>();
  // console.log("getItems = ", getItems);
  const [dataItem, setDataItem] = useState<any>();

  // console.log(moment().format("DD_MM_YYYY-HH:mm"));
  useMemo(async () => {
    try {
      const res: any = await axios(configAxios("get", API.getItem));
      setGetItems(res.data);
      let arrData = [];
      for (let i = 0; i < res?.data.length; i++) {
        arrData.push({
          code: res?.data[i]?.code,
          name: res?.data[i]?.name,
          price: res?.data[i]?.price,
          category: res?.data[i]?.category?.name,
          typeitem: res?.data[i]?.typeitem?.name,
          status_item: chackStatusItem(res?.data[i]?.status_item),
          faculty: res?.data[i]?.faculty?.nameTH,
          department: res?.data[i]?.department?.nameTH,
          building: res?.data[i]?.building?.nameTH,
          location: res?.data[i]?.location?.nameTH,
          floor: res?.data[i]?.location?.floor,
          purchase_date: moment(res?.data[i]?.typeitem?.purchase_date).format(
            "DD/MM/YYYY"
          ),
        });
      }
      // console.log(arrData);
      setDataItem(arrData);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);

  // useEffect(() => {
  //   if (getItems) {
  //     for (let i = 0; i < getItems.length; i++) {
  //       arrData.push({
  //         code: getItems[i]?.code,
  //         name: getItems[i]?.name,
  //         price: getItems[i]?.price,
  //         category: getItems[i]?.category?.name,
  //         typeitem: getItems[i]?.typeitem?.name,
  //         status_item: chackStatusItem(getItems[i]?.status_item),
  //         faculty: getItems[i]?.faculty?.nameTH,
  //         department: getItems[i]?.department?.nameTH,
  //         building: getItems[i]?.building?.nameTH,
  //         location: getItems[i]?.location?.nameTH,
  //         floor: getItems[i]?.location?.floor,
  //       });
  //     }
  //   }
  // }, [getItems]);
  // console.log("dataItem = ", dataItem);

  const headers = [
    { label: "หมายเลขครุภัณฑ์", key: "code" },
    { label: "ชื่อครุภัณฑ์", key: "name" },
    { label: "ราคาครุภัณฑ์", key: "price" },
    { label: "หมวดหมู่ครุภัณฑ์", key: "category" },
    { label: "ชนิดครุภัณฑ์", key: "typeitem" },
    { label: "สถานะครุภัณฑ์", key: "status_item" },
    { label: "คณะ", key: "faculty" },
    { label: "สาขา", key: "department" },
    { label: "อาคาร", key: "building" },
    { label: "สถานที่", key: "location" },
    { label: "ชั้น", key: "floor" },
    { label: "วันที่ซื้อ", key: "purchase_date" },
  ];

  // const data = [
  //   {
  //     code: "",
  //     name: "",
  //     price: "",
  //     category: "",
  //     typeitem: "",
  //     status_item: "",
  //     faculty: "",
  //     department: "",
  //     building: "",
  //     location: "",
  //     floor: "",
  //   },
  // ];
  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"],
  ];
  //
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + getItems;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / getItems);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * getItems) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
  };

  return (
    <>
      {getItems && dataItem && (
        <>
          {" "}
          <CSVLink
            filename={`${moment().format("DD_MM_YYYY-HH:mm")}_Assets_KKC.csv`}
            headers={headers}
            data={dataItem}
          >
            Download me
          </CSVLink>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            // renderOnZeroPageCount={null}
          />
        </>
      )}
    </>
  );
}

export default UpTestt;
