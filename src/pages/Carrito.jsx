import React from 'react'
import NavBarUserCarrito from '../components/NavBar/NavBarUserCarrito'
import ExhibicionCarrito from '../components/ExhibicionCarrito';


const Carrito = () => {
    return ( 
        <>
            <NavBarUserCarrito/>
            <h1 className="bg-white text-center pt-5 text-xl	">Mi Carrito</h1>
            <ExhibicionCarrito flex="flex" marginleft="ml-5" hidden="hidden" cols="sm:grid-cols-3" />
        </>
    );
}

export default Carrito;

