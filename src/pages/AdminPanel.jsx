import React from 'react'
import NavBarAdminPanel from '../components/NavBar/NavBarAdminPanel'
import Exhibicion from '../components/Exhibicion'
import Newproducticon from '../media/newproduct.png'; 
import Link from '../components/Link'
import backgroundCart from '../media/BGCart.jpg'

const AdminPanel = () => {
    return ( 
        <>
            <head>
                <title>
                    Panel de Administracion
                </title>
            </head>
            <div style={{ 
                backgroundImage: `url(${backgroundCart})`, 
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100vmax' 
                }}
            >
                <NavBarAdminPanel/>
                <div className='flex space-x-80 my-4'>
                    <h1 className="text-xl font-bold ml-96 pl-64 mb-4">Panel</h1>
                    <Link title="Agregar producto" justify="end" textColor='gray-900' img={Newproducticon}  widthimg="14" hover="hover:bg-zinc-400" href="http://localhost:3000/insertproduct"/>
                </div>
                <Exhibicion map="products" flex="flex" marginleft="ml-5" hidden="hidden" cols="sm:grid-cols-3" href="/about-product-admin"/>
            </div>
        </>
    );
}

export default AdminPanel;