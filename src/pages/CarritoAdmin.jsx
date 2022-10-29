import React from 'react'
import NavBarAdminCarrito from '../components/NavBar/NavBarAdminCarrito';
import ExhibicionCarrito from '../components/ExhibicionCarrito';

const CarritoAdmin = () => {
    return ( 
        <>
            <NavBarAdminCarrito/>
            <h1 className="bg-white text-center pt-5 text-xl	">Mi Carrito</h1>
            <ExhibicionCarrito flex="flex" marginleft="ml-5" hidden="hidden" cols="sm:grid-cols-3" />
        </>
    );
}

export default CarritoAdmin;