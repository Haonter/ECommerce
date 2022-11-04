import { useEffect, useState } from "react";
import Boton from "./Boton";
import Pagination from "./Pagination";
import Opciones from "./Opciones";
import Deleteicon from '../media/deleteicon.png'; 
import Input from "./input";


function ExhibicionCarrito({flex, marginleft, hidden, cols, href}) {
    const [carrito, setCarrito] = useState([])
    const [productoCantidad , setproductoCantidad] = useState([])
    

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('carrito'));
        if (carrito) {
        setCarrito(carrito);
        }

        setproductoCantidad(() => carrito.map((producto) => {
            const productoEnCarrito = carrito.find(c => c.NID === producto.NID);

            return (productoEnCarrito != null) ? productoEnCarrito.cantidad : 0;
        }));

    }, []);

    // useEffect(() => {
        
    //     localStorage.setItem('carrito', JSON.stringify(carrito))
    // },[carrito])


    //------Funcion AgregarContador
    //funcion usada para el boton + del contador
    function AgregarContador(index, producto, cantidad){
        const indiceCarrito = carrito.findIndex(c => c.NID === producto.NID);

        setproductoCantidad(() => productoCantidad.map((elemento, i) =>(i===index) ? 
        elemento + 1 : elemento));

        setCarrito((prevState) => prevState.map((productoEnCarrito, index) => {
            if (index === indiceCarrito) productoEnCarrito.cantidad = cantidad;

        localStorage.clear()
        localStorage.setItem('carrito', JSON.stringify(carrito))
        
        return productoEnCarrito;
            
        }));
    };

    //------Funcion RestarContador
    //funcion usada para el boton - del contador
    function RestarContador(index, producto, cantidad){
        const indiceCarrito = carrito.findIndex(c => c.NID === producto.NID);

        setproductoCantidad(() => productoCantidad.map((elemento, i) => (i===index && elemento - 1 >= 0) ? 
        elemento - 1 : elemento));

        setCarrito((prevState) => prevState.map((productoEnCarrito, index) => {
            if (index === indiceCarrito) productoEnCarrito.cantidad = cantidad;
        
            return productoEnCarrito;
        }));
    };

    function EliminarDelCarrito(producto){
        const indiceCarrito = carrito.findIndex(c => c.NID === producto.NID);
        const nuevoCarrito = [...carrito]
        nuevoCarrito.splice(indiceCarrito,1)
        setCarrito(nuevoCarrito)
        
    };

    function comprarCarrito(){
        const productosCantidades = carrito.map((elemento) => {
            return {
                NID: elemento.NID,
                cantidad: elemento.cantidad
            }
        })
        console.log(productosCantidades)
        
    }

    

    if (carrito) {
    return (
        <>
        <div className="bg-white w-screen">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <section className = " ">
                    <div className={" grid grid-cols-1 gap-y-10 gap-x-6 " + cols }>
                        <h2 className="sr-only">Obtener productos con metodo GET y eliminar array de ejemplo</h2>
                                {carrito
                                    .map((product, index) => (
                                            <>
                                                <a id={product.NID} key={product.NID} className={"group " + flex + " shadow-sm shadow-blue-900 px-4 py-4 rounded-xl"}>
                                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200  xl:aspect-w-7 xl:aspect-h-8">
                                                        <img
                                                            src={product.Imagen}
                                                            alt="Not found"
                                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                        />
                                                    </div>
                                                    <div className={"flex-col " + marginleft + " w-full"}>
                                                        <a className="mt-4 text-lg	 text-gray-700" href={href}>{product.Nombre}</a>
                                                        <p className="mt-1 text-lg font-medium text-gray-900">{product.Precio}</p>
                                                        {/* CONTADOR */}
                                                        <div className="flex">
                                                            <Boton  evento={() => {RestarContador(index, product, productoCantidad[index])}} title="-" marginy="2" justify="start" width="0.5" color="white" textColor='black' hidden="hidden"/>
                                                            <Input  id="inputContador" value={productoCantidad[index]} type="number" paddingy="2" width="12" fontSize="text-xs" text="text-center"/>
                                                            <Boton evento={() => {AgregarContador(index, product, productoCantidad[index])}} title="+" marginy="2" justify="start" width="0.5" color="white" textColor='black' hidden="hidden"/>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col justify-end items-end'>
                                                        <Opciones evento={() => {EliminarDelCarrito(product)}} title="Eliminar" marginTop="6"   width="16" color="white" textColor='black' icono={Deleteicon}/>
                                                    </div>
                                                </a>
                                            </>
                                        )
                                    )
                                } 
                    </div>
                    <div className="rounded-full flex justify-center mt-16 pb-10">
                            <button 
                                onClick={comprarCarrito} 
                                type='submit'
                                className="flex w-32 justify-center rounded-full bg-green-400 py-1 px-5 text-sm font-medium text-white hover:bg-gray-400 md:py-1 md:px-4 md:text-sm">
                                    Comprar
                            </button>
                        </div>
                </section>
            </div>
        </div>
        <Pagination/>
        </>
    )} else {
        return(
            <h2>No tienes productos en tu carrito</h2>
        )
    }
}




export default ExhibicionCarrito;
