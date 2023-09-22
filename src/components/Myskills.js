import React from 'react'
import '../components/Myskills.css'
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import JS from "../assets/JS.png";
import ReactJs from "../assets/ReactJs.png";
import Git from "../assets/Git.png";
import C from "../assets/C.png";


const Myskills = () => {
  return (
    <div className='skills'>
       <div className='skills-container'>
        
       <h1>My Skills</h1>
        
        <div className='box'>
            
           <div className='box-row1'>
  
        <div className='html-box'>
          <img src={Html} alt='Html' />
          <h2>Html</h2>
          <p>Beginner</p>
        </div>

        <div className='Css-box'>
         <img src={Css} alt='Css' />
         <h2>Css</h2>
         <p>Beginner</p>
        </div>
        
        <div className='JS-box'>
         <img src={JS} alt='JS' />
         <h2>JavaScript</h2>
         <p>Beginner</p>
         </div>

         </div>


         <div className='box-row2'>
      
         <div className='React-box'>
         <img src={ReactJs} alt='ReactJs' />
         <h2>React</h2>
         <p>Beginner</p>
         </div>

         <div className='Git-box'>
         <img src={Git} alt='Git' />
         <h2>Git</h2>
         <p>Beginner</p>
         </div>

         <div className='C-box'>
         <img src={C} alt='C' />
         <h2>C++</h2>
         <p>Beginner</p>
         </div>

         </div>
        

         </div>
       </div>
    </div>
  )
}

export default Myskills