import React from 'react'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

function Footer() {
  return (
    <div className="footer">
              
            
            <div className="media-wrapper">
                <Link className="media-icon" target="_blank" rel="noopener noreferrer"  >
                  <BsWhatsapp/>
                </Link>

                <Link className="media-icon" target="_blank" rel="noopener noreferrer" to={'https://github.com/sanraf?tab=repositories'}>
                  <FaGithub/>
                </Link>

                <Link className="media-icon" target="_blank" rel="noopener noreferrer" to={'https://linkedin.com/in/santos-rafaelo-a4511a260'}>
                  <FaLinkedin/>
                </Link>
            </div>
              <div className='hr-line'></div>
            <div className="copy-right">
                <p>&#169; Santos Rafaelo software developer 2024</p>
            </div>
    </div>
  )
}

export default Footer
