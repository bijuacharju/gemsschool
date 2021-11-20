import React from "react";
import Amp from "../components/clubs/amp";
import ExtraActivities from "../components/clubs/extraActivities";
import Thunderbolts from "../components/clubs/thunderbolts";

function Clubs() {
  return (
    <>
    <div id="thunderbolts" className="navOffset">
      <Thunderbolts />
    </div>
      <div id="extraActivities">
        <ExtraActivities />
      </div>
    <div id="amp">
        <Amp />
      </div>
    </>
  );
}

export default Clubs;
