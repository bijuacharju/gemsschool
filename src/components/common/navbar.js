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
          <Link to="/gemsschool" className="navLinks">
            GEMS
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/gemsschool" className="reactLinks">
                Home
              </Link>
            </Nav.Link>

            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/gemsschool/aboutwhoweare" className="reactLinks">
                  Who we are
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/gemsschool/founderMessage" className="reactLinks">
                  Founder Director's Message
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  to="/gemsschool/visionmissionobjective"
                  className="reactLinks"
                >
                  Vision Mission &amp; Objective
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/gemsschool/staff" className="reactLinks">
                  Administrative Staff and Faculty Members
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/gemsschool/history" className="reactLinks">
                  History
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/gemsschool/pedagogy" className="reactLinks">
                {/* <Link to="/gemsschool/pedagogy" className="reactLinks"> */}
                  Learning Pedagogy
                {/* </Link> */}
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Information" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  to="/gemsschool/information#admissions"
                  className="reactLinks"
                >
                  Admission
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  to="/gemsschool/information#academicInformation"
                  className="reactLinks"
                >
                  Academic Information
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  to="/gemsschool/information#scholarship"
                  className="reactLinks"
                >
                  Scholarship
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  to="/gemsschool/information#generalInformation"
                  className="reactLinks"
                >
                  General Information
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Clubs &amp; ECA" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  to="/gemsschool/clubs#thunderbolts"
                  className="reactLinks"
                >
                  Thunderbolts
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  to="/gemsschool/clubs#extraActivities"
                  className="reactLinks"
                >
                  Extra Curricular Activities
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/gemsschool/clubs#amp" className="reactLinks">
                  ECA &amp; Staff
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>
              <Link to="/gemsschool/contact" className="reactLinks">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
