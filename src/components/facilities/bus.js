import React from "react";
import { FaFirstAid } from "react-icons/fa";

function Bus() {
  return (
    <div className="containerFluid block">
      <div className="container">
        <div className="facilityTitle">
          <FaFirstAid style={{ fontSize: "84px" }} />
          <h5>School Bus Service</h5>
        </div>
        <div className="contentHolder">
          <ol>
            <li>
              The school provides transport facilities to day-scholars as
              mentioned in the admission form. Children should be escorted to
              the notified bus stop and handed to the school staff. The escort
              should be present at the bus stop to receive the child, after
              classes are over.
            </li>
            <li>
              Every student is required to possess a BUS PASS or ID tag which
              must be visible and worn around the neck at the time of boarding
              the bus, entering the school campus and while attending the
              evening assembly before boarding the bus.
            </li>
            <li>
              Students misusing the facility or showing indiscipline in any
              manner in the bus will be barred from the service, and parents
              will have to make their own private arrangement.
            </li>
            <li>
              Parents must inform the concerned Block In-charge and the
              Transport department well in advance if a child is to be picked up
              by the parent for any reason.
            </li>
            <li>
              Students are not permitted to drive vehicles of any kind to school
              or on return. Those, who do not use the school bus, may be brought
              to the school by their parents or guardians by any means of
              transport but the walker’s ID tag must be worn around the neck.
              All walking students must wear the walker’s ID tag while entering
              and exiting from the school.
            </li>
            <li>
              Students are not permitted to change buses without written
              application from a parent and without clearance from the transport
              manager. Any change of temporary nature will be at the discretion
              of the transport manager and as per the feasibility of the
              request.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Bus;
