import React from 'react'
import  Card from './Card'



const Projects = () => {

    return ( 
        <div className='projects-container'>
            <h1>RECENT PROJECTS</h1>
            <hr />
            <Card name='The Mug Plug Shop' techno='React/Symfony' description='site E-commerce specialisé dans la vente de Mugs personnalisés' />
        </div>
     );
}
 
export default Projects;