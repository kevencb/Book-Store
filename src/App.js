import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

	const [cantidadCart, setCantidadCart] = useState(0);

	const addCart = () => {
		setCantidadCart(cantidadCart + 1)
	}

	return (
		<div className="App">
			<BrowserRouter>
				<Header cantidadCart={cantidadCart} />
				<NavBar />
				<Routes>
					<Route path='/' element={
						<ItemListContainer addCart={addCart} />
					} />
					<Route path='/categories/:genreName' element={
						<ItemListContainer addCart={addCart} />
					} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;