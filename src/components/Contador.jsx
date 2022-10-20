
import Boton from "./Boton";
import Input from "./input";
import { useState, useRef, createRef, useEffect } from "react";



const refInputContador = createRef()
const InputRefContador = {refInputContador}


//---------------FUNCION PADRE Contador
//esta funcion arma el contador usado para indicar la cantidad de productos, llama a los componentes boton e input.
function Contador(props){
var [cantidad,setCantidad] = useState(0);


//----Funcion useEffect------
//Esta funcion es usada para enviar al componente exhibicion el valor de la cantidad en tiempo real cada vez que este se actualice
useEffect(() => {
    {props.parentCallback(cantidad)}
},[cantidad])


//------Funcion AgregarContador
//funcion usada para el boton + del contador
function AgregarContador(){
    return(
        <>
            {setCantidad(cantidad + 1)};
        </>
    )
};

//------Funcion RestarContador
//funcion usada para el boton - del contador
function RestarContador(){
    return(
        <>
            {setCantidad(cantidad  - 1)};
        </>
    )
};

    return(
        <>
            <div className={"flex" + props.hidden}>
                <Boton evento={RestarContador} title="-" marginy="2" justify="start" width="0.5" color="white" textColor='black' />
                <Input ref={refInputContador}  id="inputContador" value={cantidad} type="number" paddingy="2" width="12" fontSize="text-xs" text="text-center"/>
                <Boton evento={AgregarContador} title="+" marginy="2" justify="start" width="0.5" color="white" textColor='black' />
            </div>
        </>
    )
}


export default Contador;




/*evento={()=>{setCantidad(cantidad + 1)}}*/