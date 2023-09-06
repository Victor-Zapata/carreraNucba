const pokemonsContainer = document.querySelector("#caja")

//Función controladora de la app. Servirá para manejar el estado de la aplicación

const appState = {
    currentURL: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8",
    isFetching: false
};

//Función para obtener la data de los pokemons
const loadAndRenderPokemons = async (renderingFunction) => {
    const pokemonsData = await getPokemonsData();
    renderingFunction(pokemonsData);
};

//Función para traernos la data de los siguientes 8 pokemons
const getPokemonsData = async () => {
    const { next, results } = await fetchPokemons(appState.currentURL);
    appState.currentURL = next;

    const pokemonDataUrls = results.map((pokemon) => pokemon.url);

    const pokemonsData = await Promise.all(
        pokemonDataUrls.map(async (url) => {
            const nextPokemonsData = await fetch(url);
            return await nextPokemonsData.json();
        })
    )
    return pokemonsData;
};


//Función para renderizar la lista de pokemons
const renderPokemonList = (pokemonList) => {
    pokemonsContainer.innerHTML += pokemonList
        .map((pokemon) => createPokemonCard(pokemon))
        .join("");
};

//función generar el html de los tipos de pokemons
const createTypeCards = (types) => {
    return types.map((tipo) => {
        return `
        <span class="${tipo.type.name} poke__type">${tipo.type.name} </span>
        `
    })
    .join("");
};

//función para hacer el llamd a la API y retornar la data necesaria
const pokemonTemplate = ( pokemon ) => {
    return {
        id: pokemon.id, 
        name: pokemon.name.toUpperCase(), 
        image: pokemon.sprites.other.home.front_default, 
        height: pokemon.height /10,
        weight: pokemon.weight / 10, 
        types: pokemon.types, 
        experience: pokemon.base_experience
    }
};

//Función para renderizar una pokemon card
const createPokemonCard = (pokemon) => {
    const { id, name, image, height, weight, types, experience } = pokemonTemplate(pokemon);

    return `
    <div class="poke">
    <img  src="${image}"/>
    <h2>${name}</h2>
    <span class="exp">EXP: ${experience}</span>
    <div class="tipo-poke">
    ${createTypeCards(types)}
    </div>
    <p class="id-poke">#${id}</p>
    <p class="height">Height: ${height}</p>
    <p class="weight">Weight: ${weight}</p> 
    </div>
    `
};


//Función inicializadora
function init() {
    window.addEventListener(
        "DOMContentLoaded",
        async () => await loadAndRenderPokemons(renderPokemonList)
    );

};

init();