import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ raidsPerPage, totalRaids, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRaids / raidsPerPage); i++) {
        pageNumbers.push(i);
        
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <Link to={window.location.pathname} onClick={() => paginate(number)} hash="/#">{number}</Link>
                                              
                    </li>
                ))}
            </ul>
            </nav>        
    );
};

export default Pagination;