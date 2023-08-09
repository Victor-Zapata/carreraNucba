// Nos traemos todos los elementos necesarios del DOM
const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

/*-------------------------------------------------------------------*/
/*---------------Funciones auxiliares----------------*/
/*-------------------------------------------------------------------*/

// Nos traemos los usuarios del localStorage o creamos un array vacio si no hay usuarios registrados
const users = JSON.parse(localStorage.getItem("users")) || [];

// Función para guardar los usuarios en el localStorage
const saveToLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(users));
};

/**
 * Función para chequear si el campo esta vacio
 */
const isEmpty = (input) => {
  return !input.value.trim().length;
};

/**
 * Función para determinar si el largo del value del input esta entre un minimo y un maximo de caracteres
 */
const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length < max;
};

/**
 * Función para validar una dirección de email con expresiones regulares.
 */
const isEmailValid = (input) => {
  const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;
  //testeamos
  return re.test(input.value.trim());
};

/**
 * Función para chequear si el email ya existe en el array de usuarios.
 */
const isExistingEmail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

/**
 * Función para validar una contraseña de email con expresiones regulares.
 */
const isPassSecure = (input) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  //probamos
  return re.test(input.value.trim());
};

/**
 * Función para validar un telefono con expresiones regulares.
 */
const isPhoneValid = (input) => {
  const re = /^[0-9]{10}$/;
  //testeamos
  return re.test(input.value.trim());
};

/**
 * Función para mostrar error al validar un input.
 */
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.style.display = "block";
  error.textContent = message;
};

/**
 * Función para mostrar un input como valido.
 */
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

/*-------------------------------------------------------------------*/
/*-----------------Funciones de validación de inputs-----------------*/
/*-------------------------------------------------------------------*/

/**
 * Función para validar un input de tipo texto.
 */
const checkTextInput = (input) => {
  //Seteamos la validez del value en false para empezar.
  let valid = false;
  const minCharacters = 3;
  const maxCharacters = 25;

  if (isEmpty(input)) {
    showError(input, "Este campo es obligatorio");
    return;
  }
  if (!isBetween(input, minCharacters, maxCharacters)) {
    showError(
      input,
      `Este Campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`
    );
    return;
  }
  // Si pasa por ambas validaciones llamamos a la funcion showSuccess y cambiamos el estado valid a true
  showSuccess(input);
  valid = true;
  return valid;
};

/**
 * Función para validar un input de tipo email.
 * Recordar que usamos el parámetro input para poder reutilizar en caso de que fuera necesario.
 */
const checkEmail = (input) => {
  //seteamos la validez del value en false
  let valid = false;
  if (isEmpty(input)) {
    showError(input, "El email es obligatorio");
    return;
  }
  if (!isEmailValid(input)) {
    showError(input, "El email no es válido");
    return;
  }
  if (isExistingEmail(input)) {
    showError(input, "El email ya se encuentra registrado");
    return;
  }
  //si pasa por todas las validaciones llamamos a la función de éxito y cambiamos el estado valid a true
  showSuccess(input);
  valid = true;
  return valid;
};

/**
 * Función para validar un input de tipo telefono.
 * Recordar que usamos el parámetro input para poder reutilizar en caso de que fuera necesario.
 */
const checkPassword = (input) => {
  //seteamos la validez del value el false para arrancar
  let valid = false;
  if (isEmpty(input)) {
    showError(input, "La contraseña es obligatoria");
    return;
  }
  if (!isPassSecure(input)) {
    showError(input, "La contraseña debe tener al menos 8 caracteres, una mayúscula y una minúscula");
    return;
  };
  //si pasa por ambas validaciones llamamos a la función de éxito y cambiamos el estado de valid a true
  showSuccess(input);
  valid = true;
  return valid;
};

/**
 * Función para validar un input de tipo telefono.
 * Recordar que usamos el parámetro input para poder reutilizar en caso de que fuera necesario.
 */
const checkPhone = (input) => {
  //seteamos la validez del value en false para empezar
  let valid = false;
  if (isEmpty(input)) {
    showError(input, "El teléfono es obligatorio");
    return;
  }
  if (!isPhoneValid(input)) {
    showError(input, "El teléfono no es válido");
    return;
  }
  //si pasa por ambas validaciones, llamamos a la fnc de éxito y pasamos valid a true
  showSuccess(input);
  valid = true;
  return valid;
};

/*------------------------------------------------------------------------------*/
/*-----------------validación general y almacenamiento de datos-----------------*/
/*------------------------------------------------------------------------------*/

/**
 * Función para validar el formulario y almacenar los datos en el array de usuarios.
 * En caso de que el formulario sea valido, se muestra un alert de exito y se redirige a la pagina de login.
 */
const validateForm = (e) => {
  e.preventDefault();
  //guardamos el estado de los inputs en variables
  //almacenar el valor de retorno de las funciones de validación, pero además se ejecutan las funcionar para mostrar los mensajes de error

  let isNameValid = checkTextInput(nameInput);
  let isLastNameValid = checkTextInput(lastNameInput);
  let isEmailValid = checkEmail(emailInput);
  let isPasswordValid = checkPassword(passInput);
  let isPhoneValid = checkPhone(phoneInput);

  let isValidForm = 
  isNameValid &&
  isLastNameValid &&
  isEmailValid &&
  isPasswordValid &&
  isPhoneValid;

  if (isValidForm) {
    users.push({
      name: nameInput.value, 
      lastName: lastNameInput.value, 
      email: emailInput.value, 
      password: passInput.value, 
      phone: phoneInput.value
    });
    saveToLocalStorage(users);
    alert ("Te has registrado con éxito");
    window.location.href = "login.html";
  }
};

/**
 * Función inicializadora para agregar los listeners a los inputs y al formulario.
 */
const init = () => {
  registerForm.addEventListener("submit", validateForm);
  // validar por evento input cada campo
  nameInput.addEventListener("input", () => checkTextInput(nameInput));
  lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
  emailInput.addEventListener("input", () => checkEmail(emailInput));
  passInput.addEventListener("input", () => checkPassword(passInput));
  phoneInput.addEventListener("input", () => checkPhone(phoneInput));
};

init();

