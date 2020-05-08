import React from 'react';

const AboutMe = () => {
    return ( 
        <div className='aboutme-container'>
        <h1>ABOUT ME</h1>
        <hr />
        <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <p> Développeur Web Fullstack en reconversion qui aimerais participer à des projets ambitieux en rapport avec mes compétences. Je me suis spécialisé dans React et Symfony aprés ma formation de Développeur et 
                j’ai pris l’initiative de construire quelques projets que vous pouvez apercevoir dans mon GitHub. J’ai notamment crée un site E-commerce qui met en relation la partie front-end avec React et 
                la partie back end avec Symfony. Je m’intéresse d’ailleurs à la qualité du code notamment sur les questions d’accessibilité sur React et sur la sécurité par le biais de la protection des données 
                utilisateurs sur Symfony. Je suis aussi conscient de l’importance des tests pour garantir la robustesse d’une appilcation. J'ai un bon niveau d'anglais et j'aime apprendre au quotidien sur différents
                supports tels que les documentations, OpenclassRooms, Medium, Udemy ou Youtube.  J’ai aussi été formé sur une méthode Agile, en l’occurence SCRUM.
                </p>
            </div> 
        </div>
      
    </div>
     );
}
 
export default AboutMe;