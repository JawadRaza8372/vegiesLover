import React from "react";
import "./AboutContainer.scss";
import youg from "../../ownAssets/lemmon.png";
function AboutContainer() {
  return (
    <section className="aboutMeal" id="about">
      <div className="customContain">
        <h2 className="pheading"> About Us </h2>
        <div className="aboutMealwrp">
          <div className="first">
            <img src={youg} alt="yog" />
          </div>
          <div className="second">
            <h2>
              Fresh Meal is a long established fact that a reader will be
              distracted
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod si
              ita se habeat, non possit beatam praestare vitam sapientia. An
              eiusdem modi? Quodsi, ne quo incommodo afficiare, non relinques
              amicum, tamen, ne sine fructu alligatus sis, ut moriatur optabis.
              Duo Reges: constructio interrete. Mene ergo et Triarium dignos
              existimas, apud quos turpiter loquare? Ut alios omittam, hunc
              appello, quem ille unum secutus est. Quis suae urbis conservatorem
              Codrum, quis Erechthei filias non maxime laudat?
            </p>
            <button className="viewButton">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContainer;
