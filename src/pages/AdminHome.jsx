import React from 'react'
import NavBarAdmin from '../components/NavBar/NavBarAdmin';
import Exhibicion from '../components/Exhibicion';

const HomeAdmin = () => {
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

export default HomeAdmin;