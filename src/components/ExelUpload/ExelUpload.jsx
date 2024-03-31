import React, {useState} from 'react';
import {createItem, createManyItems} from "../../http/CatalogApi.js";
import cl from './ExelUpload.module.css'

const ExelUpload = () => {
    const [file, setFile] = useState(null)
    const uploadExel = () => {
        const formData = new FormData()
        formData.append('file', file)
        createManyItems(formData).then(data => {
                data.forEach(item => {
                    const [name, article, price, state, source] = item
                    createItem({
                        name: name,
                        article: article,
                        price: price,
                        state: state,
                        source: source
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