import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../image/b180010.jpg";
function Carousol() {
  return (
    <div>
      <Carousel autoPlay>
        <div>
          <img src={logo} alt="" />
          <p className="legend">helo world</p>
        </div>
        <div>
          <img src={logo} alt="" />
          <p className="legend">helo world</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Carousol;
