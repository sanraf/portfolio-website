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

import prevIcon from '../Assets/icons8-previous-page-100.png'
import nextIcon from '../Assets/icons8-next-page-100.png'
import imacIcon from '../Assets/icons8-grey-imac-100.png'


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
             <div className="view_title">
                <h2>viewing <span>name</span> project</h2>
            </div>
        <div className='desk-top_wrapper'>
            <div className='desc-card'>
                <h3>Project description</h3>
                <div className="desc-content">
                    <ul className="content-list">
                    <li>
                        <div className="category-list"><h4>Project overview</h4></div>
                        <ul className="details">
                            <li>
                               <p>
                                brief introduction about the project.what problem does it solve brief introduction about the project.what problem does it solve
                                brief introduction about the project.what problem does it solve brief introduction about the project.what problem does it solve
                                </p>
                            </li>
                            
                        </ul>
                        </li>
                        <li>
                        <div className="category-list"><h4>List of technologies used</h4></div>
                        <ul className="details">
                            <li><p>Java</p></li>
                            <li><p>Python</p></li>
                            <li><p>React</p></li>
                        </ul>
                        </li>
                        <li>
                        <div className="category-list"><h4>Project Challenges</h4></div>
                        <ul className="details">
                            <li><p>Learn new technology</p></li>
                            <li><p>Solving errors</p></li>
                        </ul>
                        </li>
                        
                    </ul>


                    </div>
                    
                    <div className="buttons">
                        <button className="button">Close</button>
                        <button className="button">Open</button>
                    </div>

            </div>

           <div className="screen-container">
              <div className="screen">
                <img src={project4Images[currentImageIndex].url} alt={`Project ${project4Images[currentImageIndex].id}`} className="screen-image" />
                <div className="power-button"></div>
                <div className="power-lump"></div>
              
              </div>
              <div className="stand">
                <div className="stand-neck">
                    <div className='imac'>
                        <img src={imacIcon}/>
                    </div>
                
                </div>
                <div className="stand-base"><p>santos r</p></div>
              </div>
              <div className="controls">
                <img onClick={handlePrevious} className="control-button" src={prevIcon}/>
                <img onClick={handleNext} className="control-button" src={nextIcon}/>
            </div>
        </div>
        </div>


      </div>
    );
  };
  
  export default DesktopMockup;