// src/components/NavBar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Styles/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-hamburger">

          <div className="navbar-logo">Santos.R</div>
          <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="icon" />
          </div>

      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#myhome">Home</a>
          </li>
          <li>
            <a href="#myabout">About</a>
          </li>
          <li>
            <a href="#myskills">Skills</a>
          </li>
          <li>
            <a href="#myproject">Projects</a>
          </li>
          <li>
            <a href="#mycontact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
