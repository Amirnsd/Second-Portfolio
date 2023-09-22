import React from 'react'
import './HomeImage.css'
import backgroud from '../assets/background.jpg';
import { Link } from 'react-router-dom';

const HomeImage = () => {
  return (
    <div className='homeImage'>
        <div className='homeImage-container'>
            <div className='left'>
            <h2>FRONT-END DEVELOPER</h2>
               <h1>Hey! I Am  <span><br /><br />AMIRHOSSEIN </span></h1> 
               <p>I am a front-end developer who is passionate about web development</p>

               <Link to="/Contact">
               <button >Contact</button>
               </Link>
            </div>
           
          
            <div className='right'>   
                <img  src={backgroud} alt='background' />
            </div>   

        </div>

      
        
    </div>
  )
}

export default HomeImage