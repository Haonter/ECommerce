import Input from "./input";

function RegisterForm(){
    return(
        <div className='grid grid-cols-2 mt-10 justify-center items-center space-x-10 ml-14'>
            <Input title="Nombre"  id="Nombre" type="text" paddingy="3" width="full" fontSize="text-base" class="w-full sm:w-3/4 ml-9"/>
            <Input title="Apellido" id="Apellido" type="text"  paddingy="3" width="full" fontSize="text-base" class="w-full sm:w-3/4 "/>
            <Input title="E-mail" id="Email" type="mail" paddingy="3" width="full" fontSize="text-base" class="w-full sm:w-3/4 mt-10"/>
            <Input title="Usuario" id="Usuario" type="text" paddingy="3" width="full" fontSize="text-base" class="w-full sm:w-3/4 mt-10"/>
            <Input title="Fecha de Nacimiento" id="Fecha de Nacimiento" type="date" paddingy="3" width="full" fontSize="text-base" class="w-full sm:w-3/4 mt-10"/>
            <Input title="Pais" id="Pais" type="text" paddingy="3" width="full" fontSize="text-base" class="w-full sm:w-3/4 mt-10"/>
            <Input title="Contraseña" id="Contraseña" type="password" paddingy="3" width="full" fontSize="text-base" class="w-full sm:w-3/4 mt-10"/>
            <Input title="Confirmar contraseña" id="Confirmar contraseña" type="password" paddingy="3" width="full" fontSize="text-base" class="w-full sm:w-3/4 mt-10"/>
        </div>
    )
}

export default RegisterForm;