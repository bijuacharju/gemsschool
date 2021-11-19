import React from "react";
import { Tabs, Tab, Col, Row, Card } from "react-bootstrap";
import Rajesh from "../../assets/images/rajeshkhadka.jpg";
import Uma from "../../assets/images/umakhadka.jpg";
import Barun from "../../assets/images/barunkhadka.jpg";
import Pujan from "../../assets/images/pujankhadka.jpg";
import Usta from "../../assets/images/utshagautam.jpg";
import Rajeev from "../../assets/images/Rajeev.jpg";
import Arun from "../../assets/images/arun.jpg";
import Sujata from "../../assets/images/SujataShrestha.jpg";
import Gopal from "../../assets/images/gopal.jpg";
import Bharat from "../../assets/images/bharat.jpg";
import RajeevChhetri from "../../assets/images/rajeevchhetri.jpg";
import Shelly from "../../assets/images/shelly.jpg";
import Pramod from "../../assets/images/pramod.jpg";
import RamBasyal from "../../assets/images/basyal.jpg";
import Preetanjali from "../../assets/images/preetanjali.jpg";
import Shristhi from "../../assets/images/ShrishtiShakya.jpg";
import Anju from "../../assets/images/anju.jpg";
import Priti from "../../assets/images/PritiThapa.jpg";
import Erika from "../../assets/images/erika.jpg";
import Dhan from "../../assets/images/dhanmaya.jpg";
import Sichu from "../../assets/images/SichuChitrakar.jpg";
import Dhundi from "../../assets/images/dhundi.jpg";
import Dhruba from "../../assets/images/dhruba.jpg";
import Sulaksha from "../../assets/images/sulaksha.jpg";
import Bhesh from "../../assets/images/Bhesh.jpg";
import Jaya from "../../assets/images/Jaya.gif";


const admin = [
  {
    key: 1,
    name: "Mr. Rajesh Khadka",
    position: "Founder Chairman",
    image: `${Rajesh}`,
  },
  {
    key: 2,
    name: "Mrs. Uma Khadka",
    position: "Founder Director",
    image: `${Uma}`,
  },
  {
    key: 3,
    name: "Mr. Barun Khadka",
    position: "Executive Director",
    image: `${Barun}`,
  },
  {
    key: 4,
    name: "Dr. Pujan Khadka",
    position: "Executive Director",
    image: `${Pujan}`,
  },
  {
    key: 5,
    name: "Mrs. Utsa Khadka Gautam",
    position: "Executive Officer",
    image: `${Usta}`,
  },
  {
    key: 6,
    name: "Mr. Rajeev Mainali",
    position: "Admin Head",
    image: `${Rajeev}`,
  },
  {
    key: 7,
    name: "Mr. Arun Poudel",
    position: "Finance Head",
    image: `${Arun}`,
  },
  {
    key: 8,
    name: "Ms. Sujata Shrestha",
    position: "HR Officer",
    image: `${Sujata}`,
  },
  {
    key: 9,
    name: "Mr. Gopal Koirala",
    position: "Food and Beverage Manager",
    image: `${Gopal}`,
  },
  {
    key: 10,
    name: "Mr. Bharat Koirala",
    position: "Transportation & Logistics Supervisor",
    image: `${Bharat}`,
  },
];

const faculty = [
  {
    key: 1,
    name: "Dr. Rajeev Chhetri (Deokota)",
    position: "Academic Director",
    image: `${RajeevChhetri}`,
  },
  {
    key: 2,
    name: "Ms. Shelly Koirala",
    position: "Vice-Principal",
    image: `${Shelly}`,
  },
  {
    key: 3,
    name: "Mr. Pramod Pradhan",
    position: "Middle School Coordinator",
    image: `${Pramod}`,
  },
  {
    key: 4,
    name: "Mr. Ram Prasad Basyal",
    position: "ECA Coordinator",
    image: `${RamBasyal}`,
  },
  {
    key: 5,
    name: "Ms. Preetanjali Bhattarai",
    position: "Grade VI Coordinator",
    image: `${Preetanjali}`,
  },
  {
    key: 6,
    name: "Ms. Shrishti Shakya",
    position: "Grade V Coordinator",
    image: `${Shristhi}`,
  },
  {
    key: 7,
    name: "Ms. Anju Pradhan Shrestha",
    position: "IPC Head",
    image: `${Anju}`,
  },
  {
    key: 8,
    name: "Ms. Priti Thapa Shrestha",
    position: "IPC Curriculum Leader, Grade IV",
    image: `${Priti}`,
  },
  {
    key: 9,
    name: "Ms. Erika Shakya",
    position: "IPC Curriculum Leader, Grade III",
    image: `${Erika}`,
  },
  {
    key: 10,
    name: "Ms. Dhan Maya Pun",
    position: "IPC Curriculum Leader, Grade II",
    image: `${Dhan}`,
  },
  {
    key: 11,
    name: "Ms. Sichu Chitrakar",
    position: "IPC Curriculum Leader, Grade I",
    image: `${Sichu}`,
  },
  {
    key: 12,
    name: "Dr. Dhundi Raj Pahadi",
    position: "Department Head - Nepali",
    image: `${Dhundi}`,
  },
  {
    key: 13,
    name: "Mr. Dhruba Narayan Chaudhary",
    position: "Department Head - Mathematics",
    image: `${Dhruba}`,
  },
  {
    key: 14,
    name: "Mr. Sulaksha Purna Shrestha",
    position: "Department Head - Science",
    image: `${Sulaksha}`,
  },
  {
    key: 15,
    name: "Mr. Bhesh Raj Niroula",
    position: "Department Head - Social Studies",
    image: `${Bhesh}`,
  },
  {
    key: 16,
    name: "Mr. Jaya Narayan Bhusal",
    position: "Department Head - English",
    image: `${Jaya}`,
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
                  <Col xs={12} md={3}>
                    <Card className="facilitiesIcon personCard" key={item.key}>
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
                  <Col xs={12} md={3}>
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
