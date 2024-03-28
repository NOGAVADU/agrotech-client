import React from 'react';
import cl from './Title.module.css'
const Title = ({children}) => {
    return (
        <h2 className={cl.title}>
            {children}
        </h2>
    );
};

export default Title;