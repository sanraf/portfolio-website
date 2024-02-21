import React from 'react'
import '../Styles/Footer.css'
import facebookIcon from '../Assets/facebook.svg'
import linkedinIcon from '../Assets/linkedin.svg'
import githubIcon from '../Assets/icons8-github.svg'

function Footer() {
  return (
    <div className="footer">
              
            
            <div className="media-wrapper">
                <div className="media-icon">
                    <img src={facebookIcon} alt="facebook"/>
                </div>
                <div className="media-icon">
                    <img src={githubIcon} alt="github"/>
                </div>
                <div className="media-icon">
                    <img src={linkedinIcon} alt="linkedin"/>
                </div>
            </div>

            <div className="copy-right">
                <p>&#169; Santos Rafaelo 2024</p>
            </div>

    </div>
  )
}

export default Footer
