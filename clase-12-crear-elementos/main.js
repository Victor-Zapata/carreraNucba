let card = document.createElement('div');
card.classList.add('card');

let cardImg = document.createElement('img');
cardImg.src = 'https://via.placeholder.com/150';
cardImg.classList.add('card-img');

let cardTitle = document.createElement('h3');
cardTitle.classList.add('card-title');

let cardBody = document.createElement('div');
cardBody.classList.add('card-body');
cardBody.innerText = 'Título de la tarjeta';

let cardButton = document.createElement('button');
cardButton.classList.add('card-button');
cardButton.innerText = 'Click';

//agregar los elementos en el div contenedor
card.appendChild(cardImg);
card.appendChild(cardTitle);
card.appendChild(cardBody);
card.appendChild(cardButton);

//creamos un contenedor para la card
const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');

//agregamos la card al contenedor
cardContainer.appendChild(card);

document.body.appendChild(cardContainer);

//otra forma de implementarlo
// const main = document.querySelector('main');
// main.appendChild(cardContainer);

const parrafo = document.querySelector('.parrafo');

parrafo.innerHTML = 'pancho con papitas';

const contenido = parrafo.innerHTML;
console.log(contenido);

//innerHTML + etiquetas

const caja = document.querySelector('.caja');
// caja.innerHTML = '<h2>Este es el nuevo contenido de la caja</h2>';

//innerHTML + template

const titulo = 'Titulo de la caja';
const animales = ['perro', 'gato', 'conejo'];

caja.innerHTML = `
<h2>${titulo}</h2>
<p>lorem</p>
${animales.map ( animal => `<p> ${animal}</p>`).join('')}
<button class='card-button my'>Click</button>
`;

//Funcion generadora que nos ayude a tener separado el map y todo lo que retorna el innerHTML
const contenedorGeneradora = document.querySelector('.fn-generadora');

//creamos una función que reciba un objeto y devuelve el template de la card

const cardInfo = {
  title: 'Card title',
  description: 'card description', 
  image: 'https://picsum.photos/250/200'
};

const createCardTemplate = card => {
  const { title, description, image } = card;

  return `
  <div class='card'>
  <img src='${image}' class='card-img' alt='${title}'>
  <h3 class='card-title'>${title}</h3>
  <p>${description}</p>
  </div>
  `

};

//agregar el template al DOM
contenedorGeneradora.innerHTML = createCardTemplate(cardInfo);

//crear elementos en base a un array de objetos

const animalesInfo = [
  {
    name: 'Perro', 
    description: 'es un animal que ladra'
  }, 
  {
    name: 'Gato', 
    description: 'Es un animal que maulla'
  }, 
  {
    name: 'Pez', 
    description: 'es un animal que nada'
  }
];


const createCardTemplateArray = animal => {
  const { name, description } = animal;

  return `
  <div class='card'>
    <h3 class='card-title'>${name}</h3>
    <p>${description}</p>
  </div>
  `;
};

const cardsTemplate = animalesInfo.map(createCardTemplateArray).join('');

//pisamos el contenido
contenedorGeneradora.innerHTML = cardsTemplate;

//JSON parse
console.log(JSON.parse('{"name":"Víctor", "lastName": "Zapata"}'));

//JSON stringify
console.log(JSON.stringify({
  nombre: 'Victor', 
  apellido: 'zapata', 
  edad: 42
}));
