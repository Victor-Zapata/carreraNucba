//addEventListener

const h2Alert = document.getElementById('h2Alert');
// h2Alert.addEventListener('click', () => {
//   alert('paraguas')
// })

const mostrarAlerta = (e) => {
  alert('agarrar paraguas')
  console.log(e.target);
};

h2Alert.addEventListener('click', mostrarAlerta);

//preventDefault()

const form = document.getElementById('form');

//creamos una función que se ejecuta cuando se envía el formulario y nos muestra los datos ingresados por el usuario
//el evento submit siempre lo dispara el form, ni lo botones, ni ningún otro elemento

form.addEventListener('submit', e => {
  e.preventDefault()

  const user = document.getElementById('user');
  const pass = document.getElementById('pass');

  console.dir(user)
  console.dir(pass)
  console.log(user.value);
  console.log(pass.value);
  form.reset();

})


//Focus/blur 
const inputBlur = document.getElementById('inputBlur');
console.dir(inputBlur);

//cuando hacemos focus sobre el input cambia el color de fondo
const focusFunction = () => {
  inputBlur.style.backgroundColor = 'yellow';
};

//cuando sacamos el focus del input y queremos que retorne su color original
const blurFunction = () => {
  inputBlur.style.backgroundColor = '';
}

inputBlur.addEventListener('focus', focusFunction);
inputBlur.addEventListener('blur', blurFunction);

//evento change
const boton = document.getElementById('boton');

//cambiamos clase con js
boton.addEventListener('click', () => {
  boton.classList.toggle('btn-primary')
});

//cambiar imagen
const img = document.getElementById('img');
const changeImg = document.getElementById('imgChange');

changeImg.addEventListener('click', () => {
  img.src = 'img/messi2.jpg';
});