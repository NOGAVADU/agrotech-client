import React from 'react';
import cl from './Container.module.css'
const Container = ({children}) => {
    return (
        <div className={cl.container}>
            {children}
        </div>
    );
};

export default Container;