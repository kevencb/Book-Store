import React, { useState } from 'react'
import '../../App.css';
import CartWidget from '../CartWidget/CartWidget';
import UserProfile from '../UserProfile/UserProfile';

const Header = ({ cantidadCart }) => {

	return (
		<>
			<nav className="navbar navbar-dark bg-dark py-4">
				<div className='container'>
					<a className="d-flex align-items-center navbar-brand" href="/#" aria-label='Enlace de prueba'>Book<i className="bi bi-bookmark-heart-fill"></i>Store</a>
					<div className='d-flex gap-2'>
						<button className='border border-warning cart d-flex align-items-center gap-1 btn text-ligth' type='button' data-bs-toggle="offcanvas" data-bs-target="#cart-component" aria-controls="cart-component">
							<i className="text-warning bi bi-cart"></i>
							<span className="badge rounded-pill text-bg-warning">{cantidadCart}</span>
						</button>
						<button className='profile d-flex align-items-center btn btn-warning ' type='button' data-bs-toggle="offcanvas" data-bs-target="#profile-component" aria-controls="profile-component">
							<i className="bi bi-person-circle"></i>
						</button>
					</div>
				</div>
			</nav>

			{/* <button onClick={addCart}>Añadir</button> */}

			<CartWidget />
			<UserProfile />

		</>
	);
}

export default Header;