import React from "react";
import { Accordion } from "react-bootstrap";

function VisionMissionObjective() {
  return (
    <div className="container-fluid block" id="visionmissionobjective">
      <div className="container">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Vision</Accordion.Header>
            <Accordion.Body>
              Our vision is to become an international school with faculty
              comprising expatriates, and cater to students from across the
              national boundary to provide a high quality education by focusing
              on their holistic development and intercultural understanding for
              a peaceful and better world.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Mission And Objectives</Accordion.Header>
            <Accordion.Body>
              We provide high quality education of an international standard to
              the students, focusing on their full potential of the body, mind
              and spirit. They are imparted knowledge and skills based on the
              latest curriculum through modern learning and teaching approaches.
              We focus on instilling in students a sense of discipline, moral
              values and character building in addition to developing their
              intellect, always upholding the motto of GEMS 'LEAD KINDLY LIGHT'.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default VisionMissionObjective;
