//Métodos de arrays
//Length
//La longitud del array nos devuelve la cantidad de elementos que tiene
// const arrayEjemplo = [1, 2, 3, 'Víctor', true];
// console.log(arrayEjemplo.length);


//.indexOf()
//Este método nos devuelve el índice del elemento que estamos buscando, si devuelve -1 es porque ese elemento no está en el array en cuestión
// const arrayIndexOf = [1, 2, 3, 4, 5, 6];
// console.log(arrayIndexOf.indexOf(3));
// console.log(arrayIndexOf.indexOf(8));


//.toString
//convierte un arreglo a string
// const animales = ['gato', 'tortuga', 'caballo', 'vaca'];
// console.log(animales.toString());


//.concat()
//concatena dos arrays
// const masAnimales = ['pepe', 'lobo', 'chancha'];
// console.log(animales.concat(masAnimales));


//.push()
//agrega un elemento al final del array y devuelve la nueva longitud
// console.log(animales.push('pez'));
// console.log(animales);


//unshift()
//agrega al principio del array y devuelve la longitud
// console.log(animales.unshift('perro'));
// console.log(animales);


//.pop()
// elimina el último elemento del arreglo y lo devuelve
// const animales = ['gato', 'tortuga', 'caballo', 'vaca'];
// const animalEliminado = animales.pop();
// console.log(animalEliminado); //me saca la vaca
// console.log(animales);

//shift()
//elimina el primer elemento de mi arreglo y lo devuelve
// const animales = ['gato', 'tortuga', 'caballo', 'vaca'];
// const animalEliminado = animales.shift();//elimina gato
// console.log(animales);
// console.log(animalEliminado);


//.join()
// convierte un array a un string y le podemos pasar un separador
// const animales = ['gato', 'tortuga', 'caballo', 'vaca'];
// console.log(animales.join(', '));

// //.reverse()
// //invierte el orden de los elementos del arreglo
// console.log(animales.reverse());

//Ejercicio:
//invertir un string
// const string = 'Quiero invertir este string';
//convertimos el string en un array, lo invertimos y lo volvemos a convertir en string
// console.log(string.split(' ').reverse().join(' '));


//.slice()
//cortar una parte del arreglo y devolver un nuevo array
// const animales = ['gato', 'tortuga', 'caballo', 'vaca'];
// console.log(animales.slice(1, 3));
// console.log(animales);


//Métodos de arrays con callbacks

//forEach()
//recorre el arreglo y ejecuta una función por cada elemento
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numeros.forEach((numero) => {
//   console.log(`Hola, soy el número ${numero}`);
// });


//.map()
//recorre el array y ejecuta una función por cada elemento devolviendo los resultados en un nuevo array
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numerosDuplicados = numeros.map( numero => numero * 2);
// console.log(numeros);
// console.log(numerosDuplicados);

//.filter()
//recorre el array y ejecuta una función por cada elemento. Luego devuelve un array con los elementos que cumplen con la condición
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const pares = numeros.filter( numero => numero % 2 === 1);
// console.log(numeros);
// console.log(pares);


//.find()
// recorre el arreglo y ejecuta una función por cada elemento, devolviendo el primero que cumpla la condición
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primerImpar = numeros.find( numero => numero % 2 === 1);
// console.log(primerImpar);

// const primerMayorA10 = numeros.find( numero => numero > 10);
// console.log(primerMayorA10);


//.every()
//Recorre el array y ejecuta una funcion por cada elemento, devolviendo true SI TODOS cumplen la condición y devolviendo false SI ALGUNO no la cumple
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numeros.every( numero => numero > 0 ));//true
// console.log(numeros.every( numero => numero > 4 ));//false


//.some()
// recorre el array y ejecuta una función por cada elemento, retornando true si AL MENOS UNO cumple la condición impuesta y retornando false si TODOS no la cumplen
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numeros.some( numero => numero > 9));//true
// console.log(numeros.some( numero => numero > 10));//false

//.sort()
//ordena los elementos del array, por defecto lo hace como string

// const numerosDesordenados = [1, 111, 28, 3, 140, 19, 4, 54, 6, 7, 8, 980, 10];
// console.log(numerosDesordenados.sort());
// console.log(numerosDesordenados.sort((a, b) => b - a ));

