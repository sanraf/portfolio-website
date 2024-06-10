import React from 'react'
import '../Styles/About.css'
import '../Styles/DefaultColors.css'
import { FaLinkedin, FaGithub, FaEnvelope,FaCopy } from 'react-icons/fa';

function About({aboutRef}) {
    let aboutMe_1 = 'I am a dedicated and driven graduate with a strong foundation in Mathematical Sciences and two years of advanced Computer Science studies from North-West University. My passion for technology fuels my continuous exploration and mastery of diverse technologies. I am eager to contribute to the development of robust, secure, and innovative solutions, with a goal of advancing automation and enhancing human capabilities through cutting-edge technology'

    let aboutMe_2 = 'I am committed to lifelong learning and keeping up with the latest technological developments. My passion lies in collaborating with teams to create secure and robust applications that improve user experiences and drive business success. I aspire to contribute to innovative projects that push the boundaries of technology, especially in the field of automation. I am enthusiastic about joining a dynamic and forward-thinking team where I can continue to learn and make a meaningful impact';

  return (
    <div className="about-me" id="myabout" ref={aboutRef}>
            
            <div className="about-title">
                <h1>about me</h1>
            </div>

            <div className='main-card-wrapper'>
                    
                <div className="circle-card-wrapper">


                    <div className="zoom-container">
                        <div className="dots-wrap_top">
                            <span className="dot-1"></span>
                            <span className="dot-2"></span>
                            <span className="dot-3"></span>
                            <h2>Introduction </h2>
                        </div>
                    
                            <div className="inv-com_1">
                                <div className='illustration_1'></div>
                        
                                <p className="para-1">&#128075; {aboutMe_1}</p>
                               
                            </div>
                            
                            <div className='dots-wrap_bottom'>
                                <a href="https://linkedin.com/in/santos-rafaelo-a4511a260" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href="https://github.com/sanraf?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a href="mailto:santoschristopher199@gmail.com"><FaEnvelope /></a>
                            </div>
                    </div>

                </div>




                <div className="circle-card-wrapper">


                    <div className="zoom-container">
                        <div className="dots-wrap_top">
                            <span className="dot-1"></span>
                            <span className="dot-2"></span>
                            <span className="dot-3"></span>
                            <h2>Dedication</h2>
                        </div>
                    
                    
                            <div className="inv-com_2">
                            
                                <p className="para-2">{aboutMe_2}</p>
                                <div className='illustration_2'></div>

                            </div>

                            <div className='dots-wrap_bottom'>
                                <a href="https://linkedin.com/in/santos-rafaelo-a4511a260" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href="https://github.com/sanraf?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a href="mailto:santoschristopher199@gmail.com"><FaEnvelope /></a>
                            </div>

                    </div>

                </div>
            </div>


    </div>
  )
}

export default About
