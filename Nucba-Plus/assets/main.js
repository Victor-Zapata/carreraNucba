// /* Las imágenes de movieDB vienen con una URL de base la cual se tiene que colocar en conjunto con lo que venga en el objeto de cada película para que la imagen aparezca. Guardamos esta en una constante. 
// Para mas referencia :  https://developers.themoviedb.org/3/getting-started/images . Elegimos para esta APP el tamaño original.
// */
// const ImgBaseUrl = "https://image.tmdb.org/t/p/original";
// //capturo los elementos del DOM que voy a manipular
const cardsContainer = document.querySelector(".cards-container");
// const pageNumber = document.querySelector(".page-number");
// const prevBTN = document.querySelector(".left");
// const nextBTN = document.querySelector(".right");
// const filterButtons = document.querySelectorAll(".btn");
// const filterContainer = document.querySelector(".filter-container");

// //PASO 1
// //Creo un objeto con el estado de nuestra app

// const appState = {
//     page: null,
//     total: null,
//     searchParameter: TRENDING
// };

// //PASO 3
// //función que muestra las películas

// const showMovies = async () => {
//     cardsContainer.innerHTML = renderLoader();
//     const movies = await fetchMovies(appState.searchParameter);
//     console.log(movies);
//     //guardar el total de pages 
//     appState.total = movies.total_pages;
//     //setear en qué página estamos
//     appState.page = movies.page;
//     //armar una función auxiliar para revisar en qué página está el usuario y habilitar o no botones
//     setPaginationState();
//     //armo una función para renderizar las cards de películas
//     renderCards(movies.results);
// };

// //PASO 5
// //función para renderizar las cards
// const renderCards = (movies) => {
//     cardsContainer.innerHTML = movies
//         .map((movie) => createCardTemplate(movie))
//         .join("");
// };

// //añadir una función que genera el molde de mi tarjeta
// const createCardTemplate = (movie) => {
//     const { title, poster_path, vote_average, release_date } = movie;
//     return `
//     <div class="card">
//         <img loading="lazy" src=${poster_path ? ImgBaseUrl + poster_path : "./assets/img/placeholder.png"
//         } alt="${title}" class="card-img"/>
//         <div class="card-popularity"> ${formatVoteAverage(vote_average)} % de popularidad</div>
//         <div class="card-content">
//             <h2></h2>
//             <p>Fecha de estreno: ${formatDate(release_date)} </p>
//         </div>
//     </div>
//     `
// };

// //FUNCIONES AUXILIARES DEL TEMPLATE
// //función para formatear  el vote-average
// const formatVoteAverage = (voteAverage) => {
//     return Math.floor(voteAverage * 10);
// };

// //función para formatear la fecha
// const formatDate = (date) => {
//     const [year, month, day] = date.split("-");
//     return `${day}/${month}/${year}`;
// };

// //PASO 4
// //función para setear el estado actual de la paginación
// const setPaginationState = () => {
//     //capturar el botón left y right
//     pageNumber.innerHTML = appState.page;

//     //armo una función auxiliar para la función auxiliar
//     tooglePreviousBtn(appState.page);
//     toogleNextBtn(appState.page, appState.total)

// };

// //función para deshabilitar el btn volver
// const tooglePreviousBtn = (page) => {
//     if (page === 1) {
//         prevBTN.classList.add("disabled");
//     } else {
//         prevBTN.classList.remove("disabled");
//     }
// };

// //función para deshabilitar el btn next cuando llega al total de pages

// const toogleNextBtn = (page, total) => {
//     if (page === total) {
//         nextBTN.classList.add("disabled");
//     } else {
//         nextBTN.classList.remove("disabled");
//     }
// };

// //Función para renderizar el loader
// const renderLoader = () => {
//     return `
//     <div class="lds-ring ">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//     </div>
//     `
// };

// //PASO 6
// //armar una función para cambiar de page hacia adelante
// const nextPage = () => {
//     if (appState.page === appState.total) return;
//     appState.page += 1;
//     changePage()
// };

// const previousPage = () => {
//     if (appState.page === 1) return;
//     appState.page -= 1;
//     changePage();
// };

// //función para cambiar de página
// const changePage = async () => {
//     cardsContainer.innerHTML = renderLoader();
//     const movies = await fetchMovies(appState.searchParameter, appState.page);
//     setPaginationState();
//     loadAndShow(movies);
// };

// //función auxiliar para renderizar las nuevas cards
// const loadAndShow = (movies) => {
//     setTimeout(() => {
//         renderCards(movies.results);
//         //aplicamos un método para scrolear hasta dejarlo a la vista
//         filterContainer.scrollIntoView({
//             behavior: "smooth"
//         });
//     }, 1500);
// };

// //PASO 7
// //cambio de categoría
// const changeSearchParameter = (e) => {
//     if (!isActiveCategoryBtn(e.target)) return;
//     const selectedParameter = e.target.dataset.filter;
//     appState.searchParameter = parameterSelector(selectedParameter);
//     setActiveButton(selectedParameter);
//     showMovies();
// };

// const setActiveButton = (selectedParameter) => {
//     console.log(selectedParameter);
//     const buttons = [...filterButtons];
//     buttons.forEach((btn) => {
//         if (btn.dataset.filter !== selectedParameter) {
//             btn.classList.remove("btn--active");
//         } else {
//             btn.classList.add("btn--active")
//         }
//     })
// };

// const parameterSelector = (filterType) => {
//     return filterType === "TOPRATED"
//         ? TOPRATED
//         : filterType === "UPCOMING"
//             ? UPCOMING
//             : TRENDING
// };

// const isActiveCategoryBtn = (btn) => {
//     return (
//         btn.classList.contains("btn") && !btn.classList.contains("btn--active")
//     );
// };


// //PASO 2
// //función inicializadora

// const init = () => {
//     window.addEventListener("DOMContentLoaded", showMovies);
//     nextBTN.addEventListener("click", nextPage);
//     prevBTN.addEventListener("click", previousPage);
//     filterContainer.addEventListener("click", changeSearchParameter);
// };

// init();




//clase repaso
const BASE_URL = "https://rickandmortyapi.com/api/character/";

const getRandomNumber = () => {
    return Math.floor(Math.random() * 825) + 1;
};

const getPj = async () => {
    try {
        const newPj = await fetch(`${BASE_URL}${getRandomNumber()}`).then((res) => res.json());
        console.log(newPj);
        return newPj;
    } catch (error) {
        console.log(error);
        cardsContainer.innerHTML = `
            <h1>ROMPIMOS TODO</h1>
        `
    }
};

const renderNewPj = (character) => {
    const {id, image, name, species, origin, gender} = character;

    cardsContainer.innerHTML = `
        <div class="card" id=${id}>
            <img loading="" src=${image} alt="" class="card-img" />
            <div class="card-popularity"></div>
            <div class="card-content">
                <h2>${name}</h2>
                <span>${species}</span>
                <span>${origin.name}</span>
                <span>${gender}</span>
            </div>
        </div>
    `

};

const getAndRenderPj = async () => {
    cardsContainer.innerHTML = `
    <h1>CARGANDO</h1>
    `;
    const pj = await getPj();
    renderNewPj(pj);
};

const init = () => {
    window.addEventListener("DOMContentLoaded", getAndRenderPj)
};

init();

