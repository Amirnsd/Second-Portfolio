import React from 'react'
import Navbar from '../components/Navbar'
import HomeImage from '../components/HomeImage'
import Myskills from '../components/Myskills'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeImage />
      <Myskills />
      <AboutMe />
      <ContactMe />
    </div>
  )
}

export default Home