import React from "react";
import { FaHome } from "react-icons/fa";

function Hostel() {
  return (
    <div className="containerFluid block">
      <div className="container">
        <div className="facilityTitle">
            <FaHome style={{fontSize:'84px'}}/>
          <h5>Hostel</h5>
        </div>
        <div className="contentHolder">
          <p>
            Hostel facilities are available to students from grade II to X. The
            hostels are divided into different distinct wings in accordance with
            the students’ age, gender and class. The senior girls, senior boys,
            intermediate boys, intermediate girls, the junior boys and junior
            girls are housed in separate buildings, which are conveniently
            located and provided with all amenities for comfortable living. Each
            of the hostel wings is managed by a qualified hostel in-charge and
            he/she, in turn, is supervised by the hostel manager and assisted by
            more than a dozen highly trained, dedicated and efficient menial
            employees who are on duty round the clock to ensure the safety and
            comfort of the children under their care. All boarders are housed in
            the Dhapakhel campus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hostel;
