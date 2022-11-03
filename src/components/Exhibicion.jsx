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
        name: 'Mouse Inalámbrico Logitech G603',
        description: "XXXXXXXXXXXXXX",
        price: '$35',
        desc: '$27,2',
        imagen: 'https://www.videocenterfunstore.cl/wp-content/uploads/2021/06/1_mouse-logitech-g603-wireless1-51508dc6e083fc444916086097448182-1024-1024-600x600.png',
    },
    {
        id: 2,
        name: 'Tv Samsumg',
        description: "XXXXXXXXXXXXXX",
        price: '$480',
        desc: '$399,99',
        imagen: 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00880609048350L.jpg',
    },
    {
        id: 3,
        name: 'Laptop Asus i3',
        description: "XXXXXXXXXXXXXX",
        price: '$485',
        desc: '$430,2',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqW9ZmrpK6GtepVfxGHg9Ee3-k3yx7zGI784HCihos9Ti9Mp9XKec3DdoKzzj3nRZws4&usqp=CAU84_2.jpg',
    },
    {
        id: 4,
        name: 'Samsumg S12 5G',
        description: "XXXXXXXXXXXXXX",
        price: '$500',
        desc: '$470,25',
        imagen: 'https://tecnomari.es/wp-content/uploads/2021/01/1950-samsung-galaxy-s21-5g-128gb-gris-libre-especificaciones.jpg',
    },
    {
        id: 5,
        name: 'Teclado Logitech K400 Plus',
        description: "XXXXXXXXXXXXXX",
        price: '$40',
        desc: '$37,2',
        imagen: 'https://cyccomputer.pe/45095-large_default/teclado-logitech-k400-plus-tv-wireless-touchpad-black-pn920-007123.jpg',
    },
    {
        id: 6,
        name: 'Memoria RAM Kingston Fury DDR4 3200Mhz',
        description: "XXXXXXXXXXXXXX",
        price: '$100',
        desc: '$89,2',
        imagen: 'https://moncasecomputer.com/wp-content/uploads/2021/09/MEMORIA-RAM-KINGSTON-HYPERX-FURY-8GB-DDR4-3200MHZ.png',
    },
    {
        id: 7,
        name: 'SSD Western Digital 1TB WD Blue 3D NAND, M.2 2280 WDS100T2B0B',
        description: "XXXXXXXXXXXXXX",
        price: '$190',
        desc: '$85,2',
        imagen: 'https://alca-1396c.kxcdn.com/media/2019/02/disco-solido-ssd-m2-2280-wd-blue-3d-nand-1tb-sata-30-D_NQ_NP_640284-MPE28061465596_082018-F.jpg',
    },
    {
        id: 8,
        name: 'Monitor ASUS ProArt PA32UCRK 32″ 4K HDR',
        description: "XXXXXXXXXXXXXX",
        price: '$300',
        desc: '$279,99',
        imagen: 'https://netpc.uy/wp-content/uploads/2022/07/1-20.jpg',
    },
    // More products...
]

function Exhibicion() {

function Exhibicion({children, flex, marginleft, hidden, cols, map, hiddenop}) {
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

        /*
        setCarrito(() => carrito.map((elemento, i) =>(i==index) 
        ? {
            id:elemento.id , 
            name: elemento.name, 
            description: elemento.description , 
            price:elemento.price, 
            desc:elemento.desc, 
            imagen: elemento.imagen, 
            cantidad:cantidad
        } 
        : elemento ))
        console.log(carrito) */

    };

    return (
        <>
        <div className="bg-white ">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
            <section className = " ">
                <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <h2 className="sr-only">Obtener productos con metodo GET y eliminar array de ejemplo</h2>
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group shadow-sm shadow-blue-900 px-4 py-4 rounded-xl">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200  xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            <Contador/>
                            <Boton title="Agregar al carrito" marginTop="6" justify="end"  width="full" color="green" textColor='white'  />
                        </a>
                    ))}
                </div>
            </section>
            </div>
        </div>
        <Pagination/>
        </>
    ) 
}



export default Exhibicion;