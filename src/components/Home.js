import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import '../Styles/Hero.css'
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Contact from '../components/Contact';
import AppFooter from '../components/Footer';
function Home() {
 
  return (
    <div>
      
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <AppFooter/>
    </div>
  )
}

export default Home
