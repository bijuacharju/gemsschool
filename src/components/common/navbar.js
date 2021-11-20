import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

// import logoSmall from "../../assets/images/logoSmall.png";

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
        <Link to="/" className="navLinks">
          <Navbar.Brand>GEMS</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="reactLinks">
              <Nav.Link>Home</Nav.Link>
            </Link>

            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <Link to="/aboutwhoweare" className="reactLinks">
                <NavDropdown.Item>Who we are</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/founderMessage" className="reactLinks">
                <NavDropdown.Item>Founder Director's Message</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/visionmissionobjective" className="reactLinks">
                <NavDropdown.Item>
                  Vision Mission &amp; Objective
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/staff" className="reactLinks">
                <NavDropdown.Item>
                  Administrative Staff and Faculty Members
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/history" className="reactLinks">
                <NavDropdown.Item>History</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
                <Link to="/pedagogy" className="reactLinks">
              <NavDropdown.Item>
                  Learning Pedagogy
              </NavDropdown.Item>
                </Link>
            </NavDropdown>

            <NavDropdown title="Information" id="collasible-nav-dropdown">
                <Link to="/information#admissions" className="reactLinks">
              <NavDropdown.Item>
                  Admission
              </NavDropdown.Item>
                </Link>
              <NavDropdown.Divider />
                <Link
                  to="/information#academicInformation"
                  className="reactLinks"
                >
              <NavDropdown.Item>
                  Academic Information
              </NavDropdown.Item>
                </Link>
              <NavDropdown.Divider />
                <Link to="/information#scholarship" className="reactLinks">
              <NavDropdown.Item>
                  Scholarship
              </NavDropdown.Item>
                </Link>
              <NavDropdown.Divider />
                <Link
                  to="/information#generalInformation"
                  className="reactLinks"
                >
              <NavDropdown.Item>
                  General Information
              </NavDropdown.Item>
                </Link>
            </NavDropdown>

            <NavDropdown title="Clubs &amp; ECA" id="collasible-nav-dropdown">
                <Link to="/clubs#thunderbolts" className="reactLinks">
              <NavDropdown.Item>
                  Thunderbolts
              </NavDropdown.Item>
                </Link>
              <NavDropdown.Divider />
                <Link to="/clubs#extraActivities" className="reactLinks">
              <NavDropdown.Item>
                  Extra Curricular Activities
              </NavDropdown.Item>
                </Link>
              <NavDropdown.Divider />
                <Link to="/clubs#amp" className="reactLinks">
              <NavDropdown.Item>
                  ECA &amp; Staff
              </NavDropdown.Item>
                </Link>
            </NavDropdown>

            <Link to="/contact" className="reactLinks">
            <Nav.Link>
                Contact
            </Nav.Link>
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
