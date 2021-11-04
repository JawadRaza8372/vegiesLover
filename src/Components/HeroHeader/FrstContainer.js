import React from "react";
import "./FrstContainer.scss";
function FrstContainer() {
  return (
    <div className="frstcont">
      <div className="welcome">
        <span>
          Welcome to <span> Vegies Love </span>
        </span>
      </div>
      <h1>
        <span>Grocery Shop</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim
        disputari sine reprehensione nec cum iracundia aut pertinacia recte
        disputari potest. An est aliquid per se ipsum flagitiosum, etiamsi nulla
        comitetur infamia? Hoc mihi cum tuo fratre convenit.
      </p>
      <div>
        <button className="btn1">Read More</button>
        <button className="btn2">Shop Now</button>
      </div>
    </div>
  );
}

export default FrstContainer;
