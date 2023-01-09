import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { bookStore } from "../../data/bookStore";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = ({ addCart }) => {

    const [books, setBooks] = useState([])
    const { genreName } = useParams();

    useEffect(() => {
        const getBooks = () => {
            return new Promise((res, rej) => {
                /* Filtrando por genero */
                const booksFilter = bookStore.filter(
                    book => book.genre === genreName
                )
                const booksList = genreName ? booksFilter : books
                setTimeout(() => {
                    res(booksList)
                }, 0)
            })
        }
        getBooks()
            .then((res) => {
                setBooks(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [books, genreName]);

    return (
        <ItemList books={books} addCart={addCart} />
    );
}

export { ItemListContainer };