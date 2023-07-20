// let ejemplo = ' bi envenidos';
// console.log(ejemplo.length);
// console.log(ejemplo.trim().length);
// console.log(ejemplo.replace(/\s/g,'').length);

// // console.log(ejemplo.toLocaleUpperCase());
// // console.log(ejemplo);

// // let ejemplo1 = 'VICTOR';
// // console.log(ejemplo1.toLocaleLowerCase());

// // //.replace()
// // //devuelve un nuevo string con la cadena reemplazada

// // let texto = 'Darín es el mejor actor de Argentina. Es así, porque Darín ganó un Oscar';
// // console.log(texto.replace('Darín', 'Rago'));
// // console.log(texto.replaceAll('Darín', 'Rago'));

// //.split() divido a partir de un parámetro y me lo devuelve como array
// let mejorJugador = 'Lionel Messi';
// console.log(mejorJugador.split(' '));

// //indexOf()
// //devuelve posición de la primera ocurrencia de un valor especificado en un string
// let textoIndex = 'Hola mundo';
// console.log(textoIndex.indexOf('mundo'));

// //typeOf
// //nos devuelve qué tipo de dato le estamos pasando
// let color = 'rojo';
// let colores = ['rojo', 'azul', 'amarillo'];
// let number = 8 ;
// let activo = true;
// console.log(typeof number);
// console.log(typeof color);
// console.log(typeof colores);
// console.log(typeof activo);

// //.repeat()
// //nos permite repetir un string la cantidad de veces que queramos
// const nombreRepeat = 'Vicente';
// console.log(nombreRepeat.repeat(5));

// //charAt()
// //devuelve el caracter que se encuentra en la posición que pasemos
// console.log(nombreRepeat.charAt(5));

// //.concat()
// //concatena dos o más strings
// const stringConcat = 'Lionel';
// console.log(stringConcat.concat(' Messi'));

// //.startsWith()
// //devuelve booleano si el string empieza o no con el valor pasado
// const textoStart = 'Vamos a la consola';
// console.log(textoStart.startsWith('Vamos'));
// console.log(textoStart.startsWith('Hola'));
// console.log(textoStart.startsWith('vamos'));
// console.log(textoStart.toLocaleLowerCase().startsWith('vamos'));

// //.endsWith()
// //devuelve booleano si el string termina o no con el valor pasado

// const textoEnd = 'Vamos a la consola';
// console.log(textoEnd.endsWith('consola'));
// console.log(textoEnd.endsWith('Hola'));
// console.log(textoEnd.endsWith('Consola'));
// console.log(textoEnd.toLowerCase().endsWith('consola'));

//.includes()
//devuelve true si el string incluye el valor que le pasamos

// const textoIncludes = 'Vamos a la consola';
// console.log(textoIncludes.includes('consola'));
// console.log(textoIncludes.includes('Adios'));

// const arrayIncludes = ['chaucha', 'papa', 'batata'];
// console.log(arrayIncludes.includes('papa'));
// console.log(arrayIncludes.includes('pepino'));

//.slice()
//extrae una parte o sección de un string y devuelve un string nuevo
// const textoSlice = 'Vamos a la consola';
// console.log(textoSlice.slice(0, 5));
// console.log(textoSlice.slice(8, 10));
// console.log(textoSlice.slice(11, 18));


const checkString = (stringUno, stringDos) => {
  let stringUnoMinus = stringUno.toLowerCase();
  let stringDosMinus = stringDos.toLowerCase();

  let isInString = stringUnoMinus.includes(stringDosMinus);

  if (isInString) {
    console.log(`Se encontró '${stringDos}' en el string '${stringUno}'`);
  } else {
    console.log(`No se encontró '${stringDos}' , probá con otra palabra`);
  }
};

checkString('Hola soy un string', 'string');