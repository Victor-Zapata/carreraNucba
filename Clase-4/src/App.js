import Categorias from "./components/Categorias/Categorias";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import CardsProductos from "./components/Productos/CardsProductos";

function App() {
	return (
		<>
			<Navbar />
			<Layout>
				<Hero />
				<Categorias />
				<CardsProductos />
			</Layout>
			<Footer />
		</>
	);
}

export default App;
