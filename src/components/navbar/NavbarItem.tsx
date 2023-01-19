import { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../../config/colors";
// import { FiSettings } from "react-icons/fi";

function NavbarItem(props: any) {
  const navigate = useNavigate();
  const { clickPage } = props;
  const [getUserAdmin, setGetUserAdmin] = useState<boolean>(false);
  const [getProfile, setGetProfile] = useState<any>({});
  const navigatePage = (page: string, idItem?: any) => {
    navigate(page);
  };
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
  const TitleDashboard = styled.span`
    color: ${(props: any) =>
      props.color === "dashboard" ? colors.goldFC : colors.white};
  `;
  const TitleHome = styled.span`
    color: ${(props: any) =>
      props.color === "home" ? colors.goldFC : colors.white};
  `;
  const TitleItem = styled.span`
    color: ${(props: any) =>
      props.color === "items" ? colors.goldFC : colors.white};
  `;
  const TitleSetting = styled.span`
    color: ${(props: any) =>
      props.color === "setting" ? colors.goldFC : colors.white};
  `;
  const TitleDownload = styled.span`
    color: ${(props: any) =>
      props.color === "download" ? colors.goldFC : colors.white};
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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/*  */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              onClick={() => {
                navigatePage("/dashboard");
              }}
              style={styles.fontNavLink}
            >
              <TitleDashboard color={clickPage}>Dashboard</TitleDashboard>
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigatePage("/home");
              }}
              style={styles.fontNavLink}
            >
              <TitleHome color={clickPage}>ครุภัณฑ์หมวดหมู่/ชนิด</TitleHome>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigatePage("/items");
              }}
              style={styles.fontNavLink}
            >
              <TitleItem color={clickPage}>รายการครุภัณฑ์ทั้งหมด</TitleItem>
            </Nav.Link>
           
          </Nav>
          <Nav>
          <NavDropdown
              style={styles.fontNavDropdown}
              title={<TitleSetting color={clickPage}>ตั้งค่า</TitleSetting>}
              id="navbarScrollingDropdown"
            >
              {getUserAdmin && (
                <NavDropdown.Item
                  style={styles.fontNavLink}
                  onClick={() => {
                    navigatePage("/faculty");
                  }}
                >
                  คณะ
                </NavDropdown.Item>
              )}

              <NavDropdown.Item
                style={styles.fontNavLink}
                onClick={() => {
                  navigatePage("/department");
                }}
              >
                สาขาวิชา
              </NavDropdown.Item>
              <NavDropdown.Item
                style={styles.fontNavLink}
                onClick={() => {
                  navigatePage("/building");
                }}
              >
                อาคาร
              </NavDropdown.Item>
              <NavDropdown.Item
                style={styles.fontNavLink}
                onClick={() => {
                  navigatePage("/location");
                }}
              >
                สถานที่
              </NavDropdown.Item>
              <NavDropdown.Item
                style={styles.fontNavLink}
                onClick={() => {
                  navigatePage("/category");
                }}
              >
                หมวดหมู่ครุภัณฑ์
              </NavDropdown.Item>
              <NavDropdown.Item
                style={styles.fontNavLink}
                onClick={() => {
                  navigatePage("/type_item");
                }}
              >
                ชนิดครุภัณฑ์
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              onClick={() => {
                navigatePage("/application_download");
              }}
              style={styles.fontNavLink}
            >
              <TitleDownload color={clickPage}>
                ดาวน์โหลดแอปพลิเคชัน
              </TitleDownload>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarItem;
