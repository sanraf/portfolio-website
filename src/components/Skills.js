import React from "react";
import "../Styles/Skills.css";
import javaIcon from "../Assets/icons8-java.svg";
import pythonIcon from "../Assets/icons8-python.svg";
import cssIcon from "../Assets/icons8-css.svg";
import reactIcon from "../Assets/icons8-react-js.svg";
import mysqlIcon from "../Assets/icons8-my-sql.svg";
import android from "../Assets/icons8-android-logo.svg";
import matlabIcon from "../Assets/icons8-matlab.svg";

function Skills() {
  return (
    <div className="skills-section" id="myskills">
      <div className="skills-title">
        <h1>skills</h1>
        {/* <hr/> */}
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

                <h3 className="subject">java spring boot </h3>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper1-2">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={pythonIcon} alt="python" />
                  </div>
                </div>

                <h3 className="subject">python</h3>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper1-3">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={matlabIcon} alt="matlab" />
                  </div>
                </div>

                <h3 className="subject">matlab </h3>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper1-3">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={android} alt="android" />
                  </div>
                </div>

                <h3 className="subject">Java Android</h3>
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
                </div>

                <h3 className="subject">CSS & HTML </h3>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper2-5">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={mysqlIcon} alt="sql" />
                  </div>
                </div>

                <h3 className="subject">SQL/MYSQL </h3>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper2-6">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={reactIcon} alt="React js" />
                  </div>
                </div>

                <h3 className="subject">React js </h3>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-wrapper1-3">
                <div className="skill-1">
                  <div className="skill-icon">
                    <img src={matlabIcon} alt="matlab" />
                  </div>
                </div>

                <h3 className="subject">other </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
