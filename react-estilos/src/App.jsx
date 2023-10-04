import AppWrapper from "./components/AppWrapper/AppWrapper";
import EjemploEnLinea from "./components/EjemploEnLinea/EjemploEnLinea";
import EjemploModules from "./components/EjemploModules/EjemploModules";
import EjemploObjeto from "./components/EjemploObjeto/EjemploObjeto";
import EjemploStyled from "./components/EjemploStyled/EjemploStyled";

function App() {
  return (
    <>
      <AppWrapper>
        <h1>Hello!!!</h1>
        <EjemploEnLinea />
        <EjemploObjeto />
        <EjemploModules />
        <EjemploStyled />
      </AppWrapper>
    </>
  );
}

export default App;
