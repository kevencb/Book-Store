import React, { createContext, useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { productsCollection } from '../firebase/firebaseConfig'
import { getDocs, query, where } from 'firebase/firestore';
import { toast } from 'react-toastify';

const ContextCart = createContext()

const ProviderCart = ({ children }) => {

    const [cart, setCart] = useState([])
    const [books, setBooks] = useState([])
    const { genreName } = useParams()

    const addBookCart = (id, cover, title, author, price, subtotal) => {
        if (cart.length === 0) {
            setCart([{ id, cover, title, author, price, amount: 1, subtotal }])
            toast.success(`Libro agregado: ${title}.`, { autoClose: 2000 })
        } else {
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
            toast.success(`Libro agregado: ${title}.`, { autoClose: 2000 })
            setCart(newCart)
        }
    }

    const handleIncrement = (id) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    amount: item.amount + 1,
                }
            }
            return item
        })
        setCart(newCart)
    }

    const handleDecrement = (id) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    amount: item.amount - 1,
                }
            }
            return item
        })
        setCart(newCart)
    }

    const totalNumberBooks = cart.reduce((acc, item) => {
        return acc += item.amount
    }, 0)

    const total = useMemo(() => {
        let total = 0;
        cart.map((item) => {
            item.subtotal = 0
            item.subtotal += item.price * item.amount
            return total += item.subtotal
        })
        return total.toLocaleString('es-ES');
    }, [cart]);

    useEffect(() => {
        const getBooks = () => {
            let filter
            if (genreName) {
                filter = query(productsCollection, where("genre", "==", genreName))
            } else {
                filter = productsCollection
            }
            const pedidoPorCategoria = getDocs(filter)

            pedidoPorCategoria
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
    }, [genreName]);

    return (
        <ContextCart.Provider value={{
            cart,
            addBookCart,
            totalNumberBooks,
            handleIncrement,
            handleDecrement,
            total,
            books,
            setBooks
        }}>
            {children}
        </ContextCart.Provider>
    )
}

export { ContextCart, ProviderCart };