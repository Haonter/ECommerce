var cantidad= 0 
var carrito=[]


function contadorSumar(){
    cantidad++
    document.getElementById('inputContador').value = cantidad;
}

function contadorRstar(){
    cantidad--
}

function agregarCarrito(IdProduct) {
    carrito.push(IdProduct)
}