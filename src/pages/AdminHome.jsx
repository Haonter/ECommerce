import React from 'react'
import NavBarAdmin from '../components/NavBar/NavBarAdmin';
import Exhibicion from '../components/Exhibicion';
import backgroundCart from '../media/BGCart.jpg'

const HomeAdmin = () => {
    return ( 
        <>
            <head>
                <title>Home (Administrador)</title>
            </head>
            <div style={{ 
                backgroundImage: `url(${backgroundCart})`, 
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100vmax' 
                }}
            >    
                <div>
                    <NavBarAdmin/>
                    <Exhibicion map="products" cols="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" hiddenop="hidden" href="/about-product-admin" />
                </div>
            </div>
        </>
    );
}

export default HomeAdmin;