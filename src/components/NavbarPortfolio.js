import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import CV from '../Documents/IssaDevCv.pdf';


const NavbarPortfolio = () => {
    return ( 
        <div className='row'>
            <nav className="navbar navbar-expand-lg col-md-12">
                <a href ='/' className="navbar-brand"><span><i className='fa fa-code' style={{color:'#473be7', fontSize:'30px'}}></i></span><strong>ISSA DIA</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">   
                        <i className="fa fa-navicon"></i>
                    </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to = {CV} target = "_blank">RESUME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="#aboutme">ABOUT ME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="#projects">PROJECTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
             </nav>
           
    </div>
   
     );
}
 
export default NavbarPortfolio;