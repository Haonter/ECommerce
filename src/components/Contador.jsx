
import Boton from "./Boton";
import Input from "./input";
import { useState, useRef, createRef, useEffect } from "react";



const refInputContador = createRef()
const InputRefContador = {refInputContador}


function Contador(props){
var [cantidad,setCantidad] = useState(0);
    
useEffect(() => {
    {props.parentCallback(cantidad)}
},[cantidad])


function AgregarContador(){
    return(
        <>
            {setCantidad(cantidad + 1)};
            

        </>
    )
};


function RestarContador(){
    return(
        <>
            {setCantidad(cantidad  - 1)};
        </>
    )
};



    return(
        <>
            <div className="flex">
                <Boton evento={RestarContador} title="-" marginy="2" justify="start" width="0.5" color="white" textColor='black' />
                <Input ref={refInputContador}  id="inputContador" value={cantidad} type="number" paddingy="2" width="12" fontSize="text-xs" text="text-center"/>
                <Boton evento={AgregarContador} title="+" marginy="2" justify="start" width="0.5" color="white" textColor='black' />
            </div>
        </>
    )
}


export default Contador;
export {refInputContador};
export {InputRefContador};




/*evento={()=>{setCantidad(cantidad + 1)}}*/