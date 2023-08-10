//getElementById
// const logo = document.getElementById('logo');
// console.log(logo);

//console.dir() es la manera de ver todas las propiedades de un objeto de JS especificado por consola
// console.dir(logo.parentNode); //puedo navegar por el documento
// logo.innerHTML = 'aguante la scaloneta';

// const nombre = prompt('hola');

// setTimeout(() => {
//     logo.innerHTML = `Hola, soy ${nombre}`;
// }, 3000);

//getElementsByClassName
// const links = document.getElementsByClassName('link')
// console.log(links);
// console.log(links[0]);
// console.log([...links]);

//getElementsByTagName
// const pTags = document.getElementsByTagName('p');
// console.log(pTags[0]);

//querySelector
// const header = document.querySelector('.header');
// console.log(header);
// const p = document.querySelector('p')
// console.dir(p);

//querySelectorAll
// const pTags2 = document.querySelectorAll('p');
// console.log(pTags2);

// pTags2.forEach(pTag => {
//     console.log(pTag);
//     pTag.textContent = 'Hola desde el DOM'
// })

// const cliqueame = document.getElementById('cliqueame');
// cliqueame.addEventListener('click', () => {
//     alert('hola');
// })


//en primer lugar, capturo los elementos del DOM que voy a necesitar para darle funcionalidad a mi app
const form = document.getElementById('form');
const caja = document.getElementById('caja');
const input = document.getElementById('input');

let items = [];

const renderItems = () => {
    caja.innerHTML = items.map((item) => {
        return `
        <p>${item}</p>
        `
    }).join('');
};

const submitHandler = (e) => {
    //prevengo la acción por defecto para que no se refresque el navegador y perdamos el valor del input
    e.preventDefault();
    //guardo el valor del input en una variable
    let item = input.value;
    //hago una copia de mi array de tareas y le voy agregando la tarea nueva
    items = [
        ...items,
        item
    ];
    input.value = '';
    renderItems();
};

//el segundo paso suele ser armar nuestra función inicializadora
const init = () => {
    form.addEventListener('submit', submitHandler)
};
init();
