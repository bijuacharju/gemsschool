import React from "react";
import AcademicInformation from "../components/information/academicInformation";
import Admissions from "../components/information/admissions";
import GeneralInformation from "../components/information/generalInformation";
import Scholarship from "../components/information/scholarship";

function Information() {
  return (
    <>
      <div className="titleHolder navOffset">
        <h2>Information</h2>
      </div>
      <div className="contentHolder">
        <div id="admissions">
          <Admissions />
        </div>
        <div id="academicInformation">
          <AcademicInformation />
        </div>
        <div id="scholarship">
          <Scholarship />
        </div>
        <div id="generalInformation">
          <GeneralInformation />
        </div>
      </div>
    </>
  );
}

export default Information;
