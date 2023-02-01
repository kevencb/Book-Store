import React from 'react'
import { NavLink } from 'react-router-dom'
import { ContextCart } from '../../context/contextCartShopping'

const NavBar = () => {
    const { uniqueGenres } = React.useContext(ContextCart)
    const capitalize = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase()
                + word.slice(1).toLowerCase())
            .join(' ')
    }

    return (
        <ul className='container my-4 gap-2 d-flex flex-wrap'>
            <NavLink to="/" className="btn btn-sm btn-warning">
                Todos
            </NavLink>
            {uniqueGenres.map(genre =>
                <NavLink to={`/categories/${genre}`} className="btn btn-sm btn-outline-secondary" key={genre}>
                    {capitalize(genre)}
                </NavLink>
            )}
        </ul>
    );
}

export { NavBar };