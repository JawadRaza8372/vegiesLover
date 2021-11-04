import React from "react";
import "./Footer.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import table from "../../ownAssets/images/food-table.jpg";
import { Link, useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation().pathname;
  return (
    <>
      <section className="footerSection">
        <div className="customContain">
          <div className="footerGrid">
            <div className="box">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque
                fecimus. Nemo nostrum istius generis asotos iucunde putat
                vivere. In contemplatione et cognitione posita rerum.
              </p>
              <button>Read More</button>
            </div>
            <div className="box">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <div>
                    <a href="#">
                      <FacebookIcon className="linkIcon" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="#">
                      <InstagramIcon className="linkIcon" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="#">
                      <TwitterIcon className="linkIcon" />
                      <span>Twitter</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="box">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link className="navlink" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  {location === "/" ? (
                    <a className="navlink" href="#about">
                      About
                    </a>
                  ) : (
                    <Link className="navlink" to="/#about">
                      About
                    </Link>
                  )}
                </li>
                <li>
                  {location === "/" ? (
                    <a className="navlink" href="#product">
                      Products
                    </a>
                  ) : (
                    <Link className="navlink" to="/#product">
                      Products
                    </Link>
                  )}
                </li>
                <li>
                  <Link className="navlink" to="/blogs">
                    Blogs
                  </Link>
                </li>

                <li>
                  {location === "/" ? (
                    <a className="navlink" href="#service">
                      Services
                    </a>
                  ) : (
                    <Link className="navlink" to="/#service">
                      Services
                    </Link>
                  )}
                </li>
                <li>
                  {location === "/" ? (
                    <a className="navlink" href="#contact">
                      Contact
                    </a>
                  ) : (
                    <Link className="navlink" to="/#contact">
                      Contact
                    </Link>
                  )}
                </li>
              </ul>
            </div>

            <div className="box insApi">
              <h3>Instagram</h3>
              <div className="postwrapper">
                <div>
                  <img src={table} alt="insta post" />
                </div>
                <div>
                  <img src={table} alt="insta post" />
                </div>
                <div>
                  <img src={table} alt="insta post" />
                </div>
                <div>
                  <img src={table} alt="insta post" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
