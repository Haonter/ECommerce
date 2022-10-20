import React from 'react'
import NavBarAdminPanel from '../components/NavBar/NavBarAdminPanel'
import Products from '../components/Products';
import Boton from '../components/Boton';
import Exhibicion from '../components/Exhibicion'

const AdminPanel = () => {
    return ( 
        <>
            <NavBarAdminPanel/>
            <Exhibicion flex="flex" marginleft="ml-5" hidden="hidden" cols="sm:grid-cols-3">
                {/* recibe como children el boton de editar y el boton de eliminar*/}
                <Boton title="Editar" marginTop="6" justify="end"  width="full" color="green" textColor='white'/>
                <Boton title="Eliminar" marginTop="6" justify="end"  width="full" color="green" textColor='white'/>
            </Exhibicion>
        </>
    );
}

export default AdminPanel;