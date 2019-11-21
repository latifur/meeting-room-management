import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Link className="navbar-brand" to="/">
          Logo
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/all-rooms">
              All Rooms
            </Link>
            <Link className="nav-link" to="/Available Rooms">
              Available Rooms
            </Link>
            <Link className="nav-link" to="/my-listings">
              My Bokkings
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
