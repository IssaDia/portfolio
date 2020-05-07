import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import CvImage from '../assets/images/profile.jpg'


const Contact = () => {
    return ( 
        <div className='contact-body'>
            <Grid className='contact-grid'>
                <Cell col={6}>
                    <h2>Issa dia</h2>
                    <img src={CvImage} className='avatar' alt='avatar' />
                    <p style={{height:'75%', margin:'auto',paddingTop:'1em'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact me</h2>
                    <hr />
                    <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className='fa fa-phone-square'></i>
                                    06.01.79.61.78
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className='fa fa-envelope'></i>
                                    issadiapro@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className='fa fa-skype'></i>
                                     iss' dia
                                </ListItemContent>
                            </ListItem>
                    </List>
                    </div>
                    
                </Cell>
            </Grid>
        </div>
     );
}
 
export default Contact;