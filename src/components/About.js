import React from 'react'
import '../Styles/About.css'
import '../Styles/DefaultColors.css'

function About() {
  return (
    <div className="about-me" id="myabout">
            
            <div className="about-title">
                <h1>about me</h1>
                <hr/>
            </div>

            <div className='main-card-wrapper'>
                    
                <div className="circle-card-wrapper">

                    <div className="circle-image-1"></div>

                    <div className="zoom-container">
                        <div className="dots-wrap">
                            <span className="dot-1"></span>
                            <span className="dot-2"></span>
                            <span className="dot-3"></span>
                        </div>
                    
                    
                            <p className="inv-com">
                                <span className="top-span">who i am = () =&gt; <span className="first-bracket">&#123;</span></span>
                                <p className="para-1">I am a well grounded hard working graduate in mathematical science and two years of computer science studies at the North-West University. I spend my time exploring different technologies and engage in them,I seek to be involved in bringing better technological solutions that are robust and safer, and aiding to expanding the scope of human technological knowledge in automation. 
                                </p>
                                <span className='return'>return true;</span>
                            <span className="last-bracket">&#125;</span>
                            </p>
                            

                    </div>

                </div>

                <div className="circle-card-wrapper">


                    <div className="zoom-container">
                        <div className="dots-wrap">
                            <span className="dot-1"></span>
                            <span className="dot-2"></span>
                            <span className="dot-3"></span>
                        </div>
                    
                    
                            <p className="inv-com">
                                <span className="top-span">Experience and proficiency = () =&gt;<span className="first-bracket">&#123;</span></span>
                                <p className="para-1">Detail-oriented with 
                                    strong grasp in computational techniques, algorithms, 
                                    an android application developer good experince with android studio,XML,firebase and google-Ads platform.
                                </p>
                                <span className='return'>return true;</span>
                                <span className="last-bracket">&#125;</span>
                            </p>

                    </div>
                    <div className="circle-image-4"></div>

                </div>
            </div>


    </div>
  )
}

export default About
