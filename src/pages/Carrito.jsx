import React from 'react'
import NavBarUserCarrito from '../components/NavBar/NavBarUserCarrito'
import Products from '../components/Products';
import Contador from '../components/Contador';
import Opciones from '../components/Opciones';
import Deleteicon from '../media/deleteicon.png';

const Carrito = () => {
    return ( 
        <>
            <NavBarUserCarrito/>
            <Products>
                    {/* Se declara contador como children de products*/}
                    <Contador/>
                    <div className='flex flex-col justify-end items-end'>
                        <Opciones title="Eliminar" marginTop="6"   width="16" color="white" textColor='black' icono={Deleteicon}/>
                    </div>
            </Products>
        </>
    );
}

export default Carrito;

