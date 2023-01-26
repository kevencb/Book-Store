import React, { useEffect, useState } from "react"
import { bookStore } from "../../data/bookStore";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const { genreName } = useParams();
    const [booksCategories, setBooksCategories] = useState([])

    useEffect(() => {
        const getBooks = () => {
            return new Promise((res, rej) => {
                /* Filtrando por genero */
                const booksFilter = bookStore.filter(
                    book => book.genre === genreName
                )
                const booksList = genreName ? booksFilter : bookStore
                setTimeout(() => {
                    res(booksList)
                }, 0)
            })
        }
        getBooks()
            .then((res) => {
                setBooksCategories(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [genreName]);

    return (
        <ItemList booksCategories={booksCategories} />
    );
}

export { ItemListContainer };