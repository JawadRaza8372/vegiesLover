import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Navbar from "../Components/NavBar/CustomNav";
import Aboutus from "../Pages/Home/Home";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ScrollToTop from "react-scroll-to-top";
import Blogs from "../Pages/Blogs/Blogs";
import Footer from "../Components/Footer/Footer";
import BlogId from "../Pages/BlogId/BlogId";
function Routes() {
  const location = useLocation().pathname;
  return (
    <>
      <Navbar />
      <ScrollToTop
        style={{
          background: "#43960f",
          padding: "6px",
          border: "1px solid white",
        }}
        smooth
        color="white"
      />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blog/:id" component={BlogId} />

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      {location === "/" || location === "/blogs" ? <Footer /> : null}
    </>
  );
}

export default Routes;
