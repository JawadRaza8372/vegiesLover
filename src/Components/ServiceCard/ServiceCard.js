import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import "./ServiceCard.scss";
function ServiceCard({ content }) {
  return (
    <div className="shadows">
      <div className="serviceCard">
        <div className={content === 2 ? "expIcon expIcon2" : "expIcon"}>
          {content === 1 ? (
            <HomeIcon className="iconClass" />
          ) : content === 2 ? (
            <LocalShippingIcon className="iconClass primaryClor" />
          ) : (
            <AttachMoneyIcon className="iconClass" />
          )}
        </div>
        <h2 className={content === 2 ? "primaryClor" : ""}>
          {content === 1
            ? "Home Delivery"
            : content === 2
            ? "30 Days ReturnServices "
            : "Money Back Guaranted"}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae hic rei
          publicae vulnera inponebat, eadem ille sanabat.
        </p>
        <button className={content === 2 ? "primarybtn" : "darkbtn"}>
          Read More
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
