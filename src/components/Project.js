import React, { createContext, useState } from 'react'
import '../Styles/Project.css'
import project1 from '../Assets/brand1-modified.png'
import project2 from '../Assets/smart book.png'
import project3 from '../Assets/icons8-open-book-64.png'
import project4 from '../Assets/ezivote.png'
import project5 from '../Assets/Sebitja Secondary.png'
import { Link, useNavigate } from 'react-router-dom'
import ImageViewer from '../components/ImageViewer'

export const ProjectNameContext = createContext()
function Project() {
 const navigate = useNavigate()
 const [project,setProject] = useState(true)
 const [projectName,setProjectName] = useState('')


const viewProject = (name)=> {setProjectName(name);setProject(false)}

const project1Desc = 'The Android Java-based note-taking app, powered by Room Database, simplifies note organization and management. With a user-friendly interface, users can effortlessly create, edit, and delete notes on the go. Reliable storage and seamless retrieval ensure productivity and accessibility'

const project2Desc = 'Smart Books is an Android Java-based book app is tailored for immersive reading experiences, offering users access to a curated selection of short stories and PDFs. With a sleek interface optimized for storytelling, users can easily navigate through various genres and dive into captivating narratives. Powered by Room Database, the app guarantees seamless storage and retrieval, ensuring users can enjoy their favorite stories on the go'

const project3Desc = 'School-website is  web-based school app, combining React frontend and Spring Boot backend, empowers students to calculate AP scores and access posts, galleries, and blogs. With a user-friendly interface and robust data management, it enriches learning experiences and fosters academic growth.'

const project4Desc = 'EziVote: A dynamic online voting platform crafted with Spring Boot for backend functionality and React for a seamless frontend experience. Users are empowered with secure login and registration features, while our Java-powered backend ensures robust authentication and data management. With a user-friendly interface powered by React.'


const project5Desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Dignissim convallis aenean et tortor at risus viverra adipiscing.'




  return (
 <>
    {project ?     <div className="projects" id="myproject">
          
    <div className="project__title">
        <h1>viewing all project</h1>
        <hr/>
    </div>


    <div className='project-wrapper'>

        <div className="card-1">
            <div className="card__icon"> <img src={project1} alt=""/></div>
            <h4>Smart note</h4>
            <p>{project1Desc}</p>
            <div className="button_wrapper">
              <span className='view-project' onClick={()=>viewProject('Smart note') } >view work</span>
              <Link className='view-repo' target="_blank" rel="noopener noreferrer" to={'https://github.com/sanraf/Smart-Note-App.git'}>view Repository</Link>
            </div>
    
        </div>

        <div className="card-1">
            <div className="card__icon"> <img src={project2} alt=""/></div>
            <h4>Smart books</h4>
            <p>{project2Desc}</p>
            <div className="button_wrapper">
            <span className='view-project' onClick={()=>viewProject('Smart books' )} >view work</span>
              <Link className='view-repo' target="_blank" rel="noopener noreferrer" to={'https://github.com/sanraf/Smart-Book.git'}>view Repository</Link>
            </div>
    
        </div>

        <div className="card-1">
            <div className="card__icon"> <img src={project5} alt=""/></div>
            <h4>School website</h4>
            <p>{project3Desc}</p>
            <div className="button_wrapper">
            <span className='view-project'  ><Link className='project' rel="noopener noreferrer" target="_blank" to={'https://sanraf.github.io/my-school-website/'}>view work</Link></span>
              <Link className='view-repo' to={'https://github.com/sanraf/my-school-website/'}>view Repository</Link>
            </div>
    
        </div>

        <div className="card-1">
            <div className="card__icon"> <img src={project3} alt=""/></div>
            <h4>Novel nest</h4>
            <p>{project5Desc}</p>
            <div className="button_wrapper">
            <span className='view-project' ><Link className='project' target="_blank" rel="noopener noreferrer" to={'https://sanraf.github.io/Assignment1/'}>view work</Link></span>
              <Link className='view-repo' to={'https://github.com/sanraf/Assignment1'}>view Repository</Link>
            </div>
            
        </div>

        <div className="card-1">
            <div class="logo">
                <h2 class="j-logo">J</h2>
                <h2 class="t-logo">T</h2>
            </div>
            <h4>JoystiTeech</h4>
            <p>{project5Desc}</p>
            <div className="button_wrapper">
            <span className='view-project'  ><Link className='project' target="_blank" rel="noopener noreferrer" to={'https://sanraf.github.io/Joystitech/'}>view work</Link></span>
              <Link className='view-repo' to={'https://github.com/sanraf/Joystitech'}>view Repository</Link>
            </div>
            
        </div>

        <div className="card-1">
            <div className="card__icon eazivot"> <img src={project4} alt=""/></div>
            <h4>EziVote</h4>
            <p>{project4Desc}</p>
            <div className="button_wrapper">
            <span className='view-project' onClick={()=>viewProject('EziVote')} > view work</span>
              <Link className='view-repo'target="_blank" rel="noopener noreferrer" to={'https://github.com/sanraf/EziVote.git'}>view Repository</Link>
            </div>
    
        </div>

    </div>

</div>:<ImageViewer name={projectName} setProject={setProject}/>}
    
</>
  )
}

export default Project
