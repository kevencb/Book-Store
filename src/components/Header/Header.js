import React, { useContext } from 'react'
import { CartWidget } from '../CartWidget/CartWidget';
import UserProfile from '../UserProfile/UserProfile';
import { Link } from 'react-router-dom';
import { ContextCart } from '../../context/contextCartShopping';
import '../../App.css';

const Header = () => {

	const { totalNumberBooks } = useContext(ContextCart)

	return (
		<>
			<nav className="navbar navbar-dark bg-dark py-4 sticky-top">
				<div className='container'>
					<Link className="d-flex align-items-center navbar-brand" to="/" aria-label='Test link'>Book<i className="bi bi-bookmark-heart-fill"></i>Store</Link>
					<div className='d-flex gap-2'>
						<button className='border border-warning cart d-flex align-items-center gap-1 btn text-light' type='button' data-bs-toggle="offcanvas" data-bs-target="#cart-component" aria-controls="cart-component">
							<i className="text-warning bi bi-cart"></i>
							<span className="badge rounded-pill text-bg-warning">{totalNumberBooks}</span>
						</button>
						<button className='profile d-flex align-items-center btn btn-warning ' type='button' data-bs-toggle="offcanvas" data-bs-target="#profile-component" aria-controls="profile-component">
							<i className="bi bi-person-circle"></i>
						</button>
					</div>
				</div>
			</nav>
			<CartWidget />
			<UserProfile />
		</>
	);
}

export { Header };