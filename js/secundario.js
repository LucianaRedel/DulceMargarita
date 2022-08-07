/*

// PAGINA DE PRUEBAS Y EJERCICIOS //

Tipos de datos

"Hello Wordl"  String

100.40 number

true or false boolean 

array 
[ "juan", "carlos", "ana"]
[ 1 5 9]
[false, true, true]

object
{
    "userName": 'juan',
    "entries": 1,
    "registered": false
}
{
    "userName": 'carlos',
    "entries": 5,
    "registered": true
}
{
    "userName": 'ana',
    "entries": 9,
    "registered": true
}




let userName = prompt('Ingrese su nombre:')

if (userName ==='Catalina' ) {
    alert('Bienvenido a nuestra pagina web');


} else{
    alert("Acceso restringido")

}

//

let name = 'Catalina';
let lastName = 'Quiroga'; 

let completeName = name + ' ' + lastName

console.log(completeName);

//

const city1 = 'Buenos Aires';
const city2 = 'Rosario';
const city3 = 'Cordoba'

console.log(city1);
console.log(city2);
console.log(city3);

//

let name1 = 'Homer';
let surname1 = 'Simpson';
let age = 37;

console.log (name1);
console.log (surname1);
console.log (37);

//

let name4 = 'Bart';
let surname4 = 'Simpson';
let address4 = '742 Evergreen';
const plateNumber = 'B47U89RE243';

let carnet = 'Plate Number: '+plateNumber+''+
             ' '+'Name: '+name4+''+ 
             ' '+'Surname: '+surname4+''+
             ' '+'Address: '+address4+'';

console.log(carnet);

//

let family1 = prompt('enter family1');
let family2 = prompt('enter family2');
let family3 = prompt('enter family3');

let family = '1: '+family1+''+
             ' '+'2: '+family2+''+
             ' '+'3: '+family3+''


//

let enter = prompt ('enter a number');

if( enter == 1 ){
    alert('Homer');
}
else if( enter == 2) {
    alert('Marge');
}
else if( enter == 3){
    alert('Bart');
}
else if( enter == 4){
    alert('Lisa');
}


//

let entrada1 = parseFloat(prompt('enter a number'));

if ((entrada1 >= 0) && (entrada1 <= 1000) ) {
    alert('low amount');
}
else if ((entrada1 >= 1001) && (entrada1 <= 3000) ) {
    alert('medium amount');
}
else if (entrada1 > 3000 ){
    alert('high amount');
}

// 

let numberOne = 100;
let numberTwo = 30; 

let result = numberOne + numberTwo; 

console.log(result); 

//

let password = 'Mama123';
let input = 'mama123';

let resultInput = password === input; 

console.log(resultInput);

//

let password1 = 'Mama123';
let input1 = 'mama123';

let resultInput1 = password1 === input1;

if (resultInput1 === true){
    console.log('login correcto');

    }
    else{
        console.log('login incorrecto');
    }

//

let score = 70;

if (score > 30) {
        console.log ('You need to practice')
}
else if (score > 15 ){
        console.log('You are learning')
}
else{
        console.log('You need to follow this tutorial')
}

//

let typeCard = 'Debit Card';

switch(typeCard){
    case "Debit Card":
        console.log('This is a debit card');
        break;
    case "Credit Card":
        console.log('This is a credit card');
        break
    default:
        console.log('You do not have a card');
}

//

let userName2 = prompt('Enter your name');
let surname2 = prompt('Enter your surname');

if ((userName2 != '') && (surname2 != '')){
    alert ('Name:' + userName2 + 'Surname:' + surname2);
}   else{
        alert('Error');
    }

//

let userName3 = prompt('Enter your name')

if( (userName3 == 'ANA') || (userName3 == 'ana')){
    alert('user name is Ana');
} 
else{
    alert('user name is not Ana');
}

//

let name4 = 'Bart';
let surname4 = 'Simpson';
let address4 = '742 Evergreen';
const plateNumber = 'B47U89RE243';

let carnet = name4 + '' + surname4 + '' + address4 + '' + plateNumber

console.log(carnet);

//

console.log('hello world')
// ? ¿Qué tenemos? 
// * ASIGNACION DE VARIABLES
// * CONDICIONALES - !operadores
// * INPUT DE USUARIO (PROMPT)
// * CONSOLA

// TODO: Pedir al usuario el nombre y la edad
let userName = prompt('Digame su nombre')
let age = Number(prompt('Dicte su edad'))
// TODO: informar si es mayor de edad mayor a 17 años ,
if( age > 17) {
    alert('El usuario es mayor de edad.')
}
else if( age < 17 && age > 13){
    alert('El usuario es adolescente')
}else if ( age < 13 ){
    alert('El usuario es un niño')
}

console.log('El nombre del usuario es ', userName)

console.log('hello world')
// ? ¿Qué tenemos? 
// * ASIGNACION DE VARIABLES
// * CONDICIONALES - !operadores
// * INPUT DE USUARIO (PROMPT)
// * CONSOLA

// TODO: Pedir al usuario el nombre y la edad
const userName = prompt('Digame su nombre')
let age = Number(prompt('Dicte su edad'))
let message = 'El usuario no insertó edad.'
// TODO: informar si es mayor de edad mayor a 17 años ,
if( age > 17) {
    message='El usuario es mayor de edad.'
}
else if( age < 17 && age > 13){
    message='El usuario es adolescente'
}else if ( age < 13 ){
    message='El usuario es un niño'
}
alert(message)

console.log('El nombre del usuario es ', userName)

console.log('hello world')
// ? ¿Qué tenemos? 
// * ASIGNACION DE VARIABLES
// * CONDICIONALES - !operadores
// * INPUT DE USUARIO (PROMPT)
// * CONSOLA

// TODO: Pedir al usuario el nombre y la edad
const userName = prompt('Digame su nombre')
let age = Number(prompt('Dicte su edad'))
let ageGroup = 'niño/a'
// TODO: informar si es mayor de edad mayor a 17 años ,
if( age > 17) {
    ageGroup='adulto'
}
else if( age < 17 && age > 13){
    ageGroup='adolescente'
}else if ( age < 13 ){
    ageGroup='niño'
}
// console.log("Hola "+userName," tu eres"+ageGroup+" y tienes "+age+" años de edad.")
console.log(`Hola ${userName} tu eres ${ageGroup} y tienes ${age} años de edad`)
// console.log('El nombre del usuario es ', userName)

// Clase ciclos, ejercicio 1

let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES'); 
let texto = prompt('INGRESAR TEXTO A REPETIR');

for (let index = 0; index < cantidad; index++) 
{
alert(texto); 
}

// Actividad 1 Yo no fui 

let usuario1 = 'Bart'

let ingresado = prompt('ingrese su usuario')

if(usuario1 === ingresado){
    alert('Fui yo');
}
else{
    alert('Yo no fui');
}

// Actividad 2 presionar y

let tecla = 'y'

let ingresado1 = prompt('ingrese una tecla')

if((ingresado1 === 'y')  || (ingresado1 === 'Y')){
    alert('Correcto');
}
else{
    alert('Error')
}

// Actividad 3 escoger personaje
// Atencion con == para los numeros, no funciona con === 

let numero1 = 1
let numero2 = 2
let numero3 = 3
let numero4 = 4

let ingresado2 = prompt('ingrese un numero')

if (ingresado2 == numero1){
    alert('Es Homero');   
} else if (ingresado2 == numero2){
    alert('Es Marge');
} else if (ingresado2 == numero3){
    alert('Es Bart');
} else if (ingresado2 == numero4){
    alert('Es Lisa');
}
else {
    alert('Error')
}

*/

