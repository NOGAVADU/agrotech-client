import React from 'react';
import cl from './ItemsList.module.css'

const ItemsList = ({children}) => {
    return (
        <ul className={cl.list}>
            <li className={cl.item}>
                <p className={[cl.item__info, cl.info__title, cl.item__name].join(' ')}>Название</p>
                <p className={[cl.item__info, cl.info__title].join(' ')}>Артикул</p>
                <p className={[cl.item__info, cl.info__title].join(' ')}>Цена</p>
                <p className={[cl.item__info, cl.info__title].join(' ')}>Наличие</p>
                <p className={[cl.item__info, cl.info__title].join(' ')}>Источник</p>
            </li>
            {children}
        </ul>
    );
};

export default ItemsList;