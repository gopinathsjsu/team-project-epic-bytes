import React, { useState, useContext } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";
import { getPayloadFromToken } from "../../util/useQueryParams";
import { AppContext } from "../../store/appContext";

import "./NavbarStyles.css";

function Navbar(props) {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const { history } = props;
  const { getToken, clearLoginUser } = useContext(AppContext);
  const token = getToken();
  let user = token ? getPayloadFromToken(token) : {};

  const logOut = () => {
    clearLoginUser();
    window.location.reload();
  };

  const gotoLoginPage = () => {
    history.push("/login");
  };

  const gotoSignupPage = () => {
    history.push("/signup");
  };

  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>Epic Hotel Booking</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home">
          <li>Home</li>
        </Link>
        <Link to="destinations">
          <li>Destinations</li>
        </Link>
        <Link to="carousel">
          <li>Travel</li>
        </Link>
        <Link to="/bookings">
          <li>Book</li>
        </Link>
        <Link to="views">
          <li>Views</li>
        </Link>
      </ul>
      <div className="nav-icons">
        {user?.sub ? (
          <span onClick={logOut}>Logout</span>
        ) : (
          <>
            <span className="login" onClick={gotoLoginPage}>
              Login
            </span>
            <span onClick={gotoSignupPage}>Signup</span>
          </>
        )}
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="destinations" smooth={true} duration={500}>
            <li>Destinations</li>
          </Link>
          <Link to="carousel" smooth={true} duration={500}>
            <li>Travel</li>
          </Link>
          <Link to="search" smooth={true} duration={500}>
            <li>Book</li>
          </Link>
          <Link to="views" smooth={true} duration={500}>
            <li>Views</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom"></div>
      </div>
    </div>
  );
}

export default Navbar;
