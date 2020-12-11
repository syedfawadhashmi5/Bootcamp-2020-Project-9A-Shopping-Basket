import React from "react";
import "./HeroHeader.css";
import Button from "@material-ui/core/Button";

import HeroImage from "./images/Hederhero.jpg";

var sectionStyle = {
  width: "100%",
  height: "40rem",
  backgroundImage: `url(${HeroImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function HeroHeader() {
  return (
    <div className="Header_section">
      <div style={sectionStyle} className="Header_section_hero">
        <h2>STAY WITH NEW SUMMER OUTFITS STYLE</h2>
        <h3>LATEST SUMMER STYLE CHECKOUT HERE</h3>
        <Button variant="contained" color="primary" className="btn">
          CHECKOUT
        </Button>
      </div>
      <div className="Shipment_section">
        <div className="discount_section_1">
          <h1 className="contains">50% OFF</h1>
          <Button variant="contained" color="primary" className="btn">
            CHECKOUT
          </Button>
        </div>
        <div className="discount_section_2">
          <h1 className="contains">50% OFF</h1>
          <Button variant="contained" color="primary" className="btn">
            CHECKOUT
          </Button>
        </div>
        <div className="discount_section_3">
          <h1 className="contains">50% OFF</h1>
          <Button variant="contained" color="primary" className="btn">
            CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
