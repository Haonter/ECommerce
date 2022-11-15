import React from 'react'
import NavBarUserCarrito from '../components/NavBar/NavBarUserCarrito'
import ExhibicionCarrito from '../components/ExhibicionCarrito';
import backgroundimg from '../media/BGRegister.jpg'


const Carrito = () => {
    return ( 
        <>
            <div style={{ 
                backgroundImage: `url(${backgroundimg})`,
                width:'100vw', 
                height:'50.5vw', 
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100vmax' 
            }}>
                <NavBarUserCarrito/>
                <h1 className=' mt-10 font-bold text-center text-xl'>Carrito</h1>
                <ExhibicionCarrito flex="flex" marginleft="ml-5" hidden="hidden" cols="sm:grid-cols-3" href="http://localhost:3000/about-product" />
            </div>
        </>
    );
}

export default Carrito;

