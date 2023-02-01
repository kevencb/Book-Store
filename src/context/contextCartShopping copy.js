import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { bookStore } from '../data/bookStore';
import { productsCollection } from '../firebase/firebaseConfig'
import { getDocs, query, where } from 'firebase/firestore';

// Creamos el espacio o contexto global
const ContextCart = createContext()

const ProviderCart = ({ children }) => {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([])

    console.log("Books: " + books)
    console.log("Cart" + cart)

    const addBookCart = (id, cover, title, author, price, subtotal) => {
        if (cart.length === 0) {
            setCart([{ id, cover, title, author, price, amount: 1, subtotal }])
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
                        newCart[index] = { id, cover, title, author, price, amount: amount + 1, subtotal: price - price }
                    }
                })
            } else {
                newCart.push({ id, cover, title, author, price, amount: 1, subtotal })
            }
            setCart(newCart)
        }
    }

    const handleIncrement = (id) => {
        //buscar el id del libro
        const newCart = cart.map(item => {
            if (item.id === id) {
                //aumentar la cantidad y el precio unitario
                return {
                    ...item,
                    amount: item.amount + 1,
                    // subtotal: +item.amount - +item.amount,
                }
            }
            return item
        })
        //actualizar el carrito
        setCart(newCart)
    }

    const handleDecrement = (id) => {
        //buscar el id del libro
        const newCart = cart.map(item => {
            if (item.id === id) {
                //disminuir la cantidad y el precio unitario
                return {
                    ...item,
                    amount: item.amount - 1,
                }
            }
            return item
        })
        //actualizar el carrito
        setCart(newCart)
    }


    // useEffect(() => {
    //     const getBooks = () => {
    //         return new Promise((res, rej) => {
    //             setTimeout(() => {
    //                 res(bookStore)
    //             }, 0)
    //         })
    //     }
    //     getBooks()
    //         .then((res) => {
    //             setBooks(res)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [setCart]);

    // useEffect(() => {
    //     const getBooks = () => {
    //         return new Promise((res, rej) => {
    //             setTimeout(() => {
    //                 res(bookStore)
    //             }, 0)
    //         })
    //     }
    //     getBooks()
    //         .then((res) => {
    //             setBooks(res)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [setCart]);

    const totalNumberBooks = cart.reduce((acc, item) => {
        return acc += item.amount
    }, 0)

    const { genreName } = useParams();
    const [booksCategories, setBooksCategories] = useState([])

    // useEffect(() => {
    //     const getBooks = () => {
    //         return new Promise((res, rej) => {
    //             /* Filtrando por genero */
    //             const booksFilter = bookStore.filter(
    //                 book => book.genre === genreName
    //             )
    //             const booksList = genreName ? booksFilter : bookStore
    //             setTimeout(() => {
    //                 res(booksList)
    //             }, 0)
    //         })
    //     }
    //     getBooks()
    //         .then((res) => {
    //             setBooksCategories(res)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [genreName]);

    useEffect(() => {
        const getBooks = () => {
            const pedido = getDocs(productsCollection)
            pedido
                .then((resultado) => {
                    const productos = resultado.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                    setBooks(productos)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getBooks()
    }, [setBooks, genreName]);

    useEffect(() => {
        const getBooks = () => {
            // const pedido = getDocs(productsCollection)
            let filter

            if (genreName) {
                filter = query(productsCollection, where("categories", "==", genreName))
                console.log("HOLA: " + books)
            } else {
                filter = productsCollection
                console.log("hola desde else: " + filter)
            }
            const pedidoPorCategoria = getDocs(filter)

            pedidoPorCategoria
                .then((resultado) => {
                    const productos = resultado.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                    setBooksCategories(productos)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getBooks()
    }, [genreName, setBooks]);

    // useEffect(() => {
    //     const getBooks = () => {
    //         const pedido = getDocs(productsCollection)
    //         pedido
    //             .then((resultado) => {
    //                 const productos = resultado.docs.map((doc) => {
    //                     return { ...doc.data(), id: doc.id }
    //                 })
    //                 setBooksCategories(productos)
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    //     }
    //     getBooks()
    // }, [genreName]);

    return (
        <ContextCart.Provider value={{
            cart,
            books,
            addBookCart,
            totalNumberBooks,
            booksCategories,
            handleIncrement,
            handleDecrement
        }}>
            {children}
        </ContextCart.Provider>
    )
}

export { ContextCart, ProviderCart };