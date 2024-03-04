import React from 'react';
import cl from './Pagination.module.css'

const PaginationList = ({children, ...props}) => {
    return (
        <div className={cl.pagination__list} {...props}>
            {children}
        </div>
    );
};

export default PaginationList;