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
                <NavBarUser />
                <Exhibicion map="products" cols="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"  />
            </body>
        </>
    );
}

export default Home;