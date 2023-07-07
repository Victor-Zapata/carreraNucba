// function saludar () {
//     console.log('el lunes largo la dieta')
// };

// saludar();

//Parámetros

// function saludar ( name, apellido = 'Torres' ) {
//     console.log(`Hola ${name} ${apellido}, cómo te va?.`)
// };

// saludar('Tobias', 'Santellan');

//concepto de return o valor de retorno
// function imprimePar ( number ) {
//     if ( number % 2 === 0 ) {
//         console.log( number )
//     }
//     else {
//         return
//     }
// }

// imprimePar (15);

// function multiplicar ( num1, num2) {
//     return num1 * num2
// };


// function sumar ( num1, num2) {
//     return num1 + num2
// };

// console.log(sumar (2, 2))

// function imprimirSiEsMenorA10 ( num ) {
//     num < 10 ? console.log(num) : null ;
// }

// imprimirSiEsMenorA10 ( 15 )

//Arrow functions

// const sumarA = ( num, num2 ) => {
//     return num + num2
// }

// function sumar (num, num2) {
//     return num + num2
// }

// console.log(sumarA(2,2));
// console.log(sumar(2,2));

// const saludar =  nombre => console.log(`Hola ${nombre}`);
// saludar('Andrés'); 

//recursividad

// const cuentaAtras = numero => {
//     //caso base / condición para que termine
//     if ( numero === 0) {
//         return;
//     }
//     console.log(numero)

//     return cuentaAtras ( numero - 1);
// }

// cuentaAtras ( 10 );

// const retroceder = ( num ) => {
//     if (num === 0) {
//         return;
//     }
//     return (num - 1)
// }

// console.log(retroceder ( 10 ))

// const duplicar = num => {
//     //entra al numero, se suma a si mismo
//     num = num + num;
//     console.log(num)
//     //caso base
//     if ( num > 100 ) {
//         return console.log('Te pasaste');
//     }
//     //se llama a sí misma / o sea RECURSIVIDAD
//     return duplicar(num);
// }

// duplicar(4);

//Callback
// const alertHola = nombre => {
//     return alert(`Hola ${nombre}`)
// }

// const consoleHola = nombre => {
//     return console.log(`Hola ${nombre}`)
// }

// const procesarEntrada = callback => {
//     const nombre = prompt('Por favor ingresa tu nombre');

//     callback(nombre);
// }

// procesarEntrada(alertHola);



//REPASO GENERAL
// let alumnos = ['Matias', 'Juan', 'Romina', profes = ['nacho', 'laura']];
// console.log(alumnos[3][1]);

// console.log(alumnos[3].indexOf('laura'));

// let edad = 36;


//HOISTING
// console.log(compa);
// console.log(amigo);

// var compa = 'Leo';
// let amigo = 'Pablo';

//SWITCH
// let edadUsuario = prompt('pon tu edad');
// let edad = +edadUsuario;

// switch (true) {
//     case edad > 18:
//         console.log('sos mayor, por poco');
//         break;
//     case edad < 18:
//         console.log('sos menor, no podés ver esta peli');
//         break;
//     default:
//         console.log('pon un número, por favor');
//         break;
// };

//TERNARIO 

// let respuesta = prompt ('Te gusta BCS?. Responde por si o por no');

// let activo = true;

// function sabeDeSeries(respuesta) {
//    activo && console.log('puede entrenar');
// }

// sabeDeSeries(respuesta);

const persona = {
    nombre : 'Victor', 
    apellido : 'Zapata', 
    edad:42,
    cursos: ['JS', 'React'], 
    otrosDatos: {
        signo: 'Libra', 
        deporte: 'padel'
    }
}

console.log(persona);

//destructuring

const {nombre} = persona;
console.log(nombre);
delete persona.otrosDatos.comida;