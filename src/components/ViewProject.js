import React from 'react'
import '../Styles/ViewProject.css'
import { Link, useNavigate } from 'react-router-dom'

function ViewProject() {
    const navigste = useNavigate()
  return (
    <div className='view-project_wrapper'>
        <div className='projects-wrapp'>
            <div className='project-1'>

            </div>

            <div className='project-button'>
                <button onClick={()=>navigste('/')}>back</button>
                <Link>Open repository</Link>
            </div>
        </div>

    </div>
  )
}

export default ViewProject
