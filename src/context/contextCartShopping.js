import React, { createContext, useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { productsCollection } from '../firebase/firebaseConfig'
import { getDocs, query, where, getDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
// import { getDoc, doc } from 'firebase/firestore';

// Creamos el espacio o contexto global
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
            toast.success(`Libro agregado: ${title}.`, { autoClose: 2000 })
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

    const totalNumberBooks = cart.reduce((acc, item) => {
        return acc += item.amount
    }, 0)

    // Crea una variable para guardar el precio total
    const total = useMemo(() => {
        let total = 0;
        // Itera sobre el carrito para sumar el precio de cada libro
        cart.map((item) => {
            item.subtotal = 0
            item.subtotal += item.price * item.amount
            total += item.subtotal
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