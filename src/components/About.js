import React from 'react'
import '../Styles/About.css'
import '../Styles/DefaultColors.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function About() {
    let aboutMe_1 = 'I am a dedicated and driven graduate with a strong foundation in Mathematical Sciences and two years of advanced Computer Science studies from North-West University. My passion for technology drives me to continuously explore and master diverse technologies. I am eager to contribute to the development of robust, secure, and innovative technological solutions. My goal is to advance the field of automation, enhancing human knowledge and capabilities through cutting-edge technology.'

    let aboutMe_2 = 'I am dedicated to continuous learning and staying abreast of the latest technological advancements. I enjoy collaborating with teams to design and implement robust and secure applications that enhance user experiences and drive business success. My goal is to contribute to meaningful projects that push the boundaries of what\'s possible in technology, particularly in the field of automation. I am eager to bring my skills and enthusiasm to a dynamic and forward-thinking team, where I can grow and make a significant impact.';

  return (
    <div className="about-me" id="myabout">
            
            <div className="about-title">
                <h1>about me</h1>
            </div>

            <div className='main-card-wrapper'>
                    
                <div className="circle-card-wrapper">

                    <div className="circle-image-1"></div>

                    <div className="zoom-container">
                        <div className="dots-wrap">
                            <span className="dot-1"></span>
                            <span className="dot-2"></span>
                            <span className="dot-3"></span>
                            <h2>More About Me </h2>
                        </div>
                    
                            <div className="inv-com">
                        
                                <p className="para-1">{aboutMe_1}</p>
                               
                            </div>
                            
                            <div className='dots-wrap_bottom'>
                                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a href="mailto:your-email@example.com"><FaEnvelope /></a>
                            </div>
                    </div>

                </div>

                <div className="circle-card-wrapper">


                    <div className="zoom-container">
                        <div className="dots-wrap">
                            <span className="dot-1"></span>
                            <span className="dot-2"></span>
                            <span className="dot-3"></span>
                            <h2>More About More </h2>
                        </div>
                    
                    
                            <div className="inv-com">
                            
                                <p className="para-1">{aboutMe_2}</p>

                            </div>

                            <div className='dots-wrap_bottom'>
                                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a href="mailto:your-email@example.com"><FaEnvelope /></a>
                            </div>

                    </div>
                    <div className="circle-image-4"></div>

                </div>
            </div>


    </div>
  )
}

export default About
