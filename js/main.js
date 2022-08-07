
// Simulador interactivo

// Primer pantalla, bienvenida a la pagina, funciona! 
/*

function bienvenida(){
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido');
    alert('Bienvenido a nuestra pagina' + ' ' + nombre + ' ' + apellido);

    this.nombreCompleto = function(){
        return (nombre + ' ' + ' ' + apellido);
    }
}

bienvenida();

// Tercer intento funcion generica, funciona! 

//Consultar el precio del producto, incluyendo el envio

let producto1 = 'Tarta manzana'
let producto2 = 'Tarta ricota'
let producto3 = 'Tarta frutillas'
let producto4 = 'Pasta frola'

let precio1 = 100
let precio2 = 120
let precio3 = 150
let precio4 = 130

let costoEnvio = 1.20

function calcularCosto ()
{
    if(seleccion === producto1)
    {    
    return parseInt (precio1 * costoEnvio); 
    } else if (seleccion === producto2){
          return parseInt (precio2 * costoEnvio)
      }
      else if (seleccion === producto3){
          return parseInt (precio3 * costoEnvio)
      }
      else if (seleccion === producto4){
          return parseInt (precio4 * costoEnvio)
      }
}



let seleccion = prompt('Ingrese producto')


if (seleccion === producto1){
    alert ( producto1 + ' ' + 'el precio total con el envio es' + ' ' +  calcularCosto()  );
} else if (seleccion === producto2){
    alert ( producto2 + ' ' + 'el precio total con el envio es' + ' ' +  calcularCosto()  );
} else if (seleccion === producto3){
    alert ( producto3 + ' ' + 'el precio total con el envio es' + ' ' + calcularCosto() );
} else if (seleccion === producto4){
    alert ( producto4 + ' ' + 'el precios total con el envio es' + ' ' + calcularCosto() );
}
else{
    alert('No existe el producto');
}


// Ahora, agregar el item y totalizar el precio, 
// Por ahora solo funciona con un producto



function compra (){
    if ((compraTotal === producto1) && (cantidad != '')){
        return parseInt (precio1 * cantidad * costoEnvio);
    } else if ((compraTotal === producto2) && (cantidad != '')){
        return parseInt (precio2 * cantidad * costoEnvio);
    } else if ((compraTotal === producto3) && (cantidad != '')){
        return parseInt (precio3 * cantidad * costoEnvio);
    } else if ((compraTotal === producto4) && (cantidad != '')){
        return parseInt (precio4 * cantidad * costoEnvio);
    }
}




let compraTotal = prompt('Agregar producto a la compra')
let cantidad = prompt('Cantidad')


while (compraTotal != 'salir')
{ 

if (compraTotal === producto1)
{
    alert('El precio de' + ' ' + producto1 + ' ' + 'es' + ' ' + compra())
    
} else if (compraTotal === producto2){
    alert('El precio de' + ' ' + producto2 + ' ' + 'es' + ' ' + compra())
    
} else if (compraTotal === producto3){
    alert('El precio de' + ' ' + producto3 + ' ' + 'es' + ' ' + compra())
   
} else if (compraTotal === producto4){
    alert('El precio de' + ' ' + producto4 + ' ' + 'es' + ' ' + compra())
    
} else {
    alert('la seleccion no es correcta');
}

    compraTotal = prompt('Agregar producto a la compra')
    cantidad = prompt('Cantidad');

}


// Saludo de despedida de la pagina, funciona!  

alert('Gracias por visitar nuestra pagina' + ' ' + this.nombreCompleto());


// final de la entrega de simulador interactivo


// Objetos, definicion de los productos

class Productos {
    constructor (nombre, disponibilidad, precio)
{
    this.nombre = nombre;
    this.disponibilidad = disponibilidad;
    this.precio = parseInt (precio);
   
}
    sumarCosto (){
        this.precio = this.precio * 1.20; 
    }
    seleccion(){
        console.log('El producto seleccionado es' + ' ' + nombre + 'La disponibilidad es' + ' ' + disponibilidad + ' ' + 'y el precio final con el costo incluido es' + ' ' + this.sumarCosto());
    }
   
}

const Producto1 = new Productos ('Tarta manzana', '48 horas', 100);
const Producto2 = new Productos ('Tarta ricota', '24 horas', 120);
const Producto3 = new Productos ('Tarta frutillas', 'a pedido', 150);
const Producto4 = new Productos ('Pasta frola', 'en el dia', 130);

console.log(Producto1);
console.log(Producto1.sumarCosto); 
Productos.seleccion();

console.log(Producto2);
console.log(Producto2.sumarCosto);
Productos.seleccion();

console.log(Producto3);
console.log(Producto3.sumarCosto);
Productos.seleccion();

console.log(Producto4);
console.log(Producto4.sumarCosto);
Productos.seleccion();

*/



























