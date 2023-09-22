import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-container'>

             <Link to='/'>
                 <h1>My Portfolio.</h1>
            </Link>
             
        

            <ul className='navbar-container2'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/skills'>Skills</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>

                <li>
                    <FaBars size={20} style={{color: "#fff"}}/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar