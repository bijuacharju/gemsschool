import React from "react";
import { Carousel } from "react-bootstrap";

import slide01 from "../../assets/images/1.webp";
import slide02 from "../../assets/images/2.webp";
import slide03 from "../../assets/images/3.webp";
import slide04 from "../../assets/images/4.webp";
import slide05 from "../../assets/images/5.webp";

function Hero() {
  return (
    <Carousel className="navOffset">
      <Carousel.Item>
        <img className="d-block w-100" src={slide01} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide02} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide03} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide04} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide05} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
