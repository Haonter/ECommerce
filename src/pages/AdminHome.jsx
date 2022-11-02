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
                <Exhibicion map="products" cols="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" hiddenop="hidden" href="/about-product-admin" />
            </body>
        </>
    );
}

export default HomeAdmin;