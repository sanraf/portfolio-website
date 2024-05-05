import React from "react";
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


function Skills() {

  const java = "proficient in java 8+,spring boot framework and spring security";
  const python = "Experience with popular Python libraries and frameworks such as NumPy, pandas,Django";
  const csshtml = "Proficient in CSS Flexbox,CSS Grid,HTML,and CSS3 for modern and responsive web design";
  const sql = "Proficient in data manipulation and retrieval,with a strong understanding of relational database concepts";
  const matlab = "Skilled in solving mathematical problems,differential equations,and optimization,numerical computing and matrix";
  const reactjs = "Skilled in state management (React hooks, Context API, Redux) and asynchronous data fetching (Axios,fetch)";
  const github = "Skilled in Git and GitHub,including repository management and GitHub Pages for hosting websites";
  const androidJava = "Skilled in Android Java development, including Jetpack components and RESTful API integration";
  return (
    <div className="skills-section" id="myskills">
      <div className="skills-title">
        <h1>skills</h1>
      </div>

      <div className="skills-container">

        <div className="main-skill_wrapper">

          <div className="skill-wrapper-1">

            <div className="progress-container">
              <div className="progress-wrapper1-1">

                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={javaIcon} alt="java" />
                  </div>
                </div>

                <h3 java ={java} className="subject">java </h3>
                
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper1-2">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={pythonIcon} alt="python" />
                  </div>
                </div>

                <h3 python ={python}className="subject">python</h3>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper1-3">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={matlabIcon} alt="matlab" />
                  </div>
                </div>

                <h3 matlab ={matlab} className="subject">matlab </h3>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper1-3">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={android} alt="android" />
                  </div>
                </div>

                <h3 android ={androidJava}className="subject">Java Android</h3>
              </div>
            </div>
          </div>

          <div className="skill-wrapper-2">
            <div className="progress-container">
              <div className="progress-wrapper2-4">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={cssIcon} alt="css & htlm" />
                  </div>

                  <div className="skill-icon">
                    <img src={htmlIcon} alt="css & htlm" />
                  </div>
                </div>

                <h3 csshtml ={csshtml}className="subject">CSS & HTML </h3>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper2-5">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={mysqlIcon} alt="sql" />
                  </div>
                </div>

                <h3 sql ={sql}className="subject">SQL/MYSQL </h3>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper2-6">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={reactIcon} alt="React js" />
                  </div>
                </div>

                <h3 react ={reactjs} className="subject">React js </h3>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper1-3">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={githubIcon} alt="matlab" />
                  </div>
                </div>

                <h3 github ={github} className="subject">GitHub </h3>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Skills;
