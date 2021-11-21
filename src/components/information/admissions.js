import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { FaPencilAlt, FaDownload } from "react-icons/fa";
import Student from "../../assets/images/student.jpg";

function Admissions() {
  return (
    <div
      className="containerFluid block bgGray"
      style={{
        borderTop: "1px solid #d9d9d9",
      }}
      id="admissions"
    >
      <div className="container">
        <div className="titleHolder">
          <h2>Admission</h2>
        </div>
        <div className="contentHolder admissions">
          <Row>
            <Col xs={12} md={6}>
              <Card>
                <Card.Img src={Student} />
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <div className="subTitle">
                <h4>Admission for Intake 2078 (2021)</h4>
                <h6>admissions@gems.edu.np</h6>
                <h6>980-1973-925 / 5275-111</h6>
              </div>
              <div className="contentHolder">
                <p style={{ textAlign: "left" }}>
                  GEMS School admits students of any race, color, religion,
                  national and ethnic origin or other legally protected status
                  to all the rights, privileges, programs and activities
                  generally accorded or made available to students at the
                  school. It does not discriminate on the basis of race, color,
                  religion, national and ethnic origin or other legally
                  protected status in its hiring or in the administration of its
                  educational policies and programs, admissions policies,
                  financial aid programs or other school-administered programs.
                </p>
                <Button href="/" className="button">
                  <FaPencilAlt />
                  Online Application
                </Button>{" "}
                <Button href="/" variant="outline-primary" id="outline">
                  <FaDownload />
                  Download Application
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
