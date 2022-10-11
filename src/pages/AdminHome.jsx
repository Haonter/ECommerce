import React from 'react'
import NavBarAdmin from '../components/NavBarAdmin';
import Exhibicion from '../components/Exhibicion';

const Home = () => {
    return ( 
        <>
            <head>
                <title>Home</title>
            </head>
            <body>
                <NavBarAdmin/>
                <Exhibicion/>
            </body>
        </>
    );
}

export default Home;