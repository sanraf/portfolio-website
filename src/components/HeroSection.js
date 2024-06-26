// HeroSection.js
import React, { useEffect, useState } from "react";
import "../Styles/HeroSection.css"; // Create this CSS file
// import heroimage from './heroimage.png'

import NavBar from "./NavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import "../Styles/NavBar.css";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

const HeroSection = ({ isAboutVisible, isProjectVisible }) => {
  const [showButton, setShowButton] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const handleScroll = () => {
    setShowButton(window.scrollY > 200); // Show button after scrolling down 200px
  };

  const handleTouchMove = () => {
    setShowButton(true); // Show button when user touches the screen
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  let text = "Hi 👋. I saw your portfolio and ...";
  return (
    <div className="hero-wrapper" id="myhome">
      <div className="up-wrapper">
        <button
          onClick={() => scrollTop()}
          className="up"
          style={{
            opacity: showButton ? 1 : 0,
            transition: "opacity 500ms ease",
            zIndex: 999,
          }}
        >
          <FaArrowUp />
        </button>
      </div>
      <label className="switch">
        <input onClick={toggleTheme} type="checkbox" />
        <span className="slider"></span>
      </label>

      <NavBar
        isAboutVisible={isAboutVisible}
        isProjectVisible={isProjectVisible}
      />

      <div className="hero-container">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <div className="typing-effect">
              <h1>software developer</h1>
            </div>
            <h6>
              I design responsive and scalable frontend and backend products
              with great user experience.
            </h6>
            <div className="skill-desc">
              <p>Using Java and Spring boot for developing the backend </p>
              <p>And JavaScript and React js for frontend </p>
            </div>

            <a href="#myproject" className="explore-work">
              Expore
            </a>
          </div>
          <div className="hero-media">
            <Link
              className="media-icon"
              target="_blank"
              rel="noopener noreferrer"
              to={`https://wa.me/27671089950?text=${text}`}
            >
              <BsWhatsapp />
            </Link>

            <Link
              className="media-icon"
              target="_blank"
              rel="noopener noreferrer"
              to={"https://github.com/sanraf?tab=repositories"}
            >
              <FaGithub />
            </Link>

            <Link
              className="media-icon"
              target="_blank"
              rel="noopener noreferrer"
              to={"https://linkedin.com/in/santos-rafaelo-a4511a260"}
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
