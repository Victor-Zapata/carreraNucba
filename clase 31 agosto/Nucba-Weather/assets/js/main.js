//traemos los elementos del HTML que necesitamos manipular

//el form para utilizar el evento submit
const form = document.getElementById("form");
//el input para atrapar el valor que coloca el usuario
const cityInput = document.querySelector(".search-input");
//el contenedor de la card para renderizar info
const cardContainer = document.querySelector(".card-container");
//para modificar el mensaje al usuario
const searchMsg = document.querySelector(".search-msg");

//FUNCIONES AUXILIARES

const isEmptyInput = () => {
    return cityInput.value.trim() === "";
};

const isInvalidCity = (cityData) => {
    return !cityData.id;
};

const renderCityCard = (cityData) => {
    cardContainer.innerHTML = createCityTemplate(cityData);
};

const roundNumber = (number) => {
    return Math.round(number);
};

const changesearchMsg = (cityData) => {
    const cityName = cityData.name;
    searchMsg.innerHTML = `Así está el clima en ${cityName}, ¿Quiere ver el clima en otra ciudad?`;
};

const getCityData = (cityData) => {
    return {
        cityName: cityData.name,
        imageName: cityData.weather[0].icon,
        cityWeatherInfo: cityData.weather[0].description,
        //vamos a necesitar una función para redondear los valores
        cityTemp: roundNumber(cityData.main.temp),
        cityST: roundNumber(cityData.main.feels_like),
        cityMaxTemp: roundNumber(cityData.main.temp_max),
        cityMinTemp: roundNumber(cityData.main.temp_min),
        cityHumidity: cityData.main.humidity
    };
};

const createCityTemplate = (cityData) => {
    const {
        cityName,
        imageName,
        cityWeatherInfo,
        cityTemp,
        cityST,
        cityMaxTemp,
        cityMinTemp,
        cityHumidity
    } = getCityData(cityData);

    return `
    <div class="weather-card animate">
          <div class="weather-info-container">
            <h2 class="weather-title">${cityName}</h2>
            <p class="weather-description">${cityWeatherInfo}</p>
            <div class="weather-temp-container">
              <span class="weather-temp">${cityTemp} °</span>
              <span class="weather-st">${cityST} ST</span>
            </div>
          </div>
          <div class="weather-img-container">
            <img src="./assets/img/${imageName}.png" alt="weather image" />
          </div>
          <div class="weather-extra-container">
            <div class="weather-minmax-container">
              <span class="weather-span"><i class="fa-solid fa-arrow-up-long"></i>Max: ${cityMaxTemp}º</span>
              <span class="weather-span"><i class="fa-solid fa-arrow-down-long"></i>Min: ${cityMinTemp}º</span>
            </div>
            <span class="weather-humidity">${cityHumidity}% Humedad</span>
          </div>
        </div>
    `
};


//función asíncrona para manipular el form
const searchCity = async (e) => {
    e.preventDefault();

    //si el input está vacío, muestra un alert y cortar la ejecución
    if (isEmptyInput()) {
        alert("Por favor ingrese una ciudad");
        return;
    }

    //si el input no está vacío, realizamos la búsqueda de la ciudad
    const fetchedCity = await requestCity(cityInput.value)
    console.log(fetchedCity);

    //si la ciudad inrgesada no es válida, lanzamos un alert, limpiamos el form y cortamos la ejecución
    if (isInvalidCity(fetchedCity)) {
        alert("La ciudad ingresada no existe");
        form.reset();
        return; //corta la ejecución de la función
    }

    //si la ciudad existe, renderizamos la card de esa ciudad y reseteamos el form
    renderCityCard(fetchedCity);
    changesearchMsg(fetchedCity)
    form.reset();
};

//función que inicializa la app
const init = () => {
    form.addEventListener("submit", searchCity);
};

init();