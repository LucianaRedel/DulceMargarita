/*
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

*/

/*

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
        if(( selection2Destination === region1Destination1 ) && (selection3Month === month1)) {
            alert('Carlos, Salta & Jujuy, Tour to Calafate')
        }
        else{
            alert('no one available, please try another selection');
        }
    case (region2):
        if ((selection2Destination === region2Destination1) && (selection3Month === month2)){
            alert('Karine, Rio de Janeiro & Sao Paulo, Tour around the city')
        }
        else{
            alert('no one available, please try another selection');
        }

}

*/


/*

// Para log in en la pagina * fundiona!!

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