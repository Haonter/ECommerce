import React from 'react'
import NavBarGuestRegister from '../components/NavBar/NavBarGuestRegister'
import RegisterForm from '../components/Register';

const Register = () => {
    return ( 
        <>
            <NavBarGuestRegister/>
            <form>
                <RegisterForm />
                <button type="submit" className='bg-white rounded'>Registrar</button>
            </form>
        </>
    );
}

export default Register;