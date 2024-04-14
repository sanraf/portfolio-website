import React, { useState } from 'react'
import '../Styles/Contact.css'
import facebookIcon from '../Assets/facebook.svg'
import copyIcon from '../Assets/icons8-copy-100.png'
import emailIcon from '../Assets/icons8-email-100.png'
import locationIcon from '../Assets/icons8-location-100.png'
import phoneIcon from '../Assets/icons8-phone.svg'

function Contact() {


  const [isCopied, setIsCopied] = useState(false);

  const contact = {
    phone:'0671089950',
    altphone:'0710292391',
    email:'santoschristopher199@gmail.com',
    myLocation:'johannessburg 1520'
  }

  const handleCopy = (textToCopy) => {
   
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('copied')
        setTimeout(() => setIsCopied(false), 2000); 
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };
  return (
    <div className="contact" id='mycontact' >


        <div className="contact-title">
            <h1>contact</h1>
            {/* <hr className="hr-line"/> */}
        </div>

        <div className='mycontact'>

            <div className='icon-Wrapper-1' >
                <h5 ><img src={emailIcon}/>{contact.email}</h5>
                <img className='copyIcon' src={copyIcon} onClick={()=>handleCopy(contact.email)}/>
            </div>

            <div className='icon-Wrapper-2'>
                <h5><img src={phoneIcon}/>{contact.phone}</h5>
                <img className='copyIcon' src={copyIcon} onClick={()=>handleCopy(contact.phone)}/>
            </div>
            <div className='icon-Wrapper-2'>
                <h5><img src={phoneIcon}/>{contact.altphone}</h5>
                <img className='copyIcon' src={copyIcon} onClick={()=>handleCopy(contact.altphone)}/>
            </div>

            <div className='icon-Wrapper-3'>
                <h5><img src={locationIcon}/>{contact.myLocation}</h5>
                <img className='copyIcon' src={copyIcon} onClick={()=>handleCopy(contact.myLocation)}/>
            </div>

            
           
            

        </div>

    </div>
  )
}

export default Contact
