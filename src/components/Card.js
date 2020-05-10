import React from 'react';

const Card = (props) => {
    return ( 

<div className="card">
    <div className="image">
      <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg"/>
    </div>
    <div className="details">
      <div className="center">
        <h1>{props.name}<br></br><span>{props.techno}</span></h1>
        <p>{props.description}</p>
        <ul>
          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
</div>
     );
}
 
export default Card;