import React from 'react'
import { ItemBook } from '../ItemBook/ItemBook'
// import { useParams } from 'react-router-dom';

const ItemList = ({ addCart, books }) => {
    // const { genreName } = useParams();
    // console.log(genreName)

    return (
        <div className='books container'>
            {books.map(book => <ItemBook key={book.id} book={book} addCart={addCart} />)}
        </div>
    );
}

export { ItemList };