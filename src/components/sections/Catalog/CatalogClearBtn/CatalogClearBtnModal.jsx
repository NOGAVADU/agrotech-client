import React from 'react';
import cl from './CatalogClearBtn.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {deleteAll} from "../../../../http/CatalogApi.js";

const CatalogClearBtnModal = ({active, setActive}) => {
    function clickHandler () {
        deleteAll().then((data) => console.log(data))
        setActive(false)
    }

    return (
        <div
            className={active ? [cl.modal, cl.active].join(" ") : cl.modal}
            onMouseDown={(event) => {
                if (event.currentTarget === event.target) {
                    setActive(false)
                }
            }}
        >
            <div
                className={
                    active
                        ? [cl.modal__content, cl.active].join(" ")
                        : cl.modal__content
                }
                onClick={(e) => e.stopPropagation()}
            >
                <div className={cl.modal__header}>
                    <button
                        className={cl.modal__controlsCloseBtn}
                        onClick={() => setActive(false)}
                    >
                        <FontAwesomeIcon icon={faClose}/>
                    </button>
                </div>
                <div className={cl.modal__body}>
                    Вы уверены? Данное действие не обратимо
                    <button className={cl.btn} onClick={clickHandler}>Удалить</button>
                </div>
            </div>
        </div>
    );
}
export default CatalogClearBtnModal;