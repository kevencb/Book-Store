import React, { useContext } from 'react'
import { ItemBook } from '../ItemBook/ItemBook'
import { ContextCart } from '../../context/contextCartShopping';

const ItemList = () => {
    const { books } = useContext(ContextCart)
    return (
        <div className='books container'>
            {books.map(book => <ItemBook key={book.id} book={book} />)}
        </div>
    );
}

export { ItemList };