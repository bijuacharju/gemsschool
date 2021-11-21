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
        <div>
          <Admissions />
        </div>
        <div>
          <AcademicInformation />
        </div>
        <div>
          <Scholarship />
        </div>
        <div>
          <GeneralInformation />
        </div>
      </div>
    </>
  );
}

export default Information;
