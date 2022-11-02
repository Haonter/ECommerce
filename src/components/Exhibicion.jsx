import { useEffect, useState } from "react";
import Boton from "./Boton";
import Contador from "./Contador";
import Pagination from "./Pagination";
import Input from "./input";
import Opciones from './Opciones'
import Deleteicon from '../media/deleteicon.png'; 
import Updateicon from '../media/updateicon.png'; 
import DeleteProduct from "../pages/DeleteProduct";

//al darle a comprar debe limpiarse el localstorage



const products = [
    {
        id: 1,
        name: 'Diariela',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 2,
        name: 'Earthen Bottle',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 3,
        name: 'Earthen Bottle',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 4,
        name: 'Earthen Bottle',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 5,
        name: 'Earthen Bottle',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 6,
        name: 'Earthen Bottle',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 7,
        name: 'Earthen Bottle',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 8,
        name: 'Earthen Bottle',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    // More products...
]


function Exhibicion({children, flex, marginleft, hidden, cols, map, hiddenop, href}) {
    const [carrito, setCarrito] = useState([])
    const [productoCantidad , setproductoCantidad] = useState([])

    // const handleCallbackCantidadEstado = (productoCantidad, index) => {
    //     if (productoCantidad >= 1) setDesactivar(() => desactivar.map((elemento, i) =>(i==index) ? false : elemento))
    //     else setDesactivar(() => desactivar.map((elemento, i) => (i==index) ? true : elemento)) 
    // };
    
    // function handle(){
    //         console.log(productoCantidad)
    //         productoCantidad.map((elemento, index) => {
    //         if(elemento >= 1){ 
    //             setDesactivar(() => {
    //                 const b = desactivar.map((element, i) => {
    //                     if (i==index) {
    //                         return false;
    //                     } else {
    //                         return element}
    //                     });
    //                     console.log(b)
    //                     return b })
    //             } else {setDesactivar(() => desactivar.map((element, i) => (i==index) ? true : element))}
    //         });console.log(desactivar)}

    useEffect(() => {
        // const carrito = JSON.parse(localStorage.getItem('carrito'));
        // carrito.forEach( elemento => {setCarrito((prevState) => [...prevState, {
        //     id:elemento.id , 
        //     name: elemento.name, 
        //     description: elemento.description , 
        //     price:elemento.price, 
        //     desc:elemento.desc, 
        //     imagen: elemento.imagen, 
        //     cantidad:0}])});
    
        const carrito = JSON.parse(localStorage.getItem('carrito'));        
        if (carrito) {
            setCarrito(carrito);
        }    
        
        setproductoCantidad(() => products.map((producto) => {
            const productoEnCarrito = carrito.find(c => c.id == producto.id);

            return (productoEnCarrito != null) ? productoEnCarrito.cantidad : 0;
        }));
    }, [])

    useEffect(() => {        
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    //------Funcion AgregarContador
    //funcion usada para el boton + del contador
    function AgregarContador(index){
        setproductoCantidad(() => productoCantidad.map((elemento, i) =>(i==index) ? 
        elemento + 1 : elemento));
    };

    //------Funcion RestarContador
    //funcion usada para el boton - del contador
    function RestarContador(index){
        setproductoCantidad(() => productoCantidad.map((elemento, i) =>(i==index && elemento - 1 >= 0) ? 
        elemento - 1 : elemento));
    };

    function AgregarCarrito(producto, cantidad) {

        const indiceCarrito = carrito.findIndex(c => c.id == producto.id);

        if (indiceCarrito < 0) {
            const nuevoCarrito = {...producto};
            nuevoCarrito.cantidad = cantidad;

            setCarrito((prevState) => [...prevState, nuevoCarrito]);        
        } else {
            setCarrito((prevState) => prevState.map((productoEnCarrito, index) => {
                if (index == indiceCarrito) productoEnCarrito.cantidad = cantidad;
            
                return productoEnCarrito;
            }));
        }

        // setCarrito(() => carrito.map((elemento, i) =>(i==index) ? 
        // {id:elemento.id , 
        // name: elemento.name, 
        // description: elemento.description , 
        // price:elemento.price, 
        // desc:elemento.desc, 
        // imagen: elemento.imagen, 
        // cantidad:cantidad} : elemento))
        // console.log(carrito)
    };

    return (
        <>
        <div className="bg-white ">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
            <section className = " ">
                <div className={" grid grid-cols-1 gap-y-10 gap-x-6 " + cols }>
                    <h2 className="sr-only">Obtener productos con metodo GET y eliminar array de ejemplo</h2>
                    
                            {products.map((product, index) => (
                                <>
                                    <a id={product.id} key={product.id} className={"group " + flex + " shadow-sm shadow-blue-900 px-4 py-4 rounded-xl"}>
                                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200  xl:aspect-w-7 xl:aspect-h-8">
                                            <img
                                                src={product.imagen}
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                            />
                                        </div>
                                        <div className={"flex-col " + marginleft + " w-full"}>
                                            <a className="mt-4 text-lg	 text-gray-700" href={href}>{product.name}</a>
                                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                            {/* CONTADOR */}
                                            <div className={"flex " + hidden}>
                                                <Boton  evento={() => {RestarContador(index)}} title="-" marginy="2" justify="start" width="0.5" color="white" textColor='black' hidden="hidden"/>
                                                <Input  id="inputContador" value={productoCantidad[index]} type="number" paddingy="2" width="12" fontSize="text-xs" text="text-center"/>
                                                <Boton evento={() => {AgregarContador(index)}} title="+" marginy="2" justify="start" width="0.5" color="white" textColor='black' hidden="hidden"/>
                                            </div>
                                            <div className={'flex justify-end items-end ' + hiddenop}>
                                                <Opciones title="Editar" marginTop="16"   width="16" color="white" textColor='black' icono={Updateicon} url={"http://localhost:3000/updateproduct/" + product.id }/>
                                                {/* agregar al boton de eliminar evento={DeleteProduct(product.id)} */}
                                                <Opciones title="Eliminar" marginTop="16"   width="16" color="white" textColor='black' icono={Deleteicon} />
                                            </div>     
                                        </div>
                                        
                                        <div className="mt-3 flex">
                                            <div className={hidden}>
                                                <Boton
                                                key= {product.id} 
                                                evento={ 
                                                        () =>
                                                            {   
                                                                // const indexProduct = index
                                                                // const cantidad= productoCantidad                        
                                                                return(
                                                                    <>
                                                                        {AgregarCarrito(product, productoCantidad[index])}
                                                                    </>
                                                                )
                                                            }
                                                        } 
                                                disabled={productoCantidad[index] < 1 } title="Agregar al carrito" marginy="1" justify="end"  width="full" color="green" textColor='white' hidden="hidden" />
                                            </div>
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



export default Exhibicion;
