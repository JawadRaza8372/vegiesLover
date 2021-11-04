import "./CustomNav.scss";
import React, { useState, useEffect } from "react";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import ClearIcon from "@material-ui/icons/Clear";
import GitHubIcon from "@material-ui/icons/GitHub";
function CustomHader() {
  const [OpenDiv, setOpenDiv] = useState(false);
  const newlocation = useLocation().pathname;
  const hashlocation = useLocation().hash;
  console.log(hashlocation);
  useEffect(() => {
    setOpenDiv(false);
  }, [newlocation, hashlocation]);
  return (
    <>
      <nav className=" navbar customContain ">
        <a href="/" className="cLink">
          Vegies Love
        </a>

        <div className="minirow">
          <NavLink
            activeClassName="activeNavLink"
            exact
            className="navlink mr-10"
            to="/"
          >
            Home
          </NavLink>
          {newlocation === "/" ? (
            <>
              <a className="navlink ml-10 mr-10" href="#product">
                Product
              </a>
              <a className="navlink ml-10 mr-10" href="#contact">
                Contact
              </a>
              <a className="navlink ml-10 mr-10" href="#service">
                Services
              </a>
            </>
          ) : (
            <>
              <Link className="navlink mr-10" to="/#product">
                Product
              </Link>
              <Link className="navlink mr-10" to="/#contact">
                Contact
              </Link>
              <Link className="navlink mr-10" to="/#service">
                Services
              </Link>
            </>
          )}
          <NavLink
            className="navlink ml-10 mr-10"
            activeClassName="activeNavLink"
            exact
            to="/blogs"
          >
            Blogs
          </NavLink>
          {newlocation === "/" ? (
            <>
              <a className="navlink ml-10 mr-10" href="#about">
                About
              </a>
            </>
          ) : (
            <Link className="navlink ml-10 mr-10" to="/#about" exact>
              About
            </Link>
          )}

          <a
            className="navlink ml-10 mr-10"
            href="https://github.com/JawadRaza8372"
          >
            <GitHubIcon style={{ fontSize: "35px" }} />
          </a>
        </div>
        <button className="extendbutton" onClick={() => setOpenDiv(!OpenDiv)}>
          {!OpenDiv ? <ListIcon /> : <ClearIcon />}
        </button>
      </nav>
      {OpenDiv && (
        <div className="navShow">
          <NavLink
            activeClassName="activeNavLink"
            exact
            className="navlink mb-15 mr-10"
            to="/"
          >
            Home
          </NavLink>
          {newlocation === "/" ? (
            <>
              <a className="navlink ml-10 mb-15 mr-10" href="#product">
                Products
              </a>
              <a className="navlink ml-10 mb-15 mr-10" href="#contact">
                Contact
              </a>
              <a className="navlink ml-10 mb-15 mr-10" href="#service">
                Services
              </a>
            </>
          ) : (
            <>
              <Link
                activeClassName="activeNavLink"
                className="navlink mb-15 mr-10"
                to="/#product"
              >
                Products
              </Link>
              <Link
                activeClassName="activeNavLink"
                className="navlink mr-10 mb-15"
                to="/#contact"
                exact
              >
                Contact
              </Link>
              <Link
                activeClassName="activeNavLink"
                className="navlink mr-10 mb-15"
                to="/#service"
                exact
              >
                Services
              </Link>
            </>
          )}
          <NavLink
            className="navlink ml-10 mb-15 mr-10"
            activeClassName="activeNavLink"
            to="/blogs"
            exact
          >
            Blogs
          </NavLink>
          {newlocation === "/" ? (
            <>
              <a className="navlink ml-10 mb-15 mr-10" href="#about">
                About
              </a>
            </>
          ) : (
            <Link className="navlink ml-10 mb-15 mr-10" to="/#about" exact>
              About
            </Link>
          )}
          <a
            className="navlink mb-15 ml-10 mr-10"
            href="https://github.com/JawadRaza8372"
          >
            <GitHubIcon style={{ fontSize: "35px" }} />
          </a>
        </div>
      )}
    </>
  );
}

export default CustomHader;
