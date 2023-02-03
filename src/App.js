import React, { useContext } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ContextCart, ProviderCart } from './context/contextCartShopping';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
	const { books, genreName } = useContext(ContextCart);
	return (
		<div className="App">
			<BrowserRouter>
				<ProviderCart>
					<Header />
					<Routes>
						<Route path='/' element={
							<>
								<NavBar books={books} />
								<ItemListContainer genreName={genreName} />
							</>
						} />
						<Route path='/categories/:genreName' element={
							<>
								<NavBar books={books} />
								<ItemListContainer genreName={genreName} />
							</>
						} />
						<Route path='/bookInfo/:id' element={
							<ItemDetailContainer />
						} />
					</Routes>
				</ProviderCart>
			</BrowserRouter>
			<ToastContainer theme="colored" pauseOnHover={false} />
		</div >
	);
}

export default App;