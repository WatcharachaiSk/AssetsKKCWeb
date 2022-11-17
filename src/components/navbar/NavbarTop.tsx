import { useState } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  Button,
  FormGroup,
  FormControl,
  Collapse,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import styled from "styled-components";
import colors from "../../config/colors";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function NavbarTop(props: any) {
  const navigate = useNavigate();

  const navigatePage = (page: string, idItem?: any) => {
    navigate(page);
  };

  const { clickPage } = props;
  // console.log(clickPage);

  const TitleHome = styled.span`
    color: ${(props: any) => (props.color === "home" ? colors.black : "dark")};
  `;
  const TitleItem = styled.span`
    color: ${(props: any) => (props.color === "items" ? colors.black : "dark")};
  `;
  const TitleSetting = styled.span`
    color: ${(props: any) =>
      props.color === "setting" ? colors.black : "dark"};
  `;
  const TitleAdmin = styled.span`
    color: ${(props: any) => (props.color === "admin" ? colors.goldFC : "dark")};
  `;
  const styles = {
    fontNavBrand: {
      fontSize: 35,
    },
    fontNavLink: {
      fontSize: 20,
    },
    fontNavDropdown: {
      fontSize: 22,
      marginLeft: 15,
      marginRight: 15,
    },
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid style={{ marginLeft: 15, marginRight: 100 }}>
          <Navbar.Brand style={styles.fontNavBrand}>RMUTI kkc</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                onClick={() => {
                  navigatePage("/home");
                }}
                style={styles.fontNavLink}
              >
                <TitleHome color={clickPage}>ครุภัณฑ์</TitleHome>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigatePage("/items");
                }}
                style={styles.fontNavLink}
              >
                <TitleItem color={clickPage}>รายการครุภัณฑ์ทั้งหมด</TitleItem>
              </Nav.Link>
              <NavDropdown
                style={styles.fontNavDropdown}
                title={<TitleSetting color={clickPage}>ตั้งค่า</TitleSetting>}
                id="navbarScrollingDropdown"
                // style={{ marginRight: 150 }}
              >
                <NavDropdown.Item
                  style={styles.fontNavLink}
                  onClick={() => {
                    navigatePage("/faculty");
                  }}
                >
                  Faculty
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={styles.fontNavLink}
                  onClick={() => {
                    navigatePage("/department");
                  }}
                >
                  Department
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={styles.fontNavLink}
                  onClick={() => {
                    navigatePage("/building");
                  }}
                >
                  Building
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={styles.fontNavLink}
                  onClick={() => {
                    navigatePage("/location");
                  }}
                >
                  Location
                </NavDropdown.Item>
              </NavDropdown>

              <Form className="d-flex" style={{}}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-1"
                  aria-label="Search"
                />
                <Button variant="btn btn-outline-secondary">Search</Button>
              </Form>
            </Nav>

            <NavDropdown
              style={styles.fontNavLink}
              title={<TitleAdmin color={clickPage}>Admin</TitleAdmin>}
            >
              <NavDropdown.Item
                style={styles.fontNavLink}
                onClick={() => {
                  navigatePage("/profile");
                }}
              >
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                style={styles.fontNavLink}
                onClick={() => {
                  navigatePage("/users");
                }}
              >
                User
              </NavDropdown.Item>
              <NavDropdown.Item style={styles.fontNavLink} href="#action4">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;
/*

 <Row style={{ padding: 30 }}>
          <Col
            style={{
              alignItems: "center",
              justifyItems: "center",

              // backgroundColor: "#fdfd",
            }}
          >
            <span style={{ fontSize: 25 }}>RMUTI kkc</span>
          </Col>
          <Col style={{}}>
            <div
              style={{
                backgroundColor: colors.black,
                height: 60,
                borderRadius: 30,
              }}
            >
              <InputGroup className="mb-3" style={{marginLeft:20, width: "95%"}}>
                <Form.Control
                  style={{ marginTop: 10, }}
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <BsSearch
                  size={25}
                  style={{ marginLeft: 15, marginTop: 15 ,marginRight:15}}
                  color={colors.white}
                />
              </InputGroup>
            </div>
          </Col>
          <Col style={{ textAlign: "center" }}>3 of 3</Col>
        </Row>
*/
