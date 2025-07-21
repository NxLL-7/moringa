import React from "react";
import "./navbar.css";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import LOGO from "/IMGs/Logo.png";

const Home = () => {
  return (
    <section className="blur">
      <div className="NavBar">
        <div className="logoName">
          <img src={LOGO} alt="logo" />
        </div>
        <input type="checkbox" id="hamburger-toggle" />
        <label class="hamburger" for="hamburger-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="navItems">
          <ul id="menu">
            {/* <li className="usracc">
              <FaUserAlt />
              <sub>USER ACC</sub>
            </li> */}
            <li>
              <Link to="/" className="noDec">
                {" "}
                HOME
              </Link>
            </li>
            <li>
              <Link to="/order" className="noDec">
                {" "}
                ORDER NOW
              </Link>
            </li>
            <li>
              <Link to="/about" className="noDec">
                {" "}
                ABOUT THE PRODUCT
              </Link>
            </li>
            <li>
              <Link to="/contact" className="noDec">
                {" "}
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
