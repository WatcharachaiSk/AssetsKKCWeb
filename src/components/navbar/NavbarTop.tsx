import { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import styled from "styled-components";
import colors from "../../config/colors";
import { useNavigate } from "react-router-dom";
import { sweet_confirm } from "../sweetalert2/sweet";

function NavbarTop(props: any) {
  const navigate = useNavigate();

  const navigatePage = (page: string, idItem?: any) => {
    navigate(page);
  };
  const [getUserAdmin, setGetUserAdmin] = useState<boolean>(false);
  // console.log("getUserAdmin = ", getUserAdmin);
  const [getProfile, setGetProfile] = useState<any>({});
  const [isLogOut, setisLogOut] = useState<boolean>(false);

  useEffect(() => {
    let userAdmin: any = localStorage.getItem("UserAdmin");
    if (userAdmin == "true") {
      setGetUserAdmin(true);
    } else {
      setGetUserAdmin(false);
    }
    let profile: any = localStorage.getItem("Profile");
    profile = JSON.parse(profile);
    setGetProfile(profile);
  }, []);

  useEffect(() => {
    if (isLogOut) {
      navigate("/login");
      localStorage.removeItem("Token");
      localStorage.removeItem("Profile");
      localStorage.removeItem("UserAdmin");
    }
  }, [isLogOut]);

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
    color: ${(props: any) =>
      props.color === "admin" ? colors.goldFC : "dark"};
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
                {getUserAdmin && (
                  <NavDropdown.Item
                    style={styles.fontNavLink}
                    onClick={() => {
                      navigatePage("/faculty");
                    }}
                  >
                    Faculty
                  </NavDropdown.Item>
                )}

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

              {/* <Form className="d-flex" style={{}}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-1"
                  aria-label="Search"
                />
                <Button variant="btn btn-outline-secondary">Search</Button>
              </Form> */}
            </Nav>

            <NavDropdown
              style={styles.fontNavLink}
              title={
                <TitleAdmin color={clickPage}>
                  {getProfile?.firstname} {"\n"} {getUserAdmin ? "Admin" : ""}
                </TitleAdmin>
              }
            >
              <NavDropdown.Item
                style={styles.fontNavLink}
                onClick={() => {
                  navigatePage("/profile");
                }}
              >
                Profile
              </NavDropdown.Item>
              {/*  */}
              {getUserAdmin && (
                <NavDropdown.Item
                  style={styles.fontNavLink}
                  onClick={() => {
                    navigatePage("/admin");
                  }}
                >
                  User
                </NavDropdown.Item>
              )}
              <NavDropdown.Item
                style={styles.fontNavLink}
                onClick={async () => {
                  const logOut = await sweet_confirm(
                    "warning",
                    "ออกจากระบบ",
                    "คุณต้องการออกจากระบบใช่หรือไม่",
                    "ใช่",
                    "ไม่",
                    undefined,
                    undefined,
                    "ออกจากระบบเสร็จสิ้น",
                    "ระบบกำลังนำทาง",
                    setisLogOut
                  );
                }}
              >
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
