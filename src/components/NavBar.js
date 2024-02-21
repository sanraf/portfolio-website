import React from 'react'
import '../Styles/NavBar.css'
import '../Styles/DefaultColors.css'
import { Link } from 'react-router-dom'
import menu from '../Assets/icons8-menu.svg'
import facebookIcon from '../Assets/facebook.svg'
import linkedinIcon from '../Assets/linkedin.svg'
import githubIcon from '../Assets/icons8-github.svg'

function NavBar() {
  return (
    <div className='Navbar-wrapper'>

        <header id="myheader"> 
                
                <input type="checkbox" id='nav-toggle' className='nav-toggle' style={{display:'none'}}/>

                <nav className='nav'>
                    <div className="list-icon-wrapper">
                        
                          <a href='#myabout'>About</a>
                          <a href='#myskills'>Skills</a>
                          <a href='#myproject'>Projects</a>
                          <a href='#mycontact'>Contact</a>
                          
                    </div>
                    
                    <div className='media-wrapper'>

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
                  
                </nav>
                

                <label htmlFor="nav-toggle" className='nav-toggle-label'>
                    <img src={menu}/>
                </label>
               

        </header>
    </div>
  )
}

export default NavBar
