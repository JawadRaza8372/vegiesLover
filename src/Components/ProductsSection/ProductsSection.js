import React from "react";
import Carousel from "react-elastic-carousel";
import "./ProductsSection.scss";
import FoodCard from "../FoodCard/FoodCard";
function ProductsSection() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2, itemsToScroll: 1 },
    { width: 950, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
  ];
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="topProducts" id="product">
      <div className="customContain">
        <h2 className="pheading"> Top Products </h2>
        <Carousel
          enableAutoPlay
          autoPlaySpeed={4000}
          showArrows={false}
          pagination={false}
          breakPoints={breakPoints}
        >
          {item.map((dt) => (
            <FoodCard key={dt} head={dt} />
          ))}
        </Carousel>
        <div className="centerdiv">
          <button className="viewButton">View More</button>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
