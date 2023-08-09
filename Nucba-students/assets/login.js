const loginForm = document.getElementById("login--form");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const errorMessage = document.getElementById("form__error");


const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToSessionStorage = (user) => {
    sessionStorage.setItem("activeUser", JSON.stringify(user));
}

const isEmpty = (input) => {
    return !input.value.trim().length;
};

const isExistingEmail = (input) => {
    return users.some((user) => user.email === input.value.trim());
};

const isMatchingPass = (input) => {
    const user = users.find((user) => user.email === emailInput.value.trim());
    return user.password === input.value.trim();
}

/**
 * Función para mostrar error al validar un input.
 */
const showError = (message) => {
    errorMessage.textContent = message;
};

const isValidAccount = () => {
    let valid = false;
    if (isEmpty(emailInput)) {
        showError("Por favor, complete los campos requeridos");
        return;
    }
    if (!isExistingEmail(emailInput)) {
        showError("El email ingresado es inválido");
        return;
    };
    if (isEmpty(passInput)) {
        showError("Por favor, completa los campos requeridos");
        return;
    };
    if (!isMatchingPass(passInput)) {
        showError("Los datos ingresados son incorrectos");
        loginForm.reset();
        return;
    }
    //en este punto el usuario pasó todas las validaciones
    alert("Bienvenido nuevamente, ya estás en línea");
    valid = true;
    errorMessage.textContent = "";
    loginForm.reset;
    return valid;

}

const login = (e) => {
    e.preventDefault();
    if (isValidAccount()) {
        const user = users.find((user) => user.email === emailInput.value.trim());
        saveToSessionStorage(user);
        window.location.href = "./home.html"
    }

};

//Función inicializadora para agregar los escuchadores de los elementos del DOM
const init = () => {
    loginForm.addEventListener("submit", login)
};
init();