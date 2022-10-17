
import Boton from "./Boton";
import Input from "./input";


var cantidad= 0 
function Contador(){
    return(
        <>
            <div className="flex">
                <Boton title="-" marginy="2" justify="start" width="0.5" color="white" textColor='black' />
                <Input id="inputContador" value={cantidad} type="number" paddingy="2" width="12" fontSize="text-xs" text="text-center"/>
                <Boton function={sumarContador} title="+" marginy="2" justify="start" width="0.5" color="white" textColor='black' />
            </div>
        </>
    )

    function sumarContador(){
        return(
            cantidad++
        )
    }
}
console.log(cantidad)

export default Contador;