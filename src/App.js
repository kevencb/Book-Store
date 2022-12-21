import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ItemList from './components/ItemList';


function App() {
	return (
		<div className="App">
			<Header />
			<NavBar />
			<ItemList titulo="Harry Potter y La piedra filosofal" autor="J.K Rowling" precio="$59.000" />
		</div>
	);
}

export default App;
