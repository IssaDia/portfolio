import React from 'react'
import MugPlug from '../assets/images/VoyageVoyage.png'
import HangMan from '../assets/images/TheHangMan.png'
import Voyage from '../assets/images/VoyageVoyage.png'





const Projects = () => {

    return ( 
        <div className='projects-container'>
            <h1>RECENT PROJECTS</h1>
            <hr />
            <div className="card-container row">

            <div className="card">
                <div className="face face1">
                    <div className="content">
                    <h4>The Mug Plug</h4>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                    <h2>React/Symfony</h2>
                    <p>E-commerce</p>
                    <div className='link-container row'>
                        <div className='col-md-6'><a href="" class="link">Site</a></div>
                        <div className='col-md-6'><a href="https://github.com/IssaDia/TheMugPlugShop" class="link">Code</a></div>
                    </div>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                    <h4>Voyage Voyage</h4>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                    <h2>Symfony</h2>
                    <p>Blog de voyage</p>
                    <div className='link-container row'>
                        <div className='col-md-6'><a href="#0" class="link">Site</a></div>
                        <div className='col-md-6'><a href="https://github.com/IssaDia/blogVoyageSymfony" class="link">Code</a></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                    <h4>The Hang Man</h4>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <h2>React</h2>
                        <p>Jeu du pendu</p>
                        <div className='link-container row'>
                            <div className='col-md-6'><a href="#0" class="link">Site</a></div>
                            <div className='col-md-6'><a href="https://github.com/IssaDia/penduReact" class="link">Code</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             
    </div>
     );
}
 
export default Projects;