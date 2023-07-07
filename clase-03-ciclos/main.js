// -Repaso de la clase anterior si es necesario.
// -Ciclos en JS.
// -Ciclo For / sentencia break.
// -Ciclo While/do while.
// -Arrays.
// -Ciclo for in / for of

// for (let i = 0; i < 10; i++) {
//   console.log(`El numero que estamos iterando es ${i}`);
// }

// Analicemos lo sucedido
/*
1. Inicio, creamos una variable i (item), que tiene el valor de let i = 0
2. Condicion, evaluamos la condicion, le preguntamos si i (item) es menor a 10
3. Si la condicion es falsa, se termina el bucle
4. Si la condicion es true, se ejecuta lo que esta dentro del for
5. Actualizacion, incrementamos en 1. i++
6. Volvemos al paso 2 (evalua nuevamente la condicion)
*/

// * Break
// for (i = 0; i < 10; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(`El numero que estamos iterando es el ${i}`);
// }

// * Continue
// for (i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(`El numero que estamos iterando es el ${i}`);
// }

// Ejercicio: Hacer un bucle que imprima solamente los numeros pares

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(`El numero ${i} es par`);
// }

// * While
// Sintaxis
// while (condicion) {
//   // Codigo a ejecutar
//   // Actualizar
// }

// let i = 0;

// while (i < 10) {
//   console.log(`El numero que estamos iterando  ${i}`);
//   i++;
// }

// * Do while
// Ejecuta primero y despues pregunta si la condicion es true o false

// let i = 10;

// do {
//   console.log(`El numero iterado es ${i}`);
//   i++;
// } while (i < 10);

// Arrays
let transportes = [
  'Auto',
  'Moto',
  'Camioneta',
  'Bicicleta',
  'Barco',
  'Submarino',
  'Camion',
];

// console.log(transportes); // Esto devuelve el array completo
// console.log(transportes[0]); //Esto devuelve Auto

// Explicamos como obtener el largo de un array
// *Dato de vital importancia, para acordarse como se escribe length, piensen en Gallina Tiene Huevo
// console.log(transportes.length);

// * Combinamos array con for
// for (let i = 0; i < transportes.length; i++) {
//   console.log(transportes[i]);
// }

// Utilizando for of
console.log('Los medios de transporte son:');
// for (let medio of transportes) {
//   console.log(medio);
// }
