import React from 'react';
import Iframe from './Iframe'

const Localisation = () => {
    return ( 
        <div className='location-container'>
        <h1>CURRENT LOCATION</h1>
        <hr />
            <div>
                <h3>Lyon, Rhône Alpes</h3>
                <Iframe width="400" height="250" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22278.74905943122!2d4.851981994050255!3d45.7342306107428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1e2d5b30b85%3A0x508ab2ae4c21930!2s8e%20Arrondissement%20de%20Lyon%2C%20Lyon!5e0!3m2!1sfr!2sfr!4v1588950085812!5m2!1sfr!2sfr" />
            </div> 
    </div>
     );
}
 
export default Localisation;