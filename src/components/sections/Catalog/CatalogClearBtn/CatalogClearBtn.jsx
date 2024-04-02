import React, {useState} from 'react';
import cl from './CatalogClearBtn.module.css'
import CatalogClearBtnModal from "./CatalogClearBtnModal.jsx";

const CatalogClearBtn = () => {
    const [active, setActive] = useState(false)

    return (
        <div>
            <button className={cl.btn} onClick={() => setActive(!active)}>
                Удалить всё
            </button>
            <CatalogClearBtnModal active={active} setActive={setActive}/>
        </div>
    );
};

export default CatalogClearBtn;