/*import { useEffect } from "react";

function DeleteProduct(id){
    
    const options = {
        method: 'DELETE',
    };

    useEffect(
        ()=> {
            //se debe cambiar el endpoint por el endpoint de deleteproduct de diego y actualizarla en exhibicion componente opciones, eliminar
            fetch("http://localhost:5000/delete=/"+id, options)
                .then((res)=> res.json())
                .catch((err)=> console.log(err));
        },[])
}

export default DeleteProduct();
*/