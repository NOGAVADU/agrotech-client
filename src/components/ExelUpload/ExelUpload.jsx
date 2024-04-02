import React, {useContext, useState} from 'react';
import {createItem, createManyItems, findItems} from "../../http/CatalogApi.js";
import cl from './ExelUpload.module.css'
import {Context} from "../../main.jsx";

const ExelUpload = () => {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const uploadExel = () => {
        setLoading(true)
        const formData = new FormData()
        formData.append('file', file)
        createManyItems(formData).then(()=> setLoading(false))
    }

    return (
        <div>
            <p className={cl.title}>Добавление множества предметов(Загрузите XLSX файл)</p>
            <input className={cl.input} type="file" placeholder='Загрузите XLSX файл'
                   onChange={e => setFile(e.target.files[0])}/>
            <button className={cl.button} onClick={uploadExel}>Загрузить</button>
             <span style={{display: loading ? 'inline' : 'none'}}>Загрузка...</span>
        </div>
    );
};

export default ExelUpload;