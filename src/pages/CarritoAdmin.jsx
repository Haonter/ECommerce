import React from 'react'
import NavBarAdminCarrito from '../components/NavBar/NavBarAdminCarrito';
import ExhibicionCarrito from '../components/ExhibicionCarrito';
import backgroundCart from '../media/BGCart.jpg'

const CarritoAdmin = () => {
    return ( 
        <>
            <head>
                <title>
                    Carrito (Administrador)
                </title>
            </head>
            <div style={{ 
                backgroundImage: `url(${backgroundCart})`, 
                width:'100vw', 
                height:'50.5vw', 
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100vmax' 
                }}
            >
                <NavBarAdminCarrito/>
                <h1 className="text-center pt-6 mb-8 font-bold text-xl	">Mi Carrito</h1>
                <ExhibicionCarrito flex="flex" marginleft="ml-5" hidden="hidden" cols="sm:grid-cols-3" href="/about-product-admin"/>
            </div>
        </>
    );
}

export default CarritoAdmin;