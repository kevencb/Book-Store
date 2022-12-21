import React from 'react'
import coversBooks from '../assets/coversBooks.js'

const ItemList = ({ titulo, autor, precio }) => {

    return (
        <div className='books container'>
            <div className="card border-0">
                < img src={coversBooks.harryPotter_01} className="card-img-top" alt="Harry Potter y la piedra filosofal" />
                <div className="card-body px-0">
                    <h4 className="card-title">{titulo}</h4>
                    <h5 className='author small'>{autor}</h5>
                    <h6 className='precio'>{precio}</h6>
                    <div className="d-flex flex-column mt-3" role="group" aria-label="Basic example">
                        <button className='d-flex align-items-center justify-content-center gap-2 btn btn-sm btn-md-md btn-outline-dark mb-2'> <i className="bi bi-plus-circle"></i> Más info</button>
                        <button className='d-flex align-items-center justify-content-center gap-2 btn btn-sm btn-md-md bg-warning'><i className="bi bi-cart-plus"></i> Añadir</button>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default ItemList;