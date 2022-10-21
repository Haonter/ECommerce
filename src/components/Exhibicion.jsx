import { useEffect, useState } from "react";
import Boton from "./Boton";
import Contador from "./Contador";
import Pagination from "./Pagination";



const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 7,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

//-------------FUNCION PADRE Exhibicion---------------------
//esta funcion retorna el listado de productos recorriendo con .map un array de objetos, este listado incluye el componente contador 
//y el componente boton en cada uno de los elementos. Adicionalmente esta funcion tambien incluye el componente pagination
//El componente Exhibicion es reutilizado en las paginas userhome, adminhome, carrito y panel por lo que recibe
//las props children, flex, marginleft, hidden, cols para ajustarse a cada una de las paginas
function Exhibicion({children, flex, marginleft, hidden, cols}) {
    const [carrito, setCarrito] = useState([])
    const [productoCantidad , setproductoCantidad] = useState(0)
    const [desactivar, setDesactivar] = useState([])

    useEffect(() => {
        products.forEach(x => {setDesactivar((prevState) => [...prevState, true])})
    }, [])
    

    //---------------FUNCION handleCallback------------------------------
    //funcion handleCallback usada para poder traer la cantidad registrada en el input del componente contador esta funcion se le envia 
    //por props al contador, y en el componente contador esta funcion se ejecuta con un useEffect cada vez que la varible cantidad cambia
    const handleCallbackCantidad = (cantidad, index) => {
        if (cantidad >= 1){
            return( setDesactivar((prevState) =>{
                return prevState.map((item, i) => { 
                    return (i==index) ? false : item;
                })}))
            //setproductoCantidad(cantidad)
        } else {
            return( setDesactivar((prevState) =>{
                return prevState.map((item, i) => { 
                    return (i==index) ? true : item;
                })}))
        }  
    };

    const handleCallbackDisabled = (state) => {
        setDesactivar(state)
    };

    //--------------FUNCION AgregarCarrito-----------
    //Como su nombre indica esta es la funcion que se ejecuta cada vez que se le de al boton "Agregar al carrito", enviadosela 
    //por props al componente boton en su onclick el metodo .push genera errores en react por lo que fue usado prevState
    /*function AgregarCarrito(productId, cantidad){
        return(
            <>  
                {/* if lenght > 0 hacer el .map, sino solo agregar 
                {carrito.map((elemento)=> {
                            if (elemento.id === productId){
                                setCarrito({id:productId, cantidad:elemento.cantidad + cantidad})
                            } else {
                                {/* se usa la funcion anonima con prevState ya que el metodo .push causa errores en react 
                                setCarrito((prevState) => [...prevState, {id:productId, cantidad:cantidad}])
                            }
                        }
                    )
                }
                
            </>
        )  
    };*/

    function AgregarCarrito(productId, cantidad){

        return(
            <>
                {/* se usa la funcion anonima con prevState ya que el metodo .push causa errores en react */}
                {setCarrito((prevState) => [...prevState, {id:productId, cantidad:cantidad}])}
            </>
        )  
    };

    console.log(carrito)
    console.log(desactivar)

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
                        
                        <a id={product.id} key={product.id} href={product.href} className={"group " + flex + " shadow-sm shadow-blue-900 px-4 py-4 rounded-xl"}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200  xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <div className={"flex-col " + marginleft + " w-full"}>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                <Contador index={index} hidden="" parentCallback1 = {handleCallbackCantidad} parentCallback2 = {handleCallbackDisabled} />
                            </div>
                            {children}
                            <div className="mt-3 flex">
                                <div className={hidden}>
                                    <Boton
                                    key= {product.id} 
                                    evento={ 
                                            () =>
                                                {   
                                                    const productId = product.id
                                                    const cantidad= productoCantidad
                                                    return(
                                                        <>
                                                            {AgregarCarrito(productId, cantidad)}
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



export default Exhibicion;