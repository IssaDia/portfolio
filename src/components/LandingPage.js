import React from 'react'
import { Grid, Cell } from 'react-mdl'
import CvImage from '../assets/images/profile.jpg'



const Landing = () => {
    return ( 
        <div style={{width:'100%', margin:'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <img src={CvImage} className='avatar' alt='avatar' />
                    <div className='banner-text'>
                        <h1>FULL STACK WEB DEVELOPER</h1>
                        <hr></hr>
                        <p>HTML&CSS | Bootstrap | Javascript | React | Symfony | MySQL</p>
                        <div className='social-links'>
                            <a href="https://google.com" target='_blank' rel="noopener noreferrer">
                                <i className='fa fa-linkedin-square' aria-hidden='true'></i>
                            </a>
                            <a href="https://google.com" target='_blank' rel="noopener noreferrer">
                                <i className='fa fa-github-square' aria-hidden='true'></i>
                            </a>                       
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
     );
}
 
export default Landing;