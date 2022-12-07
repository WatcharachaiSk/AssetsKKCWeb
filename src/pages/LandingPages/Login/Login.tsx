// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GetKanitFont } from "../../../config/fonts";
import FormInput from "./components/FormInput";
import NavbarTopLogin from "../../../components/navbar/NavbarTopLogin";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function Login() {
  const navigate = useNavigate();

  const setlocalStorage = async (
    token: string,
    user: string,
    profile?: object
  ) => {
    localStorage.setItem("Token", token);
    localStorage.setItem("UserAdmin", user);
    localStorage.setItem("Profile", JSON.stringify(profile));
  };

  const Fullscreen = styled.div`
    /* display: flex; */
    /* background: #fdfd no-repeat; */
    /* -webkit-background-size: cover; */
    /* background-size: cover; */
    /* width: auto; */
    /* height: 50vh; */
  `;
  return (
    <>
      <NavbarTopLogin />
      <Container style={{ ...GetKanitFont("KanitLight") }}>
        <Row>
          <h2 className="mt-3">Asset Management System RMUTI KKC</h2>
          <span>
            ระบบจัดการครุภัณฑ์สำหรับมหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
            วิทยาเขตขอนแก่น.
          </span>
          <Col sm={8} style={{ backgroundColor: "#fcfcfc" }}>
            <Fullscreen>
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://uploads-ssl.webflow.com/60edc0a8835d5b38bf11f03f/61cf04e57e4e9122241998dc_Why-business-needs-an-Asset-Management-System.png"
                    alt="First slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Fullscreen>
          </Col>
          <Col sm={4}>
            <FormInput navigate={navigate} setlocalStorage={setlocalStorage} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
