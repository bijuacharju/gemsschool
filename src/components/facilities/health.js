import React from "react";
import { FaFirstAid } from "react-icons/fa";

function Health() {
  return (
    <div className="containerFluid block bgGray">
      <div className="container">
        <div className="facilityTitle">
          <FaFirstAid style={{ fontSize: "84px" }} />
          <h5>Health Care</h5>
        </div>
        <div className="contentHolder">
          <p>
            Students with minor ailments and injuries are treated in the school
            infirmary by qualified staff nurses. Qualified and registered
            doctors visit the school infirmary at least once a week. In case of
            serious illness or injuries, students are admitted to the nearest
            hospital and parents are informed immediately. Payment for any kind
            of treatments attended outside the school infirmary has to be made
            by the parents themselves. The school will not be held responsible
            for injuries which may occur during activities or excursions.
            Parents are advised to have a medical insurance for their children
            or the school may arrange such insurance and charge the amount in a
            monthly bill.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Health;
