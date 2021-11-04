import React from "react";
import "./DealSection.scss";
function DealSection() {
  return (
    <section className="dealSection">
      <div className="customContain">
        <h1 className="pheading">Big Deals Of The Week</h1>
        <div className="timer">
          <div>
            <span>02</span>
            <span>Days</span>
          </div>
          <div>
            <span>12</span>
            <span>Hours</span>
          </div>
          <div>
            <span>42</span>
            <span>Minutes</span>
          </div>
          <div>
            <span>32</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealSection;
