import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const staff = [
  {
    key: 1,
    image: "",
    name: "Ganesh Kumar Gurung",
    position: "Music Instructor",
  },
  {
    key: 2,
    image: "",
    name: "Roshan Shakya",
    position: "Music Instructor",
  },
  {
    key: 3,
    image: "",
    name: "Sunita Singh",
    position: "Music Instructor",
  },
  {
    key: 4,
    image: "",
    name: "Bishal Thapa Sinjali",
    position: "Wushu Instructor",
  },
  {
    key: 5,
    image: "",
    name: "Ram Kumar Aryal",
    position: "Music Instructor",
  },
  {
    key: 6,
    image: "",
    name: "Ashish Rai",
    position: "Music Instructor",
  },
  {
    key: 7,
    image: "",
    name: "Prashant Tamang",
    position: "Dance Instructor",
  },
  {
    key: 8,
    image: "",
    name: "Santosh Bhujel",
    position: "Dance Instructor",
  },
  {
    key: 9,
    image: "",
    name: "Kabi Ram Gharti Magar",
    position: "Judo Instructor",
  },
  {
    key: 10,
    image: "",
    name: "Manika Ranjit",
    position: "Gymnastic Instructor",
  },
  {
    key: 11,
    image: "",
    name: "Bishnu Prasad Bata",
    position: "Gymnastic Instructor",
  },
  {
    key: 12,
    image: "",
    name: "Mani Raj Bista",
    position: "Tae-Kwando Instructor",
  },
  {
    key: 13,
    image: "",
    name: "Reeta Manandhar",
    position: "Fabric Instructor",
  },
  {
    key: 14,
    image: "",
    name: "Anil Subba",
    position: "Fine Art Instructor",
  },
  {
    key: 15,
    image: "",
    name: "Sanjay Byanjankar",
    position: "Games and Sports Teacher",
  },
  {
    key: 16,
    image: "",
    name: "Gopal Krishna Tamrakar",
    position: "Scout Teacher",
  },
  {
    key: 17,
    image: "",
    name: "Shanti Kumari Maharjan",
    position: "Scout Teacher",
  },
  {
    key: 18,
    image: "",
    name: "Urjan Shrestha",
    position: "Football Instructor",
  },
  {
    key: 19,
    image: "",
    name: "Mohan Das Basukala",
    position: "Table Tennis Instructor",
  },
  {
    key: 20,
    image: "",
    name: "Sameer Nemkul",
    position: "Football Instructor",
  },
  {
    key: 21,
    image: "",
    name: "Manzoor Alam Khan",
    position: "Criket Instructor",
  },
  {
    key: 22,
    image: "",
    name: "Jyoti Limbu",
    position: "Dance Instructor",
  },
];

function Amp() {
  return (
    <div className="container-fluid" id="staff">
      <div className="container">
        <div className="titleHolder">
          <h2>ECA and Staff</h2>
        </div>
        <div className="contentHolder">
          <Row>
            {staff.map((item) => {
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
        </div>
      </div>
    </div>
  );
}

export default Amp;
