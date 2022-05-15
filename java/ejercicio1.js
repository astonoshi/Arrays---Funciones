//Ejercicio 1
let deudoresMorosos = [

{    nombre: "Derey", deuda: "100"},

{    nombre: "Fernandez", deuda: "500", estado: "incobrable"},

{    nombre: "Sunrise", deuda: "800", estado: "incobrable"},

{    nombre: "Jacobson", deuda: "1000"},

{    nombre: "Celeson", deuda: "300", estado: "incobrable"},
]
console.log(deudoresMorosos);

let menorQue = deudoresMorosos.filter ( (deudor) => {
    return deudor.deuda < 500;
}
);
console.log(menorQue);

let mayorQue = deudoresMorosos.filter ( (deudor) => {
    return deudor.deuda > 500;
}
);
console.log(mayorQue);

let incobrables = deudoresMorosos.filter ( (deudor) => {
    return deudor.estado === "incobrable";
}
);
console.log(incobrables);


// Ejercicio 2

class ListadoProductos{
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

let cantidadProductos = Number (prompt("Ingrese la cantidad de productos"));
console.log(cantidadProductos);

const productos = [];


for (let i = 0; i < cantidadProductos; i++) {
    productos [i] = new ListadoProductos(prompt("Ingrese el nombre del producto"), 
    Number(prompt("Ingrese el precio del producto")), 
    Number(prompt("Ingrese el stock producto")));
    }




console.log(productos);
alert("Los productos disponibles son : " + productos.map(producto => producto.nombre));























