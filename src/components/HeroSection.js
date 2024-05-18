// HeroSection.js
import React, { useState } from "react";
import "../Styles/HeroSection.css"; // Create this CSS file
// import heroimage from './heroimage.png'

import upIcon from "../Assets/upbutton.png";
import NavBar from "./NavBar";

const HeroSection = () => {

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="hero-wrapper">
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
            <h6>
                I design responsive and scalable frontend and backend products with
                great user experience.
          </h6>
        <div className="skill-desc"> 
            <p>
                Explanation and visualization css transition: the transition property is added to the
            </p>
            <p>
                Explanation and visualization css transition: the transition property is added to the 
                
            </p>
        </div>




          <a href="#myproject" className="explore-work"> Expore</a>
        </div>
        <div className="hero-image"></div>
      </div>
    </div>
  );
};

export default HeroSection;
