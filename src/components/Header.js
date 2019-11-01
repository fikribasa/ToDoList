import React from "react";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <div classname="appHeader">
      <NavBar bg="dark" variant="dark">
        <Container>
          <NavBar.Brand style={{ justifyItems: "center" }}>
            ToDo List
          </NavBar.Brand>
        </Container>
      </NavBar>
    </div>
  );
};

export default Header;
