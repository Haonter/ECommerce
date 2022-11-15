import React from 'react';
import NavBarGuest from '../components/NavBar/NavBarGuest';
import Animation from '../components/Animation';
import Elementos from '../components/Elementos';

/* style={{ 
                backgroundVideo: `url(${Animation})`, 
                width:'100vw', 
                height:'50.5vw', 
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100vmax' 
                }} 
*/

const Home = () => {
    return ( 
        <>
            <head>
                <title>Home</title>
            </head>
            <div className=''>
                <NavBarGuest/>
                <Elementos/>
                <Animation/>
            </div>
        </>
    );
}

export default Home;