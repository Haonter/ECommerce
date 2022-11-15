import React from 'react'
import NavBarGuestLogin from '../components/NavBar/NavBarGuestLogin'
import Input from "../components/input";
import {useState , useEffect} from "react";
import backgroundlg from "../media/BGLogin.jpg"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [usuarioInput, setUsuarioInput] = useState("")
    const [passInput, setPassInput] = useState("")
    const [infoUsuario, setInfoUsuario] = useState(null)
    const [mensajeError, setMensajeError] = useState("")
    let navigate = useNavigate();
    
    //Cargando credenciales
    const guardarUsuario = (evento) =>{
        setUsuarioInput(evento.target.value)
        
    }
    const guardarPass = (evento) =>{
        setPassInput(evento.target.value)
        
    }
    //console.log(usuarioInput)
    //console.log(passInput)

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
                        console.log("Estado de Datos:")
                        console.log(datos);
                        if (datos === false) {
                            setMensajeError("¡Usuario o Contraseña incorrecta!")
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
    //Ingreso por Roles
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

    return ( 
        <>
        <div style={{ 
                backgroundImage: `url(${backgroundlg})`, 
                width:'100vw', 
                height:'50.5vw', 
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100vmax' 
                }}
            >
            <NavBarGuestLogin/>
            <form className='mt-8'>
                <h1 className="text-center font-bold pt-8 text-xl">Login</h1>
                <div className='flex flex-col mt-20 justify-start items-start mx-96'>
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
                            className="w-32 rounded-full bg-green-400 py-1 px-5 text-sm font-medium text-white hover:bg-gray-400 md:py-1 md:px-4 md:text-sm"
                        >
                            Iniciar Sesion
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <p className='w-62 rounded-md text-red-600 px-5 text-sm font-bold mb-4'>{mensajeError}</p>
                    </div>

                    <div className='flex justify-center mt-2'>
                        <div className='flex flex-col'>
                            <span className='mb-2'>¿No tienes cuenta?</span>
                            <a 
                                href='http://localhost:3000/register'
                                className="w-32 rounded-full bg-green-400 py-1 px-5 text-sm font-medium text-white hover:bg-gray-400 md:py-1 md:px-4 md:text-sm"
                            >
                                Registrate aqui
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}

export default Login;