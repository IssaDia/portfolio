import React from 'react'
import { Link} from 'react-router-dom'

const NavbarPortfolio = () => {
    return ( 
        <>
            <nav className="navbar row">
                <div className='col-md-6'>
                <Link to ='/' className="navbar-brand"><span><i className='fa fa-code' style={{color:'#473be7', fontSize:'30px'}}></i></span><strong>ISSA DIA</strong></Link>
                </div>
                <div className="navbar-items col-md-6">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <Link className="nav-link"  to="/resume">RESUME</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link"  to="/resume">ABOUT ME</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link"  to="/resume">PROJECTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">CONTACT</Link>
                        </li>
                    </ul>
                </div>
             </nav>
    </>
   
     );
}
 
export default NavbarPortfolio;