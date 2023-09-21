class Pelicula {
  //por cada clase, puede haber únicamente UN constructor
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id
  }

  reproducir() {
    return `La peli ${this.nombre} está reproduciéndose en este momento, y su id es ${this.id}`
  }

};

const spiderman = new Pelicula('Spiderman', 1);
// console.log(spiderman);
// console.log(spiderman.reproducir());

//Extender
class Serie extends Pelicula {
  constructor(nombre, id, capitulo) {
    super(nombre, id);
    this.capitulo = capitulo;
  }
  reproducirCapitulo() {
    return `Reproduciendo capítulo ${this.capitulo} de la serie ${this.nombre}`;
  }
};

const suits = new Serie('Suits', 2, 15);
// console.log(suits);
// console.log(suits.reproducirCapitulo());

// console.dir(Pelicula);
// console.dir(Serie);

//Prototypes
class Persona {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    this.displayName = function () {
      return `${this.name} ${this.lastname}`
    };
  };
};

const lionel = new Persona('Lionel', 'Messi');
// console.log(lionel.name);
// console.log(lionel.name = 'Leo'); 
// console.log(lionel.displayName());

//crearle un nuevo método para esta instancia que SOLO va a tener lionel

lionel.saludar = function () {
  return `Hola, soy ${this.name} ${this.lastname}`
};

// console.log(lionel.saludar());

const cristiano = new Persona('Cristiano', 'Ronaldo');
// console.log(cristiano.name);
// console.log(cristiano.displayName());


Persona.prototype.saludar = function () {
  return `Hola, soy ${this.name} ${this.lastname}`
};
// console.log(cristiano.saludar());

//Prototypes
//En JS TODO es un objeto

// console.log(typeof 'holis');
// console.log(typeof 100);
// console.log(typeof false);

// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof new Date());
// console.log(typeof new RegExp());

// console.log(new Number(100));
// console.log(new String('Holis'));
// console.log(new Boolean(true));
// console.log(new Array([1]));

//Al objeto String le vamos a cambiar su prototype
//creemos un método de string nuevo para buscar una letra
String.prototype.findLetter = function (letter) {
  return this.indexOf(letter)
};

// console.log('Holis'.findLetter('i'));

Array.prototype.getLastItem = function () {
  return this[this.length - 1];
};

const numeros = [1, 2, 3];

// console.log(numeros.getLastItem()); 

//call/apply/bind

const usuario = {
  name: 'Pepe'
};

const producto = {
  name: 'Joystick'
};

function showInfo(pedidos, cuotas) {
  return `${this.name} tiene ${pedidos} pedidos en ${cuotas} cuotas`;
};

// console.log(showInfo(1,2));

//cuando ejecutamos call le pasamos 2 parámetros. El primero es el objeto y el segundo todos los parámteros que pida la función
console.log(showInfo.call(usuario, 1, 12));
console.log(showInfo.call(producto, 1, 12));

//Apply
console.log(showInfo.apply(usuario, [1, 5]));

//bind
const nuevaFuncion = showInfo.bind(usuario);
console.log(nuevaFuncion(17,1));
