import axios from "axios";
import React, { useState } from "react";

function UpTestt() {
  const [name, setName] = useState<any>();
  const [selectedFile, setSelectedFile] = useState<any>();
  console.log("Up Test", selectedFile);
  const submitForm = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("images", selectedFile);

    const data = {
      images: selectedFile,
    };
    console.log(formData);
    console.log(data);

    await axios
      .post("http://localhost:3500/api/multiple_upload", formData)
      .then((res) => {
        alert("File Upload success");

        console.log(res);
      })
      .catch((err) => {
        alert("File Upload Error");
        console.log(err);
      });
  };
  return (
    <>
      <div>Uptest</div>
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
    </>
  );
}

export default UpTestt;
