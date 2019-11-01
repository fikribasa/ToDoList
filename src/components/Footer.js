import React from "react";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
const Footer = () => {
  return (
    <div className="fixed-bottom">
      <NavBar bg="dark" variant="dark">
        <Container>
          <NavBar.Brand style={{ justifyItems: "center" }}>
            Simple ToDo List
          </NavBar.Brand>
        </Container>
      </NavBar>
    </div>
  );
};

export default Footer;
