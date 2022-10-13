import Boton from "./Boton";
import Input from "./input";

function Contador(){
    return(
        <>
            <div className="flex">
                <Boton title="-" marginTop="2" justify="start" width="0.5" color="white" textColor='black' />
                <Input type="number" paddingy="2" width="12" fontSize="text-xs"/>
                <Boton title="+" marginTop="2" justify="start" width="0.5" color="white" textColor='black' />
            </div>
        </>
    )
}

export default Contador;