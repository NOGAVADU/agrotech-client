import React from 'react';
import cl from './Pagination.module.css'
const PaginationItem = ({children, active, ...props}) => {
    return (
        <div className={active ? [cl.pagination__item, cl.active].join(' ') : cl.pagination__item} {...props}>
            {children}
        </div>
    );
};

export default PaginationItem;