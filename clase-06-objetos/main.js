
// const persona = {
//     nombre : 'Victor', 
//     apellido : 'Zapata', 
//     edad:42,
//     cursos: ['JS', 'React'], 
//     otrosDatos: {
//         signo: 'Libra', 
//         deporte: 'padel'
//     }
// }

// console.log(persona);

// //destructuring

// const {nombre} = persona;
// console.log(nombre);
// delete persona.otrosDatos.comida;

// const profe1 = {
//   nombre: 'José',
//   apellido: 'Gómez', 
//   edad: 35,
//   camadas: [2298, 2299], 
//   hijos: {
//     nombre:'gero',
//     edad: 12
//   }
// }

// const profe2 = {
//   nombre: 'Andrés',
//   apellido: 'Zaya', 
//   edad: 40,
//   camadas: [2398, 2399], 
//   hijos: {
//     nombre:'Octavio',
//     edad: 17
//   }
// }

// const profeNuevo = {...profe1, helado: 'menta'};
// console.log(profeNuevo);

// const generarFuncion = () => {
//   const identidad = 'Reinaldo';
//   //yo de afuera no puedo acceder Reinaldo, porque Reinaldo vive en el scope de la función 
//   const mostrarNombre = () => {
//     return console.log(identidad);
//   }

//   return mostrarNombre;
//   //lo devuelvo SINNNNN ejecutarlo
//   //la función que retonro se lleva "prestado" todo el contexto de ejecución del padre
// }

// //si la guardo y ejecuto en una constante, llega a Reinaldo...el hijo se lleva ese extra
// const nuevaFuncion = generarFuncion();
// nuevaFuncion();

//OTRO EJEMPLO DE CLAUSURA
// const crearContador = () => {
//   let contador = 0;

//   return function incrementar() {
//     contador = contador + 1;
//     return contador;
//   };
// }


// const contador1 = crearContador();
// console.log(contador1());
// console.log(contador1());
// console.log(contador1());
// console.log(contador1());
// const contador2 = (crearContador());
// console.log(contador2());
// console.log(contador1());
// console.log(contador2());
// console.log(contador1());
// console.log(contador1());
// console.log(contador1());
// console.log(contador1());
// console.log(contador2());


//OBJETOS
// let persona = {
//   nombre: 'Nicolás',
//   apellido: 'Segovia',
//   edad: 25,
//   hobbies: ['Estudiar JS', 'Andar en bici'],
//   hermanos: [{
//     nombre: 'Luis',
//     edad: 23
//   }, {
//     nombre: 'Andrés',
//     socio: true
//   }], 
//   nombreCompleto: function () {
//     return this.nombre + ' ' + this.edad;
//   },
//   nombreCompleto2: () => {
//     return this.nombre + ' ' + this.edad;
//   }
// };

//DESTRUCTURING

// const { nombre } = persona;
// const { apellido } = persona;
// const { edad } = persona;
// console.log(nombre, apellido, edad);

// persona.deporte = 'padel';
// delete persona.edad;
// console.log(persona);
// console.log(persona.nombreCompleto());
// console.log(persona.nombreCompleto2());

// let persona2 = new Object();
// persona2.nombre = 'Olivia';
// persona2.edad = 2;
// persona2.hobbies = 'leer';
// persona2.cumple = '29 de julio';
// persona2.nombre = 'Marta';
// console.log(persona2);

// //OBJECT ENTRIES
// console.log(Object.entries(persona));

// //OBJECT VALUES
// console.log(Object.values(persona));

// //OBJECT KEYS
// console.log(Object.keys(persona));

// //OPERADOR SPREAD
// let persona = {
//   nombre: 'Nicolás',
//   apellido: 'Segovia',
//   edad: 25
// };

// let persona2 = {
//   ...persona,
//   nombre: 'Alfonso',
//   nacionalidad: 'Argentina'
// }

// console.log(persona2);

//SPREAD CON ARRAYS
// let verduras = ['papa', 'zapallo', 'pepino'];
// let frutas = ['naranja', 'manzana', 'mango'];
// //DESTRUCTURING DE ARRAY
// const [papa] = verduras;
// console.log(papa);

// let frutasYVerduras = [...verduras, ...frutas];
// console.log(frutasYVerduras);

//OPERADOR REST
// function conceptosAprendidos ( nombre, apellido, ...conceptos) {
//   return console.log(`El alumnno ${nombre}${apellido} aprendió ${conceptos}`);
// }

// conceptosAprendidos('Andrés', ' Cejas', 'HTML', 'CSS', 'JS');