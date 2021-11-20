import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/common/navbar";
import Footer from "./components/common/footer";

import Home from "./views/home";
import FacilityDetails from "./views/facilityDetails";
import Contact from "./views/contact";

import AboutWhoWeAre from "./components/about/whoweare";
import FounderMessage from "./components/about/founderMessage";
import VisionMissionObjective from "./components/about/visionMissionObjective";
import Staff from "./components/about/staff";
import History from "./components/about/history";
import Pedagogy from "./components/about/pedagogy";

import Information from "./views/information";

import Clubs from "./views/clubs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="facilitiesDetails" element={<FacilityDetails />} />

        <Route path="contact" element={<Contact />} />

        <Route path="aboutwhoweare" element={<AboutWhoWeAre />} />
        <Route path="founderMessage" element={<FounderMessage />} />
        <Route path="visionmissionobjective" element={<VisionMissionObjective />} />
        <Route path="staff" element={<Staff />} />
        <Route path="history" element={<History />} />
        <Route path="pedagogy" element={<Pedagogy />} />

        <Route path="information" element={<Information/>} />

        <Route path="clubs" element={<Clubs />} />
        


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
