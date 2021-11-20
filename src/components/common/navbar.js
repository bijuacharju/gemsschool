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
        <Navbar.Brand>
          <Link to="/" className="navLinks">
            GEMS
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="reactLinks">Home</Link>
            </Nav.Link>

            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/aboutwhoweare" className="reactLinks">Who we are</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/founderMessage" className="reactLinks">Founder Director's Message</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/visionmissionobjective" className="reactLinks">
                  Vision Mission &amp; Objective
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/staff" className="reactLinks">
                  Administrative Staff and Faculty Members
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/history" className="reactLinks">History</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/pedagogy" className="reactLinks">Learning Pedagogy</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Information" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/information#admissions" className="reactLinks">
                  Admission
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/information#academicInformation" className="reactLinks">
                  Academic Information
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/information#scholarship" className="reactLinks">Scholarship</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/information#generalInformation" className="reactLinks">
                  General Information
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Clubs &amp; ECA" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/clubs#thunderbolts" className="reactLinks">Thunderbolts</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/clubs#extraActivities" className="reactLinks">
                  Extra Curricular Activities
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/clubs#amp" className="reactLinks">ECA &amp; Staff</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>
              <Link to="/contact" className="reactLinks">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
