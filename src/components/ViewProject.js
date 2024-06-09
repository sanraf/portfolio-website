import React, { useState } from "react";
import "../Styles/ViewProject.css";
import { Link, useNavigate } from "react-router-dom";
import MobileMockup from "../components/MobileMockup";
import DesktopMockup from "../components/DesktopMockup";

function ViewProject({ isMobile, projectName ,setisViewProject}) {
  // setIsMobileViewe(isMobile)

  return (
    <div className="view-project_wrapper">
      {isMobile ? (<MobileMockup projectName={projectName} setisViewProject ={setisViewProject}/>) : (<DesktopMockup projectName={projectName} />)}
    </div>
  );
}

export default ViewProject;

