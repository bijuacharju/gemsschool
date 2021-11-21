import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { FaAngleDoubleRight } from "react-icons/fa";

function WhoWeAre() {
  return (
    <>
      <div className="container-fluid block">
        <div className="container">
          <div className="titleHolder">
            <h2>Who We Are</h2>
          </div>
          <div className="contentHolder">
            <p>
              GEMS School was established in 1984 in Sanepa, Lalitpur with 78
              students and 25 staff members. Initially, classes from Nursery to
              grade III were offered. Today, it has become a full-fledged higher
              secondary school running classes from grade one to twelve. Upon
              completion of the construction of its own school complex at
              Dhapakhel, which is 1.5 kilometers away from Sat Dobato point on
              the Ring road, it shifted all classes from four to ten from Kiran
              Bhawan, Sanepa to the new complex in August 2...
            </p>
            <Link to="/gemsschool/aboutwhoweare">
            <Button className="button">
              Read More <FaAngleDoubleRight />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
