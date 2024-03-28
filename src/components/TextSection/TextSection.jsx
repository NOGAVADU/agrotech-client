import React from 'react';
import cl from './TextSection.module.css'
const TextSection = ({children}) => {
    return (
        <section className={cl.section}>
            {children}
        </section>
    );
};

export default TextSection;