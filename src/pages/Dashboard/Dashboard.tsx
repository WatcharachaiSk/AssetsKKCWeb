import { useState } from "react";
import NavbarItem from "../../components/navbar/NavbarItem";
import NavbarTop from "../../components/navbar/NavbarTop";
import { GetKanitFont } from "../../config/fonts";

function Dashboard() {
  const clickPage = "dashboard";
  return (
    <div style={{ ...GetKanitFont("KanitLight") }}>
      <NavbarTop clickPage={clickPage} />
      <NavbarItem clickPage={clickPage} />

      <div className="d-flex justify-content-center mt-5 mb-2">
        <h3>Dashboard</h3>
      </div>
    </div>
  );
}

export default Dashboard;
