import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

export const Heading = () => {
  return (
  
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand href="/">My Team</NavbarBrand>
          <Nav>
            <NavItem>
              <Link to="/add" className="btn btn-primary">
                Add User
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

  );
};
