import React from 'react';
import { ButtonAddCart } from '../Buttons/ButtonAddCart';

const ItemDetail = ({ book, addCart }) => {

    const { cover, title, author, price, synopsis } = book

    return (
        <div className='container my-5 d-md-flex gap-5'>
            <div className='col-6 col-md-4 col-lg-3 mb-4 mx-auto'>
                <img src={cover} className="mx-auto img-fluid mb-3 rounded" alt="" />
                <ButtonAddCart addCart={addCart} />
            </div>
            <div className='info-book col-11 col-md-8 mx-auto'>
                <h2 className=''>{title}</h2>
                <h6 className='text-secondary'>Autor: {author}</h6>
                <h3 className='mt-4'>${price}</h3>
                <div className='my-4'>
                    {/* <h5 className=''>Reseña del libro:</h5> */}
                    <p className='text-secondary'>{synopsis}</p>
                </div>
            </div>
        </div >
    );
}

export { ItemDetail };