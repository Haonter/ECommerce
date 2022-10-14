import React from 'react'
import NavBarAdminPanel from '../components/NavBar/NavBarAdminPanel'
import Products from '../components/Products';
import Boton from '../components/Boton';

const AdminPanel = () => {
    return ( 
        <>
            <NavBarAdminPanel/>
            <Products>
                {/* recibe como children el boton de editar y el boton de eliminar*/}
                <Boton title="Editar" marginTop="6" justify="end"  width="full" color="green" textColor='white'/>
                <Boton title="Eliminar" marginTop="6" justify="end"  width="full" color="green" textColor='white'/>
            </Products>
        </>
    );
}

export default AdminPanel;