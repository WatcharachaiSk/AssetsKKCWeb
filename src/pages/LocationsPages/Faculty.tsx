import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  Form,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import NavbarTop from "../../components/navbar/NavbarTop";

function Faculty() {
  const [clickPage, setClickPage] = useState<string>("setting");

  return (
    <>
      <NavbarTop clickPage={clickPage} />
      <div>Faculty</div>
    </>
  );
}

export default Faculty;
