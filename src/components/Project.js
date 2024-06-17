import React, { createContext, useState } from "react";
import "../Styles/Project.css";
import { Link, useNavigate } from "react-router-dom";

// import "../Styles/NewCard.css";
import noteLogo from "../Assets/brand1-modified.png";
import scanLogo from "../Assets/smart_scan_launcher-1.png";
import storyLogo from "../Assets/smart book.png";
import openbook from "../Assets/icons8-open-book-64.png";
import css from "../Assets/icons8-css.svg";
import html from "../Assets/icons8-html-5-48.png";
import java from "../Assets/icons8-java.svg";
import android from "../Assets/icons8-android-logo.svg";
import reactIcon from "../Assets/icons8-react-js.svg";
import sql from "../Assets/icons8-my-sql.svg";
import pmsImage from "../Assets/pms1.png"
import roomDB from "../Assets/icons8-database-administrator-100.png";


export const ProjectNameContext = createContext();
function Project({projectRef}) {
  const navigate = useNavigate();

    const handleMobileView = (name,gitRepo) =>{
      window.sessionStorage.setItem('PROJECT_NAME', name);
      window.sessionStorage.setItem('PROJECT_REPO', gitRepo);
      navigate('/view-project')
    }

    const handleDeskView = (name,gitRepo) =>{
      window.sessionStorage.setItem('PROJECT_NAME', name);
      window.sessionStorage.setItem('PROJECT_REPO', gitRepo);
      navigate('/view-project-v2')
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
                    <span className="view-projects" onClick={()=>handleMobileView('Smart Note','https://github.com/sanraf/Smart-Note-App.git')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/sanraf/Smart-Note-App.git"}
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
                    <h3>Smart Scan</h3>
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
                    <span className="view-projects" onClick={()=>handleMobileView('Smart Scan','https://github.com/sanraf/Smart-Book.git')}>view work</span>
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
                    <span className="view-projects" onClick={()=>handleMobileView('Smart Book','https://github.com/sanraf/Smart-Book.git')}>view work</span>
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
                    <h3>JoystiTech</h3>
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
                    <span className="view-projects" onClick={()=>handleDeskView('JoystiTech','https://github.com/sanraf/Joystitech.git')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/sanraf/Joystitech.git"}
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
                    <h3>Novel Nest</h3>
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
                    <span className="view-projects" onClick={()=>handleDeskView('Novel Nest','https://github.com/sanraf/Assignment1.git')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"'https://github.com/sanraf/Assignment1.git"}
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
                    <h3>SchoolWeb</h3>
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
                    <span className="view-projects" onClick={()=>handleDeskView('SchoolWeb','https://github.com/sanraf/my-school-website.git')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/sanraf/my-school-website.git"}
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
                    <span className="view-projects" onClick={()=>handleDeskView('EziVote','https://github.com/sanraf/EziVote.git')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/sanraf/EziVote.git"}
                    >
                      Repo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="outliner">
              <div className="card-deskTop-border">
                <div className="top-deskTop-card-pms"></div>

                <div className="bottom-card">
                  <div className="info-box">
                    <h3>Project Management System</h3>
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
                    <span className="view-projects" onClick={()=>handleDeskView('Project Management System','https://github.com/tshimologong-react-project/Project-Management-System.git')}>view work</span>
                    <Link
                      className="view-repos"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://github.com/tshimologong-react-project/Project-Management-System.git"}
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
// https://sanraf.github.io/Assignment1/
// https://sanraf.github.io/Joystitech/
// https://sanraf.github.io/my-school-website/