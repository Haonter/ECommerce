import React from 'react'
import NavBar from '../components/NavBarGuest'
import RegisterForm from '../components/Register';

const Register = () => {
    return ( 
        <>
            <NavBar/>
            <form>
                <RegisterForm />
                <button type="submit" className='bg-white rounded'>Registrar</button>
            </form>
        </>
    );
}

export default Register;