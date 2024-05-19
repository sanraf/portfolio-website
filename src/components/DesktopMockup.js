// src/DesktopMockup.js

import React, { useState } from 'react';
import '../Styles/DesktopMockup.css';

import note1Icon from '../Assets/note1.png'
import note2Icon from '../Assets/note2.png'
import note3Icon from '../Assets/note3.png'
import note4Icon from '../Assets/note4.png'
import note5Icon from '../Assets/note5.png'
import note6Icon from '../Assets/note6.png'
import note7Icon from '../Assets/note7.png'
import note8Icon from '../Assets/note8.png'
import note9Icon from '../Assets/note9.png'
import note10Icon from '../Assets/note10.png'
import note11Icon from '../Assets/note11.png'

import vote1Icon from '../Assets/home.png'
import vote2Icon from '../Assets/admin.png'
import vote3Icon from '../Assets/edit.png'
import vote4Icon from '../Assets/candidates.png'
import vote5Icon from '../Assets/comments.png'
import vote6Icon from '../Assets/login.png'
import vote7Icon from '../Assets/signup.png'
import vote8Icon from '../Assets/reg candidate.png'
import vote9Icon from '../Assets/results.png'
import vote10Icon from '../Assets/station.png'
import vote11Icon from '../Assets/voters.png'


const project4Images = [
    { id: 1, url: vote1Icon }, { id: 2, url: vote2Icon }, { id: 3, url: vote3Icon },
    { id: 4, url: vote4Icon }, { id: 5, url: vote5Icon }, { id: 6, url: vote6Icon },
    { id: 7, url: vote7Icon }, { id: 8, url: vote8Icon }, { id: 9, url: vote9Icon },
    { id: 10, url: vote10Icon }, { id: 11, url: vote11Icon }
  ];
  
  const DesktopMockup = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project4Images.length);
    };
  
    const handlePrevious = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project4Images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="desktop-mockup">
        <div className="screen-container">
          <div className="screen">
            <img src={project4Images[currentImageIndex].url} alt={`Project ${project4Images[currentImageIndex].id}`} className="screen-image" />
            <div className="power-button"></div>
            <div className="apple-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="silver">
                <path d="M47.448 34.178c-.081-8.17 6.697-12.121 6.988-12.295-3.813-5.57-9.744-6.333-11.873-6.403-5.036-.506-9.838 2.966-12.372 2.966-2.566 0-6.512-2.888-10.695-2.813-5.51.081-10.643 3.224-13.496 8.164-5.804 10.067-1.484 24.969 4.143 33.129 2.745 3.947 6.02 8.371 10.354 8.206 4.171-.16 5.74-2.675 10.776-2.675 5.03 0 6.462 2.675 10.896 2.586 4.481-.08 7.297-4.016 9.995-7.973 1.62-2.352 2.299-3.537 3.602-6.187-9.433-3.574-10.99-16.85-1.651-21.636zM41.945 7.626c2.372-2.873 3.973-6.868 3.533-10.823-3.415.142-7.532 2.254-9.992 5.127-2.229 2.566-4.188 6.72-3.655 10.671 3.868.317 7.742-1.96 10.114-4.975z"/>
              </svg>
            </div>
          </div>
          <div className="stand">
            <div className="stand-neck"></div>
            <div className="stand-base"></div>
          </div>
        </div>
        <div className="controls">
          <button onClick={handlePrevious} className="control-button">Previous</button>
          <button onClick={handleNext} className="control-button">Next</button>
        </div>
      </div>
    );
  };
  
  export default DesktopMockup;