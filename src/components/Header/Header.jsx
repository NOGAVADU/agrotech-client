import React from 'react';
import cl from './Header.module.css'
import MyLink from "../UI/MyLink/MyLink.jsx";
import {ABOUT_US_ROUTE, CATALOG_ROUTE, PARTNERS_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts.js";
import Logo from "../Logo/Logo.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {useMatch} from "react-router-dom";


const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header__container}>
                <div className={cl.header__logo}>
                    <Logo/>
                    <figcaption className={cl.logo__text}>АгроТехСервис</figcaption>
                </div>
                <nav className={cl.header__nav}>
                    <ul className={cl.nav__list}>
                        <MyLink path={ABOUT_US_ROUTE}>О нас</MyLink>
                        <MyLink path={PARTNERS_ROUTE}>Партнеры</MyLink>
                        <MyLink path={CATALOG_ROUTE}>Каталог</MyLink>
                    </ul>
                </nav>
                <div className={cl.header__auth}>
                    <MyLink path={REGISTRATION_ROUTE}> <FontAwesomeIcon icon={faUserCircle} className={cl.auth__icon}/> Регистрация/ Войти</MyLink>
                </div>
            </div>
        </header>
    );
};

export default Header;