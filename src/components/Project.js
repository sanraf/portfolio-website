import React, { createContext, useState } from "react";
import "../Styles/Project.css";
import project1 from "../Assets/brand1-modified.png";
import project2 from "../Assets/smart book.png";
import project3 from "../Assets/icons8-open-book-64.png";
import project4 from "../Assets/ezivote.png";
import project5 from "../Assets/Sebitja Secondary.png";
import { Link, useNavigate } from "react-router-dom";

// import "../Styles/NewCard.css";
import noteLogo from "../Assets/brand1-modified.png";
import scanLogo from "../Assets/smart_scan_launcher-1.png";
import storyLogo from "../Assets/smart book.png";
import openbook from "../Assets/icons8-open-book-64.png";
import book3Icon from "../Assets/story3.png";
import book4Icon from "../Assets/story4.png";
import book5Icon from "../Assets/story5.png";
import book6Icon from "../Assets/story6.png";
import css from "../Assets/icons8-css.svg";
import html from "../Assets/icons8-html-5-48.png";
import java from "../Assets/icons8-java.svg";
import android from "../Assets/icons8-android-logo.svg";
import reactIcon from "../Assets/icons8-react-js.svg";
import sql from "../Assets/icons8-my-sql.svg";
import roomDB from "../Assets/icons8-database-administrator-100.png";
import MobileMockup from "../components/MobileMockup";
import DesktopMockup from "./DesktopMockup";
import ViewProject from "./ViewProject";

