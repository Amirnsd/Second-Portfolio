import React from 'react'
import "./AboutMe.css"
import {FaDownload, FaGithub, FaLinkedin} from "react-icons/fa"
import gif from "../assets/aboutMe.gif"
import MyPDF from "../assets/Resume.pdf"

const Aboutme = () => {
  return (
    <div className='about'>
      <h2 >ABOUT ME</h2>
        <div className='about-container'>
            
          <div className='about-left'>
            <p>I am Amirhossein, a talented front-end developer with a deep passion for creating stunning user interfaces and crafting engaging web experiences. My expertise in HTML, CSS, and JavaScript allows me to bring designs to life and turn them into functional, dynamic websites that captivate users.</p>
  <p>With a keen eye for detail and a strong understanding of UX principles, I take pride in crafting intuitive and seamless user journeys that leave a lasting impact on visitors. As a front-end developer, I am committed to staying up-to-date with the latest trends and technologies in the industry. I am always eager to learn new frameworks and libraries, like React and Vue.js, to enhance my development skills and deliver cutting-edge solutions.</p>
  <p>Translating design mockups into pixel-perfect code is one of my strong suits. I find joy in ensuring that every element of a website aligns perfectly, creating a visually appealing and polished result.</p>

Beyond coding, I am fascinated by the world of UI/UX design. Sketching wireframes and experimenting with new design trends excites me as I continually seek to improve my craft. Collaborating with a team or working on individual projects, I strive to produce visually stunning and highly functional websites that exceed expectations.

My enthusiasm for web development and my passion for creative problem-solving make me an invaluable asset to any project. I am always ready to take on new challenges and push the boundaries of what's possible on the web.

             
            
            <a href={MyPDF} download="Resume.pdf"><button >DOWNLOAD CV<FaDownload size={15} style={{color: "#000", marginLeft:"10"}}/></button></a>
            
            <div className='social-medias'>
            <a href="https://www.linkedin.com/in/amirhossein-nosratoddin-600304249/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} style={{color:"white"}} /> <span className="space">Follow on Linkedln</span> </a>
            <a href="https://github.com/Amirnsd" target="_blank" rel="noopener noreferrer"><FaGithub size={20} style={{color:"white"}}/> <span className="space">Follow on GitHub</span> </a>
            </div>
         

          </div> 

          <div className='about-right'>
           <img src={gif} alt='gif' style={{marginTop:60}} />  
           </div>

        </div>
    </div>
  )
}

export default Aboutme