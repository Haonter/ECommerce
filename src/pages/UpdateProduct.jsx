import React from 'react'
import { useParams} from "react-router-dom";
import Input from "../components/input";
import { useEffect, useState } from "react";

const UpdateProduct = () => {
    const [producto, setProducto] = useState(null);
    const {id} = useParams();
    
    const options = {
        method: 'GET',
    };

    useEffect(
        ()=> {
            //se debe cambiar el endpoint por el endpoint de getproduct por id de diego y actualizarla en exhibicion componenete opciones, editar
            fetch("http://localhost:3001/getProduct/"+id, options)
                .then((res)=> res.json())
                .then((res)=> setProducto(res))
                .catch((err)=> console.log(err));
        },[])

        if (producto){
            console.log(producto);
        }

    return ( 
        <>
            <h1 className="bg-white text-center pt-5 text-xl">Nuevo producto</h1>
            {/*colocar la ruta de path de diego */}
            <form method='PATH' action={"http://localhost:5000/updateProduct/"+id}>
                    <div className='flex flex-col mt-10 justify-start items-start ml-72  '>
                        <div className='flex space-x-20'>
                            <Input 
                                title="ID"  
                                name="ID" 
                                type="text" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class=" w-full "
                                //colocar el nombre correcto del campo
                                value = {producto.id}/>
                            <Input 
                                title="Nombre"  
                                name="Nombre" 
                                type="text" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class=" w-full "
                                //colocar el nombre correcto del campo
                                value = {producto.Nombre}/>
                            <Input 
                                title="Imagen" 
                                name="Imagen" 
                                type="file" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class="w-full" 
                                //colocar el nombre correcto del campo
                                value = {producto.imagen}/>
                        </div>
                        <Input 
                            title="Descripcion" 
                            name="Descripcion" 
                            type="text"  
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                            //colocar el nombre correcto del campo
                            value = {producto.descripcion}/>
                        <div className='flex space-x-36 '>
                            <Input 
                                title="Precio" 
                                name="Precio" 
                                type="number" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class="w-full sm:w-full mt-10"
                                //colocar el nombre correcto del campo
                                value = {producto.precio}/>
                            <Input 
                                title="Precio con descuento" 
                                name="PrecioDescuento" 
                                type="number" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class="w-full sm:w-full mt-10"
                                //colocar el nombre correcto del campo
                                value = {producto.preciodescuento}/>
                            <Input 
                                title="Stock" 
                                name="Stock" 
                                type="number" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class="w-full sm:w-full mt-10"
                                //colocar el nombre correcto del campo
                                value = {producto.stock}/>
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

export default UpdateProduct;