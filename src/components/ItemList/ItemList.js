import React, { useContext } from 'react'
import { ItemBook } from '../ItemBook/ItemBook'
import { ContextCart } from '../../context/contextCartShopping';

const ItemList = ({ booksCategories }) => {
    const { addBookCart } = useContext(ContextCart)
    return (
        <div className='books container'>
            {booksCategories.map(book => <ItemBook key={book.id} book={book} addBookCart={addBookCart} />)}
        </div>
    );
}

export { ItemList };