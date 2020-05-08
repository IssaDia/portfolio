import React from 'react'
import './App.css'
import NavbarPortfolio from './components/NavbarPortfolio'
import LandingPage from './components/LandingPage'
import 'bootstrap/dist/css/bootstrap.css'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Localisation from './components/Location'
import Footer from './components/Footer'


function Homepage() {
  return (
    <>
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
    </>
  );
}

export default Homepage;
