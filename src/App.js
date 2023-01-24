import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { bookStore } from './data/bookStore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
	const [cantidadCart, setCantidadCart] = useState(0);
	const [books, setBooks] = useState([])

	const [cart, setCart] = useState([])

	const addBookCart = (id, cover, title, author, price) => {
		if (cart.length === 0) {
			setCart([{ id, cover, title, author, price, amount: 1 }])
		} else {
			// Revisar que el libro no este ya agregado.
			// Si ya esta, unicamente actulizamos su cantidad

			const newCart = [...cart]
			const addedCart = newCart.filter((bookCart) => {
				return bookCart.id === id
			}).length > 0

			if (addedCart) {
				newCart.forEach((idBookAdd, index) => {
					if (idBookAdd.id === id) {
						const amount = newCart[index].amount
						newCart[index] = { id, cover, title, author, price, amount: amount + 1 }
					}
				})
			} else {
				newCart.push({ id, cover, title, author, price, amount: 1 })
			}
			setCart(newCart)
		}
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
				<Header cantidadCart={cantidadCart} cart={cart} />
				<Routes>
					<Route path='/' element={
						<>
							<NavBar books={books} />
							<ItemListContainer books={books} addBookCart={addBookCart} />
						</>
					} />
					<Route path='categories/:genreName' element={
						<>
							<NavBar books={books} />
							<ItemListContainer books={books} addBookCart={addBookCart} />
						</>
					} />
					<Route path='bookInfo/:id' element={
						<ItemDetailContainer />
					} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;