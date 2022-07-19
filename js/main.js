

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

*/









