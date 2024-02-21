import React, { useEffect, useRef, useState } from 'react';
import '../Styles/ImageViewer.css'
import nextIcon from '../Assets/next.png'
import prevIcon from '../Assets/back.png'
import emailIcon from '../Assets/icons8-email-100.png'
import locationIcon from '../Assets/icons8-location-100.png'
import phoneIcon from '../Assets/icons8-phone.svg'


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

import book1Icon from '../Assets/story1.png'
import book2Icon from '../Assets/story2.png'
import book3Icon from '../Assets/story3.png'
import book4Icon from '../Assets/story4.png'
import book5Icon from '../Assets/story5.png'
import book6Icon from '../Assets/story6.png'
import book7Icon from '../Assets/story7.png'
import book8Icon from '../Assets/story8.png'

import scan1Icon from '../Assets/scan-1.png'
import scan2Icon from '../Assets/scan-2.png'
import scan3Icon from '../Assets/scan-3.png'
import scan4Icon from '../Assets/scan-4.png'

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
import { Link, useNavigate } from 'react-router-dom';
import {ProjectNameContext} from '../components/Project'
import { useContext } from 'react';



const ImageViewer = ({name,setProject}) => {
  // const name = useContext(ProjectNameContext);
  const navigate = useNavigate()
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [mobileImg,setMobileImg] = useState(true)
  const [width, setWidth] = useState(0);
  const [deltaX,setDeltaX] = useState();


  const project1Images = [
    {id: 1,url: note1Icon },{ id: 2,url: note2Icon },{ id: 3,url: note3Icon},
    {id: 4, url: note4Icon}, {id: 5, url: note5Icon},{id: 6,url: note6Icon},
    {id: 7,url: note7Icon }, {id: 8, url: note8Icon },{id: 9, url: note9Icon},
    {id: 10,url: note10Icon },{id: 11,url: note11Icon}
  ];

  const project2Images = [
    {id: 1,url: book1Icon },{ id: 2,url: book2Icon },{ id: 3,url: book3Icon},
    {id: 4, url: book4Icon}, {id: 5, url: book5Icon},{id: 6,url: book6Icon},
    {id: 7,url: book7Icon }, {id: 8, url: book8Icon }
  ];

  const project3Images = [
    {id: 1,url: scan1Icon },{ id: 2,url: scan2Icon },{ id: 3,url: scan3Icon},
    {id: 4, url: scan4Icon}
  ];

  const project4Images = [
    {id: 1,url: vote1Icon },{ id: 2,url: vote2Icon },{ id: 3,url: vote3Icon},
    {id: 4, url: vote4Icon}, {id: 5, url: vote5Icon},{id: 6,url: vote6Icon},
    {id: 7,url: vote7Icon }, {id: 8, url: vote8Icon },{id: 9, url: vote9Icon},
    {id: 10,url: vote10Icon },{id: 11,url: vote11Icon}
  ];


  const getProjecImage = () =>{
    if(name.includes('note')){
        return project1Images
    }else if(name.includes('books')){
      return project2Images
    }
    else if(name.includes('scan')){
      return project3Images
    }
    else if(name.includes('EziVote')){
      return project4Images
    }
  }




  useEffect(()=>{

    const getProjectComponet = () =>{

      if(name.includes('note')){
          setMobileImg(true)
          setDeltaX(300)
      }else if(name.includes('books')){
        setMobileImg(true)
        setDeltaX(300)
      }else if(name.includes('EziVote')){
        setMobileImg(false)
        setDeltaX(750)
      }
    }
    getProjectComponet();
  },[name])


  useEffect(() => {

    const handleResize = () => {
      setWidth(containerRef.current.clientWidth);
   
    };



    setWidth(containerRef.current.clientWidth);

    // Event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []


  );


  const handleWheel = (e) => {
    e.preventDefault(); // Prevent default scrolling behavior

    const container = containerRef.current;

    // Calculate the scroll amount based on the mouse wheel delta
    const delta = e.deltaY || e.detail || e.wheelDelta;
    const scrollAmount = delta > 0 ? 330 : -330; // Adjust as needed

    // Adjust the scrollLeft property of the container element
    container.scrollLeft += scrollAmount;
  };

  const scrollLeft = () => {if (containerRef.current) {containerRef.current.scrollLeft -= deltaX;} };

  const scrollRight = () => {if (containerRef.current) { containerRef.current.scrollLeft += deltaX;}};

  const navBack = (e) =>{e.preventDefault();navigate('/');localStorage.removeItem('project')}

  return (
    <div className='project-display_wrapper' ref={scrollRef}>
        <div className="project__title">
            <h1>viewing <span>{name}</span> project</h1>
            <hr/>
        </div>

        <div className='project-view'>

          <div className='description-wrapper'>

          <   div className='project-description'>
                <h4>description+++ {name}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
              </div>

            <div className='action-btn_wrapper'>
                  <span className='action-btn-back'onClick={(e)=>setProject(true)}  >back</span>
                  <Link className='action-btn-project-repo' to={'https://github.com/sanraf/Smart-Note-App.git'}>view Repository</Link>
            </div>

          </div>


          {mobileImg ? 
          <div className='image-slider'>

          <img className = 'image-btn'src={prevIcon}  onClick={scrollLeft}/>





          <div className="image-holder" ref={containerRef} onWheel={handleWheel}>
            {getProjecImage().map((image) => {
              return (
                <img
                  className='sliderImage'
                  alt="sliderImage"
                  key={image?.id}
                  src={image?.url}
                />
              );
            })}
          </div>

         
            <img className = 'image-btn' src={nextIcon} onClick={scrollRight}/>
          </div>
          :
          <div className='image-slider-desktop'>

          <img className = 'image-btn-desktop'src={prevIcon} onClick={scrollLeft}/>


          <div className="image-holder-desktop" ref={containerRef} onWheel={handleWheel}>
            {getProjecImage().map((image) => {
              return (
                <img
                  className='sliderImage-desktop'
                  alt="sliderImage"
                  key={image?.id}
                  src={image?.url}
                />
              );
            })}
          </div>

           <img className = 'image-btn-desktop' src={nextIcon} onClick={scrollRight}/>
          </div>}


        </div>

    </div>
  );
};

export default ImageViewer;
 