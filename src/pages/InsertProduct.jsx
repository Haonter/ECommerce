import React from 'react'
import NavBarAdminPanel from '../components/NavBar/NavBarAdminPanel'
import Input from "../components/input";

const InsertProduct = () => {
    return ( 
        <>
            <NavBarAdminPanel/>
            <h1 className="bg-white text-center pt-5 text-xl">Nuevo producto</h1>
            <form method='POST' action="http://localhost:5000/insertproduct">
                    <div className='flex flex-col mt-10 justify-start items-start ml-72  '>
                        <div className='flex space-x-20'>
                        <Input 
                                title="ID"  
                                name="NID" 
                                type="text" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class=" w-full "/>
                            <Input 
                                title="Nombre"  
                                name="Nombre" 
                                type="text" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class=" w-full "/>
                            <Input 
                                title="Imagen (URL)" 
                                name="Imagen" 
                                type="url" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class="w-full" />
                        </div>
                        <Input 
                            title="Descripcion" 
                            name="Descripcion" 
                            type="text"  
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"/>
                        <div className='flex space-x-36 '>
                            <Input 
                                title="Precio" 
                                name="Precio" 
                                type="number" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class="w-full sm:w-full mt-10"/>
                            <Input 
                                title="Precio con descuento" 
                                name="Descuento" 
                                type="number" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class="w-full sm:w-full mt-10"/>
                            <Input 
                                title="Stock" 
                                name="Stock" 
                                type="number" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class="w-full sm:w-full mt-10"/>
                        </div>
                    </div>
                    <div className='mt-5 sm:flex-col'>
                        <div className="rounded-full flex justify-center mt-16 pb-10">
                            <button
                                onClick=""
                                type='submit'
                                className="flex w-32 justify-center rounded-full bg-green-400 py-1 px-5 text-sm font-medium text-white hover:bg-gray-400 md:py-1 md:px-4 md:text-sm"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
        </>
    );
}

export default InsertProduct;