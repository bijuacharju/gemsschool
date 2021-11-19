import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoSmall from "../../assets/images/logoSmall.png";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      className="navbarContainer"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navLinks">
            GEMS
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
                Home
            </Nav.Link>
            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/aboutwhoweare">Who we are</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/founderMessage">
                Founder Director's Message
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/visionmissionobjective">
                Vision Mission &amp; Objective
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/staff">
                Administrative Staff and Faculty Members
              </NavDropdown.Item>
              
              <NavDropdown.Divider /><NavDropdown.Item href="#history">
                History
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#pedagogy">
                Learning Pedagogy
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Information" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Admission</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Academic Information
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Scholarship
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                General Information
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact">
                Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
