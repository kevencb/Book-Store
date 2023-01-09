import React from 'react'
import { ItemBook } from '../ItemBook/ItemBook.js';

const ItemList = ({ books, addCart }) => {

    return (
        <ul className='books container'>
            {books.map((book) => {
                return <ItemBook key={book.id} book={book} addCart={addCart} />
            })}
        </ul>
    );
}

export { ItemList };