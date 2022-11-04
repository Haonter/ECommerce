import React from 'react'
import NavBarGuestLogin from '../components/NavBar/NavBarGuestLogin'
import Input from "../components/input";
import {useState , useEffect} from "react";
import { Navigate, useNavigate } from 'react-router-dom';

//const usuario = ""

// const Diariela = {
//         Nombre: "Diariela",
//         Apellido: "Hernandez",
//         FechaNacimiento: "1999-01-22",
//         Correo: "hdiariela@gmail.com",
//         Pais: "Venezuela",
//         Password: "123456789",
//         Usuario: "Diari"    
//     }

// const Diego = {
//         Nombre: "Diego",
//         Apellido: "Rodriguez",
//         FechaNacimiento: "1995-03-03",
//         Correo: "rdiego@gmail.com",
//         Pais: "Chile",
//         Password: "Diego123456789",
//         Usuario: "DiegoR",
//         Rol: "Admin"     
//     }



const Login = () => {
    const [usuarioInput, setUsuarioInput] = useState("")
    const [passInput, setPassInput] = useState("")
    const [infoUsuario, setInfoUsuario] = useState(null)
    const [mensajeError, setMensajeError] = useState("")
    let navigate = useNavigate();
    const guardarUsuario = (evento) =>{
        setUsuarioInput(evento.target.value)
        
    }

    const guardarPass = (evento) =>{
        setPassInput(evento.target.value)
        
    }
    // console.log(usuarioInput)
    // console.log(passInput)

    //Creando promesa para la validacion del usuario en base de datos

    //funcion que simula el fetch debe quitarse cuando conectemos la api
    
    const verificarUsuario = () => {
        const credenciales = {
            Usuario: usuarioInput,
            Password: passInput
        }
        // console.log(credenciales)
        obtenerUsuario(credenciales);
    }

    function obtenerUsuario(credenciales) {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credenciales)
        };
        fetch('http://localhost:5000/login', requestOptions)
            .then((respuesta)=> {
                
                if (respuesta.ok) {                    
                    respuesta.json().then((datos) => {
                        console.log(datos);
                        if (datos === false) {
                            setMensajeError("Credenciales Erradas")
                        }else {
                            setInfoUsuario(datos.Usuario)                        
                        }
                    });                    
                }else {
                    throw 'La peticion ha fallado';
                }

            })
            .catch((err)=> console.log(err));
            // console.log(infoUsuario)
    }
    
    useEffect(() => {        
        if (infoUsuario != null) {
            if (infoUsuario.Rol){
                if (infoUsuario.Rol === "Administrador"){
                    navigate("/adminhome");
                    // <Navigate to="/adminhome"/>
                }
            }else {
                // <Navigate to="/Home"/>
                navigate("/Home");
            } 
        }

    }, [infoUsuario])

    
    // const validarRol = (rol) => {
    //     if (rol){
    //         if (rol === "Admin"){
    //             <Navigate to="/adminhome"/>
    //         }
    //     }else {
    //         <Navigate to="/Home"/>
    //     }
    // }


        //esta funcion primero debe ejecutar el GET y guardar la informacion completa del usuario en una la const usuario de la linea 6
        // if (Diego){
        //     validarPass(Diego.Password)
        //     .then(Diego => validarRol(Diego.Rol))
        //     .catch(mensajeError);
        // }
        


    // const mensajeError = () => {
    //     return ("Usuario errado")
    // }
    

    return ( 
        <>
            <NavBarGuestLogin/>
            <h1 className="bg-white text-center pt-5 text-xl">Login</h1>
            <form>
                    <div className='flex flex-col mt-10 justify-start items-start mx-96  '>
                        <Input 
                                title="Usuario"  
                                name="Usuario" 
                                type="text" 
                                paddingy="3" 
                                width="full" 
                                fontSize="text-base" 
                                class=" w-full "
                                onChange ={guardarUsuario}/>
                            <Input 
                                title="Contraseña"  
                                name="Password" 
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
                                onClick={verificarUsuario}
                                type='button'
                                className="flex w-32 justify-center rounded-full bg-green-400 py-1 px-5 text-sm font-medium text-white hover:bg-gray-400 md:py-1 md:px-4 md:text-sm"
                            >
                                Ingresar
                            </button>
                        </div>
                    </div>
                </form>
                <p>{mensajeError}</p>
        </>
    );
}

export default Login;