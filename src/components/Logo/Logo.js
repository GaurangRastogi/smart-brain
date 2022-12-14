import React from 'react';
import './Logo.css';
import brain from './brain.png';
import Tilt from 'react-parallax-tilt';
const Logo =() =>{
    return(
       <div className='ma4 mt0 b' >
        <Tilt className='Tilt br2 shadow-2' style={{ height:'150px',width:'150px'}}>
            <div className='pa3'>
                <img style={{paddingTop:'5px'}} src={brain} alt='logo'/>
            </div>
        </Tilt>
       </div>
    );
}
export default Logo;