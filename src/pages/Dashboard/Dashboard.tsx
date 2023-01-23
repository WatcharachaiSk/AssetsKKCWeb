import { useEffect, useMemo, useState } from "react";
import NavbarItem from "../../components/navbar/NavbarItem";
import NavbarTop from "../../components/navbar/NavbarTop";
import { GetKanitFont } from "../../config/fonts";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

import { Pie, Bar } from "react-chartjs-2";
import { Button, Card, Container } from "react-bootstrap";

import axios from "axios";
import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import colorsCate from "../../config/colorsCate";
import _ from "lodash";
import { optionsPie } from "./options/pie";
import { optionsBar } from "./options/bar";
//
import { BsBoxSeam, BsBox, BsCart, BsCartCheck } from "react-icons/bs";

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
import colors from "../../config/colors";
import checkToken from "../../config/checkToken";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const clickPage = "dashboard";

  const [getCategory, setGetCategory] = useState<any>([]);
  // const [getTypeItem, setGetTypeItem] = useState<{}>({});

  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getCategory));
      setGetCategory(res.data);
      // const resType = await axios(configAxios("get", API.getTypeItem));
      // setGetTypeItem(resType.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);

  //
  const [sumItem, setSumItem] = useState<any>();
  const [sumStatus_Item, setsumStatus_Item] = useState<any>([]);
  const [rows_Grid, setRows_Grid] = useState<any>([]);

  useEffect(() => {
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

      //TODO ลบ ชื่อซ้ำ
      name_Cate = Array.from(new Set(name_Cate));

      let data_ListValue = [];
      let arrvauleNormal = [],
        arrvauleNotNormal = [],
        arrVaulePendingSale = [],
        arrVauleSoldOut = [];
      //
      for (let i = 0; i < name_Cate.length; i++) {
        const itemCate = _.filter(getCategory, (item: any, idx: any) => {
          return item.name === name_Cate[i];
        });
        // console.log(itemCate);
        let sumItem = 0;

        for (let j = 0; j < itemCate.length; j++) {
          let vauleNormal: any,
            vauleNotNormal: any,
            vaulePendingSale: any,
            vauleSoldOut: any;
          vauleNormal = _.filter(itemCate[j]?.items, (item: any) => {
            return item.status_item == true;
          });
          // console.log(vauleNormal);
          vauleNotNormal = _.filter(itemCate[j]?.items, (item: any) => {
            return item.status_item == false;
          });
          vaulePendingSale = _.filter(itemCate[j]?.items, (item: any) => {
            return item.status_item == 2;
          });
          vauleSoldOut = _.filter(itemCate[j]?.items, (item: any) => {
            return item.status_item == 3;
          });
          // console.log(vauleNotNormal);

          arrvauleNormal.push(vauleNormal);
          arrvauleNotNormal.push(vauleNotNormal);
          arrVaulePendingSale.push(vaulePendingSale);
          arrVauleSoldOut.push(vauleSoldOut);
          sumItem = sumItem + itemCate[j]?.items.length;
        }

        data_ListValue.push(sumItem);
      }

      let sumArrvauleNormal = 0,
        sumArrvauleNotNormall = 0,
        sumArrvaulePendingSalel = 0,
        sumArrvauleSoldOut = 0,
        sumArrvauleStatus = [];
      for (let i = 0; i < arrvauleNormal.length; i++) {
        if (arrvauleNormal[i].length != 0) {
          sumArrvauleNormal = sumArrvauleNormal + arrvauleNormal[i].length;
        }
      }
      for (let i = 0; i < arrvauleNotNormal.length; i++) {
        if (arrvauleNotNormal[i].length != 0) {
          sumArrvauleNotNormall =
            sumArrvauleNotNormall + arrvauleNotNormal[i].length;
        }
      }
      for (let i = 0; i < arrVaulePendingSale.length; i++) {
        if (arrVaulePendingSale[i].length != 0) {
          sumArrvaulePendingSalel =
            sumArrvaulePendingSalel + arrVaulePendingSale[i].length;
        }
      }
      for (let i = 0; i < arrVauleSoldOut.length; i++) {
        if (arrVaulePendingSale[i].length != 0) {
          sumArrvauleSoldOut = sumArrvauleSoldOut + arrVauleSoldOut[i].length;
        }
      }

      sumArrvauleStatus.push(sumArrvauleNormal);
      sumArrvauleStatus.push(sumArrvauleNotNormall);
      sumArrvauleStatus.push(sumArrvaulePendingSalel);
      sumArrvauleStatus.push(sumArrvauleSoldOut);

      // console.log(sumArrvauleStatus);

      setsumStatus_Item(sumArrvauleStatus);

      setSumItem(sum_item);

      setData_Labels(name_Cate);
      setDataList(data_ListValue);

      setColorList(color_List);

      let rowsGrid = [];
      for (let i = 0; i < name_Cate.length; i++) {
        rowsGrid[i] = {
          id: i,
          col1: name_Cate[i],
          col2: data_ListValue[i],
        };
      }
      // console.log(rowsGrid);
      setRows_Grid(rowsGrid);
    }
  }, [getCategory]);

  const [data_Labels, setData_Labels] = useState<any>();
  const [dataList, setDataList] = useState<any>();

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

  const labelsBar = ["ปกติ", "ชำรุด", "รอจำหน่าย", "จำนหน่ายแล้ว"];
  const dataBar = {
    labels: labelsBar,
    datasets: [
      {
        label: "สถานะครุภัณฑ์",
        data: sumStatus_Item,
        backgroundColor: [
          colors.statusColor1aa,
          colors.statusColor0ff,
          colors.statusColor2,
          colors.statusColor3,
        ],
      },
    ],
  };

  const rows: GridRowsProp = rows_Grid;

  const columns: GridColDef[] = [
    { field: "col1", flex: 1, headerName: "ชื่อหมวดหมู่", width: 150 },
    { field: "col2", headerName: "จำนวนครุภัณฑ์", width: 150 },
  ];
  return (
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={clickPage} />
      <NavbarItem clickPage={clickPage} />

      <div className="d-flex justify-content-center mt-3 mb-2">
        {/* <h3>Dashboard</h3> */}
      </div>

      {/* <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div> */}
      {/*    <div className="m-3 d-flex justify-content-end">
          <span>ครุภัณฑ์ในระบบทั้งหมด {sumItem} ชิ้น</span>
        </div> */}
      <Container>
        <div className="mb-2 d-flex flex-row justify-content-center flex-wrap bd-highlight">
          <Card
            className="m-1 d-flex align-content-center justify-content-center"
            style={{
              width: "15rem",
              height: "10rem",
            }}
          >
            <div className="d-flex justify-content-center mb-2">
              ครุภัณฑ์ในระบบทั้งหมด {sumItem} ชิ้น
            </div>
            <div className="d-flex justify-content-center">
              <BsBoxSeam size={50} color={"#3e3e3e"} />
            </div>
          </Card>
          {/*  */}
          <Card
            className="m-1 d-flex align-content-center justify-content-center"
            style={{
              width: "15rem",
              height: "10rem",
            }}
          >
            <div className="d-flex justify-content-center mb-2">
              ปกติทั้งหมด {sumStatus_Item[0]} ชิ้น
            </div>
            <div className="d-flex justify-content-center">
              <BsBox size={50} color={colors.statusColor1aa} />
            </div>
          </Card>
          {/*  */}
          <Card
            className="m-1 d-flex align-content-center justify-content-center"
            style={{
              width: "15rem",
              height: "10rem",
            }}
          >
            <div className="d-flex justify-content-center mb-2">
              ชำรุดทั้งหมด {sumStatus_Item[1]} ชิ้น
            </div>
            <div className="d-flex justify-content-center">
              <BsBox size={50} color={colors.statusColor0ff} />
            </div>
          </Card>
          {/*  */}
          <Card
            className="m-1 d-flex align-content-center justify-content-center"
            style={{
              width: "15rem",
              height: "10rem",
            }}
          >
            <div className="d-flex justify-content-center mb-2">
              รอจำหน่าย {sumStatus_Item[2]} ชิ้น
            </div>
            <div className="d-flex justify-content-center">
              <BsCart size={50} color={colors.statusColor2} />
            </div>
          </Card>
          {/*  */}
          <Card
            className="m-1 d-flex align-content-center justify-content-center"
            style={{
              width: "15rem",
              height: "10rem",
            }}
          >
            <div className="d-flex justify-content-center mb-2">
              จำหน่ายออก {sumStatus_Item[3]} ชิ้น
            </div>
            <div className="d-flex justify-content-center">
              <BsCartCheck size={50} color={colors.statusColor3} />
            </div>
          </Card>
        </div>
      </Container>
      {/*  */}
      <Container>
        <div className="d-flex flex-row justify-content-center flex-wrap bd-highlight">
          <div style={{ height: 300, width: "100%" }}>
            <DataGrid
              style={{ ...GetKanitFont("KanitLight") }}
              rows={rows}
              columns={columns}
            />
          </div>
        </div>
      </Container>
      {/*  */}
      <Container>
        <div className=" d-flex flex-row justify-content-start flex-wrap bd-highlight">
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
            {/* <div className=" d-flex justify-content-end">
              <span>ครุภัณฑ์ทั้งหมด {sumItem} ชิ้น</span>
            </div> */}
            <div className="d-flex align-content-center justify-content-center">
              <Bar options={optionsBar} data={dataBar} />
            </div>
            <div className="m-2 d-flex justify-content-end ">
              <div className="d-flex flex-column">
                <div>
                  <span style={{ color: colors.statusColor1 }}>ปกติ</span>{" "}
                  {sumStatus_Item[0]} ชิ้น
                </div>
                <div>
                  <span style={{ color: colors.statusColor0 }}>ชำรุด</span>{" "}
                  {sumStatus_Item[1]} ชิ้น
                </div>
                <div>
                  <span style={{ color: colors.statusColor2 }}>รอจำหน่าย</span>{" "}
                  {sumStatus_Item[2]} ชิ้น
                </div>
                <div>
                  <span style={{ color: colors.statusColor3 }}>จำหน่ายออก</span>{" "}
                  {sumStatus_Item[3]} ชิ้น
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
