// import axios from "axios";
// import React, { useState } from "react";

import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  // ChartData,
  ChartOptions,
} from "chart.js";
import { useMemo, useState, useEffect } from "react";
// import { Pie } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

import configAxios from "../../axios/configAxios";
import { API } from "../../axios/swr/endpoint";
import randomColor from "randomcolor";
import { Container } from "react-bootstrap";
import styled from "styled-components";
// import checkToken from "../../config/checkToken";

ChartJS.register(ArcElement, Tooltip, Legend);

// interface LineProps {
//   options: ChartOptions<"line">;
//   data: ChartData<"line">;
// }

function UpTestt() {
  const [getCategory, setGetCategory] = useState<any>([]);
  const [getTypeItem, setGetTypeItem] = useState<{}>({});
  useMemo(async () => {
    try {
      const res = await axios(configAxios("get", API.getCategory));
      setGetCategory(res.data);
      const resType = await axios(configAxios("get", API.getTypeItem));
      setGetTypeItem(resType.data);
    } catch (error: any) {
      // console.log("err = ", error.request.status);
      // checkToken(error.response.data.status, error.request.status, navigate);
    }
  }, []);
  // console.log(getCategory);

  const [data_Labels, setData_Labels] = useState<any>();
  const [dataList, setDataList] = useState<any>();
  const [colorList, setColorList] = useState<any>();
  useEffect(() => {
    let data_Labels = [],
      data_List = [],
      color_List = [];
    for (let i = 0; i < getCategory.length; i++) {
      data_Labels.push(getCategory[i]?.name);
      data_List.push(getCategory[i]?.items.length);
      color_List.push(randomColor());
      // console.log(getCategory[i]?.items.length);
      // console.log(data_Labels);
    }
    console.log(data_Labels);
    console.log(data_List);
    for (let j = 0; j < data_Labels.length; j++) {
      if (data_Labels[j] === getCategory[j]?.name) {
        data_Labels.splice(j, 1);
        // data_List.splice(j, 1);
      } else {
      }
    }
    // console.log(data_Labels);
    // console.log(data_List);
    // console.log(color_List);
    setColorList(color_List);
    setData_Labels(data_Labels);
    setDataList(data_List);
  }, [getCategory]);

  // console.log(colorList);

  const data = {
    labels: data_Labels,
    datasets: [
      {
        label: "หมวดหมู่ครุภัณฑ์",
        data: dataList,
        backgroundColor: colorList,
      },
    ],
  };

  // console.log(data);

  const options: ChartOptions = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
        align: "start",
        labels: {
          // padding: 15,
          boxHeight: 20,
          boxWidth: 50,
          boxPadding: 10,
          font: {
            size: 16,
            family: "KanitLight",
          },
        },
      },
    },
  };
  const Resp = styled.div`
    @media screen and (min-width: 1px) {
      width: 100%;
    }
    @media screen and (min-width: 200px) {
      width: 100%;
    }
    @media screen and (min-width: 1000px) {
      width: 50%;
    }
    @media screen and (min-width: 1300px) {
      width: 60%;
    }
  `;

  return (
    <>
      <div className="d-flex justify-content-center mt-2">
        <h3>หมวดหมู่ครุภัณฑ์</h3>
      </div>

      <Container>
        <Pie data={data} options={options} />
      </Container>
    </>
  );
}

export default UpTestt;
