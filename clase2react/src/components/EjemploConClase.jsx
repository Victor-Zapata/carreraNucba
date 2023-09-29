import React from "react";

export class EjemploConClase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saludo: "Hola, Estoy basado en CLASES",
    };
  }
  render() {
    return <h1>{this.state.saludo}</h1>;
  };
};

export const EjemploFuncional = () => {
    const saludo = "Hola, estoy basado en FUNCIONES";
    return <h1>{saludo}</h1>
};