import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaHome, FaFirstAid, FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";

const items = [
  {
    key: 1,
    link: "/gemsschool/facilitiesDetails#hostel",
    icon: <FaHome />,
    title: "Hostel",
    description:
      "Students with minor ailments and injuries are treated in the school infirmary by qualified staff nurses. Qualified and ...",
  },
  {
    key: 2,
    link: "/gemsschool/facilitiesDetails#health",
    icon: <FaFirstAid />,
    title: "Health Care",
    description:
      "Students with minor ailments and injuries are treated in the school infirmary by qualified staff nurses. Qualified and ...",
  },
  {
    key: 3,
    link: "/gemsschool/facilitiesDetails#bus",
    icon: <FaBus />,
    title: "School Bus",
    description:
      "Students with minor ailments and injuries are treated in the school infirmary by qualified staff nurses. Qualified and ...",
  },
];

function Facilities() {
  return (
    <div className="container-fliud block bgGray">
      <div className="container">
        <div className="titleHolder">
          <h2>Facilities</h2>
        </div>
        <div className="contentHolder">
          <Row>
            {items.map((item) => {
              return (
                <Col xs={12} md={4}>
                  <Link to={item.link}>
                    <Card>
                      <Card.Body className="facilitiesIcon" key={item.key}>
                        {item.icon}
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
