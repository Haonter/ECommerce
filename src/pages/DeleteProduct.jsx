// import { useEffect } from "react";

// function DeleteProduct(id){
    
//     const options = {
//         method: 'DELETE',
//     };

//     useEffect(
//         ()=> {
//             //se debe cambiar el endpoint por el endpoint de getproduct por id de diego y actualizarla en exhibicion componenete opciones, eliminar
//             fetch("http://localhost:3001/deleteproduct/"+id, options)
//                 .then((res)=> res.json())
//                 .catch((err)=> console.log(err));
//         },[])
// }

// export default DeleteProduct();