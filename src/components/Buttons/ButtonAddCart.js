import React from 'react';

const ButtonAddCart = ({ addCart }) => {
    return (
        <button onClick={addCart} className='d-flex w-100 align-items-center justify-content-center gap-2 btn btn-sm btn-md-md bg-warning'><i className="bi bi-cart-plus"></i> Añadir</button>
    );
}

export { ButtonAddCart };