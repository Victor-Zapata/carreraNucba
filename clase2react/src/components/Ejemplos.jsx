import React from "react";

export const EjemploSinJSX = () => {
  return React.createElement(
    "button", 
    { id: "botoncitoSinJSX" }, 
    "Clickeame"
    );
};

export const EjemploConJSX = () => {
    return <button id="botoncitoConJSX">
        ClickeameJSX
    </button>
};
