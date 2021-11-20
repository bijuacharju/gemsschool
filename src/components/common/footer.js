import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaLinkedinIn } from "react-icons/fa";

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
    linkName6: "1618 01 5275111",
    link7: "#",
    linkName7: "info@gems.edu.np",
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
                    <a href={item.link1}>{item.linkName1}</a>
                  </p>
                  <p>
                    <a href={item.link2}>{item.linkName2}</a>
                  </p>
                  <p>
                    <a href={item.link3}>{item.linkName3}</a>
                  </p>
                  <p>
                    <a href={item.link4}>{item.linkName4}</a>
                  </p>
                  <p>
                    <a href={item.link5}>{item.linkName5}</a>
                  </p>
                  <p>
                    <a href={item.link6}>{item.linkName6}</a>
                  </p>
                  <p>
                    <a href={item.link7}>{item.linkName7}</a>
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
            <a href="/">
              <h4>GEMS</h4>
            </a>
          </Col>
          <Col xs={6} md={6} className="socialMedia">
            <a href="/"><FaFacebook /></a>
            <a href="/"><FaYoutube /></a>
            <a href="/"><FaLinkedinIn /></a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
