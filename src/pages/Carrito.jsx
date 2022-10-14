import React from 'react'
import NavBarUserCarrito from '../components/NavBar/NavBarUserCarrito'
import Products from '../components/Products';
import Contador from '../components/Contador';

const Carrito = () => {
    return ( 
        <>
            <NavBarUserCarrito/>
            <Products>
                    {/* Se declara contador como children de products*/}
                    <Contador/>
            </Products>
        </>
    );
}

export default Carrito;

