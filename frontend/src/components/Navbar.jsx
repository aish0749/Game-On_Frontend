import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <div className="menu">
        <div className="menu-links">
          <a href="#ss">Home</a>
          <a href="#ss">About Us</a>
          <a href="#ss">Contact Us</a>
        </div>

        <div className="menu-buttons">
          <button className="cta-btn">Sign Up</button>
          <button className="cta-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
