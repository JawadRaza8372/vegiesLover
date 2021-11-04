import React from "react";
import "./ContactContainer.scss";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ContactInfoBox from "../ContactInfoBox/ContactInfoBox";
function ContactContainer() {
  return (
    <section className="contactUs" id="contact">
      <div className="griding">
        <div className="contactInfroWrapper">
          <h1 className="pheading">Contact Us</h1>
          <div className="contactInfo">
            <div className="infoBoxes">
              <ContactInfoBox heading="Call Us:" subheading="8237283728">
                <CallIcon className="stablize" />
              </ContactInfoBox>
              <ContactInfoBox
                heading="Email:"
                subheading="support@freshfood.com"
              >
                <EmailIcon className="stablize" />
              </ContactInfoBox>
              <ContactInfoBox
                heading="Working Hours:"
                subheading="Monday - Sat (8:00am - 12:00 pm)"
              >
                <QueryBuilderIcon className="stablize" />
              </ContactInfoBox>
            </div>
          </div>
        </div>
        <div className="mapwraper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435518.6817801314!2d74.05419843131007!3d31.483220875755794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1635741266341!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen="true"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactContainer;
