import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import {FaAngleDoubleRight} from 'react-icons/fa';

function Extra() {
  return (
    <div className="container-fluid block">
      <div className="container">
        <Row>
          <Col xs={12} md={6}>
            Video
          </Col>
          <Col xs={12} md={6}>
            <div className="titleHolder">
              <h2>Child Centered Approach</h2>
            </div>
            <div className="contentHolder">
              <p>
                At GEMS, we provide students with a stimulating learning
                environment, in which they explore their full potential and
                develop a strong academic foundation for higher studies. A
                child-centred teaching approach has been adopted in the primary
                level that has considerably helped children in their
                intellectual, emotional and social development. Plans are afoot
                to gradually implement the same in higher grades in the years
                ahead. A training programme for the teachers has already been
                started for the effective implementation of this approach in the
                future.
              </p>
              
            <Button href="/" className="button">
              Read More <FaAngleDoubleRight />
            </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Extra;
