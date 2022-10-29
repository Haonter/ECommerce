import React from 'react'
import NavBarGuestRegister from '../components/NavBar/NavBarGuestRegister'
import Input from "../components/input";

const Register = () => {
    
    return ( 
        <>
            <div className='bg-white w-screen'>
                <NavBarGuestRegister/>
                <form method='POST' action="http://localhost:5000/register">
                    <div className='grid grid-cols-2 mt-10 justify-center items-center space-x-10 ml-14'>
                        <Input 
                            title="Nombre"  
                            name="Nombre"
                            type="text" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 ml-9"
                        />
                        <Input 
                            title="Apellido" 
                            name="Apellido"
                            type="text"  
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 "
                        />
                        <Input 
                            title="Fecha de Nacimiento" 
                            name="FechaNacimiento"
                            type="date" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Correo" 
                            name="Correo" 
                            type="mail" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Pais" 
                            name="Pais"
                            type="text" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Password" 
                            name="Password"
                            type="password" 
                            paddingy="3" 
                            width="full" 
                            fontSize="text-base" 
                            class="w-full sm:w-3/4 mt-10"
                        />
                        <Input 
                            title="Usuario" 
                            name="Usuario"
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
        </>
    );
}

export default Register;
