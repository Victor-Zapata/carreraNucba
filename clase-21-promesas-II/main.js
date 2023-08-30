
//una forma de utilizar fetch
// fetch('https://pokeapi.co/api/v2/pokemon/62')
//   .then(response => response.json())
//   .then(data => {
//     return console.log(data);
//   })
//   .catch(error => console.log(error));

//ejemplo de petición con async 
const getPoliwrath = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/62');
    const data = await response.json();
    console.log(
      `${data.name} es de tipo ${data.types[0].type.name} y ${data.types[1].type.name}`
    );
    return data
  }
  catch (error) {
    console.error(error);
  };
};

getPoliwrath();

//Contenedor donde se renderiza el pokemon
const contenedor = document.querySelector(".contenedor");

//Template para renderizar el pokemon
const templatePokemon = (pokemon) => {
  const { name, sprites, types } = pokemon;
  const pokemonHTML = `
  <div class='card'>
  <img src="${sprites.front_default}" alt="${name}" />
  <h2>${name}</h2>
  <p>${types[0].type.name}</p>
  </div>
  `;
  contenedor.innerHTML += pokemonHTML;
};

//Renderizar el pokemon
const renderPokemon = async () => {
  try {
    const pokemon = await getPoliwrath();
    templatePokemon (pokemon)
  } catch (error) {
    console.error(error);
  }
};

renderPokemon();