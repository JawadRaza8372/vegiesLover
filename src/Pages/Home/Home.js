import React, { useEffect, useLayoutEffect } from "react";
import HeroHeader from "../../Components/HeroHeader/HeroHeader";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import AboutContainer from "../../Components/AboutContainer/AboutContainer";
import OurServices from "../../Components/OurServices/OurServices";
import DealSection from "../../Components/DealSection/DealSection";
import ContactContainer from "../../Components/ContactContainer/ContactContainer";
import { useLocation } from "react-router";
function Home() {
  const hashlocation = useLocation().hash;
  useEffect(() => {
    if (hashlocation) {
      const id = hashlocation.replace("#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }
  }, [hashlocation]);
  useLayoutEffect(() => {
    if (hashlocation) {
      const id = hashlocation.replace("#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }
  }, []);
  return (
    <>
      <HeroHeader />
      <ProductsSection />
      <AboutContainer />
      <OurServices />
      <DealSection />
      <ContactContainer />
    </>
  );
}

export default Home;
