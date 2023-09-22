import React from 'react'
import './ContactMe.css'

const ContactMe = () => {

  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyKIekqlGEaC99eae_Npjl8F4Wh6bKSNnP3SamCo8fAlhNJ6SPpJd5boUiEfAgWhd3x/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  //https://script.google.com/macros/s/AKfycbyKIekqlGEaC99eae_Npjl8F4Wh6bKSNnP3SamCo8fAlhNJ6SPpJd5boUiEfAgWhd3x/exec

  return (
     <div className='contact-form'>
             
     

      <h2>Contact Me</h2>

      <form className='form' >

        <input type='text' name='Name' placeholder='Enter Your Name'/>

   
        <input type='email' name='Email' placeholder='Enter Your Email'/>
        
        <input type='text' name='Subject' placeholder='Enter Your Subject'/>

  
        <textarea rows="6" placeholder='Enter Your Message'/>

        <button onSubmit={(e) => Submit(e)}>Submit</button>
      </form>


      
     </div>
  )
}

export default ContactMe