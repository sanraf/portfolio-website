import React, { useEffect, useRef, useState } from 'react';
import '../Styles/MobileMockup.css';

import vid from '../Assets/scanvid.mp4';
import { GrGithub } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import { CgScrollH, CgScrollV } from 'react-icons/cg';
import '../Styles/StackedCards.css'; // Import your CSS file
import { FcNext, FcPrevious } from 'react-icons/fc';
import bak from '../Assets/hero-image.png'
import bak1 from '../Assets/hero_2.png'
import bak2 from '../Assets/task_bckg.png'

const MobileMockup = ({setisViewProject}) => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(0);
  const [width,setWidth] = useState(0)
  const projectName = sessionStorage.getItem('project name')
 
  const smartNoteObject =[{
    demo:vid,
    overView :'CSS sizing units available, categorizing them into absolute, font-relative, viewport-relative, and container-relative units. It emphasizes understanding the distinction between specified, computed, and used values in CSS, which are key concepts in effectively applying these units in web design. ',
    technologies:[
      {tech:'java'},
      { tech:'Android Studio'},
      {tech:'Room Database' }
    ],
    challengies:[
      {challenge:'challenge1'},
      {challenge:'challenge2'},
      {challenge:'challenge3'}]
  }
]

const smartScanObject =[{
  demo:vid,
  overView :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis id consectetur. Augue mauris augue neque gravida in fermentum et. Facilisi cras fermentum odio eu feugiat. Malesuada proin libero nunc consequat. Quam vulputate dignissim suspendisse in est ante. Nibh nisl condimentum id venenatis a condimentum. Dictum non consectetur a erat. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Posuere ac ut consequat semper viverra nam libero justo laoreet. Id eu nisl nunc mi ipsum faucibus. Pellentesque elit eget gravida cum sociis natoque penatibus et. Fringilla phasellus faucibus scelerisque eleifend. Euismod in pellentesque massa placerat duis ultricies.',
  technologies:[
    {tech:'java'},
    { tech:'Android Studio'},
    {tech:'Room Database' }
  ],
  challengies:[
    {challenge:'challenge1'},
    {challenge:'challenge2'},
    {challenge:'challenge3'}]
}
]

const smartBookObject =[{
  demo:vid,
  overView :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis id consectetur. Augue mauris augue neque gravida in fermentum et. Facilisi cras fermentum odio eu feugiat. Malesuada proin libero nunc consequat. Quam vulputate dignissim suspendisse in est ante. Nibh nisl condimentum id venenatis a condimentum. Dictum non consectetur a erat. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Posuere ac ut consequat semper viverra nam libero justo laoreet. Id eu nisl nunc mi ipsum faucibus. Pellentesque elit eget gravida cum sociis natoque penatibus et. Fringilla phasellus faucibus scelerisque eleifend. Euismod in pellentesque massa placerat duis ultricies.',
  technologies:[
    {tech:'java'},
    { tech:'Android Studio'},
    {tech:'Room Database' }
    , {tech:'java'},
    { tech:'Adroid Studio'},
    {tech:'Room Database' }
    , {tech:'java'},
    { tech:'Android Studio'},
    {tech:'Room Database' }
  ],
  challengies:[
    {challenge:'challenge1'},
    {challenge:'challenge2'},
    {challenge:'challenge3'},
    {challenge:'challenge1'},
    {challenge:'challenge2'},
    {challenge:'challenge3'},
    {challenge:'challenge1'},
    {challenge:'challenge2'},
    {challenge:'challenge3'}]
}
]

console.table(smartNoteObject)

  const mobileObect = () =>{
    if(projectName == 'Smart Note') return smartNoteObject;
    if(projectName == 'Smart Book') return smartBookObject;
    if(projectName == 'Smart Scan') return smartScanObject;
  }

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


  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Project Overview",
      content: (
        <p className='overview'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis id consectetur.
     
        </p>
      ),
      backgroundImage: bak,
      backgroundColor:'#022f46'    },
    {
      id: 2,
      title: "Used Technologies",
      content: (
        <p className='overview'>
          &#x27A5; Java <br />
          &#x27A5; Android Studio <br />
          &#x27A5; Room Database <br />
          &#x27A5; Java <br />
          &#x27A5; Android Studio <br />
          &#x27A5; Room Database
          
        </p>
      ),
      backgroundImage: bak1,
      backgroundColor:'#022f46'
    },
    {
      id: 3,
      title: "Communication Skills",
      content: (
        <p className='overview'>
        According to Google, a good manager: 
        1. Is a good coach. 
        2. Empowers team and does not micromanage.
      </p>
      ),
      backgroundImage: bak2,
      backgroundColor:'#022f46'
    }
  ]);

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
    // Do something with the updated screen dimensions
    console.log(`Screen width: ${screenWidth}px, Screen height: ${screenHeight}px`);
  });



 console.log(projectName)


  return (
    <div className='frame-wrapper'>
      <h1>{projectName}</h1>

        {/* <div className='desc-wrapper'> */}

            {/* <div className='desc-card'>
                <h3>About The Project</h3>
                <CgScrollV className='scroll-arrow'/>
                <div className="desc-content">
                  
                  {mobileObect().map((data,index)=>
                                    
                                      <ul className="content-list" >
                                      <li>
                                          <div className="category-list"><h4>Project overview</h4></div>
                                          <ul className="details">
                                          
                                              <li >
                                                 <p>
                                            
                                                  {data.overView}
                                                  </p>
                                              </li>
                                              
                                          </ul>
                                          </li>
                                          <li>
                                          <div className="category-list"><h4>List of technologies used</h4></div>
                                        
                                            <ul className="details" >
                                           
                                            {data.challengies.map((challenge,challengeIndex)=>
                                               <li key={challengeIndex}><p>{challenge.challenge}</p></li> 
                                             )} 
                                          </ul>
                                        

                                          </li>
                                          <li>
                                          <div className="category-list"><h4>Project Challenges</h4></div>
                                          <ul className="details">
                                    
                                            {data.technologies.map((tech,techIndex)=>
                                            <li key={techIndex}><p>{tech.tech}</p></li>
                                            
                                            )}
                                            
                                          </ul>
                                          </li>
                                          
                                      </ul>
                   )} 



                 </div>
                    
                    <div className="button-wrapper">
                        <button ><GrGithub/> Repo</button>
                        <button onClick={()=>setisViewProject(false)}> <BiArrowBack/> Back</button>
                    </div>

            </div> */}

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
              style={width >= 768 ? { backgroundImage: `url(${card.backgroundImage})` ,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
              backgroundSize: '50% 90%',
              backgroundColor: card.backgroundColor}:
              { backgroundImage: `url(${card.backgroundImage})` ,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
              backgroundSize: '30% 50%',
              backgroundColor: card.backgroundColor}
            }
            >
              <h2>{card.title}</h2>
              {card.content}
            </li>
          ))}
        </ul>
        <FcPrevious className="buttonss prev" onClick={handlePrev}/>
        <FcNext className="buttonss next" onClick={handleNext}/>
      </div>

      <div className="mobile-frame" onClick={handleScreenClick}>
            <div className="mobile-notch">
                <div className="notch-camera"></div>
                <div className="notch-speaker"></div>
            </div>
            <div className="mobile-screen">
                <video
                ref={videoRef}
                className="video"
                controlsList="nodownload"
                disablePictureInPicture
                onClick={e => e.stopPropagation()} // Prevent video click from bubbling to parent
                >
                <source src={vid} type="video/mp4" />
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



