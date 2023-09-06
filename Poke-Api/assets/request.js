//Función para llamar a nuestra API

const fetchPokemons = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};