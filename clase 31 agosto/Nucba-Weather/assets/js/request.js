//empezamos trabajando con la request

//guardar nuestra apikey
const key = "47c1cbf07fed6eb62d6324e616510686";

//llamada a la api del clima
const requestCity = async city => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${key}`
        )
        const data = await response.json();
        // console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
};

