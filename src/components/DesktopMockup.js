// src/DesktopMockup.js

import React, { useEffect, useRef, useState } from 'react';
import '../Styles/DesktopMockup.css';


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

import imacIcon from '../Assets/icons8-grey-imac-100.png'

import ProjectData from "../components/ProjectData";
import { Link, useNavigate } from 'react-router-dom';
import { GrGithub, GrNext, GrPrevious } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
const project4Images = [
    { id: 1, url: vote1Icon }, { id: 2, url: vote2Icon }, { id: 3, url: vote3Icon },
    { id: 4, url: vote4Icon }, { id: 5, url: vote5Icon }, { id: 6, url: vote6Icon },
    { id: 7, url: vote7Icon }, { id: 8, url: vote8Icon }, { id: 9, url: vote9Icon },
    { id: 10, url: vote10Icon }, { id: 11, url: vote11Icon }
  ];
  
  const DesktopMockup = () => {
    const [width,setWidth] = useState(0)
    const navigate = useNavigate();
    const [projectName,setProjectName] = useState('');
    const [projectRepo,setProjectRepo] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project4Images.length);
    };
  
    const handlePrevious = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project4Images.length - 1 : prevIndex - 1
      );
    };

    useEffect(()=>{
      let tiltle = window.sessionStorage.getItem('PROJECT_NAME');
      let repo = window.sessionStorage.getItem('PROJECT_REPO');
      setProjectRepo(repo)
      setProjectName(tiltle);
  },[])
    const cardData = new ProjectData();
    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      switch (projectName) {
          case 'JoystiTech':
              setCards(cardData.joyTech());
              break;
          case 'Novel Nest':
              setCards(cardData.NovelNest());
              break;
          case 'SchoolWeb':
              setCards(cardData.SchoolWeb());
              break;
          case 'EziVote':
              setCards(cardData.EziVote());
              break;
          case 'Project Management System':
            setCards(cardData.PMS());
            break;
          default:
              setCards([]);
              break;
      }
  }, [projectName]);
    const containerRef = useRef(null);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [animationClass, setAnimationClass] = useState("");

    const handleNextc = () => {
      setAnimationClass("throwing-next");
      setTimeout(() => {
        setCards((prevCards) => {
          const updatedCards = [...prevCards];
          const firstCard = updatedCards.shift();
          updatedCards.push(firstCard);
          return updatedCards;
        });
        setAnimationClass("");
      }, 500);
    };
  
    const handlePrev = () => {
      setAnimationClass("throwing-prev");
      setTimeout(() => {
        setCards((prevCards) => {
          const updatedCards = [...prevCards];
          const lastCard = updatedCards.pop();
          updatedCards.unshift(lastCard);
          return updatedCards;
        });
        setAnimationClass("");
      }, 500);
    };
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.clientX || e.touches[0].clientX);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const currentX = e.clientX || e.touches[0].clientX;
      const diff = currentX - startX;
  
      if (diff > 50) {
          handleNextc();
        setIsDragging(false);
      } else if (diff < -50) {
          handlePrev();
        setIsDragging(false);
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
  
    window.addEventListener('resize', function(event) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      setWidth(window.innerWidth);
      // Do something with the updated screen dimensions
      console.log(`Screen width: ${screenWidth}px, Screen height: ${screenHeight}px`);
    });

    const goBack = () =>{
      window.sessionStorage.clear()
      navigate('/portfolio-website')
    }

    return (
      <div className="desktop-mockup">
            
                <h1>{projectName}</h1>
            
        <div className='desk-top_wrapper'>
          <div
                className="card-stack"
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
              >
                <ul className="card-list">
                  {cards.slice(0, 3).map((card, index) => (
                    <li
                      key={card.id}
                      className={index === 0 ? animationClass : ""}
                      style={width > 768 ? { backgroundImage: `url(${card.backgroundImage})` ,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '15% 55%',
                      backgroundSize: '30% 65%',
                      backgroundColor: card.backgroundColor,
                      color:card.color
                    }:
                      { backgroundImage: `url(${card.backgroundImage})` ,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '2% 55%',
                      backgroundSize: '32% 62%',
                      backgroundColor: card.backgroundColor,
                      color:card.color
                    }
                    }
                    >
                      <h2>{card.title}</h2>
                      {card.content}
                    </li>
                  ))}
                </ul>
                <GrPrevious className="buttonss prev" onClick={handlePrev}/>
                <GrNext className="buttonss next" onClick={handleNextc}/>
                <div className='view-button_wrapper'>

                <button onClick={()=>goBack()} className ="button-view " role="button">
                  <BiArrowBack/> Back
                </button>

                <Link to={projectRepo} target='_blank' rel='noopener noreferrer'>
                  <button  className="button-view " role="button">
                  <GrGithub/> Repo
                  </button>
              </Link>

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
                <GrPrevious onClick={handlePrevious} className="control-button"/>
                <GrNext onClick={handleNext} className="control-button"/>
            </div>
           </div>
        </div>


      </div>
    );
  };
  
  export default DesktopMockup;