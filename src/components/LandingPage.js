import React from 'react'
import CvImage from '../assets/images/profile.jpg'



const Landing = () => {
    return ( 
        <div className='row'>
            <div className='landing-grid col-md-12'>
                <div>
                    <img src={CvImage} className='avatar' alt='avatar' />
                    <div className='banner-text'>
                        <h1>FULL STACK WEB DEVELOPER</h1>
                        <hr></hr>
                        <p>HTML&CSS | Bootstrap | Javascript | React | Symfony | MySQL</p>
                        <div className='social-links'>
                            <a href="https://www.linkedin.com/in/issa-dia-4352b174/" target='_blank' rel="noopener noreferrer">
                                <i className='fa fa-linkedin-square' aria-hidden='true'></i>
                            </a>
                            <a href="https://github.com/IssaDia/" target='_blank' rel="noopener noreferrer">
                                <i className='fa fa-github-square' aria-hidden='true'></i>
                            </a>                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Landing;