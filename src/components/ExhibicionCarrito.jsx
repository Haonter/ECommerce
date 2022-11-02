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
            const productoEnCarrito = carrito.find(c => c.id === producto.id);

            return (productoEnCarrito != null) ? productoEnCarrito.cantidad : 0;
        }));

    }, []);


    //------Funcion AgregarContador
    //funcion usada para el boton + del contador
    function AgregarContador(index, producto, cantidad){
        const indiceCarrito = carrito.findIndex(c => c.id === producto.id);

        setproductoCantidad(() => productoCantidad.map((elemento, i) =>(i===index) ? 
        elemento + 1 : elemento));

        setCarrito((prevState) => prevState.map((productoEnCarrito, index) => {
            if (index === indiceCarrito) productoEnCarrito.cantidad = cantidad;
        
            return productoEnCarrito;
        }));
    };

    //------Funcion RestarContador
    //funcion usada para el boton - del contador
    function RestarContador(index, producto, cantidad){
        const indiceCarrito = carrito.findIndex(c => c.id === producto.id);

        setproductoCantidad(() => productoCantidad.map((elemento, i) => (i===index && elemento - 1 >= 0) ? 
        elemento - 1 : elemento));

        setCarrito((prevState) => prevState.map((productoEnCarrito, index) => {
            if (index === indiceCarrito) productoEnCarrito.cantidad = cantidad;
        
            return productoEnCarrito;
        }));
    };

    function EliminarDelCarrito(producto){
        const indiceCarrito = carrito.findIndex(c => c.id === producto.id);
        setCarrito(() => carrito.map((elemento, i) =>(i===indiceCarrito) ? 
        carrito.pop(indiceCarrito):elemento));
        console.log(carrito)
        return (carrito)
        
    };



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
                                                <a id={product.id} key={product.id} className={"group " + flex + " shadow-sm shadow-blue-900 px-4 py-4 rounded-xl"}>
                                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200  xl:aspect-w-7 xl:aspect-h-8">
                                                        <img
                                                            src={product.imagen}
                                                            alt="Not found"
                                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                        />
                                                    </div>
                                                    <div className={"flex-col " + marginleft + " w-full"}>
                                                        <a className="mt-4 text-lg	 text-gray-700" href={href}>{product.name}</a>
                                                        <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
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