/*

// Para seleccion de destino mes y ciudad, retorna persona disponible y actividad

let region1 = 'Argentina'

let region2 = 'Brazil'

let region1Destination1 = 'Salta & Jujuy'
let region1Destination2 = 'Iguazu'
let region1Destination3 = 'San Martin de los Andes & Villa La Angostura'
let region1Destination4 = 'Bariloche'
let region1Destination5 = 'Usuhaia'
let region1Destination6 = 'Calafate'
let region1Destination7 = 'Buenos Aires'

let region2Destination1 = 'Rio de Janeiro & Sao Paulo'
let region2Destination2 = 'North beaches'
let region2Destination3 = 'South beaches'

let month8 = 'August'
let month9 = 'September'
let month10 = 'October'
let month11 = 'November'

let selection1Region1 = prompt('Select a region')
let selection2Region1 = prompt('Select a destination')
let selection3Region1 = prompt('Select a month')

if ((selection1Region1 === region1) && (selection2Region1 === region1Destination1) && (selection3Region1 === month8)) {
    alert('Carlos, Salta & Jujuy, Tour to Calafate')
} else if ((selection1Region1 === region1) && (selection2Region1 === region1Destination2) && (selection3Region1 === month8)) {
    alert('Laura, Iguazu, City Tour')
} else if ((selection1Region1 === region1) && (selection2Region1 == region1Destination3) && (selection3Region1 === month8)) {
    alert('Luciana, San Martin de los Andes, Hikink and tea house brunch')
} else if ((selection1Region1 === region1) && (selection2Region1 == region1Destination4) && (selection3Region1 === month10)) {
    alert('Eduardo, Bariloche, Tour around 7 Lakes')
} else if ((selection1Region1 === region1) && (selection2Region1 == region1Destination4) && (selection3Region1 === month11)) {
    alert('Eduardo, Bariloche, Tour around 7 Lakes');
} else if ((selection1Region1 === region1) && (selection2Region1 == region1Destination5) && (selection3Region1 === month8)) {
    alert('Ezequiel, Usuhaia, Lake trip');
} else if ((selection1Region1 === region1) && (selection2Region1 == region1Destination5) && (selection3Region1 === month9)) {
    alert('Ezequiel, Usuhaia, Lake trip');
} else if ((selection1Region1 === region1) && (selection2Region1 == region1Destination6) && (selection3Region1 === month8)) {
    alert('Patricia, Calafate, Glacier tour');
} else if ((selection1Region1 === region1) && (selection2Region1 == region1Destination6) && (selection3Region1 === month9)) {
    alert('Patricia, Calafate, Glacier tour');
} else if ((selection1Region1 === region1) && (selection2Region1 == region1Destination6) && (selection3Region1 === month10)) {
    alert('Patricia, Calafate, Glacier tour');
} else if ((selection1Region1 === region1) && (selection2Region1 == region1Destination6) && (selection3Region1 === month11)) {
    alert('Patricia, Calafate, Glacier tour');
} else if ((selection1Region1 === region1) && (selection2Region1 == region1Destination7) && (selection3Region1 === month9)) {
    alert('Susana, Buenos Aires, Tour around the city');
} else if ((selection1Region1 === region1) && (selection2Region1 == region1Destination7) && (selection3Region1 === month10)) {
    alert('Susana, Buenos Aires, Tour around the city');
} else if ((selection1Region1 === region2) && (selection2Region1 == region2Destination1) && (selection3Region1 === month10)) {
    alert('Karine, Rio de Janeiro & Sao Paulo, Tour around the city');
} else if ((selection1Region1 === region2) && (selection2Region1 == region2Destination1) && (selection3Region1 === month11)) {
    alert('Karine, Rio de Janeiro & Sao Paulo, Tour around the city');
} else if ((selection1Region1 === region2) && (selection2Region1 == region2Destination2) && (selection3Region1 === month8)) {
    alert('Alexandre, North Beaches, Porto de Galinhas tour');
} else if ((selection1Region1 === region2) && (selection2Region1 == region2Destination2) && (selection3Region1 === month9)) {
    alert('Alexandre, North Beaches, Porto de Galinhas tour');
} else if ((selection1Region1 === region2) && (selection2Region1 == region2Destination2) && (selection3Region1 === month10)) {
    alert('Alexandre, North Beaches, Porto de Galinhas tour');
} else if ((selection1Region1 === region2) && (selection2Region1 == region2Destination2) && (selection3Region1 === month11)) {
    alert('Alexandre, North Beaches, Porto de Galinhas tour');
}


else {
    alert('No one available for this election');
}





// Otra prueba para la seleccion 

let region1 = 'Argentina'

let region2 = 'Brazil'

let region3 = 'North America'

let region4 = 'Europe'

let region1Destination1 = 'Salta & Jujuy'
let region1Destination2 = 'Iguazu'
let region1Destination3 = 'San Martin de los Andes & Villa La Angostura'
let region1Destination4 = 'Bariloche'
let region1Destination5 = 'Usuhaia'
let region1Destination6 = 'Calafate'
let region1Destination7 = 'Buenos Aires'

let region2Destination1 = 'Rio de Janeiro & Sao Paulo'
let region2Destination2 = 'North beaches'
let region2Destination3 = 'South beaches'

let region3Destination1 = 'New York'
let region3Destination2 = 'Chicago & Boston'
let region3Destination3 = 'San Francisco & Los Angeles'
let region3Destination4 = 'Miami'
let region3Destination5 = 'Washington'

let region4Destination1 = 'England'
let region4Destination2 = 'italy'
let region4Destination3 = 'France'
let region4Destination4 = 'Spain & Portugal'
let region4Destination5 = 'The Netherlands & Belgium'
let region4Destination6 = 'Germany, Austria & Czech Republic'

let month1 = 'January'
let month2 = 'February'
let month3 = 'March'
let month4 = 'April'
let month5 = 'May'
let month6 = 'June'
let month7 = 'July'
let month8 = 'August'
let month9 = 'September'
let month10 = 'October'
let month11 = 'November'
let month12 = 'December'

let selection1Region = prompt('Select a region')
let selection2Destination = prompt('Select a destination')
let selection3Month = prompt('Select a month')



switch (selection1Region) 
{
    case (region1):
        switch (selection2Destination) 
        {
            case (region1Destination1):
                switch (selection3Month) 
                {
                    case (month1):
                        alert('Carlos, Salta & Jujuy, Tour to Calafate');                       
                
                    case (month2):
                        alert('Carlos, Salta, City Tour');
                    
                    case (month3):
                        alert('Ana Maria, Jujuy, Day tour to Cachi');
                
                    break;
                    default:
                        alert('no one available, please try another selection');
                }
            case (region1Destination2):
                switch (selection3Month)
                {
                    case (month1):
                        alert('Laura, Iguazu, City tour')
                }
                break;
            case (region1Destination3):
                switch (selection3Month)
                {
                    case (month1):
                        alert('Luciana, San Martin de los Andes & Villa La Angostura, Hiking and tea house brunch')
                }
                break;                 
        }
        break;
    case (region2):
        switch (selection2Destination)
        {
            case (region2Destination1):
                switch (selection3Month)
                {
                    case (month1):
                        alert('Karine, Rio de Janeiro & Sao Paulo, Tour around the city')       
                }
                break;    
        }
        break;
    case (region3):
        switch (selection2Destination)
        {
            case (region3Destination1):
                switch (selection3Month)
                {
                    case (month1):
                        alert('Patrick, New York, Museums tour')
                }
                break;
        }
        break;
    case (region4):
        switch (selection2Destination)
        {
            case (region4Destination1):
                switch (selection3Month)
                {
                    case (month1):
                        alert('Adam, England, London city tour')
                }
                break;
        }
        break;
    default:
        alert('no one available, please try another selection');
}






/*
// funciona la seleccion, ok!! 

switch (selection1Region)
{
    case (region1):
        if(( selection2Destination === region1Destination1 ) && (selection3Month === month1)) {
            alert('Carlos, Salta & Jujuy, Tour to Calafate')
            break;
        } 
    case (region2):
        if ((selection2Destination === region2Destination1) && (selection3Month === month2)){
            alert('Karine, Rio de Janeiro & Sao Paulo, Tour around the city')
            break;
        }
    case (region3):
        if ((selection2Destination === region3Destination1) && (selection3Month === month3)){
            alert('Patrick, New York, Museums tour')
            break;
        }
    case (region4):
        if ((selection2Destination === region4Destination1) && (selection3Month === month3)){
            alert('Adam, England, London city tour');
            break;
        }
    default:
        alert('no one available, please try another selection');

}

*/


