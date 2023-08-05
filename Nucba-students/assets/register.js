// nos traemos todos los elementos necesarios del DOM
const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");


//////////////////*Funciones auxiliares*////////////////////////

const isBetween = (input, min, max) => {
    return input.value.length >= min && input.value.length < max;
};

const isEmpty = (input) => {
    // en JS el cero es un pseudo falso (falsy)...funciona como null
    return !input.value.trim().length;
};

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.style.display = "block";
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");
    const error = formField.querySelector("small");
    error.textContent = "";
};

/////////////Funciones de validación de inputs/////////////////////////////

const checkTextInput = (input) => {
    //seteamos la validez del value en false para empezar 
    let valid = false;
    const minCharacters = 3;
    const maxCharacters = 25;

    //si el input vacío
    if (isEmpty(input)) {
        showError(input, `Este campo es obligatorio`);
        return
    };

    if (!isBetween(input, minCharacters, maxCharacters)) {
        showError(
            input,
            `Este campo debe tener entre ${minCharacters} y ${maxCharacters}`
        );
        return;
    };

    //si pasa por ambas validaciones, llamamos a la función de éxito y le cambiamos el estado valid a true
    showSuccess(input);
    valid = true;
    return valid;

};

//////////////////*Validación general y almacenamiento de datos*////////////////////////

const validateForm = () => {
    //evitar el comportamiento por default

    //checkear que todos los inputs sean válidos

    //si el input es valid, guardo la data

    //guardar en LS

    //feedback al usuario

    //redirigir al login 
};

//Función inicializadora para agregar los listeners a los inputs y al form

const init = () => {
    registerForm.addEventListener("submit", validateForm);
    // validar cada campo por evento
    nameInput.addEventListener("input", () => checkTextInput(nameInput));
    lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
};
