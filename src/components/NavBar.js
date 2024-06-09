// src/components/NavBar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import iMacIcon from '../Assets/icons8-imac-100.png'
import "../Styles/NavBar.css";

const NavBar = ({isAboutVisible,isProjectVisible}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav  className="navbar" >
      <div className="logo-hamburger">

          <div className="navbar-logo">
            <p>Santos.R</p>
            </div>
          <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="icon" />
          </div>

      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <ul >
          <li onClick={toggleMenu}>
            <a href="#myhome">Home</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#myabout">About</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#myskills">Skills</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#myproject">Projects</a>
          </li>
          <li onClick={toggleMenu} className="last-li">
            <a href="#mycontact">Contact</a>
          </li>
        </ul>
        <img className="comp-icon" src={iMacIcon}/>
      </div>
    </nav>
  );
};

export default NavBar;
