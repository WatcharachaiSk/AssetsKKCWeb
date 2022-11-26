// import React from 'react'

import NavbarTop from "../../../components/navbar/NavbarTop";

function NewUser() {
  return (
    <>
      <NavbarTop clickPage={"admin"} />
      <div className="d-flex justify-content-center mt-4 mb-2">
        <h3>สร้างผู้ใช้งาน (สำหรับผู้ดูแลระบบ)</h3>
      </div>
    </>
  );
}

export default NewUser;
