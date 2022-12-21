import React from 'react'

const UserProfile = () => {
    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="profile-component" aria-labelledby="profile-componentLabel">
            <div className="offcanvas-header bg-dark py-4">
                <a className="d-flex align-items-center navbar-brand text-white" href="/#" aria-hidden="true" aria-label='Enlace de prueba'>Book<i className="bi bi-person-circle"></i>Perfil</a>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body mt-2 px-4">
                <button className="btn list-group-item d-flex align-items-center px-0 py-3 gap-2">
                    <i className="bi bi-bag"></i>Tus pedidos
                </button>
                <button className="btn list-group-item d-flex align-items-center px-0 py-3 gap-2">
                    <i className="bi bi-moon-stars"></i>Lista de deseos
                </button>
                <button className="btn list-group-item d-flex align-items-center px-0 py-3 gap-2">
                    <i className="bi bi-box-arrow-left"></i>Cerrar sesión
                </button>
            </div>
        </div>
    );
}

export default UserProfile;