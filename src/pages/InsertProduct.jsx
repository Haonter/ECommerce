import React from 'react'
import NavBarAdminPanel from '../components/NavBar/NavBarAdminPanel'
import Input from "../components/input";

const InsertProduct = () => {

    return ( 
        <>
            <div className='bg-white w-screen'>
                <NavBarAdminPanel/>
                <form method='POST' action="http://localhost:5000/insertproduct">
                    <div className='grid grid-cols-2 mt-10 justify-center items-center space-x-10 ml-14'>
                        <Input 
                            title="NID"  
                            id="NID"
                            type="text" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 ml-9"
                        />
                        <Input 
                            title="Nombre" 
                            id="Nombre"
                            type="text"  
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 "
                        />
                        <Input 
                            title="Descripcion"
                            id="Descripcion"
                            type="text" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Imagen" 
                            id="Imagen" 
                            type="text" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Precio" 
                            id="Precio"
                            type="number" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Precio en Descuento" 
                            id="Descuento"
                            type="number" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Stock" 
                            id="Stock" 
                            type="number" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                    </div>
                    <div className='mt-5 sm:flex-col'>
                        <div className="rounded-full flex justify-center mt-16 pb-10">
                            <button onClick="" type='submit'
                                className="flex w-32 justify-center rounded-full bg-green-400 py-1 px-5 text-sm font-medium text-white hover:bg-gray-400 md:py-1 md:px-4 md:text-sm">
                                    Registrar Producto
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default InsertProduct;