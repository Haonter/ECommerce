import React from 'react'
import NavBarGuestLogin from '../components/NavBar/NavBarGuestLogin'
import Input from "../components/input";
import {useState } from "react";
import { Navigate } from 'react-router-dom';

//const usuario = ""

const Diariela = {
        Nombre: "Diariela",
        Apellido: "Hernandez",
        FechaNacimiento: "1999-01-22",
        Correo: "hdiariela@gmail.com",
        Pais: "Venezuela",
        Password: "123456789",
        Usuario: "Diari"    
    }

const Diego = {
        Nombre: "Diego",
        Apellido: "Rodriguez",
        FechaNacimiento: "1995-03-03",
        Correo: "rdiego@gmail.com",
        Pais: "Chile",
        Password: "Diego123456789",
        Usuario: "DiegoR",
        Rol: "Admin"     
    }



const Login = () => {
    const [usuarioInput, setUsuarioInput] = useState("")
    const [passInput, setPassInput] = useState("")

    const guardarUsuario = (evento) =>{
        setUsuarioInput(evento.target.value)
        
    }

    const guardarPass = (evento) =>{
        setPassInput(evento.target.value)
        
    }
    console.log(usuarioInput)
    console.log(passInput)

    //Creando promesa para la validacion del usuario en base de datos
    
    const verificarUsuario = () => {
        //esta funcion primero debe ejecutar el GET y guardar la informacion completa del usuario en una la const usuario de la linea 6
        return Diego
    }

    const validarPass = () => {
        if (Diego.Password === passInput){
            return true
        } else {
            return ("Contraseña errada")
        }
    };

    const validarRol = () => {
        if (Diego.Rol){
            if (Diego.Rol === "Admin"){
                <Navigate to="/adminhome"/>
            }
        }else {
            <Navigate to="/Home"/>
        }
    }

    const mensajeError = () => {
        return ("Usuario errado")
    }

    const promesa1 = 
    verificarUsuario
    .then(usuario => validarPass(usuario.Password))
    .then(usuario => validarRol(usuario.Rol))
    .catch(mensajeError);

    return ( 
        <>
            <NavBarGuestLogin/>
            <h1 className="bg-white text-center pt-5 text-xl">Login</h1>
            <form method='GET' action={"http://localhost:5000/getuser/"+usuarioInput}>
                    <div className='flex flex-col mt-10 justify-start items-start mx-96  '>
                        <Input 
                                title="Usuario"  
                                name="ID" 
                                type="text" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class=" w-full "
                                onChange ={guardarUsuario}/>
                            <Input 
                                title="Contraseña"  
                                name="Nombre" 
                                type="password" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class=" w-full "
                                onChange ={guardarPass}/>
                    </div>
                    <div className='mt-5 sm:flex-col'>
                        <div className="rounded-full flex justify-center mt-16 pb-10">
                            <button
                                onClick={promesa1}
                                type='submit'
                                className="flex w-32 justify-center rounded-full bg-green-400 py-1 px-5 text-sm font-medium text-white hover:bg-gray-400 md:py-1 md:px-4 md:text-sm"
                            >
                                Ingresar
                            </button>
                        </div>
                    </div>
                </form>
        </>
    );
}

export default Login;