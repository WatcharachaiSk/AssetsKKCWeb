import { useState } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import styled from "styled-components";

function NavbarTop(props: any) {
  const { clickPage } = props;
  console.log(clickPage);

  const TitleHome = styled.span`
    color: ${(props: any) => (props.color === "home" ? "white" : "dark")};
  `;
    const TitleItem = styled.span`
    color: ${(props: any) => (props.color === "items" ? "white" : "dark")};
  `;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Assets KKC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link color="#000" onClick={(e: any) => {}} href="home">
              <TitleHome color={clickPage}>Home</TitleHome>
            </Nav.Link>
            <Nav.Link onClick={(e: any) => {}} href="items">
              <TitleItem color={clickPage}>Items</TitleItem>
            </Nav.Link>
            <NavDropdown title="Locations" id="basic-nav-dropdown">
              <NavDropdown.Item href="faculty">Faculty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Department</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Building</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Location</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
