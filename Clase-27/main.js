//Opción 1 - Importar todo el módulo
import * as funciones from './funciones.js'

console.log(funciones.saludar('Victor'));
console.log(funciones.despedir('Victor'));
console.log(funciones.nombre);

//Opción 2 - Importar una función específica y renombrarla
import {
    saludar as saludo, 
    despedir as despedida, 
    nombre as facu,
} from './funciones.js'

console.log(saludo('mundo')); 
console.log(despedida('provincia')); 
console.log(saludo('Córdoba')); 
console.log(facu);

//Opción 3 - Importar una función específica (más utilizada)
import {saludar, despedir, nombre} from './funciones.js';

console.log(saludar('mundo2'));
console.log(despedir('mundo3'));
console.log(saludar('mundo7'));
console.log(saludar(nombre));