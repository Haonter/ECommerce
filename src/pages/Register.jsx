import React from 'react'
import NavBarGuestRegister from '../components/NavBar/NavBarGuestRegister'
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
        </>
    );
}

export default Register;