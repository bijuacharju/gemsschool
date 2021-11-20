import React from "react";
import {Row, Col, Card} from "react-bootstrap";
import ThunderboltsFull from "../../assets/images/thunderbolts_full.webp"

function Thunderbolts() {
  return (
    <div className="container-fluid block">
      <div className="container">
        <div className="titleHolder">
          <h2>Thunderbolts</h2>
        </div>
        <div className="contentHolder">
        <Row>
            <Col xs={12} md={4}>
              <Card style={{border:'none'}}>
                <Card.Img src={ThunderboltsFull} />
              </Card>
            </Col>
            <Col xs={12} md={8}>
              {/* <div className="subTitle">
                <h4>Admission for Intake 2078 (2021)</h4>
              </div> */}
              <div className="contents">
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
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Thunderbolts;
