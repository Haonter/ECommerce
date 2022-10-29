import React from 'react'
import NavBarGuestRegister from '../components/NavBar/NavBarGuestRegister'
<<<<<<< Updated upstream
import RegisterForm from '../components/Register';

const Register = () => {
    return ( 
        <>
            <NavBarGuestRegister/>
            <form onSubmit={" --- Pendiente --- "}>
                <RegisterForm />
                <div className='mt-5 sm:flex-col'>
                    <div className="rounded-full flex justify-center">
                        <button
                            type='submit'
                            className="flex w-32 justify-center rounded-full bg-green-400 py-1 px-5 text-sm font-medium text-white hover:bg-gray-400 md:py-1 md:px-4 md:text-sm"
                        >
                            Registrate
                        </button>
                    </div>
                </div>
            </form>
        
            {/*<button 
                type="submit" className='bg-blue rounded text-white' >
                    Registrar
            </button>*/}
=======
//import { useState } from 'react';
import Input from "../components/input";


const Register = () => {
    //const [datos, setDatos] = useState([])

    return ( 
        <>
            <div className='bg-white w-screen'>
                <NavBarGuestRegister/>
                <form method='POST' action="http://localhost:5000/register">
                    <div className='grid grid-cols-2 mt-10 justify-center items-center space-x-10 ml-14'>
                        <Input 
                            title="Nombre"  
                            id="Nombre"
                            type="text" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 ml-9"
                        />
                        <Input 
                            title="Apellido" 
                            id="Apellido"
                            type="text"  
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 "
                        />
                        <Input 
                            title="FechaNacimiento" 
                            id="FechaNacimiento"
                            type="date" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Correo" 
                            id="Correo" 
                            type="mail" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Pais" 
                            id="Pais"
                            type="text" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Password" 
                            id="Password"
                            type="password" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Usuario" 
                            id="Usuario"
                            type="text" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                    </div>
                    <div className='mt-5 sm:flex-col'>
                        <div className="rounded-full flex justify-center mt-16 pb-10">
                            <button onClick="" type='submit'
                                className="flex w-32 justify-center rounded-full bg-green-400 py-1 px-5 text-sm font-medium text-white hover:bg-gray-400 md:py-1 md:px-4 md:text-sm">
                                    Registrate
                            </button>
                        </div>
                    </div>
                </form>
            </div>
>>>>>>> Stashed changes
        </>
    );
}

export default Register;