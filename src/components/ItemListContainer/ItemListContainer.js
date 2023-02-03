import React, { useEffect, useContext } from "react"
import { ItemList } from "../ItemList/ItemList";
import { productsCollection } from '../../firebase/firebaseConfig'
import { getDocs, query, where } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import { ContextCart } from "../../context/contextCartShopping";

const ItemListContainer = () => {
    const { genreName } = useParams()
    const { setBooks } = useContext(ContextCart);

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
    }, [genreName, setBooks]);

    return (
        <ItemList />
    );
}

export { ItemListContainer };