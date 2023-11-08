import AppWrapper from "./components/AppWrapper/AppWrapper";
import EjemploEnLinea from "./components/EjemploEnLinea/EjemploEnLinea";
import EjemploMaterialUI from "./components/EjemploMaterialUI/EjemploMaterialUI";
import EjemploModules from "./components/EjemploModules/EjemploModules";
import EjemploObjeto from "./components/EjemploObjeto/EjemploObjeto";
import EjemploStyled from "./components/EjemploStyled/EjemploStyled";
import { GlobalStyles } from "./styles/GlobalStyles";

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
      <GlobalStyles />
      <EjemploMaterialUI></EjemploMaterialUI>
    </>
  );
}

export default App;
