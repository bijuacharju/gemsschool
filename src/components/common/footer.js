import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const items = [
  {
    key: 1,
    title: "Contact Us",
    link1: "#",
    linkName1: "Gems School",
    link2: "#",
    linkName2: "Dhapakhel, Lalitpur",
    link3: "#",
    linkName3: "P.O. Box: 1794 Kathmandu, Nepal",
    link4: "#",
    linkName4: "977 01 5275111",
    link5: "#",
    linkName5: "977 01 5275121",
    link6: "#",
    linkName6: "info@gems.edu.np",
  },
  {
    key: 2,
    title: "Learning",
    link1: "#",
    linkName1: "E-Library",
    link2: "#",
    linkName2: "Past Question Papers",
    link3: "#",
    linkName3: "Routine",
    link4: "#",
    linkName4: "Online Classes Links",
    link5: "#",
    linkName5: "Other Service",
    link6: "#",
    linkName6: "Other Service",
  },
  {
    key: 3,
    title: "Upcomming Events",
    link1: "#",
    linkName1: "New Year Festival",
    link2: "#",
    linkName2: "First Terminal Examination",
    link3: "#",
    linkName3: "Sports Week",
    link4: "#",
    linkName4: "Second Terminal Examination",
    link5: "#",
    linkName5: "Holi Festival",
    link6: "#",
    linkName6: "Final Examination",
  },
  {
    key: 4,
    title: "Useful Sites",
    link1: "#",
    linkName1: "Wikipedia",
    link2: "#",
    linkName2: "Hamro Patro",
    link3: "#",
    linkName3: "eKantipur",
    link4: "#",
    linkName4: "w3school",
    link5: "#",
    linkName5: "Google Scholar",
    link6: "#",
    linkName6: "info@gems.edu.np",
  },
];

function Footer() {
  return (
    <div className="container-fluid footerContainer">
      <div className="container">
        <Row>
          {items.map((item) => {
            return (
              <Col xs={12} md={3} key={item.key}>
                <div className="content">
                  <h4>{item.title}</h4>
                  <p>
                    <Link to={item.link1} className="reactLinks">
                      {item.linkName1}
                    </Link>
                  </p>
                  <p>
                    <Link to={item.link2} className="reactLinks">
                      {item.linkName2}
                    </Link>
                  </p>
                  <p>
                    <Link to={item.link3} className="reactLinks">
                      {item.linkName3}
                    </Link>
                  </p>
                  <p>
                    <Link to={item.link4} className="reactLinks">
                      {item.linkName4}
                    </Link>
                  </p>
                  <p>
                    <Link to={item.link5} className="reactLinks">
                      {item.linkName5}
                    </Link>
                  </p>
                  <p>
                    <Link to={item.link6} className="reactLinks">
                      {item.linkName6}
                    </Link>
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="copyright">
          <p>
            GEMS SCHOOL &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <Row className="social">
          <Col xs={6} md={6} className="socialLeft">
            <Link to="/gemsschool/" className="reactLinks">
              <h4>GEMS</h4>
            </Link>
          </Col>
          <Col xs={6} md={6} className="socialMedia">
            <Link to="/gemsschool/" className="reactLinks">
              <FaFacebook />
            </Link>
            <Link to="/gemsschool/" className="reactLinks">
              <FaYoutube />
            </Link>
            <Link to="/gemsschool/" className="reactLinks">
              <FaLinkedinIn />
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
