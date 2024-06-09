import React, { useEffect, useRef, useState } from 'react';
import '../Styles/MobileMockup.css';

import vid from '../Assets/scanvid.mp4';
import { GrGithub } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';

const MobileMockup = ({projectName,setisViewProject}) => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(0);

  const smartNoteObject =[{
    demo:vid,
    overView :'note note note note note note note note note note note note note note note note note note note note note note note note note note note ',
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
  overView :'scan',
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
  overView :'book',
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

  return (
    <div className='frame-wrapper'>

           <div className="view_title">
                <h2>viewing <span>{projectName}</span> project</h2>
           </div>

        <div className='desc-wrapper'>
            <div className='desc-card'>
                <h3>About The Project</h3>
                <div className="desc-content">
                  {mobileObect().map((data,index)=>
                                    
                                      <ul className="content-list" key={index}>
                                      <li>
                                          <div className="category-list"><h4>Project overview</h4></div>
                                          <ul className="details">
                                              <li key={index}>
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
                    
                    <div className="buttons">
                        <button className="button"><GrGithub/> Repo</button>
                        <button className="button" onClick={()=>setisViewProject(false)}> <BiArrowBack/> Back</button>
                    </div>

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

    </div>

  );
};

export default MobileMockup;



