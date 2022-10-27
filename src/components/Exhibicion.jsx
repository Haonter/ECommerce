import { useEffect, useState } from "react";
import Boton from "./Boton";
import Contador from "./Contador";
import Pagination from "./Pagination";




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


function Exhibicion({children, flex, marginleft, hidden, cols, map}) {
    const [carrito, setCarrito] = useState([])
    const [productoCantidad , setproductoCantidad] = useState(0)
    const [desactivar, setDesactivar] = useState([])


    const handleCallbackCantidadEstado = (cantidad, index) => {
        setproductoCantidad(cantidad)  
        if (cantidad >= 1) setDesactivar(() => desactivar.map((elemento, i) =>(i==index) ? false : elemento))
        else setDesactivar(() => desactivar.map((elemento, i) => (i==index) ? true : elemento)) 
    };
    
    useEffect(() => {
        products.forEach( elemento => {setCarrito((prevState) => [...prevState, {
            id:elemento.id , 
            name: elemento.name, 
            description: elemento.description , 
            price:elemento.price, 
            desc:elemento.desc, 
            imagen: elemento.imagen, 
            cantidad:0}])});
        {setDesactivar(() => products.map( () => true))}
    }, [])

    function AgregarCarrito(index, cantidad){
        setCarrito(() => carrito.map((elemento, i) =>(i==index) ? 
        {id:elemento.id , 
        name: elemento.name, 
        description: elemento.description , 
        price:elemento.price, 
        desc:elemento.desc, 
        imagen: elemento.imagen, 
        cantidad:cantidad} : elemento))
        console.log(carrito)
    };

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);




    if (map === 'products'){
    return (
        <>
        <div className="bg-white ">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
            <section className = " ">
                <div className={" grid grid-cols-1 gap-y-10 gap-x-6 " + cols }>
                    <h2 className="sr-only">Obtener productos con metodo GET y eliminar array de ejemplo</h2>
                    
                            {carrito.map((product, index) => (
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
                                            <Contador index={index} hidden={hidden} parentCallback1 = {handleCallbackCantidadEstado} />
                                        </div>
                                        {children}
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
                                                                        {AgregarCarrito(index, productoCantidad)}
                                                                    </>
                                                                )
                                                            }
                                                        } 
                                                disabled={desactivar[index]} title="Agregar al carrito" marginy="1" justify="end"  width="full" color="green" textColor='white'  />
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
    )} else { 
            return (
                <>
                <div className="bg-white ">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Products</h2>
                    <section className = " ">
                        <div className={" grid grid-cols-1 gap-y-10 gap-x-6 " + cols }>
                            <h2 className="sr-only">Obtener productos con metodo GET y eliminar array de ejemplo</h2>
                            
                                    {carrito.map((product, index) => (
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
                                                    <Contador index={index} hidden="" parentCallback1 = {handleCallbackCantidadEstado} />
                                                </div>
                                                {children}
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
                                                                                {AgregarCarrito(index, productoCantidad)}
                                                                            </>
                                                                        )
                                                                    }
                                                                } 
                                                        disabled={desactivar[index]} title="Agregar al carrito" marginy="1" justify="end"  width="full" color="green" textColor='white'  />
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
    }



export default Exhibicion;
