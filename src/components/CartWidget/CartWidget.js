import { React, useState } from 'react'
import '../../App.css';

const CartWidget = () => {

    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="cart-component" aria-labelledby="cart-componentLabel">
            <div className="offcanvas-header bg-warning py-4">
                <a className="d-flex align-items-center navbar-brand text-white" href="/#" aria-label='Enlace de prueba'>Book<i className="text-ligth bi bi-cart"></i>Store</a>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                Aún no has agregado libros...
            </div>
        </div>
    )
}

export default CartWidget;