import * as React from "react";
import Hero from "../components/home/hero";
import WhoWeAre from "../components/home/whoWeAre";
import Message from "../components/home/message";
import Extra from "../components/home/extra";
import Facilities from "../components/home/facilities";

function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Message />
      <Extra />
      <Facilities />
    </>
  );
}

export default Home;
