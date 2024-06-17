import React, { useEffect, useRef, useState } from 'react';
import '../Styles/MobileMockup.css';

import noteDemo from '../Assets/noteDemo.mp4';
import scannerDemo from '../Assets/scannerDemo.mp4';
import bookDemo from '../Assets/bookDemo.mp4';
import {  GrGithub, GrNext, GrPrevious } from 'react-icons/gr';
import '../Styles/StackedCards.css'; 
import { BiArrowBack } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

import ProjectData from "../components/ProjectData";

const MobileMockup = () => {
  const videoRef = useRef(null);
  const [demo,setDemo] = useState('')
  const navigate = useNavigate()
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(0);
  const [width,setWidth] = useState(0)
  const [projectName,setProjectName] = useState('');
  const [projectRepo,setProjectRepo] = useState('');

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
        case 'Smart Note':
            setDemo( <source src={noteDemo} type="video/mp4" />);
            setCards(cardData.SmartNote());
            break;
        case 'Smart Book':
            setDemo( <source src={bookDemo} type="video/mp4" />);
            setCards(cardData.SmartBook());
            break;
        case 'Smart Scan':
            setDemo( <source src={scannerDemo} type="video/mp4" />);
            setCards(cardData.SmartScan());
            break;
        default:
          setDemo('');
            setCards([]);
            break;
    }
}, [projectName]);



  const handleScreenClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    const progressPercentage = (currentTime / duration) * 100;
    setProgress(progressPercentage);
  };

  const handleVideoEnd = () => {
    videoRef.current.pause(); // Ensure the video is paused
    setIsPaused(true);
    setProgress(100); // Update progress bar to full
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);


  const containerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const handleNext = () => {
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
        handleNext();
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
    // console.log(`Screen width: ${screenWidth}px, Screen height: ${screenHeight}px`);
  });

  const goBack = () =>{
    window.sessionStorage.clear()
    navigate('/portfolio-website')
  }


    

  return (
    <div className='frame-wrapper'>
      <h1>{projectName}</h1>
        {width}

      <div className="containers">
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
              <GrNext className="buttonss next" onClick={handleNext}/>
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
            
            <div className="mobile-frame" onClick={handleScreenClick}>
                  <div className="mobile-notch">
                      <div className="notch-camera"></div>
                      <div className="notch-speaker"></div>
                  </div>
                  <div className="mobile-screen">
                      <video
                      key={demo}
                      ref={videoRef}
                      className="video"
                      controlsList="nodownload"
                      disablePictureInPicture
                      onClick={e => e.stopPropagation()} // Prevent video click from bubbling to parent
                      >
                     {demo}
                      Your browser does not support the video tag.
                      </video>
                      <div className={`play-pause-icon ${isPaused ? 'paused' : 'playing'}`}></div>
                      <div className="progress-bar">
                      <div className="progress" style={{ width: `${progress}%` }}></div>
                      </div>
                  </div>
            </div>
            
      </div>

    


        {/* </div> */}

    </div>

  );
};

export default MobileMockup;





