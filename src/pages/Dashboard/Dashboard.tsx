import { useEffect, useMemo, useState } from "react";
import NavbarItem from "../../components/navbar/NavbarItem";
import NavbarTop from "../../components/navbar/NavbarTop";
import { GetKanitFont } from "../../config/fonts";
// import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

import { Pie, Bar } from "react-chartjs-2";
import { Button, Card, Container } from "react-bootstrap";

import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import colorsCate from "../../config/colorsCate";
import _ from "lodash";
import { optionsPie } from "./options/pie";
import { optionsBar } from "./options/bar";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  BarElement,
  Title,
  LinearScale,
  // ChartData,
} from "chart.js";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Dashboard() {
  const clickPage = "dashboard";

  const [getCategory, setGetCategory] = useState<any>([]);
  const [getTypeItem, setGetTypeItem] = useState<{}>({});

  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getCategory));
      setGetCategory(res.data);
      // const resType = await axios(configAxios("get", API.getTypeItem));
      // setGetTypeItem(resType.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      // checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);

  //
  const [sumItem, setSumItem] = useState<any>();
  useEffect(() => {
    // console.log(getCategory);

    if (getCategory.length > 0) {
      let data_Labels = [],
        data_List = [],
        color_List = [],
        sum_item = 0,
        name_Cate: any = [];

      for (let i = 0; i < getCategory.length; i++) {
        data_Labels.push(getCategory[i]?.name);
        data_List.push(getCategory[i]?.items.length);
        color_List.push(colorsCate[i]);
        sum_item = +sum_item + getCategory[i]?.items?.length;
        name_Cate.push(getCategory[i]?.name);
      }

      // console.log(name_Cate);
      // console.log(data_List);
      name_Cate = Array.from(new Set(name_Cate));

      let data_ListValue = [];
      for (let i = 0; i < name_Cate.length; i++) {
        const itemCate = _.filter(getCategory, (item: any, idx: any) => {
          return item.name === name_Cate[i];
        });
        // console.log(itemCate);
        let sumItem = 0;
        for (let j = 0; j < itemCate.length; j++) {
          // console.log(itemCate[j]?.items.length);
          sumItem = sumItem + itemCate[j]?.items.length;
        }
        // console.log(itemCate[0].name + " = " + sumItem);

        data_ListValue.push(sumItem);
      }
      // console.log(name_Cate);
      // console.log(data_ListValue);

      setSumItem(sum_item);

      setData_Labels(name_Cate);
      setDataList(data_ListValue);

      setColorList(color_List);
    }
  }, [getCategory]);

  const [dataList, setDataList] = useState<any>();
  const [data_Labels, setData_Labels] = useState<any>();
  const [colorList, setColorList] = useState<any>();
  const dataPie = {
    labels: data_Labels,
    datasets: [
      {
        label: "จำนวน",
        data: dataList,
        backgroundColor: colorList,
      },
    ],
  };

  const labels = ["ปกติ", "ชำรุด"];
  const dataBar = {
    labels: labels,
    datasets: [
      {
        label: "สถานะครุภัณฑ์",
        data: [20, 30],
        backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(255, 99, 132, 0.5)"],
      },
    ],
  };
  return (
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={clickPage} />
      <NavbarItem clickPage={clickPage} />

      <div className="d-flex justify-content-center mt-5 mb-2">
        <h3>Dashboard</h3>
      </div>

      {/* <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div> */}

      <Container>
        <div className="m-3 d-flex justify-content-end">
          <span>ครุภัณฑ์ทั้งหมด {sumItem} ชิ้น</span>
        </div>
        <div className="d-flex flex-row justify-content-start flex-wrap bd-highlight">
          <Card
            className="m-3"
            style={{
              width: "35rem",
              // height: "100%",
            }}
          >
            <Pie
              style={{
                width: "100%",
                // height: "100%",
              }}
              data={dataPie}
              options={optionsPie}
            />
          </Card>
          {/*  */}

          <Card
            className="m-3 d-flex align-content-center justify-content-center"
            style={{
              width: "40rem",
              // height: "100%",
            }}
          >
            {/* <div className="m-2 d-flex justify-content-end">
              <span>ครุภัณฑ์ทั้งหมด {sumItem} ชิ้น</span>
            </div> */}
            <div className="d-flex align-content-center justify-content-center">
              <Bar className="mt-5" options={optionsBar} data={dataBar} />
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
