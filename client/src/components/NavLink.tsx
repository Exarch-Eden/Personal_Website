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
      <p>{text}</p>
    </Link>
  );
};

export default NavLink;
