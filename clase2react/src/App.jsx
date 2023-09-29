import "./App.css";
import { EjemploConClase, EjemploFuncional } from "./components/EjemploConClase";
import { SaludoPorProps } from "./components/EjemploConProps";
import EjemploCondicional from "./components/EjemploCondicional";
import { EjemploRenderDinamico } from "./components/EjemploRenderDinamico";
import { EjemploConJSX, EjemploSinJSX } from "./components/Ejemplos";

function App() {
  return (
    <>
      <EjemploSinJSX />
      <EjemploConJSX />
      <EjemploConClase />
      <EjemploFuncional />
      <SaludoPorProps 
      nombre= "Giuseppe"
      apellido="García"
      edad={33}
      nacionalidad="Chile"
      />
      <EjemploCondicional />
      <EjemploRenderDinamico />
    </>
  );
}

export default App;
