import React, { useContext } from 'react'
import '../../App.css';
import './CartWidget.css'
import { ContextCart } from '../../context/contextCartShopping';

const CartWidget = () => {
    const { cart } = useContext(ContextCart)
    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="cart-component" aria-labelledby="cart-componentLabel">
            <div className="offcanvas-header bg-warning py-4">
                <a className="d-flex align-items-center navbar-brand text-white" href="/#" aria-label='Enlace de prueba'>Book<i className="text-ligth bi bi-cart"></i>Store</a>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {cart.length > 0 ?
                    cart.map((item, index) => {
                        return (
                            <article key={index} className='book__cart'>
                                <div className='book__info'>
                                    <img src={item.cover} className='book__cover' alt={item.title} />
                                    <div>
                                        <h4 className='book__title'>{item.title}</h4>
                                        <h6 className='book__author'>{item.author}</h6>
                                    </div>
                                </div>
                                <div className='book__counter'>
                                    <h5 className='book__price'>${item.price}</h5>
                                    <div className='book__buttons'>
                                        <button className='btn btn-sm btn-dark'>-</button>
                                        <p>{item.amount}</p>
                                        <button className='btn btn-sm btn-warning'>+</button>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                    : <p>Aún no has agregado libros...</p>
                }
                <hr></hr>
                <div className='total-cart'>
                    <h5>Total:</h5>
                    <h4 className='lead'>$ 99.000</h4>
                </div>
            </div>
        </div >
    )
}

export { CartWidget };