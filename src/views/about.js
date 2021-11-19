import * as React from "react";
import { Routes, Route } from "react-router-dom";
import FounderMessage from "../components/about/founderMessage";
import AboutWhoWeAre from "../components/about/whoweare";

function About() {
  return (
    <>
      <Routes>
        <Route path="#whoweare" element={<AboutWhoWeAre />} />
        <Route path="#founderMessage" element={<FounderMessage />} />
      </Routes>
      {/* <AboutWhoWeAre id="whoweare" />
      <FounderMessage id="founderMessage" /> */}
    </>
  );
}

export default About;
