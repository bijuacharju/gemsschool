import React from "react";
import { Accordion } from "react-bootstrap";

function GeneralInformation() {
  return (
    <div
      className="container-fluid block"
      style={{
        borderBottom: "none",
      }}
    >
      <div className="container">
        <div className="titleHolder">
          <h2>General Information</h2>
        </div>
        <div className="contentHolder">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Discipline</Accordion.Header>
              <Accordion.Body className="bgGray">
                <div className="contentHolder" id="scholarshipList">
                  <ol>
                    <li>
                      All the students are expected to show exemplary behavior
                      at all times within as well as outside the school campus.
                      All students will be accountable to the school authorities
                      for their conduct.
                    </li>
                    <li>
                      Students involved in or inciting fights or found using
                      tobacco or intoxicants or other types of indiscipline will
                      be subject to severe disciplinary action which may lead to
                      expulsion from the school.
                    </li>
                    <li>
                      Students are prohibited from bringing mobile phones or
                      electronic gadgets or accessories. It will be confiscated.
                    </li>
                    <li>
                      Students are to bring their school diary every day and
                      keep a proper record of Homework, which has to be signed
                      by the teacher and the parent/ guardian.
                    </li>
                    <li>
                      Students found bullying, borrowing money, using vulgar and
                      abusive language, deliberately disfiguring or damaging
                      school property will face stern disciplinary action. The
                      student may also be charged a fine to recover the cost of
                      damage or repair of property. IN CASE OF DAMAGE CAUSED IN
                      THE SCHOOL BUS THE BUS FACILITY WILL BE WITHDRAWN.
                    </li>
                    <li>
                      All students whether Hosteller (red tag): Walker (green
                      tag) or School Bus Users (blue tag); require to have the
                      ID tag displayed prominently (worn around the neck) for
                      proper identification. Prefects and Sub-Prefects are given
                      a special ID Tag..
                    </li>
                  </ol>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Attendance and Absenteeism</Accordion.Header>
              <Accordion.Body className="bgGray">
                <div className="contentHolder" id="scholarshipList">
                  <ol>
                    <li>
                      All students are required to be regular in attendance and
                      be punctual. Except in case of illness or emergent and
                      unforeseen circumstances the student is expected to be
                      present. In case of illness extending over two days, a
                      copy of the prescription will have to be produced to
                      substantiate the claim.
                    </li>
                    <li>
                      The absence needs to be recorded in the school diary. In
                      case of absence of more than three days a written
                      application has to be submitted to the Block-in-charge.
                    </li>
                    <li>
                      Prior permission for leave must be obtained for any other
                      valid reason not falling under the category of an
                      emergency. In such a case the student may be permitted
                      leave depending on the reason but covering the missed
                      lessons and homework will be the sole responsibility of
                      the student. There is no provision for conducting any test
                      or exam missed by the student due to absence for any
                      reason.
                    </li>
                  </ol>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Parent-Teacher Meetings</Accordion.Header>
              <Accordion.Body className="bgGray">
                A cordial relationship among the school, parents and students is
                very crucial for the development of a child’s full potential.
                Therefore, parent-teacher meetings are held in the school from
                time to time to share information about the students’
                activities, their personal growth and academic progress so that
                necessary steps can be taken for their further improvements. In
                addition, special meetings with individual subject teachers are
                also arranged for parents on their request to discuss their
                ward’s progress in his/her studies. Any suggestion from parents
                and guardians is always welcome, and will be taken as
                instrumental in bringing a positive change to the student.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Syllabus</Accordion.Header>
              <Accordion.Body className="bgGray">
                The syllabus implemented in the school is a combination of the
                National Education System and the best aspects of the western
                system of education so that children not only develop
                nationalistic feelings but also grow with broader outlook from a
                tender age, and become competent to face challenges in life
                beyond the high school. The higher classes follow the syllabus
                as per the directives of the Ministry of Education. The students
                are provided with the detailed break-up of the syllabus at the
                beginning of each academic session. The medium of instruction
                and communication is English except for Nepali lessons.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default GeneralInformation;
