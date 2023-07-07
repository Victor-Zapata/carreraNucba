// -Repaso clase anterior.
// -Hoisting y scope.
// -Introducción a let - const
// -Operadores.
// -¿Qué es un condicional?
// -If.
// -Switch.

// Hoisting: es el comportamiento de JavaScript de mover la declaración de variables al inicio del ámbito en el que se encuentran. Por ejemplo:

// console.log(nombre); // undefined
// var nombre = 'Leo';

// // En este ejemplo, el comportamiento de hoisting mueve la declaración de la variable x al inicio del código, por lo que el valor de x es undefined antes de ser asignado.

// let x = 15; //Let y const no son hoisted.

// // * Scope
// var a = 'Estoy Global';

// function holi() {
//   var b = 'Estoy en una funcion';
// }

// {
//   var c = 'Estoy en bloque';
// }

// {
//   let d = 'Estoy en bloque';
//   const e = 'Estoy en bloque';
// }

// console.log(a)
// // console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// console.log(18 == '18')
// console.log(18 === '18')
// console.log(18 != '18')
// console.log(18 !== '18')
// console.log(9 < 10)
// console.log(9 <= 9)
// console.log(18 > 7 && 9 < 9)
// console.log(18 > 7 || 9 < 9)

// console.log(true)

//estructura if

// var llueve = true;

// if(!llueve) {
//   console.log('salí con paraguas')
// } else {
//   console.log('tranca')
// }

// var dia = 'Domingo';

// if(dia === 'Martes' || dia === 'Jueves') {
//   console.log('debo ir al gym')
// } else if (dia === 'Lunes' || dia === 'Miércoles') {
//   console.log('Estudiar JS')
// } else {
//   console.log('day off')
// }

// switch (dia) {
//   case 'Lunes':
//     console.log('Estudiar JS')
//     break;
//   case 'Martes':
//     console.log('debo ir al gym')
//     break;
//   case 'Miércoles':
//     console.log('Estudiar JS')
//     break;
//   default:
//     console.log('day off')
//     break;
// }

// var edad = 17;

// edad >= 18 ? console.log('sos mayor') : console.log('sos menor');

// edad < 18 && console.log('sos mayor');

// for (let i = 0 ; i < 20; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// let i = 0;

// while (i < 10) {
//   console.log(`El número que estamos iterando es ${i}`)
//   i++;
// }

//Do While
//Ejecuta primero y después va a preguntar (la condición)

// let i = 10;

// do {
//   console.log(`El número iterado es ${i}`);
//   i++;
// } while ( i < 10);

//Arrays
// let marcas = ['Peugeot', 'Renault', 'BMW']

// let alumnos = ['Daniela', 'Lautaro', 'Eze', 'Martín', 'Tobias', 'Gastón'];


// console.log(marcas)

// for (let i = 0; i < marcas.length; i++ ) {
//   console.log( marcas [i] )
// }