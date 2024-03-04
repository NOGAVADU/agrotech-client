import React from 'react';
import cl from './Container.module.css'
const Container = ({children, ...props}) => {
    return (
        <div className={cl.container} {...props}>
            {children}
        </div>
    );
};

export default Container;