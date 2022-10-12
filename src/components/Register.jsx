import Input from "./input";

function RegisterForm(){
    return(
        <div className='mt-10 px-10 space-x-10 grid grid-cols-2'>
            <Input title="Nombre"  id="Nombre" type="text" />
            <Input title="Apellido" id="Apellido" type="text" />
            <Input title="E-mail" id="Email" type="mail" />
            <Input title="Usuario" id="Usuario" type="text" />
            <Input title="Fecha de Nacimiento" id="Fecha de Nacimiento" type="date" />
            <Input title="Pais" id="Pais" type="text" />
            <Input title="Contraseña" id="Contraseña" type="password" />
            <Input title="Confirmar contraseña" id="Confirmar contraseña" type="password" />
        </div>
    )
}

export default RegisterForm;