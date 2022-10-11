import React from 'react'
import NavBarGuest from '../components/NavBarGuest';
import Exhibicion from '../components/Exhibicion';

const Home = () => {
    return ( 
        <>
            <head>
                <title>Home</title>
            </head>
            <body>
                <NavBarGuest/>
                <Exhibicion/>
            </body>
        </>
    );
}

export default Home;