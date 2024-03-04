import React, {useContext} from 'react';
import cl from './Header.module.css'
import MyLink from "../UI/MyLink/MyLink.jsx";
import {
    ABOUT_US_ROUTE,
    ACCOUNT_ROUTE,
    CATALOG_ROUTE,
    LOGIN_ROUTE,
    PARTNERS_ROUTE,
    REGISTRATION_ROUTE
} from "../../utils/consts.js";
import Logo from "../Logo/Logo.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen, faRightFromBracket, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {Link, useMatch} from "react-router-dom";
import {Context} from "../../main.jsx";
import {observer} from "mobx-react-lite";


const Header = observer(() => {
    const {user} = useContext(Context)

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
                {user.isAuth === true ?
                    (<div className={cl.header__account}>
                        <Link to={ACCOUNT_ROUTE} className={cl.auth__link}><FontAwesomeIcon icon={faUserCircle}/>Личный
                            кабинет</Link>
                    </div>) :
                    (<div className={cl.header__auth}>
                        <FontAwesomeIcon icon={faUserCircle} className={cl.auth__icon}/>
                        <div className={cl.header__auth_links}>
                            <Link to={REGISTRATION_ROUTE} className={cl.auth__link}>
                                Регистрация
                            </Link>
                            /
                            <Link to={LOGIN_ROUTE} className={cl.auth__link}>
                                Войти
                            </Link>
                        </div>
                    </div>)}

            </div>
        </header>
    );
});

export default Header;