import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <ul className='container my-4 gap-2 d-flex flex-wrap'>
            <NavLink to="/" className="btn btn-sm btn-warning">
                Todos
            </NavLink>
            <NavLink to="/categories/fantasia" className="btn btn-sm btn-outline-secondary">
                Fantasía
            </NavLink>
            <NavLink to="/categories/historia" className="btn btn-sm btn-outline-secondary" aria-expanded="false">
                Historia
            </NavLink>
            <NavLink to="/categories/romance" className="btn btn-sm btn-outline-secondary" aria-expanded="false">
                Romance
            </NavLink>
            <NavLink to="/categories/terror" className="btn btn-sm btn-outline-secondary" aria-expanded="false">
                Terror
            </NavLink>
        </ul>
    );
}

export default NavBar;