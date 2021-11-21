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
        <Route path="/gemsschool" element={<Home />} />
        <Route
          path="/gemsschool/facilitiesDetails"
          element={<FacilityDetails />}
        />

        <Route path="/gemsschool/contact" element={<Contact />} />

        <Route path="/gemsschool/aboutwhoweare" element={<AboutWhoWeAre />} />
        <Route path="/gemsschool/founderMessage" element={<FounderMessage />} />
        <Route
          path="/gemsschool/visionmissionobjective"
          element={<VisionMissionObjective />}
        />
        <Route path="/gemsschool/staff" element={<Staff />} />
        <Route path="/gemsschool/history" element={<History />} />
        <Route path="/gemsschool/pedagogy" element={<Pedagogy />} />

        <Route path="/gemsschool/information" element={<Information />} />

        <Route path="/gemsschool/clubs" element={<Clubs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
