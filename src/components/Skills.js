import React, { useEffect, useRef, useState } from "react";
import "../Styles/Skills.css";
import javaIcon from "../Assets/icons8-java.svg";
import pythonIcon from "../Assets/icons8-python.svg";
import cssIcon from "../Assets/icons8-css.svg";
import reactIcon from "../Assets/icons8-react-js.svg";
import mysqlIcon from "../Assets/icons8-my-sql.svg";
import android from "../Assets/icons8-android-logo.svg";
import matlabIcon from "../Assets/icons8-matlab.svg";
import githubIcon from "../Assets/icons8-github.svg";
import htmlIcon from "../Assets/icons8-html-5-48.png";
import { GiClick } from "react-icons/gi";

function Skills({componentRef}) {
  const java =
    "proficient in java 8+,spring boot framework and spring security";
  const python =
    "Experience with popular Python libraries and frameworks such as NumPy, pandas,Django";
  const csshtml =
    "Proficient in CSS Flexbox,CSS Grid,HTML,and CSS3 for modern and responsive web design";
  const sql =
    "Proficient in data manipulation and retrieval,with a strong understanding of relational database concepts";
  const matlab =
    "Skilled in solving mathematical problems,differential equations,and optimization,numerical computing and ";
  const reactjs =
    "Skilled in state management (React hooks, Context API, Redux) and asynchronous data fetching (Axios,fetch)";
  const github =
    "Skilled in Git and GitHub,including repository management and GitHub Pages for hosting websites";
  const androidJava =
    "Skilled in Android Java development, including Jetpack components and RESTful API integration";




  return (
    <div className="skills-section" id="myskills">
      <div className="skills-title">
        <h1>skills</h1>
      </div>

      <div className="skills-container">
        <div className="main-skill_wrapper">
          <div className="skill-wrapper-1">
            <div className="progress-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <GiClick id="clickable"/>
                    <img src={javaIcon} className="skill-icon" />
                    <p className="subject">Java</p>
                  </div>

                  <div className="flip-card-back">
                    <p>{java}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="progress-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    
                    <img src={pythonIcon} className="skill-icon" />
                    <p className="subject">Python</p>
                  </div>

                  <div className="flip-card-back">
                    <p>{python}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="progress-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={matlabIcon} className="skill-icon" />
                    <p className="subject">Matlab</p>
                  </div>

                  <div className="flip-card-back">
                    <p>{matlab}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="progress-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={android} className="skill-icon" />
                    <p className="subject">Java Android</p>
                  </div>

                  <div className="flip-card-back">
                    <p>{androidJava}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-wrapper-2">
            <div className="progress-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="skill-1">
                      <div className="skill-icon">
                        <img src={cssIcon} alt="css & htlm" />
                      </div>

                      <div className="skill-icon">
                        <img src={htmlIcon} alt="css & htlm" />
                      </div>
                    </div>
                    <p className="subject">CSS & HTML</p>
                  </div>

                  <div className="flip-card-back">
                    <p>{csshtml} </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="progress-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={mysqlIcon} className="skill-icon" />
                    <p className="subject">SQL/MYSQL</p>
                  </div>

                  <div className="flip-card-back">
                    <p>{sql}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="progress-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={reactIcon} className="skill-icon" />
                    <p className="subject">React js</p>
                  </div>

                  <div className="flip-card-back">
                    <p>{reactjs}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="progress-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={githubIcon} className="skill-icon" />
                    <p className="subject">GitHub</p>
                  </div>

                  <div className="flip-card-back">
                    <p>{github}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Skills;
