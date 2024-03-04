import React from 'react';
import cl from './CatalogAuth.module.css'

const CatalogAuth = () => {
    return (
        <article className={cl.container}>
            <div className={cl.card}>
                <h2 className={cl.title}>
                    Для использования сервиса требуется авторизация
                </h2>
            </div>
        </article>
    );
};

export default CatalogAuth;