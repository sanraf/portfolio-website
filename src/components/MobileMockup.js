import React, { useEffect, useRef, useState } from 'react';
import '../Styles/MobileMockup.css';

import vid from '../Assets/scanvid.mp4'

const MobileMockup = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(0);

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
        <h2>Project Name </h2>

        <div className='desc-wrapper'>
            <div className='desc-card'>
                <h3>Project description</h3>
                <div className="desc-content">
                    <ul className="content-list">
                    <li>
                        <div className="category-list"><h4>Project overview</h4></div>
                        <ul className="details">
                            <li><p>brief introduction about the project.what problem does it solve brief introduction about the project.what problem does it solve</p></li>
                            
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



