import React, {useContext, useEffect, useState} from 'react';
import cl from './CatalogSearch.module.css'
import {Context} from "../../../../main.jsx";
import {observer} from "mobx-react-lite";
import {findItems} from "../../../../http/CatalogApi.js";

const CatalogSearch = observer(() => {
    const {items} = useContext(Context)
    const [value, setValue] = useState('')

    const findAllItems = (e) => {
        e.preventDefault()
        findItems(value).then(data => {
            console.log(data)
            items.setItems(data.rows)
            items.setTotalCount(data.count)
        })
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
});

export default CatalogSearch;