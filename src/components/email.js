import React from 'react'
import '../Styles/email.css'
import logo from '../Assets/logo.png'
import login from '../Assets/login-image1.png'

function email() {
  return (
    <div className='container'>

        <div className='header'>
        <img className='logo' src={logo}/>
    
        </div>

        <div className='content'>
        <p className='username'>Project Creation Confirmation</p>
        <p className='username'>Hi username</p>
        <p className='project-name'>
            Congradulation! Your project <span>Project Name</span> has been successfully created on <span>PMS</span>.
            We're excited to support your project's growth and development.If you need help, Contact our support team.
            
    
            </p>
            <p className='project-name'>Best regards</p>
            <p className='project-name'> PMS team</p>
        <img className='login' src={login}/>
        <a href='www.logo'>Link</a>
        </div>

        <p className='l'>I am a well grounded hard working graduate in mathematical science and two years of computer science studies at the North-West University. I spend my time exploring different technologies and engage in them,I seek to be involved in bringing better technological solutions that are robust and safer, and aiding to expanding the scope of human technological knowledge in automation</p>
        <p className='p'>I am a well grounded hard working graduate in mathematical science and two years of computer science studies at the North-West University. I spend my time exploring different technologies and engage in them,I seek to be involved in bringing better technological solutions that are robust and safer, and aiding to expanding the scope of human technological knowledge in automation</p>

    </div>
  )
}

export default email


