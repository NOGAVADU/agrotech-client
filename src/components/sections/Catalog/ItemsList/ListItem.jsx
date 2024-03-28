import React, {useContext, useEffect, useRef, useState} from 'react';
import cl from './ItemsList.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner, faStar, faTruckLoading} from "@fortawesome/free-solid-svg-icons";
import {Context} from "../../../../main.jsx";
import {observer} from "mobx-react-lite";
import {addFavorite, fetchFavorite, removeFavorite} from "../../../../http/favoriteApi.js";
import {deleteItem} from "../../../../http/CatalogApi.js";

const ListItem = observer(({article, id, name, state, price, source}) => {
    const [favoriteStar, setFavoriteStart] = useState(false)
    const [loading, setLoading] = useState(false)
    const {user, favorite} = useContext(Context)
    const contentHeight = useRef()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (user.user.id) {
            fetchFavorite(user.user.id).then(data => {
                favorite.setFavorite(data)
                return favorite.favorite
            }).then(favorite => {
                favorite.forEach((el) => {
                    if (el.itemId === id) {
                        setFavoriteStart(true)
                    }
                })
            })
        }
    }, [user.user, favorite]);

    useEffect(() => {
        if (user.user.id) {
            fetchFavorite(user.user.id).then(data => favorite.setFavorite(data))
        }
    }, [favoriteStar])

    const favoriteClick = (e) => {
        e.stopPropagation()
        const favItem = favorite.favorite.filter(item => item.itemId === id)

        if (favItem.length !== 0) {
            removeFavorite(user.user.id, id).then(() => {
                setFavoriteStart(false)
                setLoading(false)
            })
        } else {
            addFavorite(user.user.id, id).then(() => {
                setFavoriteStart(true)
                setLoading(false)
            })

        }
    }

    const deleteClick = () => {
        deleteItem(id)
    }

    return (
        <li className={cl.item}>
            <div className={cl.item__header} onClick={() => setOpen(!open)}>
                <p className={[cl.header__item, cl.item__field].join(' ')}>{name}</p>
                {user.user.role === "ADMIN" ?
                    <button className={[cl.item__favorite, cl.item__delete].join(' ')} onClick={deleteClick}>X</button>
                    :
                    <button
                        onClick={e => favoriteClick(e)}
                        title='Добавить в избранное'
                        className={favoriteStar ? [cl.item__favorite, cl.active].join(' ') : cl.item__favorite}
                    >{loading ? <FontAwesomeIcon icon={faSpinner}/> : <FontAwesomeIcon icon={faStar}/>}</button>}
            </div>
            <div ref={contentHeight} className={cl.item__accordion}
                 style={!open ? {height: "0px"} : {height: contentHeight.current.scrollHeight}}>
                <p className={cl.accordion__item}>
                    <span className={cl.accordion__title}>Артикул оригинала</span>
                    <span className={cl.accordion__info}>{article}</span>
                </p>
                <p className={cl.accordion__item}>
                    <span className={cl.accordion__title}>Цена</span>
                    <span className={cl.accordion__info}>{price + " руб."}</span>
                </p>
                <p className={cl.accordion__item}>
                    <span className={cl.accordion__title}>Наличие</span>
                    <span className={cl.accordion__info}>{state}</span>
                </p>
                <p className={cl.accordion__item}>
                    <a className={cl.accordion__item} href={source} target={'_blank'}>Ссылка на источник</a>
                </p>
            </div>
        </li>
    );
});

export default ListItem;