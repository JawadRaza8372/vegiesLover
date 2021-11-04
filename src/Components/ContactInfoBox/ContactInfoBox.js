import React from "react";
import "./ContactInfoBox.scss";
function ContactInfoBox({ heading, subheading, mbdisable, children }) {
  return (
    <div
      className="infoBox"
      style={mbdisable ? null : { marginBottom: "1.5rem" }}
    >
      <div className="iconDiv">{children}</div>
      <div>
        <h5>{heading}</h5>
        <h6>{subheading}</h6>
      </div>
    </div>
  );
}

export default ContactInfoBox;
