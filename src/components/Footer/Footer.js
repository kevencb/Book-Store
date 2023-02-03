import React from 'react';

const Footer = () => {
    return (
        <footer className='py-4'>
            <div className='container d-flex align-items-center justify-content-center'>
                <h6 className='text-secondary mb-0 pt-2'>By Keven CB</h6>
                <div className='d-flex mt-2'>
                    <a href='https://github.com/kevencb' className='text-secondary'><i className="bi bi-github"></i></a>
                    <a href='https://www.linkedin.com/in/keven-chaparro-658ab471/' className='text-secondary'><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };