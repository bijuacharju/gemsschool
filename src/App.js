import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/common/navbar";
import Home from "./views/home";
import Contact from "./views/contact";
import Footer from "./components/common/footer";
import AboutWhoWeAre from "./components/about/whoweare";
import FounderMessage from "./components/about/founderMessage";
import VisionMissionObjective from "./components/about/visionMissionObjective";
import Staff from "./components/about/staff";
import History from "./components/about/history";
import Pedagogy from "./components/about/pedagogy";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="aboutwhoweare" element={<AboutWhoWeAre />} />
        <Route path="founderMessage" element={<FounderMessage />} />
        <Route path="visionmissionobjective" element={<VisionMissionObjective />} />
        <Route path="staff" element={<Staff />} />
        <Route path="history" element={<History />} />
        <Route path="pedagogy" element={<Pedagogy />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
