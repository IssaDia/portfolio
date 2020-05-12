import React from 'react';

const Contact = () => {
    return ( 
        <div className='row'>
            <div className='contact-container col-md-12'>  
                <h2>CONTACT</h2>
                <hr />
                <div className='contact-list'>
                    <div className='row'>
                        <div className='contact-item col-md-4'>
                            <i className='fa fa-phone-square'></i>
                            <h3>Téléphone</h3>
                            <p>06.01.79.61.78</p>
                        </div>
                        <div className='contact-item col-md-4'> 
                            <i className='fa fa-envelope'></i>
                            <h3>E-mail</h3>
                            <p>issadiapro@gmail.com</p>
                        </div>
                        <div className='contact-item col-md-4'> 
                            <i className='fa fa-skype'></i>
                            <h3>Skype</h3>
                            <p>iss' dia</p>
                        </div>                
                    </div>        
                </div>            
            </div>
        </div>
        
     );
}
 
export default Contact;