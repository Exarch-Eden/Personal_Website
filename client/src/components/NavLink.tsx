import React from "react";
import { Link } from "react-router-dom";

// css
import "../styles/NavLink.css";

type NavLinkProps = {
  to: string;
  text: string;
};

const NavLink = ({ to, text }: NavLinkProps) => {
  return (
    <Link to={to} className="routerLink">
      <div className="navLinkTextContainer">
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default NavLink;
