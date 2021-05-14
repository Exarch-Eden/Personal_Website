import React, { useState } from "react";
import NavLink from "./NavLink";

// css
import "../styles/NavBar.css"

const NavBar = () => {
  // determines whether nav menu becomes visible 
  // (only relevant for mobile)
  const [isVisible, setIsVisible] = useState(false);

  // toggles nav menu visibility
  const toggleNavVisibility = () => {
    console.log("toggled visibility");
    setIsVisible(!isVisible);
  };

  return (
    <nav className="navBar" onClick={() => toggleNavVisibility()}>
      <NavLink to="/" text="Home" />
      <NavLink to="/page2" text="Page2" />
    </nav>
  );
};

export default NavBar;
