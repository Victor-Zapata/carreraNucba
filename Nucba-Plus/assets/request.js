const KEY = "54ff70d898f1d0133d19f5ab82223a1d";


const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US`;
const TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`;
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`;

//el primer parámetro depende del "filtro" activo..y después le pongo una página (si la página no me la envían, seteo por default una)
const fetchMovies = async (searchTerm, page = 1) => {
    const response = await fetch(searchTerm + `&page=${page}`);
    const data = await response.json();
    return data
};


