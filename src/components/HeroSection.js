// HeroSection.js
import React, { useState } from "react";
import "../Styles/HeroSection.css"; // Create this CSS file
// import heroimage from './heroimage.png'

import upIcon from "../Assets/upbutton.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="up-wrapper">
        <button className="up">
          <a onClick={() => scrollTop()} href="#my-home">
            <img src={upIcon} />
          </a>
        </button>
      </div>
      <NavBar />
      <div className="hero-container">
        <div className="hero-content">

        <div className="typing-effect">
            <h1>software developer</h1>
        </div>
          <h3>Santos Rafaelo</h3>


          <p>
            I design responsive and scalable frontend and backend products with
            great user experience.
          </p>

          <a href="#myproject" className="explore-work"> Expore</a>
        </div>
        <div className="hero-image"></div>
      </div>
    </div>
  );
};

export default HeroSection;
