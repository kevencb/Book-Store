import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { bookStore } from '../../data/bookStore';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [book, setBook] = useState({})

    const idBook = useParams()
    const bookInfo = parseInt(idBook.id)

    useEffect(() => {
        const getBook = () => {
            return new Promise((res, rej) => {
                const bookSelect = bookStore.find(
                    book => book.id === bookInfo
                )
                setTimeout(() => {
                    res(bookSelect);
                }, 0);
            })
        }
        getBook()
            .then((res) => {
                setBook(res)
            })
            .catch((error) => {
                return console.log("Hola: " + error)
            })
    }, [setBook, bookInfo]);

    return (
        <ItemDetail book={book} />
    );
}

export { ItemDetailContainer };