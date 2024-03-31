import React, {useContext, useState} from 'react';
import {createItem, createManyItems, findItems} from "../../http/CatalogApi.js";
import cl from './ExelUpload.module.css'
import {Context} from "../../main.jsx";

const ExelUpload = () => {
    const {items} = useContext(Context)
    const [file, setFile] = useState(null)
    const uploadExel = () => {
        const formData = new FormData()
        formData.append('file', file)
        createManyItems(formData).then(data => {
                data.forEach(item => {
                    const [name, article, price, state, source] = item
                    findItems(name, items.page, items.limit).then(data => {
                        if (data.rows.length === 0) {
                            createItem({
                                name: name,
                                article: article,
                                price: price,
                                state: state,
                                source: source
                            })
                        }
                    })
                })
            }
        )
    }

    return (
        <div>
            <p className={cl.title}>Добавление множества предметов(Загрузите XLSX файл)</p>
            <input className={cl.input} type="file" placeholder='Загрузите XLSX файл'
                   onChange={e => setFile(e.target.files[0])}/>
            <button className={cl.button} onClick={uploadExel}>Загрузить</button>
        </div>
    );
};

export default ExelUpload;