import React from 'react'
import NavBarAdminPanel from '../components/NavBar/NavBarAdminPanel'
import Exhibicion from '../components/Exhibicion'
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
            <Exhibicion map="products" flex="flex" marginleft="ml-5" hidden="hidden" cols="sm:grid-cols-3" href="/about-product-admin"/>
        </>
    );
}

export default AdminPanel;