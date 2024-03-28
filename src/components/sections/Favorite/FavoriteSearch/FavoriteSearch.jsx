import React, { useState} from 'react';
import cl from "../../Catalog/CatalogSearch/CatalogSearch.module.css";
import {findItems} from "../../../../http/CatalogApi.js";

const FavoriteSearch = ({favItems, setFavItems}) => {
    const [value, setValue] = useState('')

    const findAllItems = (e) => {
        e.preventDefault()
        setFavItems(favItems.filter(item => item.name.includes(value.toLowerCase())))
    }

    return (
        <form className={cl.search__container}>
            <input
                type={'text'}
                value={value}
                onChange={e => setValue(e.target.value)}
                className={cl.search__input}
                placeholder={'Введите название искомого товара'}/>
            <button
                onClick={e => findAllItems(e)}
                className={cl.search__button}
            >Поиск
            </button>
        </form>
    );
};

export default FavoriteSearch;