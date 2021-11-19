import React from "react";
import { Tabs, Tab, Col, Row, Card } from "react-bootstrap";
import { Rajesh } from "../../assets/images/rajesh.jpg";

const admin = [
  {
    key: 1,
    name: "Mr. Rajesh Khadka",
    position: "Founder Chairman",
    image: { Rajesh },
  },
  {
    key: 2,
    name: "Mrs. Uma Khadka",
    position: "Founder Director",
    image: "",
  },
  {
    key: 3,
    name: "Founder Director",
    position: "Executive Director",
    image: "",
  },
  {
    key: 4,
    name: "Dr. Pujan Khadka",
    position: "Executive Director",
    image: "",
  },
  {
    key: 5,
    name: "Mrs. Utsa Khadka Gautam",
    position: "Executive Officer",
    image: "",
  },
  {
    key: 6,
    name: "Mr. Rajeev Mainali",
    position: "Admin Head",
    image: "",
  },
  {
    key: 7,
    name: "Mr. Arun Poudel",
    position: "Finance Head",
    image: "",
  },
  {
    key: 8,
    name: "Ms. Sujata Shrestha",
    position: "HR Officer",
    image: "",
  },
  {
    key: 9,
    name: "Mr. Gopal Koirala",
    position: "Food and Beverage Manager",
    image: "",
  },
  {
    key: 10,
    name: "Mr. Bharat Koirala",
    position: "Transportation & Logistics Supervisor",
    image: "",
  },
];

const faculty = [
  {
    key: 1,
    name: "Dr. Rajeev Chhetri (Deokota)",
    position: "Academic Director",
    image: "",
  },
  {
    key: 2,
    name: "Ms. Shelly Koirala",
    position: "Vice-Principal",
    image: "",
  },
  {
    key: 3,
    name: "Mr. Pramod Pradhan",
    position: "Middle School Coordinator",
    image: "",
  },
  {
    key: 4,
    name: "Mr. Ram Prasad Basyal",
    position: "ECA Coordinator",
    image: "",
  },
  {
    key: 5,
    name: "Ms. Preetanjali Bhattarai",
    position: "Grade VI Coordinator",
    image: "",
  },
  {
    key: 6,
    name: "Ms. Shrishti Shakya",
    position: "Grade V Coordinator",
    image: "",
  },
  {
    key: 7,
    name: "Ms. Anju Pradhan Shrestha",
    position: "IPC Head",
    image: "",
  },
  {
    key: 8,
    name: "Ms. Priti Thapa Shrestha",
    position: "IPC Curriculum Leader, Grade IV",
    image: "",
  },
  {
    key: 9,
    name: "Ms. Erika Shakya",
    position: "IPC Curriculum Leader, Grade III",
    image: "",
  },
  {
    key: 10,
    name: "Ms. Dhan Maya Pun",
    position: "IPC Curriculum Leader, Grade II",
    image: "",
  },
  {
    key: 11,
    name: "Ms. Sichu Chitrakar",
    position: "IPC Curriculum Leader, Grade I",
    image: "",
  },
  {
    key: 12,
    name: "Dr. Dhundi Raj Pahadi",
    position: "Department Head - Nepali",
    image: "",
  },
  {
    key: 13,
    name: "Mr. Dhruba Narayan Chaudhary",
    position: "Department Head - Mathematics",
    image: "",
  },
  {
    key: 14,
    name: "Mr. Sulaksha Purna Shrestha",
    position: "Department Head - Science",
    image: "",
  },
  {
    key: 15,
    name: "Mr. Bhesh Raj Niroula",
    position: "Department Head - Social Studies",
    image: "",
  },
  {
    key: 16,
    name: "Mr. Jaya Narayan Bhusal",
    position: "Department Head - English",
    image: "",
  },
];

function Staff() {
  return (
    <div className="container-fluid block" id="staff">
      <div className="container">
        <Tabs defaultActiveKey="admin" transition={false} className="mb-4">
          <Tab eventKey="admin" title="Admin Staff">
            {/* <div className="contentHolder"> */}
            <Row>
              {admin.map((item) => {
                return (
                  <Col xs={12} md={4}>
                    <Card className="facilitiesIcon personCard">
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.position}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            {/* </div> */}
          </Tab>
          <Tab eventKey="faculty" title="Faculty">
            <Row>
              {faculty.map((item) => {
                return (
                  <Col xs={12} md={4}>
                    <Card className="facilitiesIcon personCard">
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.position}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Staff;
