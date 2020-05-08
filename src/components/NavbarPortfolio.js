import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import CV from '../Documents/IssaDevCv.pdf';


const NavbarPortfolio = () => {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg">     
                <div>
                <Link to ='/' className="navbar-brand"><span><i className='fa fa-code' style={{color:'#473be7', fontSize:'30px'}}></i></span><strong>ISSA DIA</strong></Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to = {CV} target = "_blank">CV</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" activeClassName='is-active'  to="#aboutme">A PROPOS DE  MOI</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link"  to="#projects">PROJETS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
             </nav>
           
    </>
   
     );
}
 
export default NavbarPortfolio;