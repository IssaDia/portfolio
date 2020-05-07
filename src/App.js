import React from 'react'
import './App.css'
import NavbarPortfolio from './components/NavbarPortfolio'
import LandingPage from './components/LandingPage'
import 'bootstrap/dist/css/bootstrap.css'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'



function Homepage() {
  return (
    <>
    <NavbarPortfolio />
    <LandingPage />
    <Projects />
    <AboutMe />
    </>
  );
}

export default Homepage;
