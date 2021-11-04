import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./OurServices.scss";
function OurServices() {
  return (
    <section className="serviceSection" id="service">
      <div className="customContain">
        <h1 className="pheading">Our Services</h1>
        <div className="CardWrapper">
          <ServiceCard content={1} />
          <ServiceCard content={2} />
          <ServiceCard content={3} />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
