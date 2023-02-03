import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { productsCollection } from '../../firebase/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = ({ addBookCart, books }) => {

    const [book, setBook] = useState({});
    const idBook = useParams();
    const { id } = idBook;

    useEffect(() => {
        const getBook = async () => {
            try {
                const bookReference = doc(productsCollection, id);
                const resultado = await getDoc(bookReference);
                const data = resultado.data();
                setBook({ ...data, id: resultado.id });
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, [id, setBook]);

    return (
        <ItemDetail book={book} books={books} addBookCart={addBookCart} />
    );
}

export { ItemDetailContainer }