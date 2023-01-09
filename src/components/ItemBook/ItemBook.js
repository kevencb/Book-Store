import React from 'react';

const ItemBook = ({ book, addCart }) => {
    const { title, cover, author, price } = book
    return (
        <div className="card border-0 ">
            <img src={cover} className="cover card-img-top" alt={title} />
            <div className="card-body px-0">
                <h4 className="card-title">{title}</h4>
                <h5 className='author small'>{author}</h5>
                <h6 className='precio'>{price}</h6>
                <div className="d-flex flex-column mt-3" role="group" aria-label="Basic example">
                    <button className='d-flex align-items-center justify-content-center gap-2 btn btn-sm btn-md-md btn-outline-dark mb-2'> <i className="bi bi-plus-circle"></i> Más info</button>
                    <button onClick={addCart} className='d-flex align-items-center justify-content-center gap-2 btn btn-sm btn-md-md bg-warning'><i className="bi bi-cart-plus"></i> Añadir</button>
                </div>
            </div>
        </div >
    );
}

export { ItemBook };