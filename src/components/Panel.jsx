import { useRef } from "react";
import Boton from "./Boton";


function Panel(){
    const contenido2 = useRef();
    return(
        <>
            <div ref={contenido2}>
                <Boton title="Editar" marginTop="6" justify="end"  width="full" color="green" textColor='white'/>
                <Boton title="Eliminar" marginTop="6" justify="end"  width="full" color="green" textColor='white'/>
            </div>
        </>
    )
}

export default Panel;