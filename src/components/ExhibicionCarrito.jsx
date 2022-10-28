import { useEffect, useState } from "react";
import Boton from "./Boton";
import Contador from "./Contador";
import Pagination from "./Pagination";
import Opciones from "./Opciones";
import Deleteicon from '../media/deleteicon.png'; 
import Input from "./input";






function ExhibicionCarrito({flex, marginleft, hidden, cols}) {
    const [carrito, setCarrito] = useState([])

    console.log(carrito)
    console.log(carrito.cantidad)

    useEffect(() => {
        const carrito1 = JSON.parse(localStorage.getItem('carrito'));
        if (carrito1) {
        setCarrito(carrito1);
        }
    }, []);

    //------Funcion AgregarContador
    //funcion usada para el boton + del contador
    function AgregarContador(index){
        setCarrito(() => carrito.map((elemento, i) =>(i==index) ? 
        {id:elemento.id , 
        name: elemento.name, 
        description: elemento.description , 
        price:elemento.price, 
        desc:elemento.desc, 
        imagen: elemento.imagen, 
        cantidad:elemento.cantidad + 1} : elemento))
        console.log(carrito)
    };

    //------Funcion RestarContador
    //funcion usada para el boton - del contador
    function RestarContador(index){
                setCarrito(() => carrito.map((elemento, i) =>(i==index && elemento.cantidad - 1 > 0) ? 
                {id:elemento.id , 
                name: elemento.name, 
                description: elemento.description , 
                price:elemento.price, 
                desc:elemento.desc, 
                imagen: elemento.imagen, 
                cantidad:elemento.cantidad - 1} : elemento))
                console.log(carrito)
            };

    //funcion usada colocar en cero un elemento del carrito (sacarlo del carrito)
    function SacarDelCarrito(index){
        setCarrito(() => carrito.map((elemento, i) =>(i==index) ? 
        {id:elemento.id , 
        name: elemento.name, 
        description: elemento.description , 
        price:elemento.price, 
        desc:elemento.desc, 
        imagen: elemento.imagen, 
        cantidad:0} : elemento))
        console.log(carrito)
    };


    return (
        <>
        <div className="bg-white w-screen">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <section className = " ">
                    <div className={" grid grid-cols-1 gap-y-10 gap-x-6 " + cols }>
                        <h2 className="sr-only">Obtener productos con metodo GET y eliminar array de ejemplo</h2>
                        
                                {carrito
                                    .filter( carrito => carrito.cantidad !== 0)
                                    .map((product, index) => (
                                            <>
                                                <a id={product.id} key={product.id} href={product.href} className={"group " + flex + " shadow-sm shadow-blue-900 px-4 py-4 rounded-xl"}>
                                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200  xl:aspect-w-7 xl:aspect-h-8">
                                                        <img
                                                            src={product.imagen}
                                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                        />
                                                    </div>
                                                    <div className={"flex-col " + marginleft + " w-full"}>
                                                        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                                        <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                                        {/* CONTADOR */}
                                                        <div className="flex">
                                                            <Boton  evento={() => {RestarContador(index)}} title="-" marginy="2" justify="start" width="0.5" color="white" textColor='black' />
                                                            <Input  id="inputContador" value={product.cantidad} type="number" paddingy="2" width="12" fontSize="text-xs" text="text-center"/>
                                                            <Boton evento={() => {AgregarContador(index)}} title="+" marginy="2" justify="start" width="0.5" color="white" textColor='black' />
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col justify-end items-end'>
                                                        <Opciones evento={() => {SacarDelCarrito(index)}} title="Eliminar" marginTop="6"   width="16" color="white" textColor='black' icono={Deleteicon}/>
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
    )
}




export default ExhibicionCarrito;
