import React from "react";

import Hostel from "../components/facilities/hostel";
import Health from "../components/facilities/health";
import Bus from "../components/facilities/bus";

function FacilityDetails() {
  return (
    <>
      <div className="titleHolder navOffset">
        <h2>Facilities</h2>
      </div>
      <div id="hostel">
        <Hostel />
      </div>
      <div id="health">
        <Health />
      </div>
      <div id="bus">
        <Bus />
      </div>
    </>
  );
}

export default FacilityDetails;
