// import axios from "axios";
// import React, { useState } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function UpTestt() {
  // const [name, setName] = useState<any>();
  // const [selectedFile, setSelectedFile] = useState<any>();
  // // console.log("Up Test", selectedFile);
  // const submitForm = async (event: any) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("images", selectedFile);

  //   const data = {
  //     images: selectedFile,
  //   };
  //   // console.log(formData);
  //   // console.log(data);

  //   await axios
  //     .post("http://localhost:3500/api/multiple_upload", formData)
  //     .then((res) => {
  //       alert("File Upload success");

  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       alert("File Upload Error");
  //       console.log(err);
  //     });
  // };

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Test",
        data: [12, 19, 3, 5, 2, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(255, 206, 86, 0.9)",
          "rgba(75, 192, 192, 0.9)",
          "rgba(153, 102, 255, 0.9)",
          "rgba(255, 159, 64, 0.9)",
        ],
        borderColor: [
          "rgba(0, 0, 0, 0.5)",
          "rgba(0, 0, 0, 0.5)",
          "rgba(0, 0, 0, 0.5)",
          "rgba(0, 0, 0, 0.5)",
          "rgba(0, 0, 0, 0.5)",
          "rgba(0, 0, 0, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      {/* <div>
        Uptest
        <form>
          <input
            type="text"
            // value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="file"
            // value={selectedFile}
            accept="image/png,image/jpeg,image/jpg"
            onChange={(e: any) => setSelectedFile(e.target.files[0])}
          />
          <button onClick={submitForm}>Submit</button>
        </form>
      </div> */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "#dfdf",
        }}
      >
        <div
          style={{
            width: "25%",
            height: "25%",
          }}
        >
          <Pie data={data} />
        </div>
      </div>
    </>
  );
}

export default UpTestt;
