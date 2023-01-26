import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { bookStore } from '../data/bookStore';

// Creamos el espacio o contexto global
const ContextCart = createContext()

const ProviderCart = ({ children }) => {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([])

    const addBookCart = (id, cover, title, author, price) => {
        if (cart.length === 0) {
            setCart([{ id, cover, title, author, price, amount: 1 }])
        } else {
            // Revisar que el libro no este ya agregado.
            // Si ya esta, unicamente actulizamos su cantidad
            const newCart = [...cart]
            const addedCart = newCart.filter((bookCart) => {
                return bookCart.id === id
            }).length > 0

            if (addedCart) {
                newCart.forEach((idBookAdd, index) => {
                    if (idBookAdd.id === id) {
                        const amount = newCart[index].amount
                        newCart[index] = { id, cover, title, author, price, amount: amount + 1 }
                    }
                })
            } else {
                newCart.push({ id, cover, title, author, price, amount: 1 })
            }
            setCart(newCart)
        }
    }

    useEffect(() => {
        const getBooks = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(bookStore)
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
    }, [setCart]);

    const totalNumberBooks = cart.reduce((acc, item) => {
        return acc += item.amount
    }, 0)


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
        <ContextCart.Provider value={{
            cart,
            books,
            addBookCart,
            totalNumberBooks,
            booksCategories
        }}>
            {children}
        </ContextCart.Provider>
    )
}

export { ContextCart, ProviderCart };