import React from 'react'
import './App.css'
import NavbarPortfolio from './components/NavbarPortfolio'
import LandingPage from './components/LandingPage'
import 'bootstrap/dist/css/bootstrap.css'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Localisation from './components/Localisation'
import Footer from './components/Footer'


function Homepage() {
  return (
    <div className='container-fluid'>
    <NavbarPortfolio />
    <LandingPage />
    <div id='projects'>
      <Projects />
    </div>
    <div id='aboutme'>
      <AboutMe />
    </div>
    <div id='contact'>
      <Contact />
     </div>
     <Localisation />
    <Footer />
    </div>
  );
}

export default Homepage;
