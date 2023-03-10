import React from 'react';
import { Link } from 'react-router-dom'
import { ButtonAddCart } from '../Buttons/ButtonAddCart';

const ItemBook = ({ book }) => {
    const { id, title, cover, author } = book

    let number = book.price
    let newPrice = +number

    return (
        <div className="card border-0 ">
            <img src={cover} className="cover card-img-top" alt={title} />
            <div className="card-body px-0">
                <h4 className="card-title">{title}</h4>
                <h5 className='author small'>{author}</h5>
                <h6 className='precio'>${newPrice}</h6>
                <div className="d-flex flex-column mt-3" role="group" aria-label="Basic example">
                    <Link to={`/bookInfo/${id}`} className='d-flex align-items-center justify-content-center gap-2 btn btn-sm btn-md-md btn-outline-dark mb-2'> <i className="bi bi-plus-circle"></i> Más info</Link>
                    <ButtonAddCart book={book} />
                </div>
            </div>
        </div >
    );
}

export { ItemBook };