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

/*-------------FUNCION PADRE Exhibicion---------------------
esta funcion retorna el listado de productos recorriendo con .map un array de objetos, este listado incluye el componente contador 
y el componente boton en cada uno de los elementos. Adicionalmente esta funcion tambien incluye el componente pagination
El componente Exhibicion es reutilizado en las paginas userhome, adminhome, carrito y panel por lo que recibe
las props children, flex, marginleft, hidden, cols para ajustarse a cada una de las paginas*/
function Exhibicion({children, flex, marginleft, hidden, cols}) {
    const [carrito, setCarrito] = useState([])

    useEffect(() => {
        products.forEach( elemento => {setCarrito((prevState) => [...prevState, {id:elemento.id , cantidad:0}])});
        {setDesactivar(() => products.map( () => true))}
    }, [])


    const [productoCantidad , setproductoCantidad] = useState(0)

/*la const desactivar, es un arreglo de n estados, 1 por cada producto, y se usa para definir el estado del boton "agregar al carrito" en cada
producto, si hay n productos, en este array habran n estados. Se llena inicialmente con el useEffect que sigue a continuacion.*/
    const [desactivar, setDesactivar] = useState([])

/*esta funcion se ejecuta 1 sola vez al cargar la pagina por el [], y recorre el array de productos para insertar estados en el array desativar, un estado
para cada producto. Por defecto al abrir la pagina todos los botones estaran desabilitados por lo que se agregara el valor true a los n estados.
true significaria disable: true
el .map devuelve un array por cada elemento en products insertaremos un true en el array.*/
    // useEffect(() => {
        // {setDesactivar(() => products.map( () => true))}
    // }, [])
    

    /*---------------FUNCION handleCallbackCantidadEstado------------------------------
    funcion handleCallbackCantidadEstado es definida aqui en el componente padre pero es ejecutada en el compoenente hijo CONTADOR, enviandosela
    por props en este componenete. y es usada para 2 acciones: 
    1. para poder traer la cantidad registrada en el input del componente contador esta funcion se le envia 
    por props al contador, y en el componente contador esta funcion se ejecuta con un useEffect cada vez que la varible cantidad cambia actualizando el valor de
    la const productoCantidad encontrada en este componente.
    2.esta funcion asocia los index (posiciones) de los arrays products y desactivar. si hay n productos, hay n estados en desactivar coincidiendo la
    posicion del produccto con la posicion de un estado por lo que se diria que el estado del products[0] es desativar[0], el del products[1] es desactivar[1] y asi..
    el boton "agregar al carrito" esta disable: true en todos los productos al iniciar la pagina porque todos los productos tienen cantidad en 
    cero, si algun producto cambia su cantidad a 1 o mayor a uno, el boton de ese producto en particular debe habilitarse.
    el parametro index, corresponde a la posicion del producto en products, este se envia por props al componenete CONTADOR, y luego se vuelve a enviar
    en el useEffect como parametro de parentCallback1 = {handleCallbackCantidadEstado} (Ver componente CONTADOR)*/
    const handleCallbackCantidadEstado = (cantidad, index) => {
        setproductoCantidad(cantidad)  
        if (cantidad >= 1) setDesactivar(() => desactivar.map((elemento, i) =>(i==index) ? false : elemento))
        else setDesactivar(() => desactivar.map((elemento, i) => (i==index) ? true : elemento)) 
    };

    /*--------------FUNCION AgregarCarrito-----------
    //Como su nombre indica esta es la funcion que se ejecuta cada vez que se le de al boton "Agregar al carrito", enviadosela 
    //por props al componente boton en su onclick el metodo .push genera errores en react por lo que fue usado prevState*/
    function AgregarCarrito(index, cantidad){
        setCarrito(() => carrito.map((elemento, i) =>(i==index) ? 
        {id:elemento.id, cantidad:cantidad} : elemento))
        console.log(carrito)
    };



                            {/* if lenght > 0 hacer el .map, sino solo agregar
                            carrito.map((elemento)=> {
                                if (elemento.id === productId){
                                    setCarrito({id:productId, cantidad:elemento.cantidad + cantidad})
                                } else {
                                    {/* se usa la funcion anonima con prevState ya que el metodo .push causa errores en react\
                                    setCarrito((prevState) => [...prevState, {id:productId, cantidad:cantidad}])
                                }})*/}



    /*function AgregarCarrito(productId, cantidad){

        return(
            <>
                {/* se usa la funcion anonima con prevState ya que el metodo .push causa errores en react }
                {setCarrito((prevState) => [...prevState, {id:productId, cantidad:cantidad}])}
            </>
        )  
    };*/

   

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



export default Exhibicion;