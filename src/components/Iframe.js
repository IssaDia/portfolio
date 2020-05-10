import React from 'react';

const Iframe = (props) => {
    return ( 
        <>   
            <iframe src={props.src} width={props.width} height={props.height} className='iframe' title="iFrameLyon"></iframe>
        </>
     );
}
 
export default Iframe;