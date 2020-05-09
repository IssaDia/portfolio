import React from 'react'
import MugPlug from '../assets/images/VoyageVoyage.png'


const Card = (props) => {
    return ( 

<div className="card">
    <div className="image">
      <img src={MugPlug}/>
    </div>
    <div className="details">
      <div className="center">
        <h1>{props.name}<br></br><span>{props.techno}</span></h1>
        <p>{props.description}</p>
        <ul>
          <li><a href="#"><i className="fa fa-globe" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
</div>
     );
}
 
export default Card;