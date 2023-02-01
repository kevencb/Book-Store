import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ProviderCart } from './context/contextCartShopping';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ProviderCart>
					<Header />
					<Routes>
						<Route path='/' element={
							<>
								<NavBar />
								<ItemListContainer />
							</>
						} />
						<Route path='categories/:genreName' element={
							<>
								<NavBar />
								<ItemListContainer />
							</>
						} />
						<Route path='bookInfo/:id' element={
							<ItemDetailContainer />
						} />
					</Routes>
				</ProviderCart>
			</BrowserRouter>
		</div >
	);
}

export default App;