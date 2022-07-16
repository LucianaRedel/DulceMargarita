

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

*/


let userName = prompt('Ingrese su nombre:')

if (userName ==='Catalina' ) {
    alert('Bienvenido a nuestra pagina web');


} else{
    alert("Acceso restringido")

}

let name = 'Catalina';
let lastName = 'Quiroga'; 

let completeName = name + ' ' + lastName

console.log(completeName);

let numberOne = 100;
let numberTwo = 30; 

let result = numberOne + numberTwo; 

console.log(result); 

let password = 'Mama123';
let input = 'mama123';

let resultInput = password === input; 

console.log(resultInput);

let password1 = 'Mama123';
let input1 = 'mama123';

let resultInput1 = password1 === input1;

if (resultInput1 === true){
    console.log('login correcto');

    }
    else{
        console.log('login incorrecto');
    }










