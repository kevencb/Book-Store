import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { bookStore } from './data/bookStore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {

	const [cantidadCart, setCantidadCart] = useState(0);
	const [books, setBooks] = useState([])

	const addCart = () => {
		setCantidadCart(cantidadCart + 1)
	}

	useEffect(() => {
		const getBooks = () => {
			return new Promise((res, rej) => {
				setTimeout(() => {
					res(bookStore)
				}, 0)
			})
		}
		getBooks()
			.then((res) => {
				setBooks(res)
			})
			.catch((error) => {
				console.log(error)
			})
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Header cantidadCart={cantidadCart} />
				<NavBar books={books} />
				<Routes>
					<Route path='/' element={
						<ItemListContainer books={books} addCart={addCart} />
					} />
					<Route path='categories/:genreName' element={
						<ItemListContainer books={books} addCart={addCart} />
					} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;