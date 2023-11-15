import { Provider } from "react-redux";
import Counter from "./components/counter/Counter";
import Logo from "./components/logo/Logo";
import store from "./store";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Provider store={ store }>
        <Counter />
      </Provider>
      <Logo />
      <GlobalStyles />
    </>
  );
}

export default App;
