import React from 'react'




const Projects = () => {

    return ( 
        <div className='row'>
            <div className='projects-container col-md-12'>
                <h1>RECENT PROJECTS</h1>
                <hr />
            <div className="card-container row">
                <div className="card" onclick="">
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
                            <div className='col-md-6'><a href="/" className="link">Site</a></div>
                            <div className='col-md-6'><a href="https://github.com/IssaDia/TheMugPlugShop" className="link">Code</a></div>
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
                            <div className='col-md-6'><a href="#0" className="link">Site</a></div>
                            <div className='col-md-6'><a href="https://github.com/IssaDia/blogVoyageSymfony" className="link">Code</a></div>
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
                                <div className='col-md-6'><a href="#0" className="link">Site</a></div>
                                <div className='col-md-6'><a href="https://github.com/IssaDia/penduReact" className="link">Code</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
            </div>
        </div>
        
     );
}
 
export default Projects;