import React from 'react'

const Categories = () => {
    return (
        <>
            <div className='categories container my-3 gap-2 d-flex flex-wrap'>
                <button className="btn btn-sm pb-0 btn-warning" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Todos
                </button>
                <button className="btn btn-sm pb-0 btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Ciencia Ficción
                </button>
                <button className="btn btn-sm pb-0 btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Derecho
                </button>
                <button className="btn btn-sm pb-0 btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filosofía & Religión
                </button>
                <button className="btn btn-sm pb-0 btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Historía & Arqueología
                </button>
                <button className="btn btn-sm pb-0 btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Infantiles
                </button>
                <button className="btn btn-sm pb-0 btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Romance
                </button>
            </div>
        </>

    );
}

export default Categories;