const productos = [
    {
        categoria: "Computacion",
        condición: "Nuevo",
        cuotas: false,
        envioInmediato: true,
        envioGratuito: true,
        id: 1,
        marca: "Redragon",
        nombre: "Teclado gamer",
        precio: 6500,
        subcategoria: "Perifericos",
        ubicacion: "GBA"

    },
    {
        categoria: "Insumos",
        condición: "usado",
        cuotas: true,
        envioInmediato: false,
        envioGratuito: false,
        id: 2,
        marca: "Redragon",
        nombre: "placa",
        precio: 5000,
        subcategoria: "Perifericos",
        ubicacion: "Córdoba"

    },
    {
        categoria: "Computacion",
        condición: "Nuevo",
        cuotas: false,
        envioInmediato: true,
        envioGratuito: true,
        id: 3,
        marca: "Redragon",
        nombre: "teclado",
        precio: 6500,
        subcategoria: "equipos",
        ubicacion: "GBA"

    },
    {
        categoria: "Celulares",
        condición: "usado",
        cuotas: true,
        envioInmediato: true,
        envioGratuito: false,
        id: 4,
        marca: "Iphone",
        nombre: "Iphone 11",
        precio: 153000,
        subcategoria: "equipos",
        ubicacion: "Salta"

    },
    {
        categoria: "Computacion",
        condición: "Nuevo",
        cuotas: true,
        envioInmediato: false,
        envioGratuito: true,
        id: 5,
        marca: "Redragon",
        nombre: "mother",
        precio: 18931,
        subcategoria: "Perifericos",
        ubicacion: "GBA"

    },
    {
        categoria: "Computación",
        condición: "usado",
        cuotas: false,
        envioInmediato: true,
        envioGratuito: true,
        id: 6,
        marca: "Redragon",
        nombre: "mouse",
        precio: 3455,
        subcategoria: "Perifericos",
        ubicacion: "Santa Fe"

    }
];


//filtrar por categoria y subcategoria
const filtrarPorCategoriaYSubcategoria = ( categoria, subcategoria ) => {
    const productosFiltrados = productos.filter((producto) => {
        return (
            producto.categoria.toLowerCase().trim() === categoria.toLowerCase().trim() && producto.subcategoria.toLowerCase().trim() === subcategoria.toLowerCase().trim()
        )
    });
    return productosFiltrados
};

console.log(filtrarPorCategoriaYSubcategoria('Computacion', 'Perifericos')); 


//imprimir en consola el nombre y el precio de todos los productos con envio inmediato. Lo haremos utilizando una comunicación user friendly
// const productosConEnvioInmediatoYEnvioGratuito = productos.filter((producto) => {
//     return producto.envioInmediato && producto.envioGratuito
// });

// productosConEnvioInmediatoYEnvioGratuito.forEach((producto) => {
//     console.log(`El producto ${producto.nombre} cuenta con envío inmediato y gratuito`);
// });



//cambiar la condición de TODOS mis productos a "usado"
// const productosUsados = productos.map((producto) => {
//     return {
//         ...producto,
//         condición: "usado",
//         cuotas: false
//     }
// });

// console.log(productosUsados);






// //filtrar por precio menor a
// const filtrarPorPrecioMenorA = (precio) => {
//     const productosFiltrados = productos.filter((producto) => {
//         return producto.precio < precio;
//     });
//     return productosFiltrados
// };
// console.log(filtrarPorPrecioMenorA(7000));






//imprimir en consola si existe un producto cuyo precio sea mayor a un valor indicado. User friendly
// const hayProductosConPreciosMayorA = (precio) => {
//     return productos.some((producto) => {
//         return producto.precio > precio
//     })
//         ? console.log(`Hay productos con un precio mayor a ${precio}`)
//         : console.log(`No hay productos con un precio mayor a ${precio}`);
// };

// hayProductosConPreciosMayorA(100000000);


//crear un nuevo array con los mismos productos, pero con sus precios duplicados. Imprimir por consola nombre y precio de cada producto

// const productosConPrecioDuplicado = productos.map((producto) => {
//     return {
//         ...producto,
//         precio: producto.precio * 2
//     }
// });
// console.log(productosConPrecioDuplicado);

// productosConPrecioDuplicado.forEach((producto) => {
//     console.log(`El nuevo precio de ${producto.nombre} es $${producto.precio}`);
// });



//traer los id pares
// const idPares = productos.filter((producto) => {
//     return producto.id % 2 === 0;
// });
// console.log(idPares);

// idPares.forEach( producto => {
//     const { nombre } = producto;
//     console.log(`El producto ${ nombre } tiene id par`);
// });


//imprimir solo aquellos productos que tienen envío inmediato
// const productosConEnvioInmediato = productos.filter((producto) => {
//     return producto.envioInmediato
// });

// console.log(productosConEnvioInmediato);

// productosConEnvioInmediato.forEach((producto) => {
//     console.log(`El producto ${producto.nombre} tiene envío inmediato`);
// });