/*

// Para log in en la pagina, ok fundiona!!

let userId;
let userName;
userId = prompt('enter user ID')
userName = prompt('enter user name');

while ((userId != 'Administrator') && (userName != 'Main')) {

    userId = prompt('Error, re type correct user ID')
    userName = prompt('Error, re type correct user name');
}

alert('correct user and ID entered');

*/

/*
// Prueba de simulador interactivo 

//Calcular el costo de envio, como 20% sobre el costo del producto
//Funcion basica que funciona, pero es solo un producto


let producto1 = 'Tarta manzana'

let precio1 = 100

let costo = 1.20

function calcularCosto (){
   return parseInt(precio1 * costo);
}

let seleccion = prompt ('ingrese producto')

if (seleccion === producto1){
    alert ( producto1 + ' ' + 'el precio total con el envio es' + ' ' +  calcularCosto()  );
}
else{
    alert ('No existe el producto');
}



// Segundo intento generico para la funcion

let producto1 = 'Tarta manzana'
let producto2 = 'Tarta ricota'

let precio1 = 100
let precio2 = 120

let costoEnvio = 1.20

function calcularCosto1 (){
    return parseInt (precio1 * costoEnvio); 
}

function calcularCosto2 (){
    return parseInt (precio2 * costoEnvio );
}


let seleccion = prompt('Ingrese producto')

if (seleccion === producto1){
    alert ( producto1 + ' ' + 'el precio total con el envio es' + ' ' +  calcularCosto1()  );

} else if (seleccion === producto2){
    alert ( producto2 + ' ' + 'el precio total con el envio es' + ' ' +  calcularCosto2()  );
}
else{
    alert('No existe el producto');
}



// Para log in en la pagina, ok fundiona!!

let usuario
let nombre;
usuario = prompt('ingrese su usuario')
nombre = prompt('ingrese su nombre')

while ((usuario != 'Administrador') && (nombre != 'Principal')) {

    usuario = prompt('Error, reingrese usuario')
    nombre = prompt('Error, reingrese nombre');
}

alert('no ingreso el usuario correcto');


// Primer pantalla, bienvenida a la pagina, funciona! 


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

/*
seleccion de items con SWITCH 

let compraTotal = prompt('Agregar producto a la compra')
let cantidad = prompt('Cantidad')

while (compraTotal != 'salir')
{ 
switch (compraTotal)
    {
    case (producto1):
        alert('El precio de' + ' ' + producto1 + ' ' + 'es' + ' ' + compra())
        
        break;
    case (producto2):
        alert('El precio de' + ' ' + producto2 + ' ' + 'es' + ' ' + compra())
       
        break;
    case (producto3):
        alert('El precio de' + ' ' + producto3 + ' ' + 'es' + ' ' + compra())
       
        break;
    case (producto4):
        alert('El precio de' + ' ' + producto4 + ' ' + 'es' + ' ' + compra())
        
        break;
    default: 
        alert('la seleccion no es correcta');

    }
}
*/
/*
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



// Ejercicios de la clase de objetos
// Ejercicio 1

class Tienda {
    constructor (nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario; 
        this.rubro = rubro;
    }
    registro(){
        console.log('La tienda' + ' ' + nombre + ' ' + 'ubicada en' + ' ' + direccion + 'es propiedad de' + ' ' + propietario + ' ' + 'y se dedica a' + ' ' + rubro)
    }
}

const Tienda1 = new Tienda ('Havanna', 'Callao 20', 'Pedro', 'Cafeteria');
const Tienda2 = new Tienda ('Coto', 'Paraguay 303', 'Carlos', 'Supermercado');
const Tienda3 = new Tienda ('Grimoldi', 'Cordoba 5030', 'Andrea', 'Zapateria');


console.log(Tienda1);
console.log(Tienda2);
console.log(Tienda3);

*/



