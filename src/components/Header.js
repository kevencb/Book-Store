import React from 'react'
import 'boxicons'
import '../App.css';

const Header = () => {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark py-4">
				<div className='container'>
					<a className="d-flex align-items-center navbar-brand" href="#">Book<box-icon name='book' type='solid' color='#ffffff' ></box-icon>Store</a>
					<div className='d-flex gap-0'>
						<button className='cart d-flex align-items-center btn px-1' type='button' data-bs-toggle="offcanvas" data-bs-target="#cart-component" aria-controls="cart-component">
							<box-icon name='cart' color='#ffffff' ></box-icon>
							<span className="badge rounded-pill text-bg-danger">1</span>
						</button>
						<button className='profile d-flex align-items-center btn px-1' type='button' data-bs-toggle="offcanvas" data-bs-target="#profile-component" aria-controls="profile-component">
							<box-icon name='user-circle' color='#ffffff' ></box-icon>
						</button>
					</div>
				</div>
			</nav>

			{/* Carrito */}
			<div className="offcanvas offcanvas-start" tabIndex="-1" id="cart-component" aria-labelledby="cart-componentLabel">
				<div className="offcanvas-header bg-warning py-4">
					<a className="d-flex align-items-center navbar-brand text-white" href="#">Book<box-icon name='book' type='solid' color='#ffffff' ></box-icon>Store</a>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">
					Aún no has agregado libros...
				</div>
			</div>

			{/* Perfil Usuario */}
			<div className="offcanvas offcanvas-start" tabIndex="-1" id="profile-component" aria-labelledby="profile-componentLabel">
				<div className="offcanvas-header bg-dark py-4">
					<h5 className="text-warning d-flex offcanvas-title" id="profile-componentLabel">
						¡Hola:
						<span className="mx-2"><strong>Kev CB!</strong></span>
					</h5>
					<button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body mt-2 px-4">
					<button className="btn list-group-item d-flex align-items-center px-0 py-3 gap-2">
						<box-icon name='shopping-bag' color='#666666' ></box-icon>Tus pedidos
					</button>
					<button className="btn list-group-item d-flex align-items-center px-0 py-3 gap-2">
						<box-icon name='star' color="#666"></box-icon>Lista de deseos
					</button>
					<button className="btn list-group-item d-flex align-items-center px-0 py-3 gap-2">
						<box-icon name='log-out-circle' color='#666666' ></box-icon>Cerrar sesión
					</button>
				</div>
			</div>
		</>
	);
}

export default Header;