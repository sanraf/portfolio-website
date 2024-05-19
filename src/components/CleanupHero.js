import React from 'react'
import '../Styles/CleanupHero.css'
import NavBar from '../components/NavBar'
import upIcon from "../Assets/upbutton.png";
function CleanupHero() {
    const scrollTop = () => {
        window.scrollTo(0, 0);
      };
  return (
    <div className='cleanup-hero'>
          <div className="up-wrapper">
        <button className="up">
          <a onClick={() => scrollTop()} href="#my-home">
            <img src={upIcon} />
          </a>
        </button>
      </div>
        {/* <NavBar/> */}
        <p>
            hello
        </p>
    </div>
  )
}

export default CleanupHero