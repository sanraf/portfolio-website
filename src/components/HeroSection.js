// HeroSection.js
import React, { useState } from "react";
import "../Styles/HeroSection.css"; // Create this CSS file
// import heroimage from './heroimage.png'

import NavBar from "./NavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaGithub, FaLinkedin,FaArrowUp} from 'react-icons/fa';
import "../Styles/NavBar.css";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

const HeroSection = ({isAboutVisible,isProjectVisible}) => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const [isOpen, setIsOpen] = useState(false);
const email = 'santoschristopher199@gmail.com';
  return (
    <div className="hero-wrapper" id="myhome">
      <div className="up-wrapper">
        <button className="up">
          <a onClick={() => scrollTop()} href="#my-home">
            <FaArrowUp/>
          </a>
        </button>
      </div>

      <div className="big-circle"></div>
      <div className="small-circle"></div>
      <div className="big-circle_1"></div>
      <div className="small-circle_1"></div>

      <NavBar isAboutVisible={isAboutVisible} isProjectVisible={isProjectVisible}/>

      <div className="hero-container">
        <div className="hero-content-wrapper">
        <div className="hero-content">
          <div className="typing-effect">
            <h1>software developer</h1>
          </div>
          <h6>
            I design responsive and scalable frontend and backend products with
            great user experience.
          </h6>
          <div className="skill-desc">
            <p>Explanation and visualization css transition:</p>
            <p>Explanation and visualization css transition:</p>
          </div>

          <a href="#myproject" className="explore-work">
            Expore
          </a>

        </div>
        <div className="hero-media">
                  <Link className="media-icon" target="_blank" rel="noopener noreferrer"  >
                  <BsWhatsapp/>
                  </Link>

                  <Link className="media-icon" target="_blank" rel="noopener noreferrer" to={'https://github.com/sanraf?tab=repositories'}>
                    <FaGithub/>
                  </Link>

                  <Link className="media-icon" target="_blank" rel="noopener noreferrer" to={'https://linkedin.com/in/santos-rafaelo-a4511a260'} >
                    <FaLinkedin/>
                  </Link>
          </div>
        </div>


        <div className="hero-image">
          <img/>
        </div>

      </div>
      
    </div>
  );
};

export default HeroSection;
