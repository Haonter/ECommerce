import { useEffect, useState } from "react";
import Boton from "./Boton";
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
        name: 'sabana',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 2,
        name: 'cama',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 3,
        name: 'Bottle',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 4,
        name: 'laptop',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 5,
        name: 'telefono',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 6,
        name: 'Calculadora',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 7,
        name: 'botella',
        description: "XXXXXXXXXXXXXX",
        price: '$48',
        desc: '$47,2',
        imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    },
    {
        id: 8,
        name: 'mouse',
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

    //useEffect que revisa si el localstorage tiene informacion del carrito, si existe, la registra en la variable carrito para mantener la 
    //informacion ya indicada en el carrito, a su vez se evalua cada producto en products, si el id de algun producto en products coincide con el id
    //de algun producto en el carrito, el array de la const productoCantidad se actualizara con el valor de cantidad que tenga en producto en el carrito, 
    //sino el valor se actualizara con cero, asi los inputs de los contadores siempre mostraran la cantidad correspondiente a cada producto
    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('carrito'));        
        if (carrito) {
            setCarrito(carrito);
        }    
        
        setproductoCantidad(() => products.map((producto) => {
            const productoEnCarrito = carrito.find(c => c.id === producto.id);

            return (productoEnCarrito != null) ? productoEnCarrito.cantidad : 0;
        }));
    }, [])

    useEffect(() => {        
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    //------Funcion AgregarContador
    //funcion usada para el boton + del contador
    function AgregarContador(index){
        setproductoCantidad(() => productoCantidad.map((elemento, i) =>(i===index) ? 
        elemento + 1 : elemento));
    };

    //------Funcion RestarContador
    //funcion usada para el boton - del contador
    function RestarContador(index){
        setproductoCantidad(() => productoCantidad.map((elemento, i) =>(i===index && elemento - 1 >= 0) ? 
        elemento - 1 : elemento));
    };

    function AgregarCarrito(producto, cantidad) {
        //el parametro producto recibe el objeto del producto COMPLETO con toda su informacion
        //el findIndex si es false regresa -1, es decir, si el producto no esta en el carrito
        const indiceCarrito = carrito.findIndex(c => c.id === producto.id);

        //si el producto no esta en el carrito se agrega
        if (indiceCarrito < 0) {
            //descomponemos el objeto producto con los ... debido a que sino igualaria un objeto con otro y el cambio que se le aplique a uno
            //se le aplicara al otro. En cambio con los ... estamos creando un objeto nuevo con los valores del anterior
            const nuevoProducto = {...producto};
            //se le agrega al numero producto la propiedad de cantidad (ya que los productos originalmente no vienen con esta propiedad)
            nuevoProducto.cantidad = cantidad;
            //se registra el nuevo producto en el carrito manteniendo los productos anteriores a este
            setCarrito((prevState) => [...prevState, nuevoProducto]);
            
        // si el producto si existe en el carrito (const indiceCarrito -> se consigue igualar el id del producto seleccionado con el id de algun producto del carrito y se toma su index del carrito)
        } else {
            //se mapea el carrito o su prevstate para ubicar el elemento cuyo index coincida con el index obtenido en indiceCarrito y se edita su cantidad
            setCarrito((prevState) => prevState.map((productoEnCarrito, index) => {
                if (index === indiceCarrito) productoEnCarrito.cantidad = cantidad;
            
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
                                                alt="Not found"
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
                                                <Opciones title="Eliminar" marginTop="16"   width="16" color="white" textColor='black' icono={Deleteicon}  />
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
