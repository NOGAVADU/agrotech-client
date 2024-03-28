import React, {useState} from 'react';
import cl from './ItemCreate.module.css'
import {createItem} from "../../http/CatalogApi.js";
import {observer} from "mobx-react-lite";

const ItemCreate = observer(() => {
    const [name, setName] = useState('')
    const [article, setArticle] = useState('')
    const [price, setPrice] = useState(0)
    const [state, setState] = useState('')
    const [source, setSource] = useState('')

    const createOneItem = (e) => {
        e.preventDefault()
        createItem({
            name: name,
            article: article,
            price: price,
            state: state,
            source: source
        }).then(data => console.log(data))

        setName('')
        setArticle('')
        setPrice(0)
        setState('')
        setSource('')
    }

    return (
        <div className={cl.container}>
            <h3>Добавление нового предмета</h3>
            <form className={cl.form}>
                <input type={"text"} placeholder={"Введите название"} value={name}
                       className={cl.form__input}
                       onChange={e => setName(e.target.value)}/>
                <input type={"text"} placeholder={"Введите артикул"} value={article}
                       className={cl.form__input}
                       onChange={e => setArticle(e.target.value)}/>
                <input type={"text"} placeholder={"Введите цену"} value={price}
                       className={cl.form__input}
                       onChange={e => setPrice(e.target.value)}/>
                <input type={"text"} placeholder={"Введите состояние"} value={state}
                       className={cl.form__input}
                       onChange={e => setState(e.target.value)}/>
                <input type={"text"} placeholder={"Введите ссылку"} value={source}
                       className={cl.form__input}
                       onChange={e => setSource(e.target.value)}/>
                <button className={cl.form__btn} onClick={createOneItem}>Добавить предмет</button>
            </form>
        </div>
    );
});

export default ItemCreate;