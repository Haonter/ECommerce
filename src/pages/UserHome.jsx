import React from 'react'
import NavBarUser from '../components/NavBar/NavBarUser';
import Exhibicion from '../components/Exhibicion';

const Home = () => {
    return ( 
        <>
            <head>
                <title>Home</title>
            </head>
            <body>
                <NavBarUser/>
                <Exhibicion/>
            </body>
        </>
    );
}

export default Home;