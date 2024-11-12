// import React from 'react'

import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          <a href="javascript:;">Home</a>
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          <a href="javascript:;">Menu</a>
        </li>
        <li
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          <a href="javascript:;">Mobile App</a>
        </li>
        <li
          onClick={() => setMenu("Contact-Us")}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          <a href="javascript:;">Contact Us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket icon" />
          {/* if basket is full than the dot will appear otherwise hide */}
          <div className="dot"></div>  
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
