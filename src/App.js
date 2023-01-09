import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import { ItemList } from './components/ItemList/ItemList';
import { bookStore } from './data/bookStore'
/* React Router */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

	const [cantidadCart, setCantidadCart] = useState(0);
	const [books, setBooks] = useState([])

	const addCart = () => {
		setCantidadCart(cantidadCart + 1)
	}

	useEffect(() => {
		const apiBookStore = () => {
			return new Promise((res, rej) => {
				setTimeout(() => {
					res(bookStore)
				}, 0)
			})
		}
		apiBookStore()
			.then((res) => {
				setBooks(res)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [setBooks]);

	return (
		<div className="App">
			<BrowserRouter>
				<Header cantidadCart={cantidadCart} />
				<NavBar />
				<Routes>
					<Route path='/' element={
						<ItemList books={books} addCart={addCart} />
					} />
					<Route path='/categories/:genre' element={
						<ItemList books={books} addCart={addCart} />
					} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
