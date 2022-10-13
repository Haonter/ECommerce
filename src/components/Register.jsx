import Input from "./input";

function RegisterForm(){
    return(
        <div className='mt-10 px-10 space-x-10 grid grid-cols-2'>
            <Input title="Nombre"  id="Nombre" type="text" paddingy="3" width="full" fontSize="text-base"/>
            <Input title="Apellido" id="Apellido" type="text"  paddingy="3" width="full" fontSize="text-base" />
            <Input title="E-mail" id="Email" type="mail" paddingy="3" width="full" fontSize="text-base" />
            <Input title="Usuario" id="Usuario" type="text" paddingy="3" width="full" fontSize="text-base" />
            <Input title="Fecha de Nacimiento" id="Fecha de Nacimiento" type="date" paddingy="3" width="full" fontSize="text-base" />
            <Input title="Pais" id="Pais" type="text" paddingy="3" width="full" fontSize="text-base"/>
            <Input title="Contraseña" id="Contraseña" type="password" paddingy="3" width="full" fontSize="text-base"/>
            <Input title="Confirmar contraseña" id="Confirmar contraseña" type="password" paddingy="3" width="full" fontSize="text-base"/>
        </div>
    )
}

export default RegisterForm;