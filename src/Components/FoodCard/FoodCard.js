import React from "react";
import "./FoodCard.scss";
import plate from "../../ownAssets/appleBucket.png";
import StarIcon from "@material-ui/icons/Star";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
function FoodCard({ head }) {
  return (
    <div className="shadow">
      <div className="foodCard">
        <div className="productImg">
          <img src={plate} alt="plate" />
        </div>
        <hr />
        <h2>Product {head}</h2>
        <div className="stars">
          <StarIcon className="filledStar" />
          <StarIcon className="filledStar" />
          <StarIcon className="filledStar" />
          <StarIcon className="emptyStar" />
          <StarIcon className="emptyStar" />
        </div>
        <div className="price">$1.25</div>
        <div>
          <button>
            <ShoppingCartIcon className="iconCart" />

            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
