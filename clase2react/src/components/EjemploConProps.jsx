import React from "react";

export const SaludoPorProps = ({nombre, apellido, edad, nacionalidad}) => {
  return <h1>Hola, mi nombre es {nombre}, mi apellido {apellido}, tengo {edad} años y soy de {nacionalidad}</h1>;
};

SaludoPorProps.defaultProps = {
    nacionalidad: "Argentina"
};