import React from 'react'
import starIcon from '../Assets/icons8-stars-48.png'
import upIcon from '../Assets/upbutton.png'
import '../Styles/Hero.css'
import { Link, useNavigate } from 'react-router-dom'

function Hero() {
    

    const scrollTop = ()=>{window.scrollTo(0,0)} 

  return (
    <div className="hero" id="myhome">
       
        <div className='up-wrapper'>
        <button className='up' ><a onClick={()=>scrollTop()} href='#my-home'><img src={upIcon}/></a></button>
       
        </div>
          
    
           <div className="hero__wrapper">
             
                   <div className="heading">
                       

                       <div className="sky">
                           
                           <div className="stars-1">
                               <img  src={starIcon} alt="stars"/>
                           </div>
   
                           <div className="stars-2">
                               <img  src={starIcon} alt="stars"/>
                           </div>
   
                           <div className="stars-3">
                               <img  src={starIcon} alt="stars"/>
                           </div>
   
                           <div className="stars-4">
                               <img  src={starIcon} alt="stars"/>
                           </div>

                        </div>

                       <h5>Hello, my name is</h5>
                       <h3>Santos Rafaelo</h3>
                    
                       <div className="typing-effect">
                           <h3>i am a software developer</h3>
                       </div>
                       <p>I design responsive and scalable frontend and backend products with great user experience.</p>
                       
                       <div className="heading__button">
                        <a href='#myproject' className="explore">Expore my work</a>
                       </div>


                       
                   </div>

           </div>

    </div>
  )
}

export default Hero
