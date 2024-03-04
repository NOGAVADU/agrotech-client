import React, {useContext, useEffect, useState} from 'react';
import cl from './ItemsList.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Context} from "../../../../main.jsx";
import {observer} from "mobx-react-lite";
import {addFavorite, fetchFavorite, removeFavorite} from "../../../../http/favoriteApi.js";

const ListItem = observer(({article, id, name, state, price, source}) => {
    const [favoriteStar, setFavoriteStart] = useState(false)
    const {user, favorite} = useContext(Context)

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

    const favoriteClick = () => {
        if (favorite.favorite.length === 0) {
            addFavorite(user.user.id, id)
            setFavoriteStart(true)
        }

        favorite.favorite.forEach(el => {
            if (el.itemId === id) {
                removeFavorite(user.user.id, id)
                setFavoriteStart(false)
                return null
            } else {
                addFavorite(user.user.id, id)
                setFavoriteStart(true)
                return null
            }
        })
    }

    return (
        <li className={cl.item}>
            <p className={[cl.item__info, cl.item__name].join(' ')}>{name}</p>
            <p className={cl.item__info}>{article}</p>
            <p className={cl.item__info}>{price + "руб."}</p>
            <p className={cl.item__info}>{state}</p>
            <a className={cl.item__info} href={source} target={'_blank'}>Ссылка</a>
            <button
                onClick={favoriteClick}
                className={favoriteStar ? [cl.item__favorite, cl.active].join(' ') : cl.item__favorite}
            ><FontAwesomeIcon icon={faStar}/></button>
        </li>
    );
});

export default ListItem;