import React from "react";
import "../Styles/NewCard.css";
import noteLogo from "../Assets/brand1-modified.png";
import book1Icon from "../Assets/story1.png";
import book2Icon from "../Assets/story2.png";
import book3Icon from "../Assets/story3.png";
import book4Icon from "../Assets/story4.png";
import book5Icon from "../Assets/story5.png";
import book6Icon from "../Assets/story6.png";
import book7Icon from "../Assets/story7.png";
import book8Icon from "../Assets/story8.png";
import java from "../Assets/icons8-java.svg";
import android from "../Assets/icons8-android-logo.svg";
import reactIcon from '../Assets/icons8-react-js.svg';
import sql from '../Assets/icons8-my-sql.svg';
import roomDB from '../Assets/icons8-database-administrator-100.png'
import { Link } from "react-router-dom";

function NewCard() {
  const project2Images = [
    { url: book1Icon },
    { url: book2Icon },
    { url: book3Icon },
    { url: book4Icon },
    { url: book5Icon },
    { url: book6Icon },
    { url: book7Icon },
    { url: book8Icon },
  ];
  return (
        <div className="project-holder">

            <h1>new cards</h1>
            <div className="card-wrapper">

            <div className="outliner">

            <div className="card-mobile-border">

                <div className="top-mobile-card">
                    <img src={noteLogo}/>
                    <h2>Smart Note</h2>
                    <h4>MOBILE/TABLET VERSION</h4>

                </div>

                <div className="bottom-card">

                    <div className="info-box">
                        <h3>Project Name</h3>
                        <div className="img-div">
                            <img src={java}/>
                            <h4>java</h4>
                            <img src={android}/>
                            <h4>android</h4>
                            <img src={roomDB}/>
                            <h4>room DB</h4>
                            
                            
                        </div>
                    </div>

                    <div className="button_card">
                        <span className='view-projects'  >view work</span>
                        <Link className='view-repos' target="_blank" rel="noopener noreferrer" to={'https://github.com/sanraf/Smart-Book.git'}>Repo</Link>
                    </div>

                </div>

            </div>

            </div>

            <div className="outliner">

            <div className="card-deskTop-border">

                <div className="top-deskTop-card">

                </div>

                <div className="bottom-card">

                    <div className="info-box">
                        <h3>Project Name</h3>
                        <div className="img-div">
                            <img src={java}/>
                            <h4>java</h4>
                            <img src={sql}/>
                            <h4>MYSQL</h4>
                            <img src={reactIcon}/>
                            <h4>react js</h4>
                        </div>
                    </div>

                    <div className="button_card">
                        <span className='view-projects'  >view work</span>
                        <Link className='view-repos' target="_blank" rel="noopener noreferrer" to={'https://github.com/sanraf/Smart-Book.git'}>Repo</Link>
                    </div>

                </div>

            </div>

            </div>

            </div>

        </div>


//     <ul class="cards">
//   <li>
//     <a href="" class="card">
//       <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
//       <div class="card__overlay">
//         <div class="card__header">
//           <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
//           <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
//           <div class="card__header-text">
//             <h3 class="card__title">Jessica Parker</h3>            
//             <span class="card__status">1 hour ago</span>
//           </div>
//         </div>
//         <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
//       </div>
//     </a>      
//   </li>
//   <li>
//     <a href="" class="card">
//       <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
//       <div class="card__overlay">        
//         <div class="card__header">
//           <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
//           <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
//           <div class="card__header-text">
//             <h3 class="card__title">kim Cattrall</h3>
//             <span class="card__status">3 hours ago</span>
//           </div>
//         </div>
//         <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
//       </div>
//     </a>
//   </li>
//   <li>
//     <a href="" class="card">
//       <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
//       <div class="card__overlay">
//         <div class="card__header">
//           <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
//           <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
//           <div class="card__header-text">
//             <h3 class="card__title">Jessica Parker</h3>
//             <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span>            
//             <span class="card__status">1 hour ago</span>
//           </div>
//         </div>
//         <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
//       </div>
//     </a>
//   </li>
//   <li>
//     <a href="" class="card">
//       <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
//       <div class="card__overlay">
//         <div class="card__header">
//           <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
//           <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
//           <div class="card__header-text">
//             <h3 class="card__title">kim Cattrall</h3>
//             <span class="card__status">3 hours ago</span>
//           </div>          
//         </div>
//         <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
//       </div>
//     </a>
//   </li>    
//     </ul>

    // <div class="macbook">
    //   <div class="screen">
    //     <div class="viewport" style={{ backgroundImage: book1Icon }}></div>
    //   </div>
    //   <div class="base"></div>
    //   <div class="notch"></div>
    // </div>
    // <div class="container">
    // <div class="card">
    //     <div class="face face1">
    //         <div class="content">
    //             <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>
    //             <h3>Design</h3>
    //         </div>
    //     </div>
    //     <div class="face face2">
    //         <div class="content">
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
    //                 <a href="#">Read More</a>
    //         </div>
    //     </div>
    // </div>
    // <div class="card">
    //     <div class="face face1">
    //         <div class="content">
    //             <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"/>
    //             <h3>Code</h3>
    //         </div>
    //     </div>
    //     <div class="face face2">
    //         <div class="content">
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
    //                 <a href="#">Read More</a>
    //         </div>
    //     </div>
    // </div>
    // <div class="card">
    //     <div class="face face1">
    //         <div class="content">
    //             <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>
    //             <h3>Launch</h3>
    //         </div>
    //     </div>
    //     <div class="face face2">
    //         <div class="content">
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
    //                 <a href="#">Read More</a>
    //         </div>
    //     </div>
    // </div>
    // </div>
  );
}

export default NewCard;
