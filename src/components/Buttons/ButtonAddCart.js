import React from 'react';
import { ContextCart } from '../../context/contextCartShopping';

const ButtonAddCart = ({ book }) => {
    const { addBookCart } = React.useContext(ContextCart)
    return (
        <button
            onClick={() => addBookCart(book.id, book.cover, book.title, book.author, book.price, book.subtotal)}
            className='d-flex w-100 align-items-center justify-content-center gap-2 btn btn-sm btn-md-md bg-warning'>
            <i className="bi bi-cart-plus"></i>
            Añadir
        </button>
    );
}

export { ButtonAddCart };