export const ProjectNameContext = createContext();
function Project({projectRef}) {
  const navigate = useNavigate();
  const [myvalue,setMyvalue] = useState('');
  const [isViewProject, setisViewProject] = useState(false);
  const [isMobile, setIsMobleView] = useState(true);
  const [isViewGone, setIsViewGone] = useState(!false);
  const [project, setProject] = useState(true);
  const [projectName, setProjectName] = useState("");
const msg = 'HELLO'
  const project1Desc =
    "The Android Java-based note-taking app, powered by Room Database, simplifies note organization and management. With a user-friendly interface, users can effortlessly create, edit, and delete notes on the go. Reliable storage and seamless retrieval ensure productivity and accessibility";

  const project2Desc =
    "Smart Books is an Android Java-based book app is tailored for immersive reading experiences, offering users access to a curated selection of short stories and PDFs. With a sleek interface optimized for storytelling, users can easily navigate through various genres and dive into captivating narratives. Powered by Room Database, the app guarantees seamless storage and retrieval, ensuring users can enjoy their favorite stories on the go";

  const project3Desc =
    "School-website is  web-based school app, combining React frontend and Spring Boot backend, empowers students to calculate AP scores and access posts, galleries, and blogs. With a user-friendly interface and robust data management, it enriches learning experiences and fosters academic growth.";

  const project4Desc =
    "EziVote: A dynamic online voting platform crafted with Spring Boot for backend functionality and React for a seamless frontend experience. Users are empowered with secure login and registration features, while our Java-powered backend ensures robust authentication and data management. With a user-friendly interface powered by React.";

  const project5Desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Dignissim convallis aenean et tortor at risus viverra adipiscing.";


    const handleMobileView = (name) =>{
      localStorage.setItem('project name',JSON.stringify(name))
      navigate('/view-project')
    }


  return (
    <div className="projects" id="myproject" ref={projectRef} >
      <div className="project-title">
        <h1>projects</h1>
      </div>

      <div className="card-wrapper">
  
          <>
            <div className="outliner">
              <div className="card-mobile-border">
                <div className="top-mobile-card-note">
                  <img src={noteLogo} />
                  <h2 note="NoteApp">Smart Note</h2>
                  <h4>Mobile/Tablet</h4>
                </div>
       
                <div className="bottom-card">
                  <div className="info-box">
                    <h3 data-change="Technologies">Smart Note</h3>
                    <div className="img-div">
                      <img src={java} />
                      <h4>java</h4>
                      <img src={android} />
                      <h4>android</h4>
                      <img src={roomDB} />
                      <h4>room DB</h4>
                    </div>
                  </div>

                  <div className="button_card">
                    <span className="view-projects" onClick={()=>handleMobileView('Smart Note')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/sanraf/Smart-Book.git"}
                    >
                      Repo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="outliner">
              <div className="card-mobile-border">
                <div className="top-mobile-card-scan">
                  <img src={scanLogo} />
                  <h2 note="UtilityApp">Smart Scan</h2>
                  <h4>Mobile/Tablet</h4>
                </div>

                <div className="bottom-card">
                  <div className="info-box">
                    <h3>Project Name</h3>
                    <div className="img-div">
                      <img src={java} />
                      <h4>java</h4>
                      <img src={android} />
                      <h4>android</h4>
                      <img src={roomDB} />
                      <h4>room DB</h4>
                    </div>
                  </div>

                  <div className="button_card">
                    <span className="view-projects" onClick={()=>handleMobileView('Smart Scan')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/sanraf/Smart-Book.git"}
                    >
                      Repo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="outliner">
              <div className="card-mobile-border">
                <div className="top-mobile-card-book">
                  <img src={storyLogo} />
                  <h2 note="UtilityApp">Smart Book</h2>
                  <h4>Mobile/Tablet</h4>
                </div>

                <div className="bottom-card">
                  <div className="info-box">
                    <h3>Smart Book</h3>
                    <div className="img-div">
                      <img src={java} />
                      <h4>java</h4>
                      <img src={android} />
                      <h4>android</h4>
                      <img src={roomDB} />
                      <h4>Firebase</h4>
                    </div>
                  </div>

                  <div className="button_card">
                    <span className="view-projects" onClick={()=>handleMobileView('Smart Book')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/sanraf/Smart-Book.git"}
                    >
                      Repo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="outliner">
              <div className="card-deskTop-border">
                <div className="top-deskTop-card-joyTech">
                  <div className="header">
                    <div className="logo">
                      <h2 className="d-logo">J</h2>
                      <h2 className="z-logo">T</h2>
                    </div>

                    <ul className="links">
                      <li className="about">
                        <a href="#">about</a>
                      </li>
                      <li className="article">
                        <a href="#">articles</a>
                      </li>
                    </ul>

                    <button className="subscribe-button">SUBSCRIBE</button>
                  </div>
                  <h3 value="GadgetWebsite">JoyTech</h3>
                </div>

                <div className="bottom-card">
                  <div className="info-box">
                    <h3>Project Name</h3>
                    <div className="img-div">
                      <img src={html} />
                      <h4>html</h4>
                      <img src={css} />
                      <h4>CSS</h4>
                      <img style={{ opacity: "0" }} src={reactIcon} />
                      <h4 style={{ opacity: "0" }}>react js</h4>
                    </div>
                  </div>

                  <div className="button_card">
                    <span className="view-projects" onClick={()=>handleMobileView('JoyTech')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/sanraf/Smart-Book.git"}
                    >
                      Repo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="outliner">
              <div className="card-deskTop-border">
                <div className="top-deskTop-card-novelNest">
                  <div className="top-bar">
                    <div className="brand-holder">
                      <img className="logo" src={openbook} alt="" />
                      <p className="brand">Novel Nest</p>
                    </div>

                    <div className="top-nav">
                      <ul className="top">
                        <li>
                          <a>Home</a>
                        </li>
                        <li>
                          <a>About</a>
                        </li>
                        <li>
                          <a>Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bottom-card">
                  <div className="info-box">
                    <h3>Project Name</h3>
                    <div className="img-div">
                      <img src={html} />
                      <h4>html</h4>
                      <img src={css} />
                      <h4>CSS</h4>
                      <img style={{ opacity: "0" }} src={reactIcon} />
                      <h4 style={{ opacity: "0" }}>react js</h4>
                    </div>
                  </div>

                  <div className="button_card">
                    <span className="view-projects" onClick={()=>handleMobileView('Novel Nest')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/sanraf/Smart-Book.git"}
                    >
                      Repo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="outliner">
              <div className="card-deskTop-border">
                <div className="top-deskTop-card-schoolWeb"></div>

                <div className="bottom-card">
                  <div className="info-box">
                    <h3>schoolWeb</h3>
                    <div className="img-div">
                      <img src={java} />
                      <h4>java</h4>
                      <img src={sql} />
                      <h4>MYSQL</h4>
                      <img src={reactIcon} />
                      <h4>react js</h4>
                    </div>
                  </div>

                  <div className="button_card">
                    <span className="view-projects" onClick={()=>handleMobileView('schoolWeb')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/sanraf/Smart-Book.git"}
                    >
                      Repo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="outliner">
              <div className="card-deskTop-border">
                <div className="top-deskTop-card-eziVote"></div>

                <div className="bottom-card">
                  <div className="info-box">
                    <h3>EziVote</h3>
                    <div className="img-div">
                      <img src={java} />
                      <h4>java</h4>
                      <img src={sql} />
                      <h4>MYSQL</h4>
                      <img src={reactIcon} />
                      <h4>react js</h4>
                    </div>
                  </div>

                  <div className="button_card">
                    <span className="view-projects" onClick={()=>handleMobileView('EziVote')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/sanraf/Smart-Book.git"}
                    >
                      Repo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        
      </div>
    </div>

    //  <>
    //     {project ?     <div className="projects" id="myproject">

    //     <div className="project__title">
    //         <h1>viewing all project</h1>
    //         <hr/>
    //     </div>

    //     <div className='project-wrapper'>
    //         <div className="card-1 card-2 card-4">
    //             <div className="card__icon">
    //             <img src={project1} alt=""/>
    //             <svg className='half-circle' viewBox='0 0 106 57'>
    //               <path d='M102 4c0 27.1-2 49-49 49S4 31.1 4 4'></path>
    //             </svg>
    //             </div>
    //             <h4>Smart note</h4>
    //             {/* <p>{project1Desc}</p> */}
    //             <div className="button_wrapper">
    //               <span className='view-project' onClick={()=>viewProject('Smart note') } >view work</span>
    //               <Link className='view-repo' target="_blank" rel="noopener noreferrer" to={'https://github.com/sanraf/Smart-Note-App.git'}>view Repository</Link>
    //             </div>

    //         </div>

    //         <div className="card-1 card-2 card-4">
    //             <div className="card__icon"> <img src={project2} alt=""/></div>
    //             <h4>Smart books</h4>
    //             {/* <p>{project2Desc}</p> */}
    //             <div className="button_wrapper">
    //             <span className='view-project' onClick={()=>viewProject('Smart books' )} >view work</span>
    //               <Link className='view-repo' target="_blank" rel="noopener noreferrer" to={'https://github.com/sanraf/Smart-Book.git'}>view Repository</Link>
    //             </div>

    //         </div>

    //         <div className="card-1 card-2 card-5">
    //             <div className="card__icon"> <img src={project5} alt=""/></div>
    //             <h4>School website</h4>
    //             {/* <p>{project3Desc}</p> */}
    //             <div className="button_wrapper">
    //             <span className='view-project'  ><Link className='project' rel="noopener noreferrer" target="_blank" to={'https://sanraf.github.io/my-school-website/'}>view work</Link></span>
    //               <Link className='view-repo' to={'https://github.com/sanraf/my-school-website/'}>view Repository</Link>
    //             </div>

    //         </div>

    //         <div className="card-1 card-3 card-5">
    //             <div className="card__icon"> <img src={project3} alt=""/></div>
    //             <h4>Novel nest</h4>
    //             {/* <p>{project5Desc}</p> */}
    //             <div className="button_wrapper">
    //             <span className='view-project' ><Link className='project' target="_blank" rel="noopener noreferrer" to={'https://sanraf.github.io/Assignment1/'}>view work</Link></span>
    //               <Link className='view-repo' to={'https://github.com/sanraf/Assignment1'}>view Repository</Link>
    //             </div>

    //         </div>

    //         <div className="card-1 card-3 card-6">
    //             <div class="logo">
    //                 <h2 class="j-logo">J</h2>
    //                 <h2 class="t-logo">T</h2>
    //             </div>
    //             <h4>JoystiTeech</h4>
    //             {/* <p>{project5Desc}</p> */}
    //             <div className="button_wrapper">
    //             <span className='view-project'  ><Link className='project' target="_blank" rel="noopener noreferrer" to={'https://sanraf.github.io/Joystitech/'}>view work</Link></span>
    //               <Link className='view-repo' to={'https://github.com/sanraf/Joystitech'}>view Repository</Link>
    //             </div>

    //         </div>

    //         <div className="card-1 card-3 card-6">
    //             <div className="card__icon eazivot"> <img src={project4} alt=""/></div>
    //             <h4>EziVote</h4>
    //             {/* <p>{project4Desc}</p> */}
    //             <div className="button_wrapper">
    //             <span className='view-project' onClick={()=>viewProject('EziVote')} > view work</span>
    //               <Link className='view-repo'target="_blank" rel="noopener noreferrer" to={'https://github.com/sanraf/EziVote.git'}>view Repository</Link>
    //             </div>

    //         </div>

    //     </div>

    // </div>:<ImageViewer name={projectName} setProject={setProject}/>}

    // </>
  );
}

export default Project;
