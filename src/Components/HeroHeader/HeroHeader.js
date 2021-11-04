import React from "react";
import "./HeroHeader.scss";
import strawberry from "../../ownAssets/coliflowr.png";
import FrstContainer from "./FrstContainer";
function HeroHeader() {
  return (
    <div className="hero">
      <div className="customContain">
        <div className="grids">
          <FrstContainer />
          <img className="secondContainer" src={strawberry} alt="strawberry" />
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
