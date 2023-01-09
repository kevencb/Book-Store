import React from 'react'
import { ItemBook } from '../ItemBook/ItemBook'

const ItemList = ({ addCart, booksCategories }) => {
    return (
        <div className='books container'>
            {booksCategories.map(book => <ItemBook key={book.id} book={book} addCart={addCart} />)}
        </div>
    );
}

export { ItemList };