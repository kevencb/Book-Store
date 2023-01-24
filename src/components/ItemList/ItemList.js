import React from 'react'
import { ItemBook } from '../ItemBook/ItemBook'

const ItemList = ({ addCart, booksCategories, addItemCart, addBookCart }) => {
    return (
        <div className='books container'>
            {booksCategories.map(book => <ItemBook key={book.id} book={book} addCart={addCart} addBookCart={addBookCart} />)}
        </div>
    );
}

export { ItemList };