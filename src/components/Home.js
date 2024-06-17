import React, { useEffect, useRef, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Contact from '../components/Contact';
import AppFooter from '../components/Footer';
import NewCard from '../components/NewCard';

import HeroSection from '../components/HeroSection';
import DesktopMockup from '../components/DesktopMockup';
import MobileMockup from '../components/MobileMockup';
import ViewProject from '../components/ViewProject';
import Card from './Card';
import StackedCards from './StackedCards';
function Home() {
 

  const [isAboutVisible, setAboutVisible] = useState(false);
  const [isProjectVisible, setProjectVisible] = useState(false);

  const aboutRef = useRef(null); 
  const projectRef = useRef(null); 
  const navigate = useNavigate()
  const [projectName ,setProjectName] = useState('')

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if(entry.target == projectRef.current){
        setProjectVisible(entry.isIntersecting)
        console.log(entry.isIntersecting + " project")
      }
      if (entry.target === aboutRef.current) {
        setAboutVisible(entry.isIntersecting);
        console.log(entry.isIntersecting + " about")
      }
   
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div>
     {/* <StackedCards /> */}
      {/* <NavBar/> */}
      <HeroSection isAboutVisible={isAboutVisible} isProjectVisible={isProjectVisible}/>
      {/* <MobileMockup/> */}
      {/* <DesktopMockup/> */}
      {/* <About aboutRef={aboutRef} /> */}
      {/* <Skills/> */}
      {/* <Project projectRef={projectRef}/> */}
      {/* <ViewProject/> */}
      {/* <Card/> */}
      {/* <NewCard/> */}
      {/* <Contact/> */}
      {/* <AppFooter/> */}
    </div>
  )
}

export default Home
