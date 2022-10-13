import { useRef } from "react";
import Contador from "./Contador";


function Carrito(){
    const contenido1 = useRef();
    return(
        <>
            <div ref={contenido1}>
                <Contador/>
            </div>
        </>
    )
}

export default Carrito;