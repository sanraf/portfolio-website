import React from 'react'
import '../Styles/Footer.css'
import facebookIcon from '../Assets/facebook.svg'
import linkedinIcon from '../Assets/linkedin.svg'
import githubIcon from '../Assets/icons8-github.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
              
            
            <div className="media-wrapper">
                <Link className="media-icon" target="_blank" rel="noopener noreferrer" >
                        <img src={facebookIcon} alt="facebook"/>
                </Link>

                <Link className="media-icon" target="_blank" rel="noopener noreferrer" to={'https://github.com/sanraf?tab=repositories'}>
                <img src={githubIcon} alt="github"/>
                </Link>

                <Link className="media-icon" target="_blank" rel="noopener noreferrer" >
                <img src={linkedinIcon} alt="linkedin"/>
                </Link>
            </div>

            <div className="copy-right">
                <p>&#169; Santos Rafaelo 2024</p>
            </div>

    </div>
  )
}

export default Footer
