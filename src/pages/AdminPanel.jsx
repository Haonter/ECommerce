import React from 'react'
import NavBarAdminPanel from '../components/NavBar/NavBarAdminPanel'
import Exhibicion from '../components/Exhibicion'
import Opciones from '../components/Opciones'
import Deleteicon from '../media/deleteicon.png'; 
import Updateicon from '../media/updateicon.png'; 
import Newproducticon from '../media/newproduct.png'; 
import Link from '../components/Link'

const AdminPanel = () => {
    return ( 
        <>
            <NavBarAdminPanel/>
            <div className='flex items-center  space-x-80  mt-5 mr-9  '>
                <h1 className="bg-white text-xl ml-96 pl-64	">Panel</h1>
                <Link title="Nuevo producto" marginy="1" justify="end"  width="60" color="white" textColor='gray' img={Newproducticon}  marginTop="6"   widthimg="14" colorimg="white" textColorimg='black' hover="hover:bg-gray-200" href="http://localhost:3000/insertproduct"/>
            </div>
            <Exhibicion map="products" flex="flex" marginleft="ml-5" hidden="hidden" cols="sm:grid-cols-3" href="/about-product-admin">
                {/* recibe como children el boton de editar y el boton de eliminar*/}
                <div className='flex justify-end items-end'>
                    <Opciones title="Eliminar" marginTop="6"   width="16" color="white" textColor='black' icono={Updateicon}/>
                    <Opciones title="Eliminar" marginTop="6"   width="16" color="white" textColor='black' icono={Deleteicon}/>
                </div>            
            </Exhibicion>
        </>
    );
}

export default AdminPanel;