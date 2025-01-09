import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss"; // Example of a dedicated Sass file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">Backup &amp; Archival</div>
      <ul className="navbar__links">